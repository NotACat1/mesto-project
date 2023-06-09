![Mesto](https://ic.wampi.ru/2023/05/25/MAIN-PAGE.jpg)

# Mesto

[Mesto](https://notacat1.github.io/mesto-project/) - это блог, где с помощью магии JS можно создавать фотокарточки, демонстрируя остальным пользователям интересные места.
____

## Описание проекта:

Создание площадки, на которой можно выкладывать фотографии с интересными местами, реализовав проект с помощью JS, HTML5, CSS3.

____

## Реализованный функционал:

### 1. Favicon

**Favicon** — это иконка, которая отображается во вкладке браузера перед названием сайта.

![Favicon](https://im.wampi.ru/2023/05/25/image7482f728eb81e7bb.png)

```html
<!-- favicon -->
<link rel="apple-touch-icon" href="./images/favicon/apple-touch-icon.png">
<link rel="icon" href="./images/favicon/favicon.ico" sizes="16x16" type="image/x-icon">
<link rel="manifest" href="./images/favicon/manifest.json">
<link rel="yandex-tableau-widget" href="./images/favicon/tableau.json">
```

### 2. Open Graph

**Open Graph** — это словарь семантической разметки данных. Он позволяет контролировать превью, которое формируется при публикации ссылки на сайт в социальных сетях, и передавать информацию другим интернет-сервисам.

![Open Graph](https://ie.wampi.ru/2023/05/25/imagefd9e4e846e868bb9.png)

```html
<meta property="og:type" content="website">
<meta property="og:title" content="Mesto">
<meta property="og:description" content="Сервис Mesto: интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.">
<meta property="og:url" content="https://github.com/NotACat1">
<meta property="og:image" content="https://ic.wampi.ru/2023/05/22/MAIN-PAGE.jpg">
<meta property="og:site_name" content="NotACat">
<meta property="og:locale" content="ru_RU">
```

### 3. Подключение шрифтов

Одним из способов коммуникации с пользователем является **типографика**. Хороший шрифт на сайте создает настроение, акцентирует внимание человека на важных элементах, его легко читать и он также является отдельным элементом дизайна.

```css
/* Подключение семейство шрифтов Inter */

/* Inter Regular */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url(./Inter-Regular.woff2) format('woff2'),
       url(./Inter-Regular.woff) format('woff');
}

/* Inter Medium */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src: url(./Inter-Medium.woff2) format('woff2'),
       url(./Inter-Medium.woff) format('woff');
}

/* Inter Bold */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url(./Inter-Bold.woff2) format('woff2'),
       url(./Inter-Bold.woff) format('woff');
}

/* Inter Black */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  src: url(./Inter-Black.woff2) format('woff2'),
       url(./Inter-Black.woff) format('woff');
}
```

### 4. Адапивная верстка

**Адаптивная верстка** — это такой способ создания веб-страниц, при котором они автоматически подстраиваются под размеры и ориентацию экрана устройства, а их дизайн варьируется в зависимости от действий пользователя.

**Цель адаптивной верстки** — добиться того, чтобы сайт оставался удобным и обеспечивал конверсию при загрузке на разных устройствах.

![Малый экран](https://ic.wampi.ru/2023/05/25/MOBILE.png)

![Широкий экран](https://ic.wampi.ru/2023/05/25/MAIN-PAGE.jpg)

### 5. Grid

**Grid (сетка)** — это вид разметки, в котором элементы на сайте расположены в виде таблицы. Главная фишка этой таблицы в гибкости — можно объединять отдельные ячейки, менять размеры строк и столбцов, регулировать отступы между ними. А ещё гриды хорошо приспосабливаются к разным размерам экрана, что делает их адаптивными.

![Малый экран](https://ic.wampi.ru/2023/05/25/MOBILE.png)

![Средний экран](https://ie.wampi.ru/2023/05/25/Midle.png)

![Широкий экран](https://ic.wampi.ru/2023/05/25/MAIN-PAGE.jpg)

### 6. Методология БЭМ

**БЭМ (Блок, Элемент, Модификатор)** — компонентный подход к веб-разработке. В его основе лежит принцип разделения интерфейса на независимые блоки. Он позволяет легко и быстро разрабатывать интерфейсы любой сложности и повторно использовать существующий код, избегая «Copy-Paste».

```html
<section class="profile">
  <img src="./images/avatar.jpg" alt="Аватар Жак-Ив Кусто" class="profile__avatar">
  <div class="profile__section-info">
    <h1 class="profile__name">Жак-Ив Кусто</h1>
    <p class="profile__subtitle">Исследователь океана</p>
    <button class="profile__btn-edit"></button>
  </div>
  <button class="profile__btn-create-card"></button>
</section>
```

### 7. Файловая структура Nested

Классическая схема организации файловой структуры БЭМ-проектов:

* Блоку соответствует одна директория.
* Код модификаторов и элементов находится в отдельных файлах.
* Файлы модификаторов и элементов хранятся в отдельных директориях.
* Директория блока является корневой для поддиректорий его элементов и модификаторов.
* Имена директорий элементов начинаются с двойного подчеркивания (__).
* Имена директорий модификаторов начинаются с одинарного подчеркивания (_).

![Файловая структура Nested](https://ic.wampi.ru/2023/05/25/imageb31908d449313964.png)

### 8. Модальные окна

**Модальное окно или поп-ап** — окно, которое появляется на сайте поверх других документов и окон и делает весь находящийся под ним контент недоступным до тех пор, пока вы с ним не провзаимодействуете.

#### Модальное окно редактирования профиля

Модальное окно редактирования профиля предоставляет возможность пользователю редактирования имя и описание собстваенного профиля.

```html
<div class="popup">
  <div class="popup__container popup__container_box-shadow">
    <button aria-label="Закрытие формы" type="button" class="popup__btn-close"></button>
    <form method="get" name="form-edit" class="form-edit">
      <h2 class="form-edit__title">Редактировать профиль</h2>
      <fieldset class="form-edit__section">
        <input class="form-edit__input" type="text" id="name" name="name" value="Жак-Ив Кусто">
        <input class="form-edit__input" type="text" id="subtitle" name="subtitle" value="Исследователь океана">
      </fieldset>
      <input class="form-edit__submit" type="submit" value="Сохранить">
    </form>
  </div>
</div>
```

![Модальное окно редактирования профиля](https://im.wampi.ru/2023/06/20/image6db8b2e8d4b8b9b1.png)

#### Модальное окно создания фотокарточки

Модальное окно создания фотокарточки предоставляет пользователю возможность создания фотокарточки, введя ее название и предоставляя ссылку на изображение.

```html
<div class="popup">
  <div class="popup__container popup__container_box-shadow">
    <button aria-label="Закрытие формы" type="button" class="popup__btn-close"></button>
    <form method="get" name="form-edit" class="form-edit">
      <h2 class="form-edit__title">Новое место</h2>
      <fieldset class="form-edit__section">
        <input class="form-edit__input" type="text" id="name" name="name" placeholder="Назание">
        <input class="form-edit__input" type="text" id="link" name="link" placeholder="Ссылка на картинку">
      </fieldset>
      <input class="form-edit__submit" type="submit" value="Сохранить">
    </form>
  </div>
</div>
```

![Модальное окно создания фотокарточки](https://ic.wampi.ru/2023/06/20/image8dddef1a63e10326.png)

### 9. Лайк карточки

У пользователя есть возможность лайкать, понравившиеся фотокарточки.

![Лайк карточки](https://ic.wampi.ru/2023/06/20/project-5-03-like.gif)

### 10. Удаление карточки

У пользователя есть возможность удалять, ненужные фотокарточки.

![Удаление карточки](https://ic.wampi.ru/2023/06/20/project-5-04-delete.gif)

### 11. Открытие попапа с картинкой

У пользователя есть возможность изучить фотокарточку, увеличив ее изображения. Для этого ему нужно на жать на изображение фотокарточки.

![Открытие попапа с картинкой](https://ie.wampi.ru/2023/06/20/project-5-05-image.gif)

____

## Используемые технологии:

### 1. Normalize.css

Normalize.css позволяет браузерам отображать все элементы более последовательно и в соответствии с современными стандартами. Он точно нацелен только на те стили, которые нуждаются в нормализации.
