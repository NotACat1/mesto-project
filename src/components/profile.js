const nameProfile = document.querySelector('.profile__name');
const subtitleProfile = document.querySelector('.profile__subtitle');
function submitProfile(nickname, subtitle) {
  nameProfile.textContent = nickname;
  subtitleProfile.textContent = subtitle;
}

export {nameProfile, subtitleProfile, submitProfile};