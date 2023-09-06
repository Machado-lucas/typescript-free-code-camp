// const user: (string | number)[] = [1, "lbm"]
// Tuples é o nome dessa porrinha aqui
// Ele garante que a ordem dentro do array seja garantida, assim como os seus dados
let user: [string, number, boolean]

user = ["lbm", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "llll"]

newUser[1] = "asds"