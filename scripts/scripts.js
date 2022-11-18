const popapElement = document.querySelector('.popap');
const popapCloseElement = popapElement.querySelector('.popap__close');
const popapOpenElement = document.querySelector('.profile__edit-button');
const popapSaveButton = popapElement.querySelector('.form__save');

const togglePopapVisibility = function (event) {
    popapElement.classList.toggle('popap__opened');
};
popapOpenElement.addEventListener('click', togglePopapVisibility);
popapCloseElement.addEventListener('click', togglePopapVisibility);

const formElement = popapElement.querySelector('.form');
const nameInput = formElement.querySelector('.form__textarea_profile_name');
const postInput = formElement.querySelector('.form__textarea_profile_post');
const profileName = document.querySelector('.profile__name');
const profilePost = document.querySelector('.profile__post');

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profilePost.textContent = postInput.value;
    togglePopapVisibility();
}
formElement.addEventListener('submit', formSubmitHandler); 