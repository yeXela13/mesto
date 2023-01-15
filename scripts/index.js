const initialCards = [
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
const config = {
    formSelector: '.form',
    inputSelector: '.form__textarea',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__span_active',
    errorClass: 'form__textarea_error'
};
import { FormValidator } from './formValidator.js'
import { Card } from './card.js';

const popapEditElement = document.querySelector('.popap_edit-profile');
const popapOpenEditProfile = document.querySelector('.profile__edit-button');
const formEditProfile = popapEditElement.querySelector('.form_edit');
const nameInput = formEditProfile.querySelector('.form__textarea_profile_name');
const postInput = formEditProfile.querySelector('.form__textarea_profile_post');
const profileName = document.querySelector('.profile__name');
const profilePost = document.querySelector('.profile__post');
const elementList = document.querySelector('.element');
const popapItemElement = document.querySelector('.popap_add-card');
const popapItemOpenElement = document.querySelector('.profile__add-button');
const formItemElement = popapItemElement.querySelector('.form-item');
// const placeElementText = document.querySelector('.element__text');
// const placeElementLink = document.querySelector('.element__image');
const elementName = document.querySelector('.form__textarea_element_name');
const elementUrl = document.querySelector('.form__textarea_element_url');
const cardTemplate = document.querySelector('#element-template').content.querySelector('.element__item');
const popapOpenCardElement = document.querySelector('.popap_open-card');
const popapImage = document.querySelector('.popap__image');
const popapCaption = document.querySelector('.popap__caption');
const buttonCloseList = document.querySelectorAll('.popap__close'); 
const profileEditFormValidation = new FormValidator(config, formEditProfile);
const CardElementFormValidation = new FormValidator(config, formItemElement);
profileEditFormValidation.enableValidation();
CardElementFormValidation.enableValidation();
profileEditFormValidation.resetValidation();
CardElementFormValidation.resetValidation();

function openPopap(argument) {
    argument.classList.add('popap_opened');
    document.addEventListener('keyup', handleCloseEsc);
    argument.addEventListener('click', closeToOverlay);
};
function closePopap(argument) {
    argument.classList.remove('popap_opened');
    argument.removeEventListener('click', closeToOverlay);
    document.removeEventListener('keyup', handleCloseEsc);
};
function handleCloseEsc(event) {
    if (event.key === 'Escape') {
        const openedPopap = document.querySelector('.popap_opened');
        closePopap(openedPopap);
    }
};
const closeToOverlay = function (event) {
    if (event.target === event.currentTarget) {
        const openedPopap = event.currentTarget;
        closePopap(openedPopap);
    }
};
buttonCloseList.forEach(btn => {
    const popap = btn.closest('.popap');
    popap.addEventListener('mousedown', closeToOverlay);
    btn.addEventListener('click', () => closePopap(popap)); 
  }); 

function fillPopupEditFields() {
    nameInput.value = profileName.textContent;
    postInput.value = profilePost.textContent;
};
popapOpenEditProfile.addEventListener('click', function openPopapEdit() {
    openPopap(popapEditElement);
    fillPopupEditFields();
});
popapItemOpenElement.addEventListener('click', function openPopapAddCard() {
    openPopap(popapItemElement);
    // const button = popapItemElement.querySelector('.form__button');
    // button.disabled = 'disabled';
    // button.classList.add('form__button_disabled');
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profilePost.textContent = postInput.value;
    closePopap(popapEditElement);
}
formEditProfile.addEventListener('submit', handleProfileFormSubmit);

const handleopenCardPopap = (link, name) => {
    popapImage.src = link;
    popapImage.alt = name;
    popapCaption.textContent = name;
    openPopap(popapOpenCardElement);
};

function handleFormElementSubmit(event) {
    event.preventDefault();
    closePopap(popapItemElement);
    renderCard({ name: elementName.value, link: elementUrl.value });
    event.target.reset();
};
formItemElement.addEventListener('submit', handleFormElementSubmit);

const renderCard = (item) => {
    const cardElement = new Card(item, '#element-template', handleopenCardPopap)
    const card = cardElement.generateCard();
    elementList.prepend(card);
};

initialCards.forEach((item) => {
    renderCard(item);
});

// const handleDeleteCard = (event) => {
//     event.target.closest('.element__item').remove();
// };
// const handleLikeCard = (event) => {
//     event.target.classList.toggle('element__like-active');
// };
// const generateCard = (item) => {
    //     const newCard = cardTemplate.cloneNode(true);
    //     const name = newCard.querySelector('.element__text');
    //     name.textContent = item.name;
    //     const link = newCard.querySelector('.element__image')
    //     link.src = item.link;
    //     link.alt = item.name;
    //     const deleteItemElement = newCard.querySelector('.element__delete-button');
    //     const likeElement = newCard.querySelector('.element__like');
    //     deleteItemElement.addEventListener('click', handleDeleteCard);
//     likeElement.addEventListener('click', handleLikeCard);
//     link.addEventListener('click', openCardPopap);
//     return newCard;
// };