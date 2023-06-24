// Открытие popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Закрытие popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Массиы всех popup-ов
const popups = document.querySelectorAll('.popup');
// Для каждого popup-а добавление тригера на закрвтие
popups.forEach(item => {
  const closeBtn = item.querySelector('.popup__btn-close');
  closeBtn.addEventListener('click', evt => {
    closePopup(item);
  });
});

// Popup редактирования профиля
const editProfilePopup = document.querySelector('.popup.profile-popup');
// Форма -> входные данные имени профиля
const inputNameProfile = editProfilePopup.querySelector('input#name');
// Форма -> входные данные описания профиля
const inputSubtitleProfile = editProfilePopup.querySelector('input#subtitle');
// Никнейм профиля
const nameProfile = document.querySelector('.profile__name');
// Описание профиля
const subtitleProfile = document.querySelector('.profile__subtitle');

// Тригер нажатия кнопки редактирования профиля
document.querySelector('.profile__btn-edit').addEventListener('click', evt => {
  inputNameProfile.value = nameProfile.textContent;
  inputSubtitleProfile.value = subtitleProfile.textContent;
  openPopup(editProfilePopup);
});

// Кнопка submit редактирования профиля
const submitProfileBtn = editProfilePopup.querySelector('.form-edit__submit');
// Тригер нажатия кнопки submit редактирования профиля
submitProfileBtn.addEventListener('click', evt => {
  evt.preventDefault();

  nameProfile.textContent = inputNameProfile.value;
  subtitleProfile.textContent = inputSubtitleProfile.value;

  closePopup(editProfilePopup);
  editProfilePopup.querySelector('.form-edit').reset();
});

// Popup создания фотокарточки
const createCardPopup = document.querySelector('.popup.card-popup');
// Тригер нажатия кнопки создания фотокарточки
document.querySelector('.profile__btn-create-card').addEventListener('click', evt => {
  openPopup(createCardPopup);
});

// Форма -> входные данные названия фотокарточки
const inputNameCard = createCardPopup.querySelector('input#name');
// Форма -> входные данные ссылки изображения фотокарточки
const inputLinkCard = createCardPopup.querySelector('input#link');
// Шаблон фотокарточки
const cardsPhoto = document.querySelector('.elements');

// Popup изображения
const openImgPopup = document.querySelector('.popup.image-popup');

function createPhotoCard(name, link) {
  const newPhotoCard = document.createElement('article');
  newPhotoCard.classList.add('element');

  newPhotoCard.append(document.querySelector('#card').content.cloneNode(true));

  const imgPhotoCard = newPhotoCard.querySelector('.element__img');
  imgPhotoCard.src = link;
  imgPhotoCard.alt = name;

  newPhotoCard.querySelector('.element__title').textContent = name;  

  const likeCardBtn = newPhotoCard.querySelector('.element__btn-like');
  likeCardBtn.addEventListener('click', evt => {
    likeCardBtn.classList.toggle('element__btn-like_active');
  });

  newPhotoCard.querySelector('.element__btn-delete').addEventListener('click', evt => {
    newPhotoCard.remove();
  });

  imgPhotoCard.addEventListener('click', evt => {
    openPopup(openImgPopup);

    openImgPopup.querySelector('.figure-img__img').src = link;
    openImgPopup.querySelector('.figure-img__img').alt = name;
    openImgPopup.querySelector('.figure-img__caption').textContent = name;
  });

  return newPhotoCard;
}

// Тригер нажатия кнопки submit создания фотокарточки
createCardPopup.querySelector('.form-edit__submit').addEventListener('click', evt => {
  evt.preventDefault();

  cardsPhoto.prepend(createPhotoCard(inputNameCard.value, inputLinkCard.value));

  closePopup(createCardPopup);
  createCardPopup.querySelector('.form-edit').reset();
});

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

initialCards.forEach(item => {
  cardsPhoto.prepend(createPhotoCard(item.name, item.link));
});