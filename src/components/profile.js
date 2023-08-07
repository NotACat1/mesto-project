const nameProfile = document.querySelector('.profile__name');
const subtitleProfile = document.querySelector('.profile__subtitle');
const imgAvatarProfile = document.querySelector('.profile__avatar');

function submitProfile(nickname, subtitle) {
  nameProfile.textContent = nickname;
  subtitleProfile.textContent = subtitle;
}

function changeAvatar(newAvatar) {
  imgAvatarProfile.src = newAvatar;
}

export {nameProfile, subtitleProfile, submitProfile, changeAvatar};