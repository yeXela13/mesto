export const initialCards = [
    {
        name: 'Новая Зеландия',
        link: 'https://images.unsplash.com/photo-1669158424156-01778fcc6427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80'
    },
    {
        name: 'Мальдивы',
        link: 'https://images.unsplash.com/photo-1669181310799-fc929c93ed58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    }, {
        name: 'Турция',
        link: 'https://images.unsplash.com/photo-1669111957726-9c2f6aec0199?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }, {
        name: 'Малайзия',
        link: 'https://images.unsplash.com/photo-1668694504921-5bcf11d34eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }, {
        name: 'Аргентина',
        link: 'https://images.unsplash.com/photo-1668293498006-cf8ad7ef2470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    }, {
        name: 'Грузия',
        link: 'https://images.unsplash.com/photo-1668368047837-3d9c67145679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
    }
]

export class Card {
    constructor(initialCards, templateSelector, handleOpenCardPopap) {
        this._name = initialCards.name;
        this._link = initialCards.link;
        this._templateSelector = templateSelector;
        this._handleOpenCardPopap = handleOpenCardPopap;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element__item').cloneNode(true);
        return cardElement;
    }

    _handleDeleteCard() {
        this._element.remove();
    }

    _handleLikeCard(likeButton) {

        likeButton.classList.toggle('element__like-active');
    }

    // _handleOpenCardPopap() {
    //     // console.log(popapOpenCardElement);
    //     document.querySelector('.popap_open-card').classList.add('popap_opened');
    // }

    _setEventListeners(deleteButton, likeButton) {
        // this._element.querySelector('.element__image').addEventListener('click', () => {
        //     this._handleOpenCardPopap(this._link, this._name)
        // });

        deleteButton.addEventListener('click', () => {
            this._handleDeleteCard()
        });

        likeButton.addEventListener('click', () => {
            this._handleLikeCard(likeButton)
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__text').textContent = this._name;
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        const deleteButton = this._element.querySelector('.element__delete-button');
        const likeButton = this._element.querySelector('.element__like');
        this._setEventListeners(deleteButton, likeButton);
        return this._element;
         }
    
}