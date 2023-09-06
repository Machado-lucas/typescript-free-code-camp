var score = 33;
score = 44;
score = "55";
var lucas = {
    name: "Lucas",
    id: 1,
};
lucas = { username: "lb", id: 1 };
// funções que funcionariam em string não funcionam, pq o id também é um number, então precisa fazer uma verificação dentro do if e ai sim poder fazer operações específicas do tipo da variável
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getDbId(3);
getDbId("3");
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
// dessa maneira a variável pode conter um array de somente números ou de somente strings, nunca uma mistura dos dois
var data3 = [1, 2, 3];
// assim aceita a mistureba
var data4 = [1, 2, "3"];
// tipos específicos que não podem ser alterados depois, no caso seatAllotment pode ser um dos 3
var seatAllotment;
seatAllotment = "aisle";
