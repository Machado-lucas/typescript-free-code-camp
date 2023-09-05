// string
let greetings: string = "Hello Lucas";
greetings.toLowerCase();

// number (float and int)
let userId = 334455;

// boolean
let isLoggedIn = false;

// any
let hero;

function getHero() {
	return "thor";
}

hero = getHero();

export {};

/* 
Anotações

O typescript é inteligente o suficiente para reconhecer o tipo de uma variável sem declarar o tipo.
Exemplo: na linha 6, nós já estamos colocando um valor numérico na variável userId, então é redundante
declarar ela novamente como um número.
*/
