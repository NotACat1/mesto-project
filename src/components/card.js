import {closePopup, openPopup, openPopupFigure} from './popup.js';
import {putLikeCard, deleteLikeCard, deletePhotoCard} from './api.js';
import {config} from './index.js';

const deleteCardPopup = document.querySelector('.delete-card-popup');
const deleteCardForm = deleteCardPopup.querySelector('.form-edit');
const templatePhotoCard = document.querySelector('#card').content;

let cardForDelete;

function createPhotoCard(cardInfo, myId) {
  const newPhotoCard = templatePhotoCard.querySelector('.element').cloneNode(true);
  newPhotoCard.id = 'ID_' + cardInfo._id;
  
  const imgPhotoCard = newPhotoCard.querySelector('.element__img');
  imgPhotoCard.src = cardInfo.link;
  imgPhotoCard.alt = cardInfo.name;

  newPhotoCard.querySelector('.element__title').textContent = cardInfo.name;  

  const colLikesCard = newPhotoCard.querySelector('.element__col-like');
  colLikesCard.textContent = cardInfo.likes.length;

  const btnDeleteCard = newPhotoCard.querySelector('.element__btn-delete');
  if (cardInfo.owner._id !== myId) {
    btnDeleteCard.remove();
  } else {
    btnDeleteCard.addEventListener('click', evt => {
      openPopup(deleteCardPopup);
      cardForDelete = newPhotoCard;
    });
  }

  const btnLikeCard = newPhotoCard.querySelector('.element__btn-like');
  if (cardInfo.likes.some(likeAuthor => likeAuthor._id === myId)) {
    btnLikeCard.classList.add('element__btn-like_active');
  }

  btnLikeCard.addEventListener('click', evt => {
    likePhotoCard(config, evt.target, newPhotoCard);
  });

  imgPhotoCard.addEventListener('click', evt => {
    openPopupFigure(cardInfo.name, cardInfo.link);
  });

  return newPhotoCard;
}

function likePhotoCard(config, btn, card) {
  if (btn.classList.contains('element__btn-like_active')) {
    deleteLikeCard(config, card.id.replace(/ID_/, ''))
    .then(rez => {
      btn.classList.remove('element__btn-like_active');
      const colLikesCard = card.querySelector('.element__col-like');
      colLikesCard.textContent = rez.likes.length;
    })
    .catch(err => console.log(`Ошибка: ${err}`));
  } else {
    putLikeCard(config, card.id.replace(/ID_/, ''))
    .then(rez => {
      btn.classList.add('element__btn-like_active');
      const colLikesCard = card.querySelector('.element__col-like');
      colLikesCard.textContent = rez.likes.length;
    })
    .catch(err => console.log(`Ошибка: ${err}`));
  }
}

function addNewCard(cardInfo, myId, element) {
  element.prepend(createPhotoCard(cardInfo, myId));
}

deleteCardForm.addEventListener('submit', evt => {
  evt.preventDefault();
  deletePhotoCard(config, cardForDelete.id.replace(/ID_/, ''))
  .then(() => {
    cardForDelete.remove();
    closePopup(deleteCardPopup);
  })
  .catch(err => console.log(`Ошибка: ${err}`));
});

export {addNewCard};