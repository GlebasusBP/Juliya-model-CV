function togleModalGallery(){
  const slider = document.querySelector('.slider');

  if(slider.classList.contains('slider-open')){
    slider.classList.remove('slider-open');
    document.documentElement.style = "overflow: none";
  }else{
    slider.classList.add('slider-open');
    document.documentElement.style = "overflow: hidden";
  }

}

export default togleModalGallery;