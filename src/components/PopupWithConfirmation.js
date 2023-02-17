import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._form = this._popup.querySelector('.form');
      this._button = this._popup.querySelector('.form__button');
    }

    setEventListeners() {
      this._form.addEventListener('submit', (event) => {
        event.preventDefault();
        this._handleFormSubmit();
      });
      super.setEventListeners();
    }

    setSubmitHandler(func) {
      this._handleFormSubmit = func;
    };

    deleting(deleted) {
      if (deleted) {
        this._button.textContent = 'Удаление...'
      } else {
        this._button.textContent = 'Да'
      }
    };
}