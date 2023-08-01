import '../pages/index.css';
import {submitNewCard, btnsPhotoCards} from './card.js';
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
const elementsCards = document.querySelector('.elements');
const inputNameProfile = document.querySelector('.form-edit__input#nickname');
const inputSubtitleProfile = document.querySelector('.form-edit__input#subtitle');
const namePhotoCard = document.querySelector('.form-edit__input#name');
const linkPhotoCard = document.querySelector('.form-edit__input#link');

initialCards.forEach(card => {
  submitNewCard(card.name, card.link, elementsCards)
});

document.addEventListener('click', evt => {
  const element = evt.target;
  const popup = element.closest('.popup');
  const form = popup? popup.querySelector('.form-edit'): null;
  if (element.classList.contains('profile__btn-edit')) {
    inputNameProfile.value = nameProfile.textContent;
    inputSubtitleProfile.value = subtitleProfile.textContent;
    openPopup(editProfilePopup);
  }
  if (element.classList.contains('profile__btn-create-card')) {
    openPopup(createCardPopup);
  }
  if (element.classList.contains('popup__btn-close')) {
    closePopup(popup);
    resetForm(form);
  }
  if (element.classList.contains('form-edit__submit')) {
    evt.preventDefault();
    if (popup.classList.contains('profile-popup')) {
      submitProfile(inputNameProfile.value, inputSubtitleProfile.value);
    }
    if (popup.classList.contains('card-popup')) {
      submitNewCard(namePhotoCard.value, linkPhotoCard.value, elementsCards);     
      form.reset();
    }
    closePopup(popup);
  }
});

enableValidation(settings); 

elementsCards.addEventListener('click', btnsPhotoCards);
