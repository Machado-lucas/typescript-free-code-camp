const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

// o tipo que for chamado aqui vai ser o tipo dos parametros e do retorno. ex: se vier um number, val vai ser number e o retorno também
function identityThree<Type>(val: Type): Type {
    return val
}

// só uma maneira de escrever, mas o <-palavra-> tem que ser o mesmo para tudo que for usar
function identityFour<T>(val: T): T{
    return val
}

interface Bootle {
    brand: string,
    type: number
}

identityFour<Bootle>({brand: "nike", type: 1})

function getSearchProducts<T>(products: T[]): T {
    // finge que aqui tem operações do banco de dados
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    // finge que aqui tem operações do banco de dados
    const myIndex = 3
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

// por enquanto esse extends nos generics é meio bosta, pq ele meio que mata a própria utilidade do bagulho, pois a gente poderia só declaram o negócio com o tipo que vamos extender e ja era
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, {connection: "db", })

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}