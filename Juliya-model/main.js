(()=>{"use strict";var e={295:()=>{window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".head-page"),t=document.querySelector(".head-page-description-headtitle"),o=document.querySelector(".head-page-description-subtitle"),n=document.querySelector(".head-page-description-paragraph"),i=document.querySelectorAll(".head-page-panel-btn"),c=document.querySelector(".gallary"),s=document.querySelector("#about-btn"),l=document.querySelector("#gallary-btn"),r=document.querySelectorAll("#contacts-btn"),a=document.querySelector("#modal-btn"),u=document.querySelector("#home-btn"),y=document.querySelector(".about"),d=document.querySelector(".about-wrapper");l.addEventListener("click",(function(){e.style.opacity="0",e.style.transition="1s",setTimeout((function(){e.style.display="none",c.style.display="block"}),1e3),setTimeout((function(){c.style.opacity="1",c.style.transition="1s"}),1100)})),u.addEventListener("click",(function(){c.style.opacity="0",c.style.transition="1s",setTimeout((function(){c.style.display="none",e.style.display="block"}),1e3),setTimeout((function(){e.style.opacity="1",e.style.transition="1s"}),1100)})),setTimeout((function(){t.style.opacity="1",t.style.transition="1.2s",o.style.opacity="1",o.style.transition="1.2s"}),1e3),window.innerWidth>720?setTimeout((function(){n.style.opacity="1",n.style.transition="1.2s"}),1500):s.style.display="block",setTimeout((function(){i.forEach((function(e){e.style.opacity="1",e.style.transition="1.2s"}))}),2e3);var p=document.querySelector(".slider-btn-icon__prev"),m=document.querySelector(".slider-btn-icon__next"),f=document.querySelectorAll(".slider-view-image"),b=1;function v(){b>f.length&&(b=1),b<1&&(b=f.length),f.forEach((function(e){e.classList.remove("active")})),f[b-1].classList.add("active")}function q(){document.querySelector(".modal").style.display="block",document.querySelector("body").style.overflow="hidden",setTimeout((function(){document.querySelector(".modal").style.opacity="1"}),100)}m.addEventListener("click",(function(){b++,v()})),p.addEventListener("click",(function(){b--,v()})),v(),r.forEach((function(e){e.addEventListener("click",q)})),a.addEventListener("click",(function(){document.querySelector(".modal").style.opacity="0",setTimeout((function(){document.querySelector(".modal").style.display="none"}),1e3),document.querySelector("body").style.overflow=""})),s.addEventListener("click",(function(){e.style.opacity="0",e.style.transition="1s",setTimeout((function(){e.style.display="none",y.style.display="block"}),1e3),setTimeout((function(){y.style.opacity="1",y.style.transition="1s"}),1100),setTimeout((function(){d.style.opacity="1",d.style.transition="1s"}),2e3)})),document.querySelector(".about-close-btn").addEventListener("click",(function(){d.style.opacity="0",d.style.transition="1s",y.style.opacity="0",y.style.transition="1s",setTimeout((function(){y.style.display="none",e.style.display="block"}),1e3),setTimeout((function(){e.style.opacity="1",e.style.transition="1s"}),1100)}))}))}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(295)})();