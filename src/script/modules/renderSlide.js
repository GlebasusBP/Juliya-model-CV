function renderSlide(index){
  const slideWindow = document.querySelector('.slider-view-window');

  slideWindow.innerHTML =`
    <img src="assets/images/big-img/${index}.jpg" alt="photo-${index}" class="slider-view-image" num="${index}">
  `;
}

export default renderSlide;