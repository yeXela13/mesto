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
const placeNameInput = formItemElement.querySelector('.form-item__textarea_element_name');
const placeUrlInput = formItemElement.querySelector('.form-item__textarea_element_url');
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
    },  {
        name: 'Турция',
        link: 'https://images.unsplash.com/photo-1669111957726-9c2f6aec0199?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },  {
        name: 'Малайзия',
        link: 'https://images.unsplash.com/photo-1668694504921-5bcf11d34eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },  {
        name: 'Аргентина',
        link: 'https://images.unsplash.com/photo-1668293498006-cf8ad7ef2470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },  {
        name: 'Грузия',
        link: 'https://images.unsplash.com/photo-1668368047837-3d9c67145679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
    }
]
//Открыть/закрыть
const addPopapItemVisibility = function (event) {
    popapItemElement.classList.add('popap-item_opened');
}
const removePopapItemVisibility = function (event) {
    popapItemElement.classList.remove('popap-item_opened');
}
popapItemOpenElement.addEventListener('click', addPopapItemVisibility);
popapItemClosebutton.addEventListener('click', removePopapItemVisibility);
//шаблон
const cardTemplate = document.querySelector('#element-template').content.querySelector('.element__item');
//генерация карточки
const generateCard = (item) => {
const newCard = cardTemplate.cloneNode(true);
const name = newCard.querySelector('.element__text');
const link = newCard.querySelector('.element__image')
name.textContent = item.name;
link.src = item.link;
link.alt = item.name;
return newCard;
}
//обработчик
function formElementSubmitHandler(evt) {
    evt.preventDefault();
    renderCard({name: input.value})
    input.value = '';
    removePopapVisibility();
}
formItemElement.addEventListener('submit', formElementSubmitHandler);

//добавить карточки
const renderCard = (item) => {
    elementList.prepend(generateCard(item));
};

initialCards.forEach((item) => {
    renderCard(item);
    });


//удаление карточки
const deleteItemElementButton = document.querySelector('.element__delete-button');
const deleteItemElement = function (event) {
initialCards.shift();
}
deleteItemElementButton.addEventListener('click', deleteItemElement);

//Лайк
const likeElement = document.querySelector('.element__like');

function likeElementClick(event) {
    likeElement.classList.toggle('element__like-active');
}
likeElement.addEventListener('click', likeElementClick);