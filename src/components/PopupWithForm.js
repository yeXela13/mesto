import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({ handleFormSubmit }, popupSelector) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.form');
        this._inputs = this._popup.querySelectorAll('.form__textarea');
        this._button = this._popup.querySelector('.form__button');
        this._buttonSave = this._button.textContent;
    }

    saving(save) {
        if (save) {
            this._button.textContent = 'Сохранение...'
        } else {
            this._button.textContent = this._buttonSave;
        }
    }

    _getInputValues() {
        this._formValues = {};
        this._inputs.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    };

    setEventListeners() {
        this._popup.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    };

    close() {
        this._form.reset();
        super.close();
    }
}