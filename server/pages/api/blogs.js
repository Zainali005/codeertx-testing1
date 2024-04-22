(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[789],{

/***/ 517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);

        

        (0,next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_0__/* .enhanceGlobals */ .gL)()

        var mod = __webpack_require__(485)
        var handler = mod.middleware || mod.default;

        if (typeof handler !== 'function') {
          throw new Error('The Edge Function "pages/api/blogs" must export a `default` function');
        }

        /* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(opts) {
          return (0,next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_0__/* .adapter */ .VL)({
              ...opts,
              page: "/api/blogs",
              handler,
          })
        }
    

/***/ }),

/***/ 802:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getHostname = getHostname;
function getHostname(parsed, headers) {
    var ref;
    return (ref = !Array.isArray(headers == null ? void 0 : headers.host) && (headers == null ? void 0 : headers.host) || parsed.hostname) == null ? void 0 : ref.split(":")[0].toLowerCase();
} //# sourceMappingURL=get-hostname.js.map


/***/ }),

/***/ 156:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.detectDomainLocale = detectDomainLocale;
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    let domainItem;
    if (domainItems) {
        if (detectedLocale) {
            detectedLocale = detectedLocale.toLowerCase();
        }
        for (const item of domainItems){
            var ref, ref1;
            // remove port if present
            const domainHostname = (ref = item.domain) == null ? void 0 : ref.split(":")[0].toLowerCase();
            if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((ref1 = item.locales) == null ? void 0 : ref1.some((locale)=>locale.toLowerCase() === detectedLocale))) {
                domainItem = item;
                break;
            }
        }
    }
    return domainItem;
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 897:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizeLocalePath = normalizeLocalePath;
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map


/***/ }),

/***/ 864:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addLocale = addLocale;
var _addPathPrefix = __webpack_require__(24);
var _pathHasPrefix = __webpack_require__(174);
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    if (locale && locale !== defaultLocale && (ignorePrefix || !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), `/${locale.toLowerCase()}`) && !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), "/api"))) {
        return (0, _addPathPrefix).addPathPrefix(path, `/${locale}`);
    }
    return path;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addPathPrefix = addPathPrefix;
var _parsePath = __webpack_require__(735);
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    return `${prefix}${pathname}${query}${hash}`;
} //# sourceMappingURL=add-path-prefix.js.map


/***/ }),

/***/ 614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addPathSuffix = addPathSuffix;
var _parsePath = __webpack_require__(735);
function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    return `${pathname}${suffix}${query}${hash}`;
} //# sourceMappingURL=add-path-suffix.js.map


/***/ }),

/***/ 356:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.formatNextPathnameInfo = formatNextPathnameInfo;
var _removeTrailingSlash = __webpack_require__(331);
var _addPathPrefix = __webpack_require__(24);
var _addPathSuffix = __webpack_require__(614);
var _addLocale = __webpack_require__(864);
function formatNextPathnameInfo(info) {
    let pathname = (0, _addLocale).addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId) {
        pathname = (0, _addPathSuffix).addPathSuffix((0, _addPathPrefix).addPathPrefix(pathname, `/_next/data/${info.buildId}`), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = (0, _addPathPrefix).addPathPrefix(pathname, info.basePath);
    return info.trailingSlash ? !info.buildId && !pathname.endsWith("/") ? (0, _addPathSuffix).addPathSuffix(pathname, "/") : pathname : (0, _removeTrailingSlash).removeTrailingSlash(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map


/***/ }),

/***/ 764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getNextPathnameInfo = getNextPathnameInfo;
var _normalizeLocalePath = __webpack_require__(897);
var _removePathPrefix = __webpack_require__(917);
var _pathHasPrefix = __webpack_require__(174);
function getNextPathnameInfo(pathname, options) {
    var _nextConfig;
    const { basePath , i18n , trailingSlash  } = (_nextConfig = options.nextConfig) != null ? _nextConfig : {};
    const info = {
        pathname: pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && (0, _pathHasPrefix).pathHasPrefix(info.pathname, basePath)) {
        info.pathname = (0, _removePathPrefix).removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? `/${paths.slice(1).join("/")}` : "/";
        info.buildId = buildId;
    }
    if (i18n) {
        const pathLocale = (0, _normalizeLocalePath).normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = pathLocale == null ? void 0 : pathLocale.detectedLocale;
        info.pathname = (pathLocale == null ? void 0 : pathLocale.pathname) || info.pathname;
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map


/***/ }),

/***/ 735:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.parsePath = parsePath;
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map


/***/ }),

