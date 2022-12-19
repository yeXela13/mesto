
const showError = ((input, config) => {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.errorClass);
    error.classList.add(config.inputErrorClass);
});

const hideError = ((input, config) => {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = ' ';
    input.classList.remove(config.errorClass);
    error.classList.remove(config.inputErrorClass);
});


const checkValidity = (input, config) => {
    if (input.validity.valid) {
        hideError(input, config)
    } else {
        showError(input, config)
    }
};

const makeButtonActive = ((button, config) => {
    button.classList.remove(config.inactiveButtonClass)
    button.disabled = ''
});
const makeButtonDisabled = ((button, config) => {
    button.classList.add(config.inactiveButtonClass)
    button.disabled = 'disabled'
});
const toggleButtonDisabled = (inputs, button, config) => {
    const isFormValid = inputs.every(input => input.validity.valid);
    if (!isFormValid) {
        makeButtonDisabled(button, config)
    } else {
        makeButtonActive(button, config)
    }
};

const enableValidation = (config) => {
    const { formSelector, inputSelector, submitButtonSelector, ...restConfig } = config;
    const forms = [...document.querySelectorAll(formSelector)];
    forms.forEach(form => {
        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);
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
    inputErrorClass: 'form__span_active',
    errorClass: 'form__textarea_error'
}); 