import 'kleur/colors';
import { k as decodeKey } from './chunks/astro/server_ZvzPG2Rm.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_C9H1yPfA.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///app/","cacheDir":"file:///app/node_modules/.astro/","outDir":"file:///app/dist/","srcDir":"file:///app/src/","publicDir":"file:///app/public/","buildClientDir":"file:///app/dist/client/","buildServerDir":"file:///app/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"*{margin:0;padding:0;box-sizing:border-box}body{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;line-height:1.6;color:#333}.container{max-width:1200px;margin:0 auto;padding:0 20px}.navbar{background:#fff;box-shadow:0 2px 10px #0000001a;position:fixed;top:0;width:100%;z-index:1000}.navbar .container{display:flex;justify-content:space-between;align-items:center;padding:1rem 20px}.nav-brand{display:flex;align-items:center;gap:10px;font-size:1.5rem;font-weight:700;color:#1976d2}.logo{width:40px;height:40px}.nav-menu{display:flex;list-style:none;gap:2rem;align-items:center}.nav-menu a{text-decoration:none;color:#333;font-weight:500;transition:color .3s}.nav-menu a:hover{color:#1976d2}.btn-demo{background:#1976d2;color:#fff!important;padding:.5rem 1rem;border-radius:5px;transition:background .3s}.btn-demo:hover{background:#1565c0}.hero{background:linear-gradient(135deg,#1976d2,#42a5f5);color:#fff;padding:120px 0 80px;margin-top:70px}.hero .container{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}.hero h1{font-size:3rem;margin-bottom:1rem;line-height:1.2}.highlight{color:#ffeb3b}.hero p{font-size:1.2rem;margin-bottom:2rem;opacity:.9}.hero-buttons{display:flex;gap:1rem}.btn{padding:1rem 2rem;border-radius:5px;text-decoration:none;font-weight:700;transition:all .3s;display:inline-block}.btn-primary{background:#ffeb3b;color:#1976d2}.btn-primary:hover{background:#fdd835;transform:translateY(-2px)}.btn-secondary{background:transparent;color:#fff;border:2px solid white}.btn-secondary:hover{background:#fff;color:#1976d2}.hero-image img{width:100%;border-radius:10px;box-shadow:0 20px 40px #0000004d}.products{padding:80px 0;background:#f5f5f5}.products h2{text-align:center;font-size:2.5rem;margin-bottom:3rem;color:#1976d2}.products-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}.product-card{background:#fff;padding:2rem;border-radius:10px;box-shadow:0 5px 15px #0000001a;transition:transform .3s}.product-card:hover{transform:translateY(-5px)}.product-card h3{font-size:1.3rem;margin-bottom:1rem;color:#1976d2}.about{padding:80px 0;text-align:center}.about h2{font-size:2.5rem;margin-bottom:2rem;color:#1976d2}.about p{font-size:1.2rem;max-width:800px;margin:0 auto;line-height:1.8}.contact{padding:80px 0;background:#1976d2;color:#fff;text-align:center}.contact h2{font-size:2.5rem;margin-bottom:2rem}.contact-info p{font-size:1.2rem;margin-bottom:1rem}footer{text-align:center;padding:20px;background:#f9f9f9;font-size:14px;display:flex;flex-direction:column;align-items:center;justify-content:center}footer a{display:inline-block;margin:10px}footer img{height:40px}.seal-container{display:flex;justify-content:center;align-items:center;gap:20px}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.fade-in-up{animation:fadeInUp .8s ease-out forwards}header.scrolled{background-color:#fffffff2;backdrop-filter:blur(10px);box-shadow:0 2px 10px #0000001a}@media (max-width: 768px){.nav-menu{display:none}.hero .container{grid-template-columns:1fr;text-align:center}.hero h1{font-size:2rem}.hero-buttons{justify-content:center}.products-grid{grid-template-columns:1fr}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/app/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/app/src/components/Hero.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_wS2Q1HPg.mjs","/app/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_STJjh6Fz.mjs","/app/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/app/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_u2aoa3tb.mjs","/app/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BzcJXfT6.js","/app/src/components/Features.astro?astro&type=script&index=0&lang.ts":"_astro/Features.astro_astro_type_script_index_0_lang.DEbVizSx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/app/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobile-menu-btn\"),n=document.getElementById(\"mobile-menu\");e&&n&&e.addEventListener(\"click\",()=>{n.classList.toggle(\"hidden\")});"],["/app/src/components/Features.astro?astro&type=script&index=0&lang.ts","const r={threshold:.1,rootMargin:\"0px 0px -50px 0px\"},o=new IntersectionObserver((e,t)=>{e.forEach(s=>{s.isIntersecting&&(s.target.classList.add(\"fade-in-up\"),t.unobserve(s.target))})},r);document.querySelectorAll(\"#funcionalidades .grid > div\").forEach(e=>{e.style.opacity=\"0\",e.style.transform=\"translateY(30px)\",e.style.transition=\"opacity 0.6s ease, transform 0.6s ease\",o.observe(e)});"]],"assets":["/admin/config.yml","/admin/index.html","/assets/certisign.png","/assets/certisign.svg","/assets/favicon.svg","/assets/letsencrypt.svg","/assets/registrobr.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"tr1ywp9N+61Iw41b7QKuZK9FNy5cw/8ODUT0i3Dha58="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
