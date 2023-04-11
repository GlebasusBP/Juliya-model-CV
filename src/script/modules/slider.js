import renderSlide from "./renderSlide";

function slider(index){
  const btnPrev = document.querySelector('.slider-btn-prev'),
        btnNext = document.querySelector('.slider-btn-next');


  let counter = index;

  btnPrev.addEventListener('click', ()=>{
    if(counter < 2){
      counter = document.querySelectorAll('.gallery-grid__image').length;
    }else{
      counter--;
    }
    renderSlide(counter);
  })

  btnNext.addEventListener('click', ()=>{
    if(counter === document.querySelectorAll('.gallery-grid__image').length){
      counter = 1;
    }else{
      counter++;
    }
    renderSlide(counter);
  })

}

export default slider