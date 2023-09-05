function addTwo(num: number): number {
	return num + 2;
}

function getUpper(val: string): string {
	return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

const loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper("quatro");
signUpUser("Lucas", "lucas@gmail.com", true);
loginUser("Lucas", "lucas@gmail.com");

// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true
//     }

//     return "200 OK"
// }

const hello = (s: string): string => {
	return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
	return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
	console.log(errmsg);
}

// never é usado para error handling, executando uma exceção e terminando a execução do programa
function handleError(errmsg: string): never {
	throw new Error(errmsg);
}

export {};
