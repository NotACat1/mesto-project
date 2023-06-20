// Функция открытия Popup
// Добавление класса '.popup_opened' с CSS свойством: 'display: none;' -> 'display: block;'
// Входные данные:
// 1. popup -> объект Popup необходимого для открытия.
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Функция закрытия Popup
// Удаление класса '.popup_opened' с CSS свойством: 'display: block;' -> 'display: none;'
// Входные данные:
// 1. popup -> объект Popup необходимого для открытия.
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Функция Submit Popup редактирования профиля
// Входные данные:
// 1. name -> никнейм профиля;
// 2. subtitle -> описание профиля.
function handleFormSubmitEditProfile(name, subtitle) {
  const profile_name = document.querySelector('.profile__name');
  const profile_subtitle = document.querySelector('.profile__subtitle');

  profile_name.textContent = name;
  profile_subtitle.textContent = subtitle;
}

// Функция Submit Popup создания фотокарточки
// Входные данные:
// 1. nameCard -> название фотокарточки;
// 2. linkCard -> ссылка на изображение фотокарточки.
function handleFormSubmitCreateCard(nameCard, linkCard) {
  initialCards.push({ name: nameCard, link: linkCard });
  return createCard(nameCard, linkCard);
}

// Функция создания фотокарточки
// Входные данные:
// 1. name -> имя фотокарточки;
// 2. link -> ссылка на изображение фотокарточки.
// Выходные данные: готовая фотокарточка для добавления в DOM
function createCard(name, link) {
  // создание элементов для DOM
  const PhotoCard = document.createElement('article'); // фотокарточка
  const PhotoCard_img = document.createElement('img'); // фото фотокарточки
  const PhotoCard_info = document.createElement('div'); // блок информации фотокарточки
  const PhotoCard_title = document.createElement('h2'); // имя фотокарточки
  const PhotoCard_btnLike = document.createElement('button'); // кнопка Like
  const PhotoCard_btnDelete = document.createElement('button'); // кнопка Delete

  // добавление классов для созданных элементов
  PhotoCard.classList.add('element');
  PhotoCard_img.classList.add('element__img');
  PhotoCard_info.classList.add('element__section-info');
  PhotoCard_title.classList.add('element__title');
  PhotoCard_btnLike.classList.add('element__btn-like');
  PhotoCard_btnDelete.classList.add('element__btn-delete');

  // добавление текста для имени фотокарточки
  PhotoCard_title.textContent = name;

  // добавление атрбутов для созданных элементов
  PhotoCard_img.setAttribute('src', link);
  PhotoCard_img.setAttribute('alt', name);
  PhotoCard_btnLike.setAttribute('aria-label', 'Нравится');
  PhotoCard_btnLike.setAttribute('type', 'button');
  PhotoCard_btnDelete.setAttribute('aria-label', 'Удалить');
  PhotoCard_btnDelete.setAttribute('type', 'button');

  // добавление элементов друг в друга
  PhotoCard_info.prepend(PhotoCard_title, PhotoCard_btnLike);
  PhotoCard.prepend(PhotoCard_btnDelete, PhotoCard_img, PhotoCard_info);

  // добавление тригера на нажатие кнопки Like
  PhotoCard_btnLike.addEventListener('click', evt => {
    PhotoCard_btnLike.classList.toggle('element__btn-like_active');
  });

  // добавление тригера на нажатие кнопки Delete
  PhotoCard_btnDelete.addEventListener('click', evt => {
    // удаление фотокарточки
    PhotoCard.remove();
    // удаление данных из массива
    const indexDeleteItem = initialCards.findIndex(element => ((element.link === link) && (element.name === name)));
    initialCards.splice(indexDeleteItem, 1);
  });

  // добавление тригера на нажатие изображения
  PhotoCard_img.addEventListener('click', evt => {
    const img = arr_popups[2].querySelector('.figure-img__img');
    const caption = arr_popups[2].querySelector('.figure-img__caption');
    img.setAttribute('src', link);
    img.setAttribute('alt', name);
    caption.textContent = name;
    openPopup(arr_popups[2]);
  });

  return PhotoCard;
}

// Массив Popup-ов, где Popup[0] -> popup редактирования профиля; Popup[1] -> popup создание фотокарточки;
// Popup[2] -> popup изображения фотокарточки
const arr_popups = document.querySelectorAll('.popup');

arr_popups.forEach((popup, index) => {
  // конпка закрытия Popup
  const btn_close = popup.querySelector('.popup__btn-close');

  // добавление тригера на нажатие кнопки закрытия Popup
  btn_close.addEventListener('click', evt => {
    // закртыие Popup
    closePopup(popup);
    if (index !== 2) {
      const formPopup = popup.querySelector('.form-edit');
      // сброс формы Popup
      formPopup.reset();
    }    
  });
  if (index !== 2) {
    const formPopup = popup.querySelector('.form-edit');
    // добавление тригера на submit формы Popup
    formPopup.addEventListener('submit', evt => {
      evt.preventDefault();

      if (index === 0) {
        const popup_name = formPopup.querySelector('#name');
        const popup_subtitle = formPopup.querySelector('#subtitle');
        handleFormSubmitEditProfile(popup_name.value, popup_subtitle.value);        
      }
      if (index === 1) {
        const nameCard = formPopup.querySelector('#name');
        const linkCard = formPopup.querySelector('#link');

        const newCard = handleFormSubmitCreateCard(nameCard.value, linkCard.value);

        sectionCards.prepend(newCard);
      }
      // закртыие Popup
      closePopup(popup);

      // сброс формы Popup
      formPopup.reset();
    });
  }
});

// Кнопка редактирования профиля
const editProfile_btn = document.querySelector('.profile__btn-edit');
// добавление тригера на нажатие кнопки редактирования профиля
editProfile_btn.addEventListener('click', evt => {
  arr_popups[0].querySelector('#name').value = document.querySelector('.profile__name').textContent;
  arr_popups[0].querySelector('#subtitle').value = document.querySelector('.profile__subtitle').textContent;
  openPopup(arr_popups[0]);
});

// Кнопка создания карточки 
const createCard_btn = document.querySelector('.profile__btn-create-card');
// добавление тригера на нажатие кнопки создания карточки 
createCard_btn.addEventListener('click', evt => {
  openPopup(arr_popups[1]);
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

// Выбор секции фотокарточек
const sectionCards = document.querySelector('.elements');

// Для каждого объекта массива создать фотокарточку
initialCards.forEach(card => {
  const PhotoCard = createCard(card.name, card.link);
  sectionCards.prepend(PhotoCard);  
});