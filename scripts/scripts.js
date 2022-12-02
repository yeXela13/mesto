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

const elementList = document.querySelector('.element');
const popapItemElement = document.querySelector('.popap-item');
const popapItemClosebutton = popapItemElement.querySelector('.popap-item__close')
const popapItemOpenElement = document.querySelector('.profile__add-button');
const popapItemCreateButton = popapItemElement.querySelector('.form-item__create');
const formItemElement = popapItemElement.querySelector('.form-item');
const placeElementText = document.querySelector('.element__text');
const placeElementLink = document.querySelector('.element__image');
const elementName = document.querySelector('.form-item__textarea_element_name');
const elementUrl = document.querySelector('.form-item__textarea_element_url');

//Открыть/закрыть
const addPopapItemVisibility = function (event) {
    popapItemElement.classList.add('popap-item_opened');
    console.log('Открыть');
}
const removePopapItemVisibility = function (event) {
    popapItemElement.classList.remove('popap-item_opened');
    console.log('Закрыть');
}
popapItemOpenElement.addEventListener('click', addPopapItemVisibility);
popapItemClosebutton.addEventListener('click', removePopapItemVisibility);
//шаблон
const cardTemplate = document.querySelector('#element-template').content.querySelector('.element__item');
const handleDeleteCard = (event) => {
    event.target.closest('.element__item').remove();
};
const handleLikeCard = (event) => {
    event.target.classList.toggle('element__like-active');
};
const popapImageElement = document.querySelector('.popap-image');
const popapImageClose = document.querySelector('.popap-image__close-button');
const imageCardElement = document.querySelector('.element__image')

function openPopapImage(event) {
    popapImageElement.classList.add('popap-image_opened');
    console.log('Открыть');
}
closePopapImage = (event) => {
    popapImageElement.classList.remove('popap-image_opened');
    console.log('Закрыть');
}
popapImageClose.addEventListener('click', closePopapImage);
//генерация карточки
const generateCard = (item) => {
    const newCard = cardTemplate.cloneNode(true);
    const name = newCard.querySelector('.element__text');
    name.textContent = item.name;
    const link = newCard.querySelector('.element__image')
    link.src = item.link;
    link.alt = item.name;
    popapItemCreateButton.addEventListener('click', handleFormElementSubmit);
    link.addEventListener('click', openPopapImage);
    const deleteItemElement = newCard.querySelector('.element__delete-button');
    deleteItemElement.addEventListener('click', handleDeleteCard);
    const likeElement = newCard.querySelector('.element__like');
    likeElement.addEventListener('click', handleLikeCard);
    return link;
    return newCard;
};
//обработчик
function handleFormElementSubmit(event) {
    event.preventDefault();
    renderCard({ name: elementName.value, link: elementUrl.value });
    renderCard.value = '';
    removePopapItemVisibility();
};
//добавить карточки
const renderCard = (item) => {
    elementList.prepend(generateCard(item));
};
initialCards.forEach((item) => {
    renderCard(item);
});