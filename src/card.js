function createPhotoCard(name, link) {
  const newPhotoCard = document.createElement('article');
  newPhotoCard.classList.add('element');

  newPhotoCard.append(document.querySelector('#card').content.cloneNode(true));

  const imgPhotoCard = newPhotoCard.querySelector('.element__img');
  imgPhotoCard.src = link;
  imgPhotoCard.alt = name;

  newPhotoCard.querySelector('.element__title').textContent = name;  
  return newPhotoCard;
}

export {createPhotoCard};