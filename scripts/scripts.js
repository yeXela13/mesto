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
const nameInput = formElement.querySelector('.');
const postInput = formElement.querySelector('.');


function formSubmitHandler(evt) {
    evt.preventDefault();

    nameInput.textContent = nameInput.value;
    postInput.textContent = jobInput.value;

    togglePopapVisibility();
}

formElement.addEventListener('submit', formSubmitHandler); 