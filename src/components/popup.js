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
  document.removeEventListener('mousedown', closeByOverlay);
  popup.classList.remove('popup_opened');
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup.popup_opened');
    closePopup(popup);
  }
}

function closeByOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

function openPopupFigure(name, link) {
  imgFigure.alt = name;
  imgFigure.src = link;
  captionFigure.textContent = name;
  imgFigure.onload = () => { openPopup(popupFigure); };
}

function loadingBtn(btn, text) {
  btn.textContent = text;
}

function resetTextBtn(btn, text) {
  btn.textContent = text;
}

export {openPopup, closePopup, openPopupFigure, loadingBtn, resetTextBtn};