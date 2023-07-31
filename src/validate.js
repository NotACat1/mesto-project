function hideInputError(formElement, inputElement) {
  const spanError = formElement.querySelector(`.${inputElement.id}-input-error`);
  inputElement.classList.remove('form-edit__input_error');  
  spanError.classList.remove('form-edit__input-error_active');
  spanError.textContent = '';
}

function showInputError(formElement, inputElement, messageError) {
  const spanError = formElement.querySelector(`.${inputElement.id}-input-error`);
  inputElement.classList.add('form-edit__input_error');
  spanError.textContent = messageError;
  spanError.classList.add('form-edit__input-error_active');  
}

function isValid(formElement, inputElement) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity('');
  }
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement);
  } else {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
}

function hasInvalid(arrInputs) {
  return arrInputs.some((inputElement) => !inputElement.validity.valid);
}

function toggleButtonState(arrInputs, btnSub) {
  if (hasInvalid(arrInputs)) {
    btnSub.classList.add('form-edit__submit_disabled');
    btnSub.disabled = true;
  } else {
    btnSub.classList.remove('form-edit__submit_disabled');
    btnSub.disabled = false;
  }
}

// Валидация формы
function setEventListeners(formElement) {
  const arrInputItems = Array.from(formElement.querySelectorAll('input.form-edit__input'));
  const btnSub = formItem.querySelector('.form-edit__submit');
  toggleButtonState(arrInputItems, btnSub);
  arrInputItems.forEach(inputItem => {
    inputItem.addEventListener('input', () => {
      isValid(formItem, inputItem);
    });
  });  
  formItem.addEventListener('input', () => {
    toggleButtonState(arrInputItems, btnSub);
  });
}; 

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('form'));
  formList.forEach((formElement) => {
    const arrInputItems = Array.from(formElement.querySelectorAll('input.form-edit__input'));
    const btnSub = formElement.querySelector('.form-edit__submit');
    toggleButtonState(arrInputItems, btnSub);
    arrInputItems.forEach(inputItem => {
      inputItem.addEventListener('input', () => {
        isValid(formElement, inputItem);
      });
    });  
    formElement.addEventListener('input', () => {
      toggleButtonState(arrInputItems, btnSub);
    });
  });
};

export {hideInputError, showInputError, isValid, hasInvalid, toggleButtonState, setEventListeners, enableValidation};
