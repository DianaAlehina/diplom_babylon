var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},t=e.parcelRequire5664;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){n[e]=r},e.parcelRequire5664=t),t.register("fwb60",(function(e,r){var n,t,o,l;function i(e,r,n=.03){for(let t=0;t<r.length;t++)e[t].xNextValue+=r[t].xSpeed*n,e[t].yNextValue+=r[t].ySpeed*n,e[t].zNextValue+=r[t].zSpeed*n;return e}n=e.exports,t="nextValue",o=()=>i,Object.defineProperty(n,t,{get:o,set:l,enumerable:!0,configurable:!0})}));