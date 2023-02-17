import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({ handleFormSubmit }, popupSelector) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.form');
        this._inputs = [...this._popup.querySelectorAll('.form__textarea')];
        this._submitButton = this._popup.querySelector('.form__button');
        this._submitButtonLoad = this._submitButton.textContent;
    }

    load(loading) {
        if (loading) {
          this._submitButton.textContent = 'Сохранение...'
        } else {
          this._submitButton.textContent = this._submitButtonLoad;
        }
      }

    _getInputValues() {
        const _formValues = {};
        this._inputs.forEach(input => {
            this._formValues[input.name] = input.value;
            // const value = input.value;
            // values[name] = value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => this._handleFormSubmit(event, this._getInputValues()));
    }

    close() {
        super.close();
        this._form.reset();
    }
}