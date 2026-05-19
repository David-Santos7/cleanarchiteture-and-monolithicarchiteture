
export class Lead {
    constructor({name, email, phone }) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.createdAt = new Date();
    }
}