# Site Institucional & Loja Online - Aegis Soluções

Portal institucional e e-commerce de planos SaaS do ecossistema Aegis ERP (v2.5.1).

## 🌐 URLs Oficiais
- **Site Institucional**: https://aegissolucoes.dev.br (Mirror: https://web-site-aegis.web.app)
- **Aplicação ERP**: https://app.aegissolucoes.dev.br (Mirror: https://site-aegis-solucoes-1416-a6b2d.web.app)

## 📁 Estrutura do Projeto
- `index.html` - Landing page comercial, tabela de planos comparativa e modal de checkout
- `style.css` - Estilos corporativos responsivos
- `main.js` - Internacionalização (PT/EN/ES), checkout integrado à Cloud Function de provisionamento
- `deploy-website.cjs` - Deploy automatizado via Firebase Hosting REST API com Google Service Account
- `robots.txt` / `sitemap.xml` - Indexação de motores de busca (SEO)

## 🚀 Deploy em Produção
```bash
npm run deploy
```
Publica diretamente no Firebase Hosting oficial do projeto `site-aegis-solucoes-1416-a6b2d` (site: `web-site-aegis`).

## 📧 Contato & Suporte
contato@aegissolucoes.dev.br