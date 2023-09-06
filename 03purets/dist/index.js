"use strict";
// Exemplo básico de criação de classe em TS/JS
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Pelotas"
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }
class User {
    // dessa maneira já cria o construtor e nao precisa colocar nada dentro dele, mto loco isso
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Pelotas";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // No setter não precisa declarar o retorno pq, ele não tem retorno...
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const lucas = new User("lucas@gmail.com", "lucas");
