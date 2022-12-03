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
];
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
    // nameInput.value = profileName.textContent;
    // postInput.value = profilePost.textContent;
    console.log('Открыть');
};
const removePopapVisibility = function (event) {
    popapElement.classList.remove('popap_opened');
    console.log('Закрыть');
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
//Popap-add

const OpenAddCardPopap = document.querySelector('.profile__add-button');
const elementList = document.querySelector('.element__item');
const elementTemplate = document.querySelector('#element-template').content.querySelector('.element__item');
const popapImage = document.querySelector('.popap__image');
const popapCaption = document.querySelector('.popap__caption');
const renderCard = (item) => {
    elementList.prepend(createElement(item));
};

const handleLikeButton = (e) => {
e.target.closest('.element__item').classList.toggle('element__like-active');
};
const handleDeleteButton = (e) => {
    e.target.closest('.element__item').remove();
};

const formCreate = document.querySelector('.form-item');
const formCreateName = document.querySelector('.form-item__textarea_element_name');
const formCreateLink = document.querySelector('.form-item__textarea_element_url ');

const handleFormCreateSubmit = (e) => {
    e.preventDefault();
    renderCard({
        name: formCreateName.value,
        link: formCreateLink.value
    });
    renderCard = ' ';
    removePopapVisibility();
    console.log('Закрыть');
};
function createElement(item) {
    const newCard = elementTemplate.cloneNode(true);
    const elementTemplateName = newCard.querySelector('.element__text');
    elementTemplateName.textContent = item.name;
    const elementTemplateLink = newCard.querySelector('.element__image');
    elementTemplateLink.src = item.link;
    elementTemplateLink.alt = item.name;

    // const likeCard = newCard.querySelector('.element__like');
    // const deleteCard = newCard.querySelector('.element__delete-button');
    // likeCard.addEventListener('click', handleLikeButton);
    // deleteCard.addEventListener('click', handleDeleteButton);
    console.log('проверка');
    return newCard;
};

initialCards.forEach(function (item) {
    const elementCard = createElement(item);
elementList.append(elementCard);
});
//Слушатель
formCreate.addEventListener('submit', handleFormCreateSubmit);

// const openCardPopap (e) => {
//     popapImage.src = e.target
//     popapCaption.textContent = 
// };