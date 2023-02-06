import './index.css';
import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { initialCards, config, popapEditElement, popapOpenEditProfile, formEditProfile, nameInput, postInput, popapItemElement, popapAddCardElement, formItemElement } from '../utils/constants.js'

// Валидация
const profileEditFormValidation = new FormValidator(config, formEditProfile);
const cardElementFormValidation = new FormValidator(config, formItemElement);
profileEditFormValidation.enableValidation();
cardElementFormValidation.enableValidation();

//Попап с изображением
const popupWithImage = new PopupWithImage('.popap_open-card')
popupWithImage.setEventListeners();
const handleopenCardPopap = (name, link) => {
    popupWithImage.open(name, link);
};
//  попап добавления карточки
const handleAddCardSubmit = (event, values) => {
    event.preventDefault();
    cardSection.addItem(renderCard(values));
    addCardItemForm.close()
};
const addCardItemForm = new PopupWithForm('.popap_add-card', handleAddCardSubmit)
addCardItemForm.setEventListeners();
popapAddCardElement.addEventListener('click', () => {
    addCardItemForm.open()
    cardElementFormValidation.resetValidation();
});

// Попап с формой редактирования профиля
const editProfileForm = new PopupWithForm('.popap_edit-profile', handleProfileFormSubmit)
editProfileForm.setEventListeners();
const userInfo = new UserInfo({ profileNameSelector: '.profile__name', profilePostSelector: '.profile__post' })
function handleProfileFormSubmit(event, values) {
    event.preventDefault();
    userInfo.setUserInfo(values.name, values.post);
    editProfileForm.close();
}
popapOpenEditProfile.addEventListener('click', () => {
    editProfileForm.open();
    profileEditFormValidation.resetValidation();
    fillPopupEditFields();
});
function fillPopupEditFields() {
    const { name, post } = userInfo.getUserInfo()
    nameInput.value = name;
    postInput.value = post;
};

//Создать карточку
const renderCard = (item) => {
    const cardElement = new Card(item, '#element-template', handleopenCardPopap)
    const card = cardElement.generateCard();
    return card
};
const cardSection = new Section({
    items: initialCards,
    renderer: (item) => {
        cardSection.addItem(renderCard(item));
    }
}, '.element')

cardSection.renderer();
// fgfgfgsdfffsfsfsfsf