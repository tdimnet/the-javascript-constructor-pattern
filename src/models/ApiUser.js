import moment from "moment"

class User {
    constructor(data) {
        this._id = data.cell
        this._firstName = data.name.first
        this._lastName = data.name.last
        this._email = data.email
        this._picture = data.picture.thumbnail
        this._registeredDate = data.registered.date
    }

    get id() {
        return this._id
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`
    }

    get email() {
        return this._email
    }

    get picture() {
        return this._picture
    }

    get registeredDate() {
        return moment(this._registeredDate).format('MM/DD/YY')
    }
}

export default User

