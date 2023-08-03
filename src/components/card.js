import {openPopupFigure} from './popup.js';

function createPhotoCard(name, link) {
  const newPhotoCard = document.querySelector('#card').content.cloneNode(true);

  const imgPhotoCard = newPhotoCard.querySelector('.element__img');
  imgPhotoCard.src = link;
  imgPhotoCard.alt = name;

  newPhotoCard.querySelector('.element__title').textContent = name;  
  return newPhotoCard;
}

function likePhotoCard(btn) {
  btn.classList.toggle('element__btn-like_active');
}

function deletePhotoCard(card) {
  card.remove();
}

function addNewCard(name, link, element) {
  element.prepend(createPhotoCard(name, link));
}

function listenBtnsCard(evt) {
  const elementPhotoCard = evt.target.closest('.element');
  if (evt.target.classList.contains('element__btn-like')) {
    likePhotoCard(evt.target);
  }
  if (evt.target.classList.contains('element__btn-delete')) {
    deletePhotoCard(elementPhotoCard);
  }
  if (evt.target.classList.contains('element__img')) {  
    const namePhotoCard = elementPhotoCard.querySelector('.element__title');
    const linkPhotoCard = elementPhotoCard.querySelector('.element__img');  
    openPopupFigure(namePhotoCard.textContent, linkPhotoCard.src);
  }
}

export {addNewCard, listenBtnsCard};