let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let lucas: User | Admin = {
  name: "Lucas",
  id: 1,
};

lucas = { username: "lb", id: 1 };

// funções que funcionariam em string não funcionam, pq o id também é um number, então precisa fazer uma verificação dentro do if e ai sim poder fazer operações específicas do tipo da variável
function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

getDbId(3)
getDbId("3")


// array

const data: number[]  = [1, 2, 3]
const data2: string[]  = ["1", "2", "3"]
// dessa maneira a variável pode conter um array de somente números ou de somente strings, nunca uma mistura dos dois
const data3: string[] | number[]  = [1, 2, 3]
// assim aceita a mistureba
const data4: (string | number)[]  = [1, 2, "3"]

// tipos específicos que não podem ser alterados depois, no caso seatAllotment pode ser um dos 3
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"