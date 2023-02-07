export class Api {
    constructor(options) {

    }
    getInitialCards() {

    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59/cards',
    headers: {
        authorization: 'fb15d3cd-51f7-4c56-adbf-e4fa5201b028',
        'Content-Type': 'application/json'
    }
});
