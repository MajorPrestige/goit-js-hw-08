// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryArray = galleryItems
  .map(({ preview, original, description }) => {
    return `
  <div class="gallery__item">
    <a href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </div>
  `;
  })
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryArray);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
