class Photographer {
    constructor(data) {
        this._name = data.photographers.name
        this._id = data.photographers.id
        this._city = data.photographers.city
        this._country = data.photographers.country
        this._tagline = data.photographers.tagline
        this._price = data.photographers.price
        this._portrait = data.photographers.portrait
    }

    get name() {
        return this._name
    }
    get id() {
        return this._id
    }
    get city() {
        return this._city
    }
    get country() {
        return this._country
    }
    get tagline() {
        return this._tagline
    }
    get price() {
        return this._price
    }
    get portrait() {
        return this._portrait
    }



}