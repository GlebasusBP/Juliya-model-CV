(()=>{"use strict";var e={295:()=>{window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".head-page"),t=document.querySelector(".head-page-description-title"),o=document.querySelector(".head-page-description-subtitle"),n=document.querySelector(".head-page-description-paragraph"),c=document.querySelectorAll(".head-page-panel-btn"),i=document.querySelector(".gallary"),r=(document.querySelector(".slider"),document.querySelector("#gallary-btn")),l=document.querySelectorAll("#contacts-btn"),s=document.querySelector("#modal-btn"),u=document.querySelector("#home-btn");r.addEventListener("click",(function(){e.style.opacity="0",e.style.transition="1s",setTimeout((function(){e.style.display="none",i.style.display="block"}),1e3),setTimeout((function(){i.style.opacity="1",i.style.transition="1s"}),1100)})),u.addEventListener("click",(function(){i.style.opacity="0",i.style.transition="1s",setTimeout((function(){i.style.display="none",e.style.display="block"}),1e3),setTimeout((function(){e.style.opacity="1",e.style.transition="1s"}),1100)})),setTimeout((function(){t.style.opacity="1",t.style.transition="1.2s",o.style.opacity="1",o.style.transition="1.2s"}),1e3),setTimeout((function(){n.style.opacity="1",n.style.transition="1.2s"}),1500),setTimeout((function(){c.forEach((function(e){e.style.opacity="1",e.style.transition="1.2s"}))}),2e3);var a=document.querySelector(".slider-btn-icon__prev"),d=document.querySelector(".slider-btn-icon__next"),y=document.querySelectorAll(".slider-view-image"),m=1;function p(){m>y.length&&(m=1),m<1&&(m=y.length),y.forEach((function(e){e.classList.remove("active")})),y[m-1].classList.add("active")}function f(){document.querySelector(".modal").style.display="block",document.querySelector("body").style.overflow="hidden",setTimeout((function(){document.querySelector(".modal").style.opacity="1"}),100)}d.addEventListener("click",(function(){m++,p()})),a.addEventListener("click",(function(){m--,p()})),p(),l.forEach((function(e){e.addEventListener("click",f)})),s.addEventListener("click",(function(){document.querySelector(".modal").style.opacity="0",setTimeout((function(){document.querySelector(".modal").style.display="none"}),1e3),document.querySelector("body").style.overflow=""}))}))}},t={};function o(n){var c=t[n];if(void 0!==c)return c.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(295)})();