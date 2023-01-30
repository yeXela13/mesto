import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector)
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.form');
        this._inputs = [...this._popup.querySelectorAll('.form__textarea')];
    }

    _getInputValues() {
        const values = {};
        this._inputs.forEach(input => {
            const name = input.name;
            const value = input.value;
            values[name] = value;
        });
        return values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => this._handleSubmit(event, this._getInputValues()));
    }

    close() {
        super.close();
        this._form.reset();
    }
}