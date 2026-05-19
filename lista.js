var nome = "leo silva";
var idade = 17;
var cidade = "juvenopolis";

console.log("Olá, meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade + ".");

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

console.log("Soma: " + somar(10, 5));
console.log("Subtração: " + subtrair(10, 5));

function classificar(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else {
        if (nota >= 5) {
            return "Recuperação";
        } else {
            return "Reprovado";
        }
    }
}

console.log(classificar(8.5));

function tabuada(numero) {
    var i = 1;
    while (i <= 10) {
        console.log(numero + " x " + i + " = " + (numero * i));
        i = i + 1;
    }
}

tabuada(5);

var valor;

if (valor != undefined) {
    console.log("Tem valor");
}

valor = 10;

if (valor != undefined) {
    console.log("Tem valor");
}