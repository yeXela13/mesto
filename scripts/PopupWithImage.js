import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    open(link, name) {
        const popapImage = this._popup.querySelector('.popap__image');
        const popapCaption = this._popup.querySelector('.popap__caption');
        popapImage.src = link;
        popapImage.alt = name;
        popapCaption.textContent = name;
        super.open();
    }
}