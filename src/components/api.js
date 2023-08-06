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
  .catch(err => console.log(`Ошибка: ${err}`)); 
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
}

function deletePhotoCard(config, photoCardID) {
  return fetch(`${config.baseUrl}/cards/${photoCardID}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`ERROR: ${res.status}`);
  })
}

function putLikeCard(config, photoCardID) {
  return fetch(`${config.baseUrl}/cards/likes/${photoCardID}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`ERROR: ${res.status}`);
  })
}

function deleteLikeCard(config, photoCardID) {
  return fetch(`${config.baseUrl}/cards/likes/${photoCardID}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`ERROR: ${res.status}`);
  })
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
}

export {getMyInfo, getPhotoCards, postPhotoCard, deletePhotoCard, patchProfile, putLikeCard, deleteLikeCard, patchAvatar}