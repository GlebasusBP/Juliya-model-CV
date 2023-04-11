import renderSlide from "./renderSlide";
import togleModalGallery from "./togleModalGallery";
import slider from "./slider";

function openModalByIndexPhoto(){
  const galleryGrid = document.querySelector('.gallery-grid');

  galleryGrid.addEventListener('click', (item)=>{
    if(item.target.classList.contains('gallery-grid__image')){
      renderSlide(item.target.getAttribute('num'))
      togleModalGallery();
      slider(item.target.getAttribute('num'));
    }
  }) 
}

export default openModalByIndexPhoto;