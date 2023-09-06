function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    // com um early return isso aqui roda normal
    return val + 3
}

function provideId(id: string | null) {
    if(!id) {
        console.log("please provide ID")
        return
    }

    id.toLowerCase()
}

// exemplo que o cara deu, tá faltando um caso para cobrir aqui, que é o caso de um array vazio, ou seja tinha que verificar se strs is not empty (nao sei se o js tem função pra isso mas tenho quase certeza que tem)
function printAll (strs: string | string [] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s)
            }
        } else if (typeof strs === "string") {
            console.log(strs)
        }
    }
}

interface User {
    name: string, 
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

// operador in, bem simples, show de bola, legal 👍
function isAdmin (account: User | Admin) {
    if("isAdmin" in account) {
        return account.isAdmin
    }

}

// instance of verifica se a variavél faz parte de uma classe, diferentemente do type of que verifica o... tipo...
function logValue(x: Date | string) {
    if ( x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase)
    }
}

type Fish = {swim: () => void}
type Bird = {fly: () => void}

// sintaxe meio estranha, mas sem ela a função só retorna um boolean que não serve pra muita quando quando chamamos ela, precisamos desse pet is Fish para garantir que o resultado da função retorne o tipo certo
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        return "fish food"
    }
    pet
    return "bird food"
}

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}