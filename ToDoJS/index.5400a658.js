// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aBxaA":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
module.bundle.HMR_BUNDLE_ID = "da390bba5400a658";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1uJD7":[function(require,module,exports) {
var _valid = require("./valid"); /////// экспортируем модули
var _setTotal = require("./setTotal");
var _openModal = require("./openModal");
var _mainRender = require("./mainRender");
var _render = require("./render");
var _changeDeleteTask = require("./changeDeleteTask");
let state = [] /////// создали наше хранилище с тасками
;
/////// по порядку вызываем наши функции
(0, _mainRender.mainRender)(state);
(0, _render.render)(state);
(0, _valid.valid)(state, (0, _render.render), (0, _setTotal.setTotal));
(0, _setTotal.setTotal)(state);
(0, _openModal.openModal)();
(0, _changeDeleteTask.changeDeleteTask)(state, (0, _render.render), (0, _setTotal.setTotal));

},{"./valid":"gN83j","./setTotal":"g6BVI","./openModal":"92hDR","./mainRender":"9I2io","./render":"illf9","./changeDeleteTask":"gHxKw"}],"gN83j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "valid", ()=>valid);
function valid(state, render, setTotal) {
    let formTask = document.querySelector("form");
    let popWrapper = document.querySelector(".pop-up-wrapper");
    let popUp = document.querySelector(".pop-up");
    let mainTitlePop = document.querySelector(".main-title");
    formTask.addEventListener("submit", (event)=>{
        event.preventDefault() /////////// убираем перезагрузку с формы по клику
        ;
        if (formTask.task.value.length >= 1 && formTask.descr.value.length >= 1 && formTask.author.value.length >= 1) {
            state.push({
                task: formTask.task.value,
                descr: formTask.descr.value,
                author: formTask.author.value,
                inProgress: false,
                done: false
            });
            render(state);
            formTask.task.value = "" /////////// обнуляем value формы
            ;
            formTask.descr.value = "";
            formTask.author.value = "";
            popUp.classList.add("hide"); /////////// закрываем форму удаляя селектор
            popUp.classList.remove("show");
            document.body.style.overflow = "scroll";
            setTotal(state);
        } else {
            let error = document.createElement("h3") /////////// ошибка если инпуты пустые
            ;
            popWrapper.classList.toggle("error");
            error.innerHTML = "Не все поля заполнены";
            mainTitlePop.append(error);
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"j7FRh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"g6BVI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setTotal", ()=>setTotal);
function setTotal(state) {
    document.querySelector(".total-all-num").textContent = state.filter((task)=>task.done !== true && task.inProgress !== true).length;
    document.querySelector(".total-complete-num").textContent = state.filter((task)=>task.inProgress === true).length;
    document.querySelector(".total-done-num").textContent = state.filter((task)=>task.done === true).length;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"92hDR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openModal", ()=>openModal);
function openModal() {
    let formTask = document.querySelector("form");
    let openPopBtn = document.querySelector(".option-plus-img");
    let popUp = document.querySelector(".pop-up");
    let closeBtn = document.querySelectorAll(".close-button");
    openPopBtn.addEventListener("click", ()=>{
        popUp.classList.add("show");
        popUp.classList.remove("hide");
        document.body.style.overflow = "hidden";
    });
    closeBtn.forEach((item)=>{
        item.addEventListener("click", (e)=>{
            e.preventDefault() //// убираем перезагрузку страницы
            ;
            popUp.classList.add("hide");
            popUp.classList.remove("show");
            document.body.style.overflow = "scroll";
        });
        formTask.task.value = "";
        formTask.descr.value = "";
        formTask.author.value = "";
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"9I2io":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mainRender", ()=>mainRender);
function mainRender(state) {
    if (localStorage.length >= 1) for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        state.push(JSON.parse(localStorage.getItem(key))) //////// переводи из json формата наши такси и заполняем state
        ;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"illf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _saveLocalStorage = require("./saveLocalStorage");
var _getHtmlTask = require("./getHtmlTask");
var _dateTime = require("./dateTime");
function render(state) {
    function renderMakeTask(state) {
        let makeTaskList = document.querySelector(".make-tasks-list");
        makeTaskList.innerHTML = "" //////// чистим вёртску дива с таксками
        ;
        let makeState = state.filter((task)=>{
            if (task.done === false && task.inProgress === false) {
                let todo = document.createElement("div") //////// создаём новый див , обёртку для таски
                ;
                todo.innerHTML = (0, _getHtmlTask.getHtmlTask)(task, "make") //////// наполняем див , версткой для такски
                ;
                makeTaskList.append(todo) //////// присваеваем нашу таску как дочений элемент блоку с тасками
                ;
            }
        });
        return makeState //////// возвращаем отсотированный массив
        ;
    }
    renderMakeTask(state);
    function renderProgressTask(state) {
        let progTaskList = document.querySelector(".progress-tasks-list");
        progTaskList.innerHTML = "";
        let progressState = state.filter((task)=>{
            if (task.inProgress === true) {
                let todo = document.createElement("div");
                todo.innerHTML = (0, _getHtmlTask.getHtmlTask)(task, "progress");
                progTaskList.append(todo);
            }
        });
        return progressState;
    }
    renderProgressTask(state);
    function renderDoneTask(state) {
        let doneTaskList = document.querySelector(".done-tasks-list");
        doneTaskList.innerHTML = "";
        let doneState = state.filter((task)=>{
            if (task.done === true) {
                let todo = document.createElement("div");
                todo.innerHTML = (0, _getHtmlTask.getHtmlTask)(task, "done");
                doneTaskList.append(todo);
            }
        });
        return doneState;
    }
    renderDoneTask(state);
    (0, _saveLocalStorage.saveLocalStorage)(state);
    (0, _dateTime.dateTime)();
}

},{"./saveLocalStorage":"kXQYD","./getHtmlTask":"3k9EF","./dateTime":"jMC0y","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"kXQYD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "saveLocalStorage", ()=>saveLocalStorage);
function saveLocalStorage(state) {
    state.forEach((todo, index)=>{
        localStorage.setItem(`todo #${index + 1}`, JSON.stringify(todo)) ///// сохраняем в json формате в локальном зранилище нащи таски
        ;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"3k9EF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHtmlTask", ()=>getHtmlTask);
function getHtmlTask(prop, nameColumn) {
    if (nameColumn === "make") return `<div class="task">
                    <div class="task-date">
                        <p>Todo</p>
                        <div class="date-task">03.12.2022</div>
                    </div>
                    <hr>
                    <div class="task-wrapper">

                            <div class="task-name">${prop.task}</div>
                            <div class="task-descr">${prop.descr}</div>

                    </div>
                    <hr>
                    <div class="delete">
                        <p>${prop.author}</p>

                          
                          <button class="option-progress-btn">In Prog</button>
                          <button class="option-done-btn">DONE</button>
                        <div class="option-delete-img">
<!--                            <img src="./img/free-icon-bin-5375931.png" alt="delete">-->
                            del
                        </div>
                    </div>
                </div>`;
    if (nameColumn === "done") return `<div class="task">
                    <div class="task-date">
                        <p>Todo</p>
                        <div class="date-task">03.12.2022</div>
                    </div>
                    <hr>
                    <div class="task-wrapper">
                            <div class="task-name">${prop.task}</div>
                            <div class="task-descr">${prop.descr}</div>
                    </div>
                    <hr>
                     <div class="delete">
                        <p>${prop.author}</p>

                          
                          <button class="option-progress-btn">In Prog</button>
                        <div class="option-delete-img">
<!--                            <img src="./img/free-icon-bin-5375931.png" alt="delete">-->
                            del
                        </div>
                    </div>
                </div>`;
    if (nameColumn === "progress") return `<div class="task">
                    <div class="task-date">
                        <p>Todo</p>
                        <div class="date-task">03.12.2022</div>
                    </div>
                    <hr>
                    <div class="task-wrapper">
                            <div class="task-name">${prop.task}</div>
                            <div class="task-descr">${prop.descr}</div>
                    </div>
                    <hr>
                     <div class="delete">
                        <p>${prop.author}</p>

                          <button class="option-make-btn">MAKE</button>
                          <button class="option-done-btn">DONE</button>
                        <div class="option-delete-img">
<!--                            <img src="./img/free-icon-bin-5375931.png" alt="delete">-->
                            del
                        </div>
                    </div>
                </div>`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"jMC0y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dateTime", ()=>dateTime);
function dateTime() {
    let dateTask = document.querySelectorAll(".date-task");
    let date = document.querySelector("#date-header");
    function formatDate(value) {
        if (value < 10) value = "0" + value;
        return value;
    }
    let currentDatetime = new Date();
    let day = formatDate(currentDatetime.getDate());
    let month = formatDate(currentDatetime.getMonth() + 1);
    let year = currentDatetime.getFullYear();
    date.innerHTML = day + "." + month + "." + year;
    dateTask.forEach((item)=>{
        item.innerHTML = day + "." + month + "." + year;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gHxKw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "changeDeleteTask", ()=>changeDeleteTask);
function changeDeleteTask(state, render, setTotal) {
    let toDoList = document.querySelector(".todo-list") /////// обращаемся к div , области где находяться все такси
    ;
    toDoList.addEventListener("click", (event)=>{
        ////// удаление по калонкам
        let target = event.target ////// присваем переменной таргет что бы проще обращаться
        ;
        if (target.className === "img-make-delete") {
            let newState = state.filter((item)=>item.inProgress !== false && item.done !== false) /////// создаем новый отфильтрованный массив
            ;
            localStorage.clear() /////// чистим локальное хранилище
            ;
            state = [] ///////  чистим массив с тксвами
            ;
            state = newState /////// наполняем массив отфильтрованными тасками
            ;
        }
        // if ( target.className === 'img-prog-delete') {
        //
        //     let newState = state.filter((item) => item.inProgress !== true)
        //     localStorage.clear()
        //     state = []
        //     state = newState
        // }
        if (target.className === "img-done-delete") {
            let newState1 = state.filter((item)=>item.done !== true);
            localStorage.clear();
            state = [];
            state = newState1;
        }
        ////// замена либо удаление по одной таске
        if (target.className === "option-done-btn") {
            let taskName = target.parentNode.parentNode.querySelector(".task-name").textContent ////// обращаемсья к родительскому элементу нашей таски и ищем имя задача
            ;
            state.forEach((item)=>{
                if (item.task === taskName) {
                    item.inProgress = false;
                    item.done = true;
                }
            });
        }
        if (target.className === "option-progress-btn") {
            let taskName1 = target.parentNode.parentNode.querySelector(".task-name").textContent;
            state.forEach((item)=>{
                if (item.task === taskName1) {
                    item.done = false;
                    item.inProgress = true;
                }
            });
        }
        if (target.className === "option-make-btn") {
            let taskName2 = target.parentNode.parentNode.querySelector(".task-name").textContent;
            state.forEach((item)=>{
                if (item.task === taskName2) {
                    item.done = false;
                    item.inProgress = false;
                }
            });
        }
        if (target.className === "option-delete-img") {
            let taskName3 = target.parentNode.parentNode.querySelector(".task-name").textContent;
            let newState2 = state.filter((item)=>item.task !== taskName3);
            localStorage.clear();
            state = [];
            state = newState2;
        }
        render(state);
        setTotal(state);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}]},["aBxaA","1uJD7"], "1uJD7", "parcelRequired3eb")

