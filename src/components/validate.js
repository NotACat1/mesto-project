function enableValidation(settings) {
  const arrForms = Array.from(document.querySelectorAll(settings.formSelector));
  arrForms.forEach(formElement => {
    setEventListeners(formElement, settings);    
  });
}

function setEventListeners(formElement, settings) {
  const arrInputs = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const btnSubmit = formElement.querySelector(settings.submitButtonSelector);
  toggleButtonState(arrInputs, btnSubmit, settings);
  formElement.addEventListener('reset', () => {
    disableButton(btnSubmit, settings);
  });
  arrInputs.forEach(inputItem => {
    inputItem.addEventListener('input', () => {
      isValid(formElement, inputItem, settings);
    });
  });  
  formElement.addEventListener('input', () => {
    toggleButtonState(arrInputs, btnSubmit, settings);
  });
}

function hideInputError(formElement, inputElement, settings) {
  const spanError = formElement.querySelector(`.${inputElement.id}-input-error`);
  inputElement.classList.remove(settings.inputErrorClass);  
  spanError.classList.remove(settings.errorClass);
  spanError.textContent = '';
}

function showInputError(formElement, inputElement, messageError, settings) {
  const spanError = formElement.querySelector(`.${inputElement.id}-input-error`);
  inputElement.classList.add(settings.inputErrorClass);
  spanError.textContent = messageError;
  spanError.classList.add(settings.errorClass);  
}

function isValid(formElement, inputElement, settings) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity('');
  }
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, settings);
  } else {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  }
}

function hasInvalid(arrInputs) {
  return arrInputs.some((inputElement) => !inputElement.validity.valid);
}

function toggleButtonState(arrInputs, btnSub, settings) {
  if (hasInvalid(arrInputs)) {
    disableButton(btnSub, settings);
  } else {
    btnSub.classList.remove(settings.inactiveButtonClass);
    btnSub.disabled = false;
  }
}

function disableButton(btnSubmit, settings) {
  btnSubmit.classList.add(settings.inactiveButtonClass);
  btnSubmit.disabled = true;
}

export {enableValidation};