/***/ 174:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.pathHasPrefix = pathHasPrefix;
var _parsePath = __webpack_require__(735);
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname  } = (0, _parsePath).parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map


/***/ }),

/***/ 73:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.relativizeURL = relativizeURL;
function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = `${baseURL.protocol}//${baseURL.host}`;
    return `${relative.protocol}//${relative.host}` === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map


/***/ }),

/***/ 917:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removePathPrefix = removePathPrefix;
var _pathHasPrefix = __webpack_require__(174);
function removePathPrefix(path, prefix) {
    if ((0, _pathHasPrefix).pathHasPrefix(path, prefix)) {
        const withoutPrefix = path.slice(prefix.length);
        return withoutPrefix.startsWith("/") ? withoutPrefix : `/${withoutPrefix}`;
    }
    return path;
} //# sourceMappingURL=remove-path-prefix.js.map


/***/ }),

/***/ 331:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removeTrailingSlash = removeTrailingSlash;
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map


/***/ }),

/***/ 485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const config = {
    runtime: "experimental-edge"
};
async function handler(req) {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Hasura-Client-Name", "hasura-console");
        myHeaders.append("x-hasura-admin-secret", "52Dy5h9G#;Sy2owQ2RYWWWk67jinYUL*");
        var graphql = JSON.stringify({
            query: `query MyQuery {
                blogs {
                  author
                  comments
                  date
                  description
                  id
                  images
                  intro
                  title
                  views
                }
              }`
        });
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: graphql,
            redirect: "follow"
        };
        const resp = await fetch("https://xxmrosflewhpkjxiqhde.hasura.eu-central-1.nhost.run/v1/graphql", requestOptions);
        // console.log(resp.json())
        const response = new Response(JSON.stringify({
            blogs: await resp.json()
        }), {
            status: 200,
            headers: {
                "content-type": "application/json"
            }
        });
        return response;
    } catch (e) {
        return new Response(null, {
            status: 400,
            statusText: "Bad Request"
        });
    }
};


/***/ }),

