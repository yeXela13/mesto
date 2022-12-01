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
//генерация карточки
const generateCard = (item) => {
    const newCard = cardTemplate.cloneNode(true);
    const name = newCard.querySelector('.element__text');
    name.textContent = item.name;
    const link = newCard.querySelector('.element__image')
    link.src = item.link;
    link.alt = item.name;
    const deleteItemElement = newCard.querySelector('.element__delete-button');
    deleteItemElement.addEventListener('click', handleDeleteCard);
    const likeElement = newCard.querySelector('.element__like');
    likeElement.addEventListener('click', handleLikeCard);
    return newCard;
};
//обработчик
function handleFormElementSubmit(event) {
    event.preventDefault();


    
    console.log('проверка связи');
    removePopapItemVisibility();
};
formItemElement.addEventListener('submit', handleFormElementSubmit);

//добавить карточки
const renderCard = (item) => {
    elementList.prepend(generateCard(item));
};
initialCards.forEach((item) => {
    renderCard(item);
});