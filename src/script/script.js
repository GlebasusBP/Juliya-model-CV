'use strict';
import TEXT from '../assets/JSON/text.JSON';
import renderGallery from './modules/renderGallery';
import modalSlideGallery from './modules/modalSlideGallery';
import renderSlide from './modules/renderSlide';
import togleModalGallery from './modules/togleModalGallery';
import openModalByIndexPhoto from './modules/openModalByIndexPhoto';

window.addEventListener('DOMContentLoaded', ()=>{

  const headPage = document.querySelector('.head-page'),
        title = document.querySelector('.head-page-description-headtitle'),
        subtitle = document.querySelector('.head-page-description-subtitle'),
        paragraph = document.querySelector('.head-page-description-paragraph'),
        headBtn = document.querySelectorAll('.head-page-panel-btn'),
        gallery = document.querySelector('.gallery'),
        galleryGrid = document.querySelector('.gallery-grid'),
        galleryGridItem = document.querySelectorAll('.gallery-grid__item'),

        // btnAboutMe = document.querySelector('.about-btn'),
        btnGallery = document.querySelector('.gallery-btn'),
        btnContacts = document.querySelectorAll('.contacts-btn'),
        btnCloseModal = document.querySelector('.modal-btn'),
        btnHome = document.querySelector('.home-btn'),
        btnCloseAbout = document.querySelector('.about-close-btn'),
        btnLangEng = document.querySelector('.eng-btn'),
        btnLangRus = document.querySelector('.rus-btn'),
        btnSliderClose = document.querySelector('.slider-close-btn'),

        about = document.querySelector('.about'),
        aboutWrapper = document.querySelector('.about-wrapper'),
        titleAboutText = document.querySelector('.head-page-description-paragraph');
        // aboutText = document.querySelector('.about-text');


  renderGallery(20, galleryGrid);
  openModalByIndexPhoto();
  btnSliderClose.addEventListener('click', togleModalGallery);


  document.querySelector('.head-page-panel__btn-lang').addEventListener('click', (elem) => {
    if(elem.target.classList.contains('rus-btn') && !elem.target.classList.contains('lang-active')){
      setTextSelectLanguage(TEXT.rus);
      btnLangEng.classList.remove('lang-active');
      elem.target.classList.add('lang-active'); 
    } else if((elem.target.classList.contains('eng-btn') && !elem.target.classList.contains('lang-active'))){
      setTextSelectLanguage(TEXT.eng);
      btnLangRus.classList.remove('lang-active');
      elem.target.classList.add('lang-active'); 
    }
  })

  function setTextSelectLanguage(text){
    title.textContent = text.title;
    subtitle.textContent = text.subtitle;
    titleAboutText.textContent = text.about;
    // aboutText.textContent = text.about;
    document.querySelector('.modal-title').textContent = text.modalTitle;

    btnLangEng.textContent = text.btn.engBtn;
    btnLangRus.textContent = text.btn.rusBtn;
    // btnAboutMe.textContent = text.btn.aboutBtn;
    btnHome.textContent = text.btn.homeBtn;
    btnGallery.textContent = text.btn.galleryBtn;
    btnContacts.forEach(btn => btn.textContent = text.btn.contactsBtn);
  }

  setTextSelectLanguage(TEXT.eng);

  function start(){

    setTimeout( () => {
      title.style.opacity = '1'; 
      title.style.transition = '1.2s';
      subtitle.style.opacity = '1'; 
      subtitle.style.transition = '1.2s';
    }, 1000);

      setTimeout(() => {   
        paragraph.style.opacity ='1';
        paragraph.style.transition = '1.2s';
      }, 1500);
    
    setTimeout(() => {
      headBtn.forEach((e) => {
        e.style.opacity ='1';
        e.style.transition = '1.2s';
      })
    }, 2000);
  }

  ////////////////////////////////////////

  function show(a, b){
    a.style.opacity = '0';
    a.style.transition = '1s';
    setTimeout(() => {
      a.style.display = 'none';
      b.style.display = 'block';
    }, 1000);
    setTimeout(() => {
      b.style.opacity = '1';
      b.style.transition = '1s'; 
    },1100);      
  }

  function hide(a, b){
    b.style.opacity = '0';
    b.style.transition = '1s';
    setTimeout(() => {
      b.style.display = 'none';
      a.style.display = 'block';
    }, 1000);
    setTimeout(() => {
      a.style.opacity = '1';
      a.style.transition = '1s'; 
    },1100); 
  }

  start();

  btnGallery.addEventListener('click', () => show(headPage, gallery));
  btnHome.addEventListener('click', () => hide(headPage, gallery));

  // Modal

  function showModal(){
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout(()=>{
      document.querySelector('.modal').style.opacity = '1';
    }, 100);
  }

  function closeMopdal(){
    document.querySelector('.modal').style.opacity = '0';
    setTimeout(()=>{
      document.querySelector('.modal').style.display = 'none';
    }, 1000);
    document.querySelector('body').style.overflow = '';
  }

  btnContacts.forEach((e) => {
    e.addEventListener('click', showModal);
  });
  btnCloseModal.addEventListener('click', closeMopdal);
  
})