/***/ 207:
/***/ ((module) => {

var __dirname = "/";
(()=>{"use strict";if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var e={};(()=>{var r=e;
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */r.parse=parse;r.serialize=serialize;var i=decodeURIComponent;var t=encodeURIComponent;var a=/; */;var n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function parse(e,r){if(typeof e!=="string"){throw new TypeError("argument str must be a string")}var t={};var n=r||{};var o=e.split(a);var s=n.decode||i;for(var p=0;p<o.length;p++){var f=o[p];var u=f.indexOf("=");if(u<0){continue}var v=f.substr(0,u).trim();var c=f.substr(++u,f.length).trim();if('"'==c[0]){c=c.slice(1,-1)}if(undefined==t[v]){t[v]=tryDecode(c,s)}}return t}function serialize(e,r,i){var a=i||{};var o=a.encode||t;if(typeof o!=="function"){throw new TypeError("option encode is invalid")}if(!n.test(e)){throw new TypeError("argument name is invalid")}var s=o(r);if(s&&!n.test(s)){throw new TypeError("argument val is invalid")}var p=e+"="+s;if(null!=a.maxAge){var f=a.maxAge-0;if(isNaN(f)||!isFinite(f)){throw new TypeError("option maxAge is invalid")}p+="; Max-Age="+Math.floor(f)}if(a.domain){if(!n.test(a.domain)){throw new TypeError("option domain is invalid")}p+="; Domain="+a.domain}if(a.path){if(!n.test(a.path)){throw new TypeError("option path is invalid")}p+="; Path="+a.path}if(a.expires){if(typeof a.expires.toUTCString!=="function"){throw new TypeError("option expires is invalid")}p+="; Expires="+a.expires.toUTCString()}if(a.httpOnly){p+="; HttpOnly"}if(a.secure){p+="; Secure"}if(a.sameSite){var u=typeof a.sameSite==="string"?a.sameSite.toLowerCase():a.sameSite;switch(u){case true:p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"strict":p+="; SameSite=Strict";break;case"none":p+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return p}function tryDecode(e,r){try{return r(e)}catch(r){return e}}})();module.exports=e})();

/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.VL = adapter;
__webpack_unused_export__ = blockUnallowedResponse;
exports.gL = enhanceGlobals;
var _error = __webpack_require__(928);
var _utils = __webpack_require__(625);
var _fetchEvent = __webpack_require__(125);
var _request = __webpack_require__(953);
var _response = __webpack_require__(57);
var _relativizeUrl = __webpack_require__(73);
var _nextUrl = __webpack_require__(961);
class NextRequestHint extends _request.NextRequest {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new _error.PageSignatureError({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new _error.PageSignatureError({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new _error.PageSignatureError({
            page: this.sourcePage
        });
    }
}
async function adapter(params) {
    const requestUrl = new _nextUrl.NextURL(params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    // clean-up any internal query params
    for (const key of [
        ...requestUrl.searchParams.keys()
    ]){
        if (key.startsWith("__next")) {
            requestUrl.searchParams.delete(key);
        }
    }
    const request = new NextRequestHint({
        page: params.page,
        input: String(requestUrl),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: (0, _utils).fromNodeHeaders(params.request.headers),
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    const event = new _fetchEvent.NextFetchEvent({
        request,
        page: params.page
    });
    let response = await params.handler(request, event);
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new _nextUrl.NextURL(rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (rewriteUrl.host === request.nextUrl.host) {
            rewriteUrl.buildId = buildId || rewriteUrl.buildId;
            response.headers.set("x-middleware-rewrite", String(rewriteUrl));
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ if (isDataReq) {
            response.headers.set("x-nextjs-rewrite", (0, _relativizeUrl).relativizeURL(String(rewriteUrl), String(requestUrl)));
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect) {
        const redirectURL = new _nextUrl.NextURL(redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (redirectURL.host === request.nextUrl.host) {
            redirectURL.buildId = buildId || redirectURL.buildId;
            response.headers.set("Location", String(redirectURL));
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", (0, _relativizeUrl).relativizeURL(String(redirectURL), String(requestUrl)));
        }
    }
    return {
        response: response || _response.NextResponse.next(),
        waitUntil: Promise.all(event[_fetchEvent.waitUntilSymbol])
    };
}
function blockUnallowedResponse(promise) {
    return promise.then((result)=>{
        var ref;
        if ((ref = result.response) == null ? void 0 : ref.body) {
            console.error(new Error(`A middleware can not alter response's body. Learn more: https://nextjs.org/docs/messages/returning-response-body-in-middleware`));
            return {
                ...result,
                response: new Response("Internal Server Error", {
                    status: 500,
                    statusText: "Internal Server Error"
                })
            };
        }
        return result;
    });
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== __webpack_require__.g.process) {
        // prefer local process but global.process has correct "env"
        process.env = __webpack_require__.g.process.env;
        __webpack_require__.g.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
}

//# sourceMappingURL=adapter.js.map

/***/ }),

/***/ 928:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
class PageSignatureError extends Error {
    constructor({ page  }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
exports.PageSignatureError = PageSignatureError;
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
exports.RemovedPageError = RemovedPageError;
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
}
exports.RemovedUAError = RemovedUAError;

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _detectDomainLocale = __webpack_require__(156);
var _formatNextPathnameInfo = __webpack_require__(356);
var _getHostname = __webpack_require__(802);
var _getNextPathnameInfo = __webpack_require__(764);
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base != null ? base : options.base),
            options: options,
            basePath: ""
        };
        this.analyzeUrl();
    }
    analyzeUrl() {
        var ref, ref1, ref2, ref3, ref4;
        const pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: true
        });
        this[Internal].domainLocale = (0, _detectDomainLocale).detectDomainLocale((ref = this[Internal].options.nextConfig) == null ? void 0 : (ref1 = ref.i18n) == null ? void 0 : ref1.domains, (0, _getHostname).getHostname(this[Internal].url, this[Internal].options.headers));
        const defaultLocale = ((ref2 = this[Internal].domainLocale) == null ? void 0 : ref2.defaultLocale) || ((ref3 = this[Internal].options.nextConfig) == null ? void 0 : (ref4 = ref3.i18n) == null ? void 0 : ref4.defaultLocale);
        this[Internal].url.pathname = pathnameInfo.pathname;
        this[Internal].defaultLocale = defaultLocale;
        var _basePath;
        this[Internal].basePath = (_basePath = pathnameInfo.basePath) != null ? _basePath : "";
        this[Internal].buildId = pathnameInfo.buildId;
        var _locale;
        this[Internal].locale = (_locale = pathnameInfo.locale) != null ? _locale : defaultLocale;
        this[Internal].trailingSlash = pathnameInfo.trailingSlash;
    }
    formatPathname() {
        return (0, _formatNextPathnameInfo).formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        var _locale;
        return (_locale = this[Internal].locale) != null ? _locale : "";
    }
    set locale(locale) {
        var ref, ref5;
        if (!this[Internal].locale || !((ref = this[Internal].options.nextConfig) == null ? void 0 : (ref5 = ref.i18n) == null ? void 0 : ref5.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        return `${this.protocol}//${this.host}${pathname}${this[Internal].url.search}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyzeUrl();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
}
exports.NextURL = NextURL;

//# sourceMappingURL=next-url.js.map

/***/ }),

/***/ 993:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _cookie = _interopRequireDefault(__webpack_require__(207));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const normalizeCookieOptions = (options)=>{
    options = Object.assign({}, options);
    if (options.maxAge) {
        options.expires = new Date(Date.now() + options.maxAge * 1000);
    }
    if (options.path == null) {
        options.path = "/";
    }
    return options;
};
const serializeValue = (value)=>typeof value === "object" ? `j:${JSON.stringify(value)}` : String(value);
const serializeExpiredCookie = (key, options = {})=>_cookie.default.serialize(key, "", {
        expires: new Date(0),
        path: "/",
        ...options
    });
const deserializeCookie = (input)=>{
    const value = input.headers.get("set-cookie");
    return value !== undefined && value !== null ? value.split(", ") : [];
};
const serializeCookie = (input)=>input.join(", ");
class Cookies extends Map {
    constructor(input){
        const parsedInput = typeof input === "string" ? _cookie.default.parse(input) : {};
        super(Object.entries(parsedInput));
    }
    set(key, value, options = {}) {
        return super.set(key, _cookie.default.serialize(key, serializeValue(value), normalizeCookieOptions(options)));
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return Object.fromEntries(this.entries());
    }
}
exports.Cookies = Cookies;
class NextCookies extends Cookies {
    constructor(response){
        super(response.headers.get("cookie"));
        this.response = response;
    }
    get = (...args)=>{
        return this.getWithOptions(...args).value;
    };
    getWithOptions = (...args)=>{
        const raw = super.get(...args);
        if (typeof raw !== "string") return {
            value: raw,
            options: {}
        };
        const { [args[0]]: value , ...options } = _cookie.default.parse(raw);
        return {
            value,
            options
        };
    };
    set = (...args)=>{
        const isAlreadyAdded = super.has(args[0]);
        super.set(...args);
        const currentCookie = super.get(args[0]);
        if (typeof currentCookie !== "string") {
            throw new Error(`Invariant: failed to generate cookie for ${JSON.stringify(args)}`);
        }
        if (isAlreadyAdded) {
            const setCookie = serializeCookie(deserializeCookie(this.response).filter((value)=>!value.startsWith(`${args[0]}=`)));
            if (setCookie) {
                this.response.headers.set("set-cookie", [
                    currentCookie,
                    setCookie
                ].join(", "));
            } else {
                this.response.headers.set("set-cookie", currentCookie);
            }
        } else {
            this.response.headers.append("set-cookie", currentCookie);
        }
        return this;
    };
    delete = (key, options = {})=>{
        const isDeleted = super.delete(key);
        if (isDeleted) {
            const setCookie = serializeCookie(deserializeCookie(this.response).filter((value)=>!value.startsWith(`${key}=`)));
            const expiredCookie = serializeExpiredCookie(key, options);
            this.response.headers.set("set-cookie", [
                expiredCookie,
                setCookie
            ].join(", "));
        }
        return isDeleted;
    };
    clear = (options = {})=>{
        const expiredCookies = Array.from(super.keys()).map((key)=>serializeExpiredCookie(key, options)).join(", ");
        if (expiredCookies) this.response.headers.set("set-cookie", expiredCookies);
        return super.clear();
    };
}
exports.NextCookies = NextCookies;

//# sourceMappingURL=cookies.js.map

/***/ }),

/***/ 125:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.waitUntilSymbol = void 0;
var _error = __webpack_require__(928);
const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
exports.waitUntilSymbol = waitUntilSymbol;
class FetchEvent {
    [waitUntilSymbol] = [];
    [passThroughSymbol] = false;
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){}
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new _error.PageSignatureError({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new _error.PageSignatureError({
            page: this.sourcePage
        });
    }
}
exports.NextFetchEvent = NextFetchEvent;

//# sourceMappingURL=fetch-event.js.map

/***/ }),

/***/ 953:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.INTERNALS = void 0;
var _nextUrl = __webpack_require__(961);
var _utils = __webpack_require__(625);
var _error = __webpack_require__(928);
var _cookies = __webpack_require__(993);
const INTERNALS = Symbol("internal request");
exports.INTERNALS = INTERNALS;
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0, _utils).validateURL(url);
        super(url, init);
        this[INTERNALS] = {
            cookies: new _cookies.NextCookies(this),
            geo: init.geo || {},
            ip: init.ip,
            url: new _nextUrl.NextURL(url, {
                headers: (0, _utils).toNodeHeaders(this.headers),
                nextConfig: init.nextConfig
            })
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].url;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new _error.RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new _error.RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url.toString();
    }
}
exports.NextRequest = NextRequest;

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 57:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var _nextUrl = __webpack_require__(961);
var _utils = __webpack_require__(625);
var _cookies = __webpack_require__(993);
const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[INTERNALS] = {
            cookies: new _cookies.NextCookies(this),
            url: init.url ? new _nextUrl.NextURL(init.url, {
                headers: (0, _utils).toNodeHeaders(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        // @ts-expect-error This is not in lib/dom right now, and we can't augment it.
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        var ref;
        const status = typeof init === "number" ? init : (ref = init == null ? void 0 : init.status) != null ? ref : 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, _utils).validateURL(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, _utils).validateURL(destination));
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
}
exports.NextResponse = NextResponse;

//# sourceMappingURL=response.js.map

/***/ }),

/***/ 625:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fromNodeHeaders = fromNodeHeaders;
exports.splitCookiesString = splitCookiesString;
exports.toNodeHeaders = toNodeHeaders;
exports.validateURL = validateURL;
function fromNodeHeaders(object) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(object)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (v !== undefined) {
                headers.append(key, v);
            }
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeHeaders(headers) {
    const result = {};
    if (headers) {
        for (const [key, value] of headers.entries()){
            result[key] = value;
            if (key.toLowerCase() === "set-cookie") {
                result[key] = splitCookiesString(value);
            }
        }
    }
    return result;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URLs is malformed. Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
}

//# sourceMappingURL=utils.js.map

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(517));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES)["middleware_pages/api/blogs"] = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=blogs.js.map