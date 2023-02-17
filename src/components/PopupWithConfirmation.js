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

    handleFormSubmit(func) {
      this._handleFormSubmit = func;
    };

    saving(save) {
      if (save) {
        this._button.textContent = 'Сохранение...'
      } else {
        this._button.textContent = 'Да'
      }
    };
}