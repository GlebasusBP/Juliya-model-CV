'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
  const headPage = document.querySelector('.head-page'),
        title = document.querySelector('.head-page-description-headtitle'),
        subtitle = document.querySelector('.head-page-description-subtitle'),
        paragraph = document.querySelector('.head-page-description-paragraph'),
        headBtn = document.querySelectorAll('.head-page-panel-btn'),
        gallary = document.querySelector('.gallary'),
        btnAboutMe = document.querySelector('#about-btn'),
        btnGallary = document.querySelector('#gallary-btn'),
        btnContacts = document.querySelectorAll('#contacts-btn'),
        btnCloseModal = document.querySelector('#modal-btn'),
        btnHome = document.querySelector('#home-btn'),
        about = document.querySelector('.about'),
        aboutWrapper = document.querySelector('.about-wrapper');

      

  function start(){

    setTimeout( () => {
      title.style.opacity = '1'; 
      title.style.transition = '1.2s';
      subtitle.style.opacity = '1'; 
      subtitle.style.transition = '1.2s';
    }, 1000);

    if(window.innerWidth > 720){
      setTimeout(() => {   
        paragraph.style.opacity ='1';
        paragraph.style.transition = '1.2s';
      }, 1500);

     
      } else {
        btnAboutMe.style.display = 'block';
    }
    
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

  btnGallary.addEventListener('click', () => show(headPage, gallary));
  btnHome.addEventListener('click', () => hide(headPage, gallary));

  // Slider

  const btnPrev = document.querySelector('.slider-btn-icon__prev'),
        btnNext = document.querySelector('.slider-btn-icon__next'),
        sliderList = document.querySelectorAll('.slider-view-image');

  let indexSlide = 5;

  function showSlide(){
    if(indexSlide > sliderList.length){
      indexSlide = 1;
    }
    if(indexSlide < 1){
      indexSlide = sliderList.length;
    }
    sliderList.forEach( (e) => {
      e.classList.remove('active');
      e.classList.remove('transition');
    })
    sliderList[indexSlide - 1].classList.add('active');
    setTimeout(()=>{
      sliderList[indexSlide - 1].classList.add('transition');
    }, 0);
  }

  function getNextSlide(){
    indexSlide++;
    showSlide();
  }

  function getPrevSlide(){
    indexSlide--;
    showSlide();
  }

  btnNext.addEventListener('click', getNextSlide);
  btnPrev.addEventListener('click', getPrevSlide);

  showSlide();

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


  function showAboutMe(){
    show(headPage, about);
    setTimeout(() => {
      aboutWrapper.style.opacity = '1';
      aboutWrapper.style.transition = '1s'; 
    },2000); 
  }
  
  function closeAboutMe(){
    aboutWrapper.style.opacity = '0';
    aboutWrapper.style.transition = '1s';
    about.style.opacity = '0';
    about.style.transition = '1s';
    setTimeout(() => {
      about.style.display = 'none';
      headPage.style.display = 'block';
    }, 1000);
    setTimeout(() => {
      headPage.style.opacity = '1';
      headPage.style.transition = '1s' 
    },1100);
  }

  btnAboutMe.addEventListener('click', showAboutMe);
  document.querySelector('.about-close-btn').addEventListener('click', closeAboutMe);

})