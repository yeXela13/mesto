export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);

    }

    _handleEscClose = (event) => {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    open() {
        this._popup.classList.add('popap_opened');
        document.addEventListener('keyup', this._handleEscClose);

    }

    close() {
        this._popup.classList.remove('popap_opened');
        document.removeEventListener('keyup', this._handleEscClose);
    }

    setEventListeners() {
        const buttonClosePopup = this._popup.querySelector('.popap__close');
        buttonClosePopup.addEventListener('click', () => { this.close() });
        this._popup.addEventListener('click', (event) => {
            if (event.target === event.currentTarget) {
                this.close();
            }
        });
    }
}