import './index.css';
import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { api } from '../components/Api.js';
import { initialCards, config, popapEditElement, popapOpenEditProfile, formEditProfile, nameInput, postInput, popapItemElement, popapAddCardElement, formItemElement, popapOpenEditAvatar, formEditAvatar, formDeleteCard, popapDeleteCardElement } from '../utils/constants.js'
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    cardSection.renderItems(initialCards.reverse());
  })
  .catch((error) => {
    console.log(`Ошибка: ${error}`);
  });

//попап редактирования профиля
const profileSelectors = {
  nameSelector: '.profile__name',
  postSelector: '.profile__post',
  avatarSelector: '.profile__avatar'
};
const userInfo = new UserInfo(profileSelectors);

popapOpenEditProfile.addEventListener('click', () => {
    editProfileForm.open();
    profileEditFormValidation.resetValidation();
});
const editProfileForm = new PopupWithForm({ handleFormSubmit: (event) => {
  event.preventDefault();
    editProfileForm.load(true);
    api.updateUserInfo(userData)
      .then((userData) => {
        userInfo.setUserInfo(userData);
        editProfileForm.close();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        editProfileForm.load(false);
      })
  }
},'.popap_edit-profile');
editProfileForm.setEventListeners();

popapOpenEditProfile.addEventListener('click', () => {
  editProfileForm.open();
  const data = userInfo.getUserInfo();
  nameInput.value = data.nameSelector;
  postInput.value = data.postSelector;
});

//изменить аватар
const editAvatarForm = new PopupWithForm({
  handleFormSubmit: (userData) => {
    editAvatarForm.load(true);
    api.editAvatar(userData)
      .then((userData, res) => {
        console.log(res)
        userInfo.setUserInfo(userData);
        editAvatarForm.close();
      })
      .catch((err) => {
        console.log(`Ошибочка: ${err}`);
      })
      .finally(() => {
        editAvatarForm.load(false);
      })
  }
},'.popap_avatar');
editAvatarForm.setEventListeners();

popapOpenEditAvatar.addEventListener('click', () => {
  // AvatarEditFormValidation.resetValidation();
  editAvatarForm.open();
});



//Попап с изображением
const popupWithImage = new PopupWithImage('.popap_open-card')
popupWithImage.setEventListeners();
const handleOpenCardPopap = (name, link) => {
  popupWithImage.open(name, link);
};


//попап добавления карточки
popapAddCardElement.addEventListener('click', () => {
  cardElementFormValidation.resetValidation();
  handleAddCardSubmit.open();
});

const handleAddCardSubmit = new PopupWithForm({
  handleFormSubmit: (event, userData) => {
    console.log(userData)
    handleAddCardSubmit.load(true);
    event.preventDefault();
    api.addedCard(userData)
      .then((userData) => {
        const newCard = createElement(userData);
        cardSection.addItem(newCard);
        formItemElement.close();
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        handleAddCardSubmit.load(false);
      });
  }
}, '.popap_add-card');

handleAddCardSubmit.setEventListeners();

// удалить карточку
const popapDeleteCard = new PopupWithConfirmation('.popap_delete-card')
popapDeleteCard.setEventListeners();

//Создать карточку
const createElement = (data) => {
  const handleDeleteClick = (id) => {
    popapDeleteCard.open();
    popapDeleteCard.handleFormSubmit(() => {
      popapDeleteCard.load(true);
      return api.deleteCard(id)
        .then(() => {
          cardElement.deleteCard();
          popapDeleteCard.close();
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
        .finally(() => {
          popapDeleteCard.load(false);
        })
    })
  };
  const handleLikeCard = (id) => {
    api.setLike(id)
      .then((data) => {
        cardElement.handleLikeCardSum(data);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  };
  const handleLikeDelete = (id) => {
    api.deleteLike(id)
      .then((data) => {
        cardElement.handleLikeCardSum(data);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  };
  const cardElement = new Card({ ...data }, '.element-template', handleOpenCardPopap, handleDeleteClick, handleLikeCard, handleLikeDelete, userId);
  const card = cardElement.generateCard();
  return card;
};

//Экземпляр класса с секцией карточек
const cardSection = new Section({
  renderer: (item) => {
    cardSection.addItem(createElement(item));
  }
}, '.element')
// // Валидация
const profileEditFormValidation = new FormValidator(config, formEditProfile);
const cardElementFormValidation = new FormValidator(config, formItemElement);
// const AvatarEditFormValidation = new FormValidator(config, formEditAvatar);
profileEditFormValidation.enableValidation();
cardElementFormValidation.enableValidation();
// AvatarEditFormValidation.enableValidation();

