import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderSlot, e as renderTemplate, m as maybeRenderHead, f as renderScript, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, u as unescapeHTML, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, j as renderComponent } from '../chunks/astro/server_ZvzPG2Rm.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from '../chunks/path_BVobJRvg.mjs';
import { V as VALID_INPUT_FORMATS } from '../chunks/consts_BmVDRGlB.mjs';
import * as devalue from 'devalue';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="pt-BR" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description" content="A Aegis oferece um ERP/CRM modular com Inteligência Artificial para simplificar a conformidade tributária e governança, garantindo segurança e flexibilidade."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-aegis-gray-100 text-aegis-gray-700 antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/app/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-md sticky top-0 z-50"> <nav class="container mx-auto px-6 py-4 flex justify-between items-center"> <a href="#" class="flex items-center space-x-3"> <!-- Logo SVG Aegis --> <svg class="h-10 w-10 text-aegis-blue-500" viewBox="0 0 375 375" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M 186.242188 96.359375 L 125.484375 193.316406 L 81.53125 264.417969 L 276.734375 129.972656 C 280.613281 126.09375 287.078125 126.09375 290.957031 129.972656 C 294.832031 133.851562 296.125 140.3125 293.539062 144.191406 L 209.511719 288.980469 L 305.175781 288.980469 L 267.6875 228.21875 L 280.613281 206.242188 L 336.203125 294.152344 C 337.496094 298.027344 337.496094 301.90625 336.203125 305.785156 C 333.617188 309.664062 329.738281 312.25 325.859375 312.25 L 190.121094 312.25 C 186.242188 312.25 182.363281 309.664062 181.070312 305.785156 C 178.484375 303.199219 178.484375 298.027344 181.070312 295.445312 L 183.65625 288.980469 L 248.292969 176.511719 L 81.53125 291.566406 L 54.382812 309.664062 C 49.210938 313.542969 38.867188 312.25 34.992188 305.785156 C 33.699219 301.90625 33.699219 298.027344 36.285156 294.152344 L 106.09375 181.679688 L 175.902344 67.917969 C 178.484375 65.332031 182.363281 62.75 186.242188 62.75 C 190.121094 62.75 192.707031 65.332031 195.292969 67.917969 L 235.367188 132.558594 L 215.976562 145.484375 Z" fill-opacity="1" fill-rule="nonzero"></path> </svg> <span class="text-2xl font-extrabold text-aegis-dark" style="font-family: 'Signika', sans-serif;">
Aegis <span class="text-aegis-blue-500">Soluções</span> </span> </a> <!-- Navegação Desktop --> <div class="hidden md:flex items-center space-x-8"> <a href="#home" class="text-aegis-gray-700 hover:text-aegis-blue-500 font-medium transition-colors duration-300">Início</a> <a href="#simulador" class="text-aegis-gray-700 hover:text-aegis-blue-500 font-medium transition-colors duration-300">Simulador</a> <a href="#funcionalidades" class="text-aegis-gray-700 hover:text-aegis-blue-500 font-medium transition-colors duration-300">Produtos</a> <a href="https://mail.umbler.com/" target="_blank" class="text-aegis-gray-700 hover:text-aegis-blue-500 font-medium transition-colors duration-300">Email</a> <a href="https://app.aegissolucoes.dev.br" class="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">Demo Grátis</a> <a href="#contato" class="bg-aegis-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-aegis-blue-600 transition-colors duration-300">
Fale Conosco
</a> </div> <!-- Botão Mobile Menu --> <button id="mobile-menu-btn" class="md:hidden text-aegis-gray-700 hover:text-aegis-blue-500"> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </nav> <!-- Menu Mobile --> <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-200"> <div class="px-6 py-4 space-y-4"> <a href="#home" class="block text-aegis-gray-700 hover:text-aegis-blue-500 font-medium">Início</a> <a href="#simulador" class="block text-aegis-gray-700 hover:text-aegis-blue-500 font-medium">Simulador</a> <a href="#funcionalidades" class="block text-aegis-gray-700 hover:text-aegis-blue-500 font-medium">Produtos</a> <a href="https://mail.umbler.com/" target="_blank" class="block text-aegis-gray-700 hover:text-aegis-blue-500 font-medium">Email</a> <a href="https://app.aegissolucoes.dev.br" class="block bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 text-center">Demo Grátis</a> <a href="#contato" class="block bg-aegis-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-aegis-blue-600 text-center">Fale Conosco</a> </div> </div> </header> ${renderScript($$result, "/app/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/app/src/components/Header.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('../chunks/_astro_data-layer-content_u2aoa3tb.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  maxAge: z.number().optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('../chunks/_astro_assets_BxYgw1t5.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('../chunks/content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const heroCollection = await getCollection("hero");
  const hero = heroCollection[0].data;
  return renderTemplate`${maybeRenderHead()}<section id="home" class="bg-white"> <div class="container mx-auto px-6 py-20 md:py-32"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div class="text-center lg:text-left"> <h1 class="text-4xl md:text-6xl font-extrabold text-aegis-dark leading-tight mb-6"> ${hero.title} </h1> <p class="text-lg md:text-xl text-aegis-gray-500 mb-8">${unescapeHTML(hero.subtitle)}</p> <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"> <a href="#simulador" class="bg-aegis-blue-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-aegis-blue-600 transition-transform duration-300 transform hover:scale-105 inline-block">
Simule Sua Conformidade
</a> <a href="https://app.aegissolucoes.dev.br" class="bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-105 inline-block">
Testar Demo Grátis
</a> </div> </div> <div x-data="{ activeSlide: 1, slides: [1, 2, 3] }" class="relative w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none"> <!-- Slides --> <div class="relative overflow-hidden rounded-lg shadow-2xl h-96"> <div x-show="activeSlide === 1" class="absolute inset-0 duration-700 ease-in-out"> <img src="assets/img1.png" class="block w-full h-full object-cover" alt="Aegis ERP Dashboard"> </div> <div x-show="activeSlide === 2" class="absolute inset-0 duration-700 ease-in-out"> <img src="assets/img2.png" class="block w-full h-full object-cover" alt="Screenshot 2"> </div> <div x-show="activeSlide === 3" class="absolute inset-0 duration-700 ease-in-out"> <img src="dashboard-preview.png" class="block w-full h-full object-cover" alt="Screenshot 3"> </div> </div> <!-- Slider indicators --> <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"> <button type="button" class="w-3 h-3 rounded-full" :class="{'bg-white': activeSlide === 1, 'bg-white/50': activeSlide !== 1}" @click="activeSlide = 1"></button> <button type="button" class="w-3 h-3 rounded-full" :class="{'bg-white': activeSlide === 2, 'bg-white/50': activeSlide !== 2}" @click="activeSlide = 2"></button> <button type="button" class="w-3 h-3 rounded-full" :class="{'bg-white': activeSlide === 3, 'bg-white/50': activeSlide !== 3}" @click="activeSlide = 3"></button> </div> <!-- Slider controls --> <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="activeSlide = activeSlide === 1 ? slides.length : activeSlide - 1"> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"> <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Previous</span> </span> </button> <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="activeSlide = activeSlide === slides.length ? 1 : activeSlide + 1"> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"> <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Next</span> </span> </button> </div> </div> </div></section>`;
}, "/app/src/components/Hero.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="funcionalidades" class="py-20 md:py-28"> <div class="container mx-auto px-6"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-extrabold text-aegis-dark">Uma Plataforma Completa e Modular</h2> <p class="text-lg text-aegis-gray-500 mt-4 max-w-2xl mx-auto">Ative apenas o que precisa, com garantia de integração e escalabilidade.</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Feature Card 1 --> <div class="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2"> <div class="text-4xl text-aegis-blue-500 mb-4">📊</div> <h3 class="text-xl font-bold text-aegis-dark mb-2">Núcleo Operacional (ERP/CRM)</h3> <p class="text-aegis-gray-500">Controle financeiro, fiscal, contábil e gestão completa de relacionamento com clientes.</p> </div> <!-- Feature Card 2 --> <div class="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2"> <div class="text-4xl text-aegis-blue-500 mb-4">🧠</div> <h3 class="text-xl font-bold text-aegis-dark mb-2">Inteligência de Dados e IA</h3> <p class="text-aegis-gray-500">Dashboards preditivos e simulações de impacto fiscal para decisões estratégicas.</p> </div> <!-- Módulo Governança --> <div class="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 relative"> <div class="text-4xl text-aegis-blue-500 mb-4">🏛️</div> <h3 class="text-xl font-bold text-aegis-dark mb-2">Governança Corporativa</h3> <p class="text-aegis-gray-500">Estruture processos e políticas para garantir a transparência e a responsabilidade corporativa.</p> </div> <!-- Módulo Riscos --> <div class="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 relative"> <div class="text-4xl text-aegis-blue-500 mb-4">⚠️</div> <h3 class="text-xl font-bold text-aegis-dark mb-2">Gestão de Riscos</h3> <p class="text-aegis-gray-500">Identifique, avalie e mitigue riscos operacionais, financeiros e de mercado de forma proativa.</p> </div> <!-- Módulo Compliance --> <div class="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 relative"> <div class="text-4xl text-aegis-blue-500 mb-4">✅</div> <h3 class="text-xl font-bold text-aegis-dark mb-2">Compliance e Conformidade</h3> <p class="text-aegis-gray-500">Garanta a adequação a normas como LGPD, ISO e regulamentações setoriais específicas.</p> </div> <!-- Módulo Gestão de Pessoas --> <div class="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 relative"> <div class="text-4xl text-aegis-blue-500 mb-4">🧑💼</div> <h3 class="text-xl font-bold text-aegis-dark mb-2">Gestão de Pessoas (RH)</h3> <p class="text-aegis-gray-500">Administre salários, funções, avaliações de desempenho (TPR) e todo o ciclo de vida do colaborador.</p> </div> <!-- Módulo Gestão de Sistemas --> <div class="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 relative"> <div class="text-4xl text-aegis-blue-500 mb-4">💻</div> <h3 class="text-xl font-bold text-aegis-dark mb-2">Gestão de Sistemas (TI)</h3> <p class="text-aegis-gray-500">Controle ativos de TIC, Help Desk, incidentes, monitoramento e registro de perdas.</p> </div> <!-- Módulo Gestão Documental --> <div class="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 relative"> <div class="text-4xl text-aegis-blue-500 mb-4">📝</div> <h3 class="text-xl font-bold text-aegis-dark mb-2">Gestão Documental e Assinaturas</h3> <p class="text-aegis-gray-500">Gerencie políticas e normas com auxílio de IA, aprovação e assinaturas eletrônicas.</p> </div> <!-- Módulo ESG (Sugestão) --> <div class="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 relative"> <div class="text-4xl text-aegis-blue-500 mb-4">🌱</div> <h3 class="text-xl font-bold text-aegis-dark mb-2">Sustentabilidade (ESG)</h3> <p class="text-aegis-gray-500">Monitore e reporte suas métricas ambientais, sociais e de governança para o mercado.</p> </div> <!-- Feature Card 4 --> <div class="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 relative"> <div class="text-4xl text-aegis-blue-500 mb-4">⚙️</div> <h3 class="text-xl font-bold text-aegis-dark mb-2">Continuidade de Negócios</h3> <p class="text-aegis-gray-500">Planejamento e resposta a incidentes para garantir que suas operações nunca parem.</p> </div> <!-- Feature Card 5 --> <div class="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 relative"> <div class="text-4xl text-aegis-blue-500 mb-4">🚀</div> <h3 class="text-xl font-bold text-aegis-dark mb-2">Estratégia e Planejamento</h3> <p class="text-aegis-gray-500">Definição de OKRs, gestão de projetos e inovação para um crescimento sustentável.</p> </div> <!-- Feature Card 6 --> <div class="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2"> <div class="text-4xl text-aegis-blue-500 mb-4">🔗</div> <h3 class="text-xl font-bold text-aegis-dark mb-2">Integrações e APIs Abertas</h3> <p class="text-aegis-gray-500">Conecte-se facilmente a sistemas externos, bancos e marketplaces.</p> </div> </div> </div> </section> ${renderScript($$result, "/app/src/components/Features.astro?astro&type=script&index=0&lang.ts")}`;
}, "/app/src/components/Features.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contato" class="py-20 md:py-28 bg-aegis-dark"> <div class="container mx-auto px-6"> <div class="text-center mb-16 max-w-3xl mx-auto"> <h2 class="text-3xl md:text-4xl font-extrabold text-white">Dê o Próximo Passo na Sua Transformação Digital</h2> <p class="text-lg text-gray-300 mt-4">Preencha o formulário e descubra como a Aegis pode otimizar sua conformidade e governança.</p> </div> <!-- Formulário Netlify --> <form name="contact" method="POST" data-netlify="true" class="max-w-2xl mx-auto space-y-6"> <input type="hidden" name="form-name" value="contact"> <!-- Campo Nome --> <div> <label for="name" class="block text-lg font-semibold text-white mb-2">Nome Completo</label> <input type="text" id="name" name="name" required placeholder="Seu nome" class="w-full p-4 bg-aegis-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-aegis-blue-500 focus:border-aegis-blue-500 transition"> </div> <!-- Campo Email --> <div> <label for="email" class="block text-lg font-semibold text-white mb-2">E-mail Corporativo</label> <input type="email" id="email" name="email" required placeholder="seu.email@suaempresa.com.br" class="w-full p-4 bg-aegis-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-aegis-blue-500 focus:border-aegis-blue-500 transition"> </div> <!-- Campo Empresa --> <div> <label for="empresa" class="block text-lg font-semibold text-white mb-2">Nome da Empresa</label> <input type="text" id="empresa" name="empresa" required placeholder="Nome da sua empresa" class="w-full p-4 bg-aegis-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-aegis-blue-500 focus:border-aegis-blue-500 transition"> </div> <!-- Campo Mensagem --> <div> <label for="message" class="block text-lg font-semibold text-white mb-2">Como podemos ajudar?</label> <textarea id="message" name="message" rows="4" placeholder="Gostaria de uma demonstração do módulo fiscal..." class="w-full p-4 bg-aegis-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-aegis-blue-500 focus:border-aegis-blue-500 transition"></textarea> </div> <!-- Botão de Envio --> <div> <button type="submit" class="w-full bg-aegis-blue-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-aegis-blue-600 transition-all duration-300">
Falar com um Especialista
</button> </div> </form> </div> </section>`;
}, "/app/src/components/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer style="text-align:center; padding:20px; background:#f9f9f9; font-size:14px;"> <p>© 2025 Aegis Soluções – Todos os direitos reservados.</p> <div class="seal-container"> <!--
      Selo HTTPS/SSL Let's Encrypt (emitido automaticamente pelo Netlify).
      Mostra que o site usa criptografia TLS válida e auditada.
      O link leva para a página oficial da Let's Encrypt.
    --> <a href="https://letsencrypt.org/" target="_blank" rel="noopener noreferrer"> <img src="assets/letsencrypt.svg" alt="Site protegido com Let's Encrypt SSL" style="height:40px; margin:10px;"> </a> <!--
      Selo ICP-Brasil (exemplo: Certisign).
      Reforça a confiança com certificação digital reconhecida pelo governo brasileiro.
      O link leva para a página oficial da Certisign sobre o selo de site seguro.
      Obs: ao contratar o certificado, a AC fornece o snippet oficial para validação.
    --> <a href="https://www.certisign.com.br/duvidas/selo-site-seguro" target="_blank" rel="noopener noreferrer"> <img src="" alt="Selo Site Seguro ICP-Brasil Certisign" style="height:40px; margin:10px;"> </a> <!--
      Selo Registro.br.
      Mostra que o domínio está registrado oficialmente no órgão nacional.
      O link leva para a página oficial do Registro.br.
    --> <a href="https://registro.br/" target="_blank" rel="noopener noreferrer"> <img src="assets/registrobr.svg" alt="Domínio registrado no Registro.br" style="height:40px; margin:10px;"> </a> </div> </footer>`;
}, "/app/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aegis Solu\xE7\xF5es - Conformidade Tribut\xE1ria e GRC com IA" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/app/src/pages/index.astro", void 0);

const $$file = "/app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
