export class UserInfo {
    constructor({ nameSelector, postSelector, avatarSelector }) {
        this._name = document.querySelector(nameSelector)
        this._post = document.querySelector(postSelector)
        this._avatar = document.querySelector(avatarSelector)
    }
    getUserInfo() {
        const userData = {
            name: this._name.textContent, 
            post: this._post.textContent,
            avatar: this._avatar.src
        }
        return userData
    }

    setUserInfo(data) {
        this._name.textContent = data.name
        this._post.textContent = data.about
        this._avatar.src = data.avatar;
    }

}

