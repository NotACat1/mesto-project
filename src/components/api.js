async function getMyInfo(config) {
  let info = null;
  await fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`ERROR: ${res.status}`);
  })
  .then(rez => {info = rez})
  .catch(err => console.log(err)); 
  return info;
}

function getPhotoCards(config) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`ERROR: ${res.status}`);
  })
  .catch(err => console.log(err)); 
}

function patchProfile(config, newName, newSub) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: newName,
      about: newSub
    })
  })
  .then(res => {
    if (res.ok) return res.json();      
    return Promise.reject(`ERROR: ${res.status}`);
  })
  .catch(err => console.log(err))
}

function postPhotoCard(config, nameCard, linkCard) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: nameCard,
      link: linkCard
    })
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`ERROR: ${res.status}`);
  })
  .catch(err => console.log(err))
}

function deletePhotoCard(config, photoCard) {
  return fetch(`${config.baseUrl}/cards/${photoCard.id.replace(/ID_/, '')}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`ERROR: ${res.status}`);
  })
  .catch(err => console.log(err));
}

function putLikeCard(config, photoCard) {
  return fetch(`${config.baseUrl}/cards/likes/${photoCard.id.replace(/ID_/, '')}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`ERROR: ${res.status}`);
  })
  .catch(err => console.log(err));
}

function deleteLikeCard(config, photoCard) {
  return fetch(`${config.baseUrl}/cards/likes/${photoCard.id.replace(/ID_/, '')}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`ERROR: ${res.status}`);
  })
  .catch(err => console.log(err));
}

function patchAvatar(config, newAvatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: newAvatar
    })
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`ERROR: ${res.status}`);
  })
  .catch(err => console.log(err)); ;
}

export {getMyInfo, getPhotoCards, postPhotoCard, deletePhotoCard, patchProfile, putLikeCard, deleteLikeCard, patchAvatar}