"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    // com um early return isso aqui roda normal
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("please provide ID");
        return;
    }
    id.toLowerCase();
}
// exemplo que o cara deu, tá faltando um caso para cobrir aqui, que é o caso de um array vazio, ou seja tinha que verificar se strs is not empty (nao sei se o js tem função pra isso mas tenho quase certeza que tem)
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// operador in, bem simples, show de bola, legal 👍
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// instance of verifica se a variavél faz parte de uma classe, diferentemente do type of que verifica o... tipo...
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase);
    }
}
// sintaxe meio estranha, mas sem ela a função só retorna um boolean que não serve pra muita quando quando chamamos ela, precisamos desse pet is Fish para garantir que o resultado da função retorne o tipo certo
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        return "fish food";
    }
    pet;
    return "bird food";
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
