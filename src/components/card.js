import {closePopup, openPopup, openPopupFigure} from './popup.js';
import {putLikeCard, deleteLikeCard, deletePhotoCard} from './api.js';
import {config} from './index.js';

const deleteCardPopup = document.querySelector('.delete-card-popup');
const deleteCardForm = deleteCardPopup.querySelector('.form-edit');
let cardForDelete;

function createPhotoCard(cardInfo, myId) {
  const newPhotoCard = document.querySelector('#card').content.cloneNode(true);

  const imgPhotoCard = newPhotoCard.querySelector('.element__img');
  imgPhotoCard.src = cardInfo.link;
  imgPhotoCard.alt = cardInfo.name;

  newPhotoCard.querySelector('.element__title').textContent = cardInfo.name;  

  const colLikesCard = newPhotoCard.querySelector('.element__col-like');
  colLikesCard.textContent = cardInfo.likes.length;

  if (cardInfo.owner._id !== myId) {
    const btnDeleteCard = newPhotoCard.querySelector('.element__btn-delete');
    btnDeleteCard.remove();
  }

  if (cardInfo.likes.some(likeAuthor => likeAuthor._id === myId)) {
    const btnLikeCard = newPhotoCard.querySelector('.element__btn-like');
    btnLikeCard.classList.toggle('element__btn-like_active');
  }

  return newPhotoCard;
}

function likePhotoCard(config, btn, card) {
  if (btn.classList.contains('element__btn-like_active')) {
    deleteLikeCard(config, card)
    .then(() => {
      btn.classList.remove('element__btn-like_active');
      const colLikes = card.querySelector('.element__col-like');
      colLikes.textContent = Number(colLikes.textContent) - 1;
    });
  } else {
    putLikeCard(config, card)
    .then(() => {
      btn.classList.add('element__btn-like_active');
      const colLikes = card.querySelector('.element__col-like');
      colLikes.textContent = Number(colLikes.textContent) + 1;
    });
  }
}

function addNewCard(cardInfo, myId, element) {
  element.prepend(createPhotoCard(cardInfo, myId));
  const newPhotoCard = element.querySelector('.element');
  newPhotoCard.id = 'ID_' + cardInfo._id;
}

deleteCardForm.addEventListener('submit', evt => {
  evt.preventDefault();
  deletePhotoCard(config, cardForDelete)
  .then(() => {
    cardForDelete.remove();
  })
  .finally(() => closePopup(deleteCardPopup));
});

function listenBtnsCard(evt) {
  const elementPhotoCard = evt.target.closest('.element');
  if (evt.target.classList.contains('element__btn-like')) {
    likePhotoCard(config, evt.target, elementPhotoCard);
  }
  if (evt.target.classList.contains('element__btn-delete')) {
    openPopup(deleteCardPopup);
    cardForDelete = elementPhotoCard;    
  }
  if (evt.target.classList.contains('element__img')) {  
    const namePhotoCard = elementPhotoCard.querySelector('.element__title');
    const linkPhotoCard = elementPhotoCard.querySelector('.element__img');  
    openPopupFigure(namePhotoCard.textContent, linkPhotoCard.src);
  }
}

export {addNewCard, listenBtnsCard};