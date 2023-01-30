import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    open(link, name, popapImage, popapCaption) {
        this._popapImage = this._popup.querySelector('.popap__image');
        this._popapCaption = this._popup.querySelector('.popap__caption');
        popapImage.src = link;
        popapImage.alt = name;
        popapCaption.textContent = name;
        super.open();
    }
}