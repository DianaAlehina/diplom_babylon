var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},t=e.parcelRequire5664;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},e.parcelRequire5664=t),t.register("f062X",(function(e,r){var n,t,o,i;function f(e){let r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}n=e.exports,t="hex2rgb",o=()=>f,Object.defineProperty(n,t,{get:o,set:i,enumerable:!0,configurable:!0})}));