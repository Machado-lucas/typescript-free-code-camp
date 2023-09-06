// // exemplo simples de objeto em TS
// const User = {
//     name: "Lucas",
//     email: "lucas@gmail.com",
//     isActive: true
// }

// // criar função e para chamá-la precisa mandar o mesmo objeto com seus devidos valores
// function createUser({name: string, isPaid: boolean}) {

// }
// // mas se passar o objeto dentro de uma variável para depois essa variável ser utilizada como parametro da função, não apita erro e andar normal
// let newUser = {name: "Lucas", isPaid: false, email: "l@l.com"}

// createUser(newUser)

// // o objeto após os : é para definir qual vai ser o retorno da função
// function createCourse ():{name: string, price: number} {
//     return {name: "typescript", price: 399}
// }

//----------------------------------------------


// Podemos criar tipos também para facilitar a nossa vida e utilizar menos código, também para dar mais segurança a ele
// Como pode ver nos exemplos abaixo, todos os retornos ou parametros respeitam a estrutura criada dentro do tipo User
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

//----------------------------------------------

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    // ? para chaves opcionais
    credCardDetails?: number
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type credCardDetails = cardNumber & cardDate & {
    cvv: number
}

let myUser: User = {
    _id: "1234",
    name: "Lucas",
    email: "l@l.com",
    isActive: false
}

myUser.email = "lucas@gmail.com"


export {};
