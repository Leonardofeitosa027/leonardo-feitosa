
const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));
let cidade = prompt("Digite sua cidade: ");

console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}.`);

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`Multiplicação: ${num1 * num2}`);

if (num2 === 0) {
    console.log("Erro: divisão por zero não é permitida.");
} else {
    console.log(`Divisão: ${num1 / num2}`);
}

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = Number(prompt(`Digite a ${i}ª nota: `));
    soma += nota;
}

// let media = soma / 5;

// console.log(`Média: ${media}`);

// if (media >= 7) {
//     console.log("Aprovado");
// } else if (media >= 5) {
//     console.log("Recuperação");
// } else {
//     console.log("Reprovado");
// }

// let numeroTabuada = Number(prompt("Digite um número para ver a tabuada: "));

// for (let i = 1; i <= 10; i++) {
//     console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
// }


// let pares = 0;
// let impares = 0;

// for (let i = 1; i <= 10; i++) {
//     let numero = Number(prompt(`Digite o ${i}º número inteiro: `));

//     if (numero % 2 === 0) {
//         pares++;
//     } else {
//         impares++;
//     }
// }

// console.log(`Quantidade de pares: ${pares}`);
// console.log(`Quantidade de ímpares: ${impares}`);

// const secreto = 42;
// let tentativas = 0;

// while (true) {
//     let tentativa = Number(prompt("Tente adivinhar o número secreto: "));
    
//     tentativas++;

//     if (tentativa === secreto) {
//         console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
//         break;
//     } else if (tentativa < secreto) {
//         console.log("O número secreto é maior.");
//     } else {
//         console.log("O número secreto é menor.");
//     }
// }