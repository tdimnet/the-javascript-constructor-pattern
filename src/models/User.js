import moment from "moment"

class User {
    constructor(data) {
        this._id = data.id
        this._firstName = data.first_name
        this._lastName = data.last_name
        this._email = data.email
        this._picture = data.picture
        this._registeredDate = data.registered_date
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

