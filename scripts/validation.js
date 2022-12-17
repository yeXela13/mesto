
function showError(formSelector, inputSelector, errorClass, inputErrorClass, errorMessage) {
 const error = formSelector.querySelector('`#${input.id}-error`');
    error.textContent = errorMessage;
    inputSelector.classList.add(errorClass);
    error.classList.add(inputErrorClass);
};
function hideError(formSelector, inputSelector, errorClass, inputErrorClass) {
    const error = formSelector.querySelector('`#${input.id}-error`');
    error.textContent = ' ';
    inputSelector.classList.remove(errorClass);
    error.classList.remove(inputErrorClass);
};

function checkValidity(input) {
    if (input.validity.valid) {
        showError(formSelector, inputSelector, inputSelector.validationMessage, errorClass, inputErrorClass, errorMessage);
    } else {
        hideError(formSelector, inputSelector, errorClass, inputErrorClass);
    }
};

function buttonActive (button, inactiveButtonClass) {
    button.classList.remove(inactiveButtonClass) 
}
function buttonInActive (button, inactiveButtonClass) {
    button.classList.add(inactiveButtonClass)
    button.disabled = 'disabled'
}

const toggleButtonDisabled = (inputs) => {
    const isFormValid = inputs.every(input => input.validity.valid);
    if (isFormValid) {
        buttonActive(inputs);
        } else {
            buttonInActive(inputs);
    }
};

const enableValidation = (config) => {
    const { formSelector, inputSelector, submitButtonSelector, ...restConfig } = config;
    const forms = [...document.querySelectorAll(formSelector)];
    forms.forEach(form => {
        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
        })
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                checkValidity(input, restConfig);
                toggleButtonDisabled(inputs, button, restConfig);
            })
        })
    })
}

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__textarea',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__span',
    errorClass: 'form__textarea_error'
});