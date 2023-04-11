function renderGallery(count, parent){
  
  for(let i = 1; i <= count; i++){
    parent.innerHTML += `
    <figure class="gallery-grid__item gallery-grid__item-${i}">
      <img src="assets/images/big-img/${i}.jpg" alt="photo-${i}" class="gallery-grid__image" num="${i}">
    </figure>
    `;
  }
};

export default renderGallery;