import '../pages/index.css';
import {addNewCard, listenBtnsCard} from './card.js';
import {openPopup, closePopup, loadingBtn, resetTextBtn} from './popup.js';
import {nameProfile, subtitleProfile, submitProfile, changeAvatar} from './profile.js';
import {enableValidation} from './validate.js';
import {getMyInfo, getPhotoCards, patchProfile, postPhotoCard, patchAvatar} from './api.js';

const settings = {
  formSelector: '.form-edit',
  inputSelector: '.form-edit__input',
  submitButtonSelector: '.form-edit__submit',
  inactiveButtonClass: 'form-edit__submit_disabled',
  inputErrorClass: 'form-edit__input_error',
  errorClass: 'form-edit__input-error_active'
};

const settingsTextBtns = {
  subEditProfile: 'Сохранить',
  subCreateCard: 'Создать',
  subDeleteCard: 'Да',
  subChangeAvatar: 'Сохранить'
}

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-27',
  headers: {
    authorization: '66a35fb8-ac64-48e2-a42c-c7fc440b4e83',
    'Content-Type': 'application/json'
  }
}

const editProfilePopup = document.querySelector('.popup.profile-popup');
const createCardPopup = document.querySelector('.popup.card-popup');
const changeAvatarPopup = document.querySelector('.avatar-popup');
const editProfileForm = editProfilePopup.querySelector('.form-edit');
const btnsubEditProfile = editProfileForm.querySelector('.form-edit__submit');
const createCardForm = createCardPopup.querySelector('.form-edit');
const btnsubCreateCard = createCardForm.querySelector('.form-edit__submit');
const changeAvatarForm = changeAvatarPopup.querySelector('.form-edit');
const btnsubChangeAvatar = changeAvatarForm.querySelector('.form-edit__submit');
const newAvatarProfile = changeAvatarForm.querySelector('.form-edit__input#avatar')
const changeAvatarProfile = document.querySelector('.profile__container-avatar');
const elementsCards = document.querySelector('.elements');
const inputNameProfile = document.querySelector('.form-edit__input#nickname');
const inputSubtitleProfile = document.querySelector('.form-edit__input#subtitle');
const namePhotoCard = document.querySelector('.form-edit__input#name');
const linkPhotoCard = document.querySelector('.form-edit__input#link');
const btnProfileEdit = document.querySelector('.profile__btn-edit');
const btnCreateCard = document.querySelector('.profile__btn-create-card');
const btnsClosePopup = document.querySelectorAll('.popup__btn-close');

let myInfo = await getMyInfo(config);

changeAvatarProfile.addEventListener('click', evt => {
  openPopup(changeAvatarPopup);
});

btnProfileEdit.addEventListener('click', evt => {
  inputNameProfile.value = nameProfile.textContent;
  inputSubtitleProfile.value = subtitleProfile.textContent;
  openPopup(editProfilePopup);
});

btnCreateCard.addEventListener('click', evt => {
  openPopup(createCardPopup);
});

[...btnsClosePopup].forEach(btnClosePopup => {
  const popup = btnClosePopup.closest('.popup');
  btnClosePopup.addEventListener('click', () => {
    closePopup(popup);
  });
});

changeAvatarForm.addEventListener('submit', evt => {
  evt.preventDefault();
  patchAvatar(config, newAvatarProfile.value)
  .then(rez => {
    loadingBtn(btnsubChangeAvatar);
    changeAvatar(rez.avatar);
    myInfo.avatar = rez.avatar;
    resetTextBtn(btnsubChangeAvatar, settingsTextBtns.subChangeAvatar);
  })
  .finally(() => closePopup(changeAvatarPopup));
  evt.target.reset();
});

editProfileForm.addEventListener('submit', evt => {
  evt.preventDefault();
  patchProfile(config, inputNameProfile.value, inputSubtitleProfile.value)
  .then(rez => {
    loadingBtn(btnsubEditProfile);
    submitProfile(rez.name, rez.about);
    resetTextBtn(btnsubEditProfile, settingsTextBtns.subEditProfile);
    myInfo.name = rez.name;
    myInfo.about = rez.about;
  })
  .finally(() => closePopup(editProfilePopup));
});

createCardForm.addEventListener('submit', evt => {
  evt.preventDefault();
  postPhotoCard(config, namePhotoCard.value, linkPhotoCard.value)
  .then(cardInfo => {
    loadingBtn(btnsubCreateCard);
    addNewCard(cardInfo, myInfo._id, elementsCards); 
    resetTextBtn(btnsubCreateCard, settingsTextBtns.subCreateCard);
  })
  .finally(() => closePopup(createCardPopup));
  evt.target.reset();
});

enableValidation(settings); 

elementsCards.addEventListener('click', listenBtnsCard);

submitProfile(myInfo.name, myInfo.about);
changeAvatar(myInfo.avatar);

getPhotoCards(config)
.then(cards => [...cards].forEach(card => addNewCard(card, myInfo._id, elementsCards)));

export {config};