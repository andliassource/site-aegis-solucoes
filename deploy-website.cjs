const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const zlib = require('zlib');
const { GoogleAuth } = require('C:/Projetos/minha-startup-crm-vite/node_modules/google-auth-library');

const SITE_ID = 'web-site-aegis';
const PROJECT_ID = 'site-aegis-solucoes-1416-a6b2d';
const SA_PATH = 'C:\\Projetos\\minha-startup-crm-vite\\scripts\\serviceAccount.json';
const SITE_DIR = path.resolve(__dirname);

// Extensões e arquivos a ignorar no upload
const IGNORE_FILES = new Set([
  '.git',
  '.firebase',
  '.firebaserc',
  'firebase.json',
  'firebase-debug.log',
  'node_modules',
  'package.json',
  'package-lock.json',
  '.workspace-check.md',
  'deploy.bat',
  'deploy-website.cjs',
  'README.md',
  'check-domains.cjs',
  'test-jsdom.cjs',
  'test-live.cjs',
  'test-site-render.cjs',
]);

function getGzippedFile(filePath) {
  const raw = fs.readFileSync(filePath);
  const gzipped = zlib.gzipSync(raw, { level: 9 });
  const sha256 = crypto.createHash('sha256').update(gzipped).digest('hex');
  return { gzipped, sha256 };
}

function getAllFiles(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    if (IGNORE_FILES.has(entry.name) || entry.name.startsWith('.git')) continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, baseDir));
    } else if (entry.isFile()) {
      const relPath = '/' + path.relative(baseDir, fullPath).replace(/\\/g, '/');
      const { gzipped, sha256 } = getGzippedFile(fullPath);
      files.push({
        fullPath,
        relPath,
        sha256,
        gzipped,
      });
    }
  }

  return files;
}

async function getAccessToken() {
  const auth = new GoogleAuth({
    keyFile: SA_PATH,
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/firebase',
    ],
  });

  const client = await auth.getClient();
  const token = await client.getAccessToken();
  return token.token;
}

async function apiRequest(endpoint, options = {}, token) {
  const baseUrl = 'https://firebasehosting.googleapis.com/v1beta1';
  const url = endpoint.startsWith('http') ? endpoint : `${baseUrl}${endpoint}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch (_e) {
    json = text;
  }

  if (!res.ok) {
    throw new Error(`API Error ${res.status}: ${typeof json === 'object' ? JSON.stringify(json) : json}`);
  }

  return json;
}

async function deploy() {
  console.log(`🚀 Iniciando deploy automático do Website Institucional no Firebase Hosting...`);
  console.log(`📍 Site Alvo: ${SITE_ID} (https://aegissolucoes.dev.br / https://${SITE_ID}.web.app)`);
  console.log(`📂 Diretório dos Arquivos: ${SITE_DIR}\n`);

  // 1. Obter Token
  const token = await getAccessToken();
  console.log('🔑 Autenticado com sucesso via Service Account!');

  // 2. Coletar arquivos e calcular SHA-256 dos buffers gzippados
  const files = getAllFiles(SITE_DIR);
  console.log(`📁 ${files.length} arquivos mapeados e gzippados para o deploy:`);
  files.forEach(f => console.log(`   - ${f.relPath} (${f.sha256.substring(0, 10)}...)`));

  const filesMap = {};
  const hashToGzip = {};
  files.forEach(f => {
    filesMap[f.relPath] = f.sha256;
    hashToGzip[f.sha256] = f.gzipped;
  });

  // 3. Criar nova versão
  console.log('\n📦 Criando nova versão no Firebase Hosting...');
  const newVersion = await apiRequest(`/sites/${SITE_ID}/versions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      config: {
        rewrites: [
          { glob: '**', path: '/index.html' }
        ],
        headers: [
          {
            glob: '**',
            headers: {
              'Cache-Control': 'no-cache, no-store, must-revalidate',
            }
          }
        ]
      }
    }),
  }, token);

  const versionName = newVersion.name; // Formato: sites/{siteId}/versions/{versionId}
  console.log(`✅ Versão criada: ${versionName}`);

  // 4. Popular lista de arquivos
  console.log('\n🔍 Verificando quais arquivos precisam de upload...');
  const populateRes = await apiRequest(`/${versionName}:populateFiles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ files: filesMap }),
  }, token);

  const requiredHashes = populateRes.uploadRequiredHashes || [];
  const uploadUrl = populateRes.uploadUrl;
  console.log(`📤 ${requiredHashes.length} arquivos precisam de upload físico.`);

  // 5. Upload dos arquivos gzippados
  for (let i = 0; i < requiredHashes.length; i++) {
    const hash = requiredHashes[i];
    const gzippedBuffer = hashToGzip[hash];
    const rel = files.find(f => f.sha256 === hash)?.relPath || hash;

    console.log(`   [${i + 1}/${requiredHashes.length}] Enviando: ${rel}...`);
    const uploadTarget = `${uploadUrl}/${hash}`;

    const upRes = await fetch(uploadTarget, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/octet-stream',
      },
      body: gzippedBuffer,
    });

    if (!upRes.ok) {
      const errBody = await upRes.text();
      console.error(`Status ${upRes.status} para ${rel}:`, errBody);
      throw new Error(`Falha no upload de ${rel}: ${upRes.statusText} - ${errBody}`);
    }
  }

  // 6. Finalizar versão
  console.log('\n🔒 Finalizando nova versão...');
  await apiRequest(`/${versionName}?update_mask=status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'FINALIZED' }),
  }, token);
  console.log('✅ Versão finalizada com sucesso!');

  // 7. Publicar release
  console.log('\n🚀 Publicando release oficial...');
  const release = await apiRequest(`/sites/${SITE_ID}/releases?versionName=${encodeURIComponent(versionName)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: 'Deploy oficial v2.5.0 - DRE vs Orcado, Curva S, Aging PDD e Custom Fields',
    }),
  }, token);

  console.log(`\n🎉🎉 RELEASE PUBLICADO COM SUCESSO! 🎉🎉`);
  console.log(`🌐 Release Name: ${release.name}`);
  console.log(`🌐 URLs Ativas e Atualizadas:`);
  console.log(`   👉 https://aegissolucoes.dev.br/#releases`);
  console.log(`   👉 https://${SITE_ID}.web.app/#releases`);
}

deploy().catch(err => {
  console.error('\n❌ ERRO NO DEPLOY:', err);
  process.exit(1);
});
