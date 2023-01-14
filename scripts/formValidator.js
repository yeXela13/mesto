export class FormValidator {
    constructor(config, form) {
        this._form = form;
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
    }

    enableValidation() {
        const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
        const button = this._form.querySelector(this._submitButtonSelector);
        inputs.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._checkValidity(inputElement);
                this._toggleButtonDisabled(inputs, button);
            })
        })
    }

    _showError = ((inputElement, errorMessage) => {
        const error = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._errorClass);
        error.textContent = inputElement.validationMessage;
        error.classList.add(this._inputErrorClass);
    });

    _hideError = ((inputElement) => {
        const error = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._errorClass);
        error.textContent = ' ';
        error.classList.remove(this._inputErrorClass);
    });

    _checkValidity(inputElement) {
        if (inputElement.validity.valid) {
            this._hideError(inputElement)
        } else {
            this._showError(inputElement, inputElement.validationMessage)
        }
    };

    _makeButtonActive(button) {
        button.classList.remove(this._inactiveButtonClass)
        button.disabled = ''
    };
    _makeButtonDisabled(button) {
        button.classList.add(this._inactiveButtonClass)
        button.disabled = 'disabled'
    };

    _toggleButtonDisabled = (inputs, button) => {
        const isFormValid = inputs.every(inputElement => inputElement.validity.valid);
        if (isFormValid) {
            this._makeButtonActive(button)
        } else {
            this._makeButtonDisabled(button)
        }
    };
};