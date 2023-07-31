// Popup редактирования профиля
const editProfilePopup = document.querySelector('.popup.profile-popup');
// Popup создания фотокарточки
const createCardPopup = document.querySelector('.popup.card-popup');
// Popup изображения
const imgPopup = document.querySelector('.popup.image-popup');
// Изображение в imgPopup
const imgFigurePopup = imgPopup.querySelector('.figure-img__img');
// Название в imgPopup
const captionImgPopup = imgPopup.querySelector('.figure-img__caption');

// Открытие popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Закрытие popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Открытие popup с изображением
function openImgPopup(name, link, open) { 
  imgFigurePopup.src = link;
  imgFigurePopup.alt = name;
  captionImgPopup.textContent = name;
  imgFigurePopup.onload = open;
}

export {openPopup, closePopup, openImgPopup, editProfilePopup, createCardPopup, imgPopup};