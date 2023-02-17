class Api {
    constructor(options) {
        this._options = options;
        this._baseUrl = this._options.baseUrl;
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: 'fb15d3cd-51f7-4c56-adbf-e4fa5201b028'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });

    }

    updateUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: 'fb15d3cd-51f7-4c56-adbf-e4fa5201b028',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.post
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });

    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: 'fb15d3cd-51f7-4c56-adbf-e4fa5201b028'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    addedCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
              authorization: 'fb15d3cd-51f7-4c56-adbf-e4fa5201b028',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
          })
          .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    editAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
              authorization: 'fb15d3cd-51f7-4c56-adbf-e4fa5201b028',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
          })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
          });
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
          method: 'DELETE',
          headers: {
            authorization: 'fb15d3cd-51f7-4c56-adbf-e4fa5201b028',
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
        
          }

      setLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
          method: 'PUT',
          headers: {
            authorization: 'fb15d3cd-51f7-4c56-adbf-e4fa5201b028',
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
      }

      deleteLike(data) {
        return fetch(`${this._baseUrl}/cards/likes/${data}`, {
          method: 'DELETE',
          headers: {
            authorization: 'fb15d3cd-51f7-4c56-adbf-e4fa5201b028',
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
      }
      
}


export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59/',
    headers: {
        authorization: 'fb15d3cd-51f7-4c56-adbf-e4fa5201b028',
        'Content-Type': 'application/json'
    }
});
