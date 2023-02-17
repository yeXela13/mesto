import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._form = this._popup.querySelector('.form');
      this._submitButton = this._popup.querySelector('.form__button');
    }

    setEventListeners() {
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleFormSubmit();
      });
      super.setEventListeners();
    }

    handleFormSubmit(func) {
      this._handleFormSubmit = func;
    };

    load(loading) {
      if (loading) {
        this._submitButton.textContent = 'Сохранение...'
      } else {
        this._submitButton.textContent = 'Да'
      }
    };
}