export class UserInfo {
    constructor({ profileNameSelector, profilePostSelector }) {
        this._name = document.querySelector(profileNameSelector)
        this._post = document.querySelector(profilePostSelector)
    }
    getUserInfo() {
        return { name: this._name.textContent, post: this._post.textContent }
    }

    setUserInfo(name, post) {
        this._name.textContent = name
        this._post.textContent = post
    }

}

