

// function showError(input, config, errorMessage) {
//     const error = config.formSelector.querySelector(`#${input.id}-error`);

//     error.textContent = errorMessage;
//     input.classList.add(config.errorClass);
//     error.classList.add(config.inputErrorClass);
// };
// // input.validationMessage
// function hideError(input, config, error) {
//     error.textContent = ' ';
//     input.classList.remove(config.errorClass);
//     error.classList.remove(config.inputErrorClass);
// };

function checkValidity(input, config) {
    const error = document.querySelector(`#${input.id}-error`);
    if (input.validity.valid) {
        error.textContent = ' ';
        input.classList.remove(config.errorClass);
        error.classList.remove(config.inputErrorClass);
    } else {
        error.textContent = input.validationMessage;
        input.classList.add(config.errorClass);
        error.classList.add(config.inputErrorClass);
    }
};

// function buttonActive (button, config) {
//     button.classList.remove(config.inactiveButtonClass) 
// }
// function buttonInActive (button, config) {
//     button.classList.add(config.inactiveButtonClass)
//     button.disabled = 'disabled'
// }

const toggleButtonDisabled = (inputs) => {
    const isFormValid = inputs.every(input => input.validity.valid);
    if (isFormValid) {
        buttonActive(inputs);
        // button.classList.remove(config.inactiveButtonClass) 
        } else {
            buttonInActive(inputs);
        // button.classList.add(config.inactiveButtonClass)
        // button.disabled = 'disabled'
    }
};

const enableValidation = (config) => {
    const { formSelector, inputSelector, submitButtonSelector, ...restConfig } = config;
    const forms = [...document.querySelectorAll(formSelector)];
    forms.forEach(form => {
        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);

        form.addEventListener('submit', () => {
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