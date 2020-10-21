export class User {

    constructor(_id='', name='', password=''){
        this._id=_id;
        this.name=name;
        this.password=password;
    }

    _id: string;
    name: string;
    password: string;
}
