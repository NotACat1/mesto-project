// basic message for the server
export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-27/',
  headers: {
    authorization: '66a35fb8-ac64-48e2-a42c-c7fc440b4e83',
    'Content-Type': 'application/json'
  }
};

// user profile selectors
export const userSelectors = {
  nameSelector: 'h1.profile__name',
  infoSelector: 'p.profile__description',
  avatarSelector: '.profile__avatar'
};

// popup selectors
export const popupSelectors = {
  createCard: '.popup_add-card',
  editProfile: '.popup_edit-profile',
  editAvatar: '.popup_edit-avatar',
  viewImage: '.popup_view-image',
  deleteCard: '.popup_confirm-delete'
};

// photo card selectors
export const cardSelectors = {
  cardName: '.card__text',
  cardImage: '.card__image',
  likeCounter: '.card__like-counter',
  buttonBin: '.card__button-bin',
  buttonLike: '.card__button-like'
};

// selectors for form validation
export const validationSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input-text',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'form__input-text_error',
  errorClass: 'form__input-error_active'
};

// button selectors
export const buttons = {
  addCard: document.querySelector('.profile__button-add'),
  editProfile: document.querySelector('.profile__button-edit'),
  changeAvatar: document.querySelector('.profile__avatar-overlay'),
};

// form names
export const nameForms = {
  editProfile: 'edit-profile-form',
  createCard: 'new-card-form',
  editAvatar: 'edit-avatar-form'
};