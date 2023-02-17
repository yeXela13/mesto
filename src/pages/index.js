import './index.css';
import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { api } from '../components/Api.js';
import { initialCards, config, profileSelectors,  popapOpenEditProfile, formEditProfile, formEditAvatar, nameInput, postInput, popapAddCardElement, formItemElement, popapOpenEditAvatar } from '../utils/constants.js'
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

let userId;
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    cardSection.renderItems(initialCards.reverse());
  })
  .catch((res) => {
    console.log(res);
  });

//попап редактирования профиля
const userInfo = new UserInfo(profileSelectors);

popapOpenEditProfile.addEventListener('click', () => {
  popupEditProfile.open();
    profileEditFormValidation.resetValidation();
});
const popupEditProfile = new PopupWithForm({ handleFormSubmit: (userData) => {
  popupEditProfile.saving(true);
    api.updateUserInfo(userData)
      .then((userData) => {
        userInfo.setUserInfo(userData);
        popupEditProfile.close();
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        popupEditProfile.saving(false);
      })
  }
},'.popap_edit-profile');
popupEditProfile.setEventListeners();

popapOpenEditProfile.addEventListener('click', () => {
  popupEditProfile.open();
  fillPopupEditFields();
});

const fillPopupEditFields = () => {
    const data = userInfo.getUserInfo()
    nameInput.value = data.name;
    postInput.value = data.post;
};
//изменить аватар
const popupEditAvatar = new PopupWithForm({
  handleFormSubmit: (userData) => {
    popupEditAvatar.saving(true);
    api.editAvatar(userData)
      .then((userData, res) => {
        console.log(res)
        userInfo.setUserInfo(userData);
        popupEditAvatar.close();
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        popupEditAvatar.saving(false);
      })
  }
},'.popap_avatar');
popupEditAvatar.setEventListeners();

popapOpenEditAvatar.addEventListener('click', () => {
popupEditAvatar.open();
profileAvatarFormValidation.resetValidation();
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
  addCardPopup.open();
});

const addCardPopup = new PopupWithForm({
  handleFormSubmit: (userData) => {
    addCardPopup.saving(true);
    api.addedCard(userData)
      .then((userData) => {
        const newCard = createElement(userData);
        cardSection.addItem(newCard);
        addCardPopup.close();
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        addCardPopup.saving(false);
      });
  }
}, '.popap_add-card');

addCardPopup.setEventListeners();

// удалить карточку
const popapDeleteCard = new PopupWithConfirmation('.popap_delete-card')
popapDeleteCard.setEventListeners();

//Создать карточку
const createElement = (data) => {
  const handleDeleteClick = (id) => {
    popapDeleteCard.open();
    popapDeleteCard.handleFormSubmit(() => {
      popapDeleteCard.deleting(true);
      return api.deleteCard(id)
        .then(() => {
          cardElement.deleteCard();
          popapDeleteCard.close();
        })
        .catch((res) => {
          console.log(res);
        })
        .finally(() => {
          popapDeleteCard.deleting(false);
        })
    })
  };
  const handleLikeCard = (id) => {
    api.setLike(id)
      .then((data) => {
        cardElement.handleLikeCardSum(data);
      })
      .catch((res) => {
        console.log(res);
      })
  };
  const handleLikeDelete = (id) => {
    api.deleteLike(id)
      .then((data) => {
        cardElement.handleLikeCardSum(data);
      })
      .catch((res) => {
        console.log(res);
      })
  };
  const cardElement = new Card({ ...data }, '#element-template', handleOpenCardPopap, handleDeleteClick, handleLikeCard, handleLikeDelete, userId);
  const card = cardElement.generateCard();
  return card;
};

//класс секшон
const cardSection = new Section({
  renderer: (item) => {
    cardSection.addItem(createElement(item));
  }
}, '.element')

// // Валидация
const profileEditFormValidation = new FormValidator(config, formEditProfile);
const profileAvatarFormValidation = new FormValidator(config, formEditAvatar);
const cardElementFormValidation = new FormValidator(config, formItemElement);
profileAvatarFormValidation.enableValidation();
profileEditFormValidation.enableValidation();
cardElementFormValidation.enableValidation();


