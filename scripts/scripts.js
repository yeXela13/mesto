const popapElement = document.querySelector('.popap');
const popapCloseElement = popapElement.querySelector('.popap__close');
const popapOpenElement = document.querySelector('.profile__edit-button');

const togglePopapVisibility = function (event) {
    popapElement.classList.toggle('popap__opened');
};

popapOpenElement.addEventListener('click', togglePopapVisibility);
popapCloseElement.addEventListener('click', togglePopapVisibility);

// Находим форму в DOM
const formElement = popapElement.querySelector('.form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = formElement.querySelector('.profile__name');// Воспользуйтесь инструментом .querySelector()
const jobInput = formElement.querySelector('.profile__post');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput
    jobInput
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 