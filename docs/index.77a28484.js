var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=e.parcelRequire5664;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var l=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,l.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequire5664=l);var o=l("kOrD2"),u=l("kIrPN");document.getElementById("button").addEventListener("click",(function(){const e=document.getElementById("numberParticlesPlus"),t=document.getElementById("numberParticlesMinus"),n=document.getElementById("massParticlesPlus"),l=document.getElementById("massParticlesMinus"),d=document.getElementById("diameterParticlesPlus"),s=document.getElementById("diameterParticlesMinus"),c=document.getElementById("colorPlus"),i=document.getElementById("colorMinus"),a=document.getElementById("listFunction");let r=(0,u.createClassMolecules)(e.value,t.value,n.value,l.value,d.value,s.value,c.value,i.value),m=(0,u.createClassMoleculesWater)(0);(0,o.drawMolecus)(r,m,a.value)}));document.getElementById("buttonPlus").addEventListener("click",(function(){const e=document.getElementById("idButtonPlus");e.style.display="contents"===e.style.display?"none":"contents"}));document.getElementById("buttonMinus").addEventListener("click",(function(){const e=document.getElementById("idButtonMinus");e.style.display="contents"===e.style.display?"none":"contents"}));