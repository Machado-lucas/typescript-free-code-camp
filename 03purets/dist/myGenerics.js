"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// o tipo que for chamado aqui vai ser o tipo dos parametros e do retorno. ex: se vier um number, val vai ser number e o retorno também
function identityThree(val) {
    return val;
}
// só uma maneira de escrever, mas o <-palavra-> tem que ser o mesmo para tudo que for usar
function identityFour(val) {
    return val;
}
identityFour({ brand: "nike", type: 1 });
function getSearchProducts(products) {
    // finge que aqui tem operações do banco de dados
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // finge que aqui tem operações do banco de dados
    const myIndex = 3;
    return products[myIndex];
};
// por enquanto esse extends nos generics é meio bosta, pq ele meio que mata a própria utilidade do bagulho, pois a gente poderia só declaram o negócio com o tipo que vamos extender e ja era
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
