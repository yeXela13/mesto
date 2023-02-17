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

export const config = {
    formSelector: '.form',
    inputSelector: '.form__textarea',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_disabled',
    inputErrorClass: 'form__span_active',
    errorClass: 'form__textarea_error'
};
export const profileSelectors = {
    nameSelector: '.profile__name',
    postSelector: '.profile__post',
    avatarSelector: '.profile__avatar'
};

export const popapEditElement = document.querySelector('.popap_edit-profile');
export const popapItemElement = document.querySelector('.popap_add-card');
export const popapOpenEditProfile = document.querySelector('.profile__edit-button');
export const popapOpenEditAvatar = document.querySelector('.profile__edit-avatar');
export const popapAddCardElement = document.querySelector('.profile__add-button');
export const element = document.querySelector('.element');
export const cardTemplate = document.querySelector('.element-template');
export const formEditProfile = document.forms['popap-form'];
export const formEditAvatar = document.forms['popap_avatar']
export const formItemElement = document.forms['popap-item-form'];
export const formDeleteCard = document.forms['popap_delete-card'];
export const nameInput = formEditProfile.querySelector('.form__textarea_profile_name');
export const postInput = formEditProfile.querySelector('.form__textarea_profile_post');