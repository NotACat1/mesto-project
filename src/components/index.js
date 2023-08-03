import '../pages/index.css';
import {addNewCard, listenBtnsCard} from './card.js';
import {openPopup, closePopup} from './popup.js';
import {nameProfile, subtitleProfile, submitProfile} from './profile.js';
import {resetForm, enableValidation} from './validate.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const settings = {
  formSelector: '.form-edit',
  inputSelector: '.form-edit__input',
  submitButtonSelector: '.form-edit__submit',
  inactiveButtonClass: 'form-edit__submit_disabled',
  inputErrorClass: 'form-edit__input_error',
  errorClass: 'form-edit__input-error_active'
};


const editProfilePopup = document.querySelector('.popup.profile-popup');
const createCardPopup = document.querySelector('.popup.card-popup');
const editProfileForm = editProfilePopup.querySelector('.form-edit');
const createCardForm = createCardPopup.querySelector('.form-edit');
const elementsCards = document.querySelector('.elements');
const inputNameProfile = document.querySelector('.form-edit__input#nickname');
const inputSubtitleProfile = document.querySelector('.form-edit__input#subtitle');
const namePhotoCard = document.querySelector('.form-edit__input#name');
const linkPhotoCard = document.querySelector('.form-edit__input#link');

initialCards.forEach(card => {
  addNewCard(card.name, card.link, elementsCards)
});

const btnProfileEdit = document.querySelector('.profile__btn-edit');
btnProfileEdit.addEventListener('click', evt => {
  inputNameProfile.value = nameProfile.textContent;
  inputSubtitleProfile.value = subtitleProfile.textContent;
  openPopup(editProfilePopup);
});

const btnCreateCard = document.querySelector('.profile__btn-create-card');
btnCreateCard.addEventListener('click', evt => {
  openPopup(createCardPopup);
});

const btnsClosePopup = document.querySelectorAll('.popup__btn-close');
[...btnsClosePopup].forEach(btnClosePopup => {
  const popup = btnClosePopup.closest('.popup');
  btnClosePopup.addEventListener('click', () => {
    closePopup(popup);
  });
});

editProfileForm.addEventListener('submit', evt => {
  evt.preventDefault();
  submitProfile(inputNameProfile.value, inputSubtitleProfile.value);  
  closePopup(editProfilePopup);
});

createCardForm.addEventListener('submit', evt => {
  evt.preventDefault();
  addNewCard(namePhotoCard.value, linkPhotoCard.value, elementsCards);  
  closePopup(createCardPopup);
});

enableValidation(settings); 

elementsCards.addEventListener('click', listenBtnsCard);
