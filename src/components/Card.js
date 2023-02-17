
export class Card {
    constructor(data, cardTemplate, handleOpenCardPopap, handleDeleteClick, handleLikeCard, handleLikeDelete, userId) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._likes = data.likes;
        this._templateSelector = cardTemplate;
        this._handleDeleteClick = handleDeleteClick;
        this._handleOpenCardPopap = handleOpenCardPopap;
        this._handleLikeCard = handleLikeCard;
        this._handleLikeDelete = handleLikeDelete;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element__item').cloneNode(true);
        return cardElement;
    }

    deleteCard = () => {
        this._element.remove();
        this._element = null;
    }

    handleLikeCard = () => {
        this._likeButton.classList.toggle('element__like-active');
    }

    handleLikeCardSum(data) {
        this._likes = data.likes;
        this._likeSum.textContent = this._likes.length;
        this.handleLikeCard()
    }
    _setEventListeners() {
        this._elementImage.addEventListener('click', () => {
            this._handleOpenCardPopap(this._link, this._name)
        });

        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteClick(this._id)
        });

        this._likeButton.addEventListener('click', () => {
            this._handleLikeCard()
            if (!this._likeButton.classList.contains('element__like-active')) {
                this._handleLikeCard(this._id);
            } else {
                this._handleLikeDelete(this._id);
            }
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
        this._likeSum =  this._element.querySelector('.element__like-sum');
        this._likeSum.textContent =  this._likes.length;
        if (this._likes.some((user) => {
            return this._userId === user._id;
        })) {
            this._likeButton.classList.add('element__like-active');
        }

        if (this._userId !== this._ownerId) {
            this._deleteButton.style.display = 'none';
        }
        this._setEventListeners();
        return this._element;
    }

}