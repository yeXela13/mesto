import './index.css';
import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { api } from '../components/Api.js';
import { initialCards, config, profileSelectors,  popapOpenEditProfile, formEditProfile, nameInput, postInput, popapAddCardElement, formItemElement, popapOpenEditAvatar } from '../utils/constants.js'
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
    editProfileForm.open();
    profileEditFormValidation.resetValidation();
});
const editProfileForm = new PopupWithForm({ handleFormSubmit: (userData) => {
    editProfileForm.saving(true);
    api.updateUserInfo(userData)
      .then((userData) => {
        userInfo.setUserInfo(userData);
        editProfileForm.close();
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        editProfileForm.saving(false);
      })
  }
},'.popap_edit-profile');
editProfileForm.setEventListeners();

popapOpenEditProfile.addEventListener('click', () => {
  editProfileForm.open();
  fillPopupEditFields();
});

const fillPopupEditFields = () => {
    const data = userInfo.getUserInfo()
    nameInput.value = data.name;
    postInput.value = data.post;
};
//изменить аватар
const editAvatarForm = new PopupWithForm({
  handleFormSubmit: (userData) => {
    editAvatarForm.saving(true);
    api.editAvatar(userData)
      .then((userData, res) => {
        console.log(res)
        userInfo.setUserInfo(userData);
        editAvatarForm.close();
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        editAvatarForm.saving(false);
      })
  }
},'.popap_avatar');
editAvatarForm.setEventListeners();

popapOpenEditAvatar.addEventListener('click', () => {
// 
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
  handleFormSubmit: (userData) => {
    handleAddCardSubmit.saving(true);
    api.addedCard(userData)
      .then((userData) => {
        const newCard = createElement(userData);
        cardSection.addItem(newCard);
        handleAddCardSubmit.close();
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        handleAddCardSubmit.saving(false);
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
      popapDeleteCard.saving(true);
      return api.deleteCard(id)
        .then(() => {
          cardElement.deleteCard();
          popapDeleteCard.close();
        })
        .catch((res) => {
          console.log(res);
        })
        .finally(() => {
          popapDeleteCard.saving(false);
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
const cardElementFormValidation = new FormValidator(config, formItemElement);

profileEditFormValidation.enableValidation();
cardElementFormValidation.enableValidation();


