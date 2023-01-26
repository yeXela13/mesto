export class Card {
    constructor(data, cardTemplate, handleopenCardPopap, likeButton, deleteButton) {
        this._name = data.name;
        this._link = data.link;
        this._likeButton = likeButton;
        this._deleteButton = deleteButton;
        this._templateSelector = cardTemplate;
        this._handleOpenCardPopap = handleopenCardPopap;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element__item').cloneNode(true);
        return cardElement;
    }

    _handleDeleteCard = () => {
        this._element.remove();
        this._element = null;
    }

    _handleLikeCard = () => {
        this._likeButton.classList.toggle('element__like-active');
    }

    _setEventListeners() {
        this._elementImage.addEventListener('click', () => {
            this._handleOpenCardPopap(this._link, this._name)
        });

        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteCard()
        });

        this._likeButton.addEventListener('click', () => {
            this._handleLikeCard()
        });
    }
    generateCard() {
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.element__image');
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._element.querySelector('.element__text').textContent = this._name;

        this._deleteButton = this._element.querySelector('.element__delete-button');
        this._likeButton = this._element.querySelector('.element__like');
        this._setEventListeners();
        return this._element;
    }


 

}



// new Card({name: '123', link: '123'}, '#element-template')       

// const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.element__item');
        // const newCard = cardTemplate.cloneNode(true);

        // const name = newCard.querySelector('.element__text');
        // const link = newCard.querySelector('.element__image')
        // name.textContent = this._data.name;
        // link.src = this._data.link;
        // link.alt = this._data.name;
        // const deleteItemElement = newCard.querySelector('.element__delete-button');
        // const likeElement = newCard.querySelector('.element__like');
        // deleteItemElement.addEventListener('click', () => {});
        // likeElement.addEventListener('click', () => {});
        // link.addEventListener('click', () => {});
        // return newCard;