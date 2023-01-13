const popapEditElement = document.querySelector('.popap_edit-profile');
const popapOpenEditProfile = document.querySelector('.profile__edit-button');
const formEditProfile = popapEditElement.querySelector('.form_edit');
const nameInput = formEditProfile.querySelector('.form__textarea_profile_name');
const postInput = formEditProfile.querySelector('.form__textarea_profile_post');
const profileName = document.querySelector('.profile__name');
const profilePost = document.querySelector('.profile__post');
const popapItemElement = document.querySelector('.popap_add-card');
const popapItemOpenElement = document.querySelector('.profile__add-button');
const formItemElement = popapItemElement.querySelector('.form-item');
const elementName = document.querySelector('.form__textarea_element_name');
const elementUrl = document.querySelector('.form__textarea_element_url');
const popapOpenCardElement = document.querySelector('.popap_open-card');
const editCloseElement = popapEditElement.querySelector('.popap__close');
const addCloseElement = popapItemElement.querySelector('.popap__close');
const imageCloseElement = popapOpenCardElement.querySelector('.popap__close');
import {initialCards, Card } from "./card.js";

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
editCloseElement.addEventListener('click', function () {
    closePopap(popapEditElement);
});
addCloseElement.addEventListener('click', function () {
    closePopap(popapItemElement);
});
imageCloseElement.addEventListener('click', function () {
    closePopap(popapOpenCardElement);
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
    const button = popapItemElement.querySelector('.form__button');
    button.disabled = 'disabled';
    button.classList.add('form__button_disabled');
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profilePost.textContent = postInput.value;
    closePopap(popapEditElement);
}
formEditProfile.addEventListener('submit', handleProfileFormSubmit);


function handleFormElementSubmit(event, сard) {
    event.preventDefault();
    closePopap(popapItemElement);
    сard({ name: elementName.value, link: elementUrl.value });
    event.target.reset();
};
formItemElement.addEventListener('submit', handleFormElementSubmit);

initialCards.forEach(item => {
    const card = new Card(item, '.element-template');
    const cardElement = card.generateCard();
    document.querySelector('.element').append(cardElement);
});


// const renderCard = (item) => {
//     elementList.prepend(generateCard(item));
// };
// initialCards.forEach((item) => {
//     renderCard(item);
// });