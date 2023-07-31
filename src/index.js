import '../pages/index.css';

import {createPhotoCard} from './card.js';
import {openPopup, closePopup, openImgPopup, editProfilePopup, createCardPopup, imgPopup} from './popup.js';
import {enableValidation} from './validate.js';

// Массив объектов информации фотокарточек
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

// Контейнер для фотокарточек
const cardsPhoto = document.querySelector('.elements');
// Массиы всех popup-ов
const popups = document.querySelectorAll('.popup');
// Форма отправки редактирования профиля
const editFormPopup = editProfilePopup.querySelector('.form-edit');
// Кнопка submit редактирования профиля
const submitProfileBtn = editProfilePopup.querySelector('.form-edit__submit');
// Никнейм профиля
const nameProfile = document.querySelector('.profile__name');
// Описание профиля
const subtitleProfile = document.querySelector('.profile__subtitle');
// Форма -> входные данные имени профиля
const inputNameProfile = editProfilePopup.querySelector('input#nickname');
// Форма -> входные данные описания профиля
const inputSubtitleProfile = editProfilePopup.querySelector('input#subtitle');
// Форма -> входные данные названия фотокарточки
const inputNameCard = createCardPopup.querySelector('input#name');
// Форма -> входные данные ссылки изображения фотокарточки
const inputLinkCard = createCardPopup.querySelector('input#link');
// Форма отправки создания фотокарточки
const createFormPopup = createCardPopup.querySelector('.form-edit');

initialCards.forEach(card => {
  cardsPhoto.prepend(createPhotoCard(card.name, card.link));
});

// Общие триггеры для всех фотокарточек
cardsPhoto.addEventListener('click', evt => {
  // триггер лайка фотокарточки
  if (evt.target.classList.contains('element__btn-like')) {
    evt.target.classList.toggle('element__btn-like_active');
  }
  // триггер удаления фотокарточки
  if (evt.target.classList.contains('element__btn-delete')) {
    evt.target.closest('.element').remove();
  }
  // триггер открытия popup изображения фотокарточки
  if (evt.target.classList.contains('element__img')) {
    openImgPopup(evt.target.closest('.element').querySelector('.element__title').textContent, evt.target.src, openPopup(imgPopup));
  }
});

// Тригер нажатия кнопки создания фотокарточки
document.querySelector('.profile__btn-create-card').addEventListener('click', evt => {
  openPopup(createCardPopup);
});

// Тригер нажатия кнопки submit создания фотокарточки
createCardPopup.querySelector('.form-edit__submit').addEventListener('click', evt => {
  evt.preventDefault();

  cardsPhoto.prepend(createPhotoCard(inputNameCard.value, inputLinkCard.value));

  closePopup(createCardPopup);
  createFormPopup.reset();
});

// Тригер нажатия кнопки редактирования профиля
document.querySelector('.profile__btn-edit').addEventListener('click', evt => {
  inputNameProfile.value = nameProfile.textContent;
  inputSubtitleProfile.value = subtitleProfile.textContent;
  openPopup(editProfilePopup);
});

// Тригер нажатия кнопки submit редактирования профиля
submitProfileBtn.addEventListener('click', evt => {
  evt.preventDefault();

  nameProfile.textContent = inputNameProfile.value;
  subtitleProfile.textContent = inputSubtitleProfile.value;

  closePopup(editProfilePopup);
  editFormPopup.reset();
});

// Для каждого popup-а добавление тригера на закрытие
popups.forEach(item => {
  const form = item.querySelector('form');
  item.addEventListener('keydown', evt => {
    if (evt.key === 'Esc') {
      closePopup(item);
    }
  });
  item.addEventListener('click', evt => {
    if (evt.target.classList.contains('popup__btn-close') || evt.target.classList.contains('popup')) {
      closePopup(item);
    }
    if (form) {
      form.reset();
    }
  });
});

enableValidation();