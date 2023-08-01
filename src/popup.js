const popupFigure = document.querySelector('.popup.image-popup');
const imgFigure = popupFigure.querySelector('.figure-img__img');
const captionFigure = popupFigure.querySelector('.figure-img__caption');

function openPopup(popup) {
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener('mousedown', closeByOverlay);
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  document.removeEventListener('keydown', closeByEsc);
  document.addEventListener('mousedown', closeByOverlay);
  popup.classList.remove('popup_opened');
}

function closeByEsc(evt) {
  const popup = document.querySelector('.popup.popup_opened');
  if (evt.key === 'Escape' && popup) {
    closePopup(popup);
  }
}

function closeByOverlay(evt) {
  const popup = document.querySelector('.popup.popup_opened');
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(popup);
  }
}

function openPopupFigure(name, link) {
  imgFigure.alt = name;
  imgFigure.src = link;
  captionFigure.textContent = name;
  imgFigure.onload = () => { openPopup(popupFigure); };
}

export {openPopup, closePopup, openPopupFigure};