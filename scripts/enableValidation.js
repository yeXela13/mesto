const checkValidity = (input, config) => {
    const error = document.querySelector('.form__span');
    if (input.validity.valid) {
        error.textContent = '';
        input.classList.remove(config.errorClass);
        error.classList.remove(config.inputErrorClass);
    } else {
        error.textContent = input.validationMessage;
        input.classList.add(config.errorClass);
        error.classList.add(config.inputErrorClass);
    }
};

const toggleButtonDisabled = (inputs, config) => {
    const isFormValid = inputs.every(input => input.validity.valid);
    const button = document.querySelector(config.submitButtonSelector);
    if (isFormValid) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = ' ';
    } else {
        button.disabled = 'disabled';
        button.classList.add(config.inactiveButtonClass);
    }
};

const enableValidation = (config) => {
    const { formSelector, inputSelector, submitButtonSelector, ...restConfig } = config;
    const forms = [...document.querySelectorAll(formSelector)];
    forms.forEach(form => {
        const inputs = [...document.querySelectorAll(inputSelector)];
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                checkValidity(input, restConfig);
                toggleButtonDisabled(inputs, restConfig)
            });

        });
    });
};

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__textarea',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__textarea_error',
    errorClass: 'form__span_active'
});
