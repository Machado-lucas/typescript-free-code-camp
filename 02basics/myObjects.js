"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// exemplo simples de objeto em TS
var User = {
    name: "Lucas",
    email: "lucas@gmail.com",
    isActive: true
};
// criar função e para chamá-la precisa mandar o mesmo objeto com seus devidos valores
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Lucas", isPaid: false, email: "l@l.com" };
createUser(newUser);
// o objeto após os : é para definir qual vai ser o retorno da função
function createCourse() {
    return { name: "typescript", price: 399 };
}
