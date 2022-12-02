import initialCards from './arrayCards.js'
const popapElement = document.querySelector('.popap');
const popapCloseElement = popapElement.querySelector('.popap__close');
const popapOpenElement = document.querySelector('.profile__edit-button');
const popapSaveButton = popapElement.querySelector('.form__save');
const formElement = popapElement.querySelector('.form');
const nameInput = formElement.querySelector('.form__textarea_profile_name');
const postInput = formElement.querySelector('.form__textarea_profile_post');
const profileName = document.querySelector('.profile__name');
const profilePost = document.querySelector('.profile__post');
const addPopapVisibility = function (event) {
    popapElement.classList.add('popap_opened');
    nameInput.value = profileName.textContent;
    postInput.value = profilePost.textContent;
};
const removePopapVisibility = function (event) {
    popapElement.classList.remove('popap_opened');
};
popapOpenElement.addEventListener('click', addPopapVisibility);
popapCloseElement.addEventListener('click', removePopapVisibility);
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profilePost.textContent = postInput.value;
    removePopapVisibility();
}
formElement.addEventListener('submit', formSubmitHandler);
//PopapItem
const OpenAddCardPopap = document.querySelector('.profile__add-button');
const elementTemplate = document.querySelector('#element-template').content.querySelector('.element__item');

elementTemplateName = elementTemplate.item.name;
elementTemplateLink = elementTemplate.item.link;
elementTemplateName.textContent = item.name;
elementTemplateLink

const addCard =(e) => {
    const newCard = elementTemplate.cloneNode(true);
    const deleteCard = document.querySelector('.element__delete-button');
    const likeCard = document.querySelector('.element__like');
    return newCard;
}
//обработчики
//слушатели
//добавить карточки
const renderCard = (item) => {
    elementList.prepend(addCard(item));
};
initialCards.forEach((item) => {
    renderCard(item);
});