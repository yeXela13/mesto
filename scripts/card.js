export class Card {
    constructor(data, cardTemplate, handleopenCardPopap) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = cardTemplate;
        this._handleOpenCardPopap = handleopenCardPopap;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element__item').cloneNode(true);
        return cardElement;
    }

    _handleDeleteCard = () => {
        this._element.remove();
    }

    _handleLikeCard = (likeButton) => {
        likeButton.classList.toggle('element__like-active');
    }

    _setEventListeners(deleteButton, likeButton) {
        this._elementImage.addEventListener('click', () => {
            this._handleOpenCardPopap(this._link, this._name)
        });

        deleteButton.addEventListener('click', () => {
            this._handleDeleteCard(deleteButton)
        });

        likeButton.addEventListener('click', () => {
            this._handleLikeCard(likeButton)
        });
    }
    generateCard() {

        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector('.element__image');
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._element.querySelector('.element__text').textContent = this._name;

        const deleteButton = this._element.querySelector('.element__delete-button');
        const likeButton = this._element.querySelector('.element__like');
        this._setEventListeners(deleteButton, likeButton);
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