import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._popapImage = this._popup.querySelector('.popap__image');
        this._popapCaption = this._popup.querySelector('.popap__caption');
    }
    open(link, name) {
        this._popapImage.src = link;
        this._popapImage.alt = name;
        this._popapCaption.textContent = name;
        super.open();
    }
}