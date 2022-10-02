'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
  const title = document.querySelector('.head-page-description-title'),
        subtitle = document.querySelector('.head-page-description-subtitle'),
        paragraph = document.querySelector('.head-page-description-paragraph'),
        headBtn = document.querySelectorAll('.head-page-panel-btn');

  function start(){
    setTimeout( () => {
      title.style.opacity = '1'; 
      title.style.transition = '1.2s';
      subtitle.style.opacity = '1'; 
      subtitle.style.transition = '1.2s';
    }, 1000);
    setTimeout(() => {
      paragraph.style.opacity ='1';
      paragraph.style.transition = '1.2s'
    }, 1500);
    setTimeout(() => {
      headBtn.forEach((e) => {
        e.style.opacity ='1';
        e.style.transition = '1.2s'
      })
    }, 2000);
  }

  start();
})