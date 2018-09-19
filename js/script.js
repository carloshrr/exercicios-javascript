// // Este evento permite carregar o JavaScript antes ...
// window.addEventListener('load', iniciar);

// function iniciar() {
//     var inputExercicio01 = document.querySelector('#inputExercicio01');
//     inputExercicio01.addEventListener('keyup', monitorarInput);
// }

// function monitorarInput() {
//     var spanExercicio01 = document.querySelector('#ex01');
//     spanExercicio01.textContent = this.value.length;
// }

//ESTRUTURA USANDO O IF
// var num1 = parseInt(prompt('Digite o primeiro número: '));
// var num2 = parseInt(prompt('Digite o segundo número: '));

// if (num1 > num2) {
//     alert(num1 + '>' + num2);
// } else {
//     if (num1 < num2) {
//         alert(num1 + '<' + num2);
//     } else {
//         alert(num1 + '==' + num1);
//     }
// }

//ESTRUTURA USANDO O SWITCH
// var diaInt = parseInt(prompt('Informe um dia da semana entre 0 e 6: '));
// var diaSemana = '';

// switch (diaInt) {
//     case 0:
//         diaDaSemana = 'Domingo';
//         break;
//     case 1:
//         diaDaSemana = 'Segunda-feira';
//         break;
//     case 2:
//         diaDaSemana = 'Terça-feira';
//         break;
//     case 3:
//         diaDaSemana = 'Quarta-feira';
//         break;
//     case 4:
//         diaDaSemana = 'Quinta-feira';
//         break;
//     case 5:
//         diaDaSemana = 'Sexta-feira';
//         break;
//     case 6:
//         diaDaSemana = 'Sábado';
//         break;

//     default:
//         diaDaSemana = 'Dia inválido!';
// }
// alert('Dia da semana: ' + diaDaSemana);

// Exemplo com operador ternário (?),(:)
// var av1 = parseFloat(prompt("Informe sua nota da AV1: "));
// var av2 = parseFloat(prompt("Informe sua nota da AV2: "));
// var media = (av1 + av2) / 2;
// var situacao =
//     (media >= 6) ?
//     "Aprovado" //V
//     :
//     "Reprovado"; //F
// alert("Situação: " + situacao + ", pois a média foi " + media);

//SOMANDO NÚMEROS DE 1 A 100

// var soma = 0;
// var i = 1;
// while (i <= 10) {
//     soma += i;
//     i++;
// }
// console.log('Soma dos elementos de 1 a 100: ' + soma);

//Somando os números de 1 a 100
//No do...while, o código do laço é executado pelo menos uma vez
// var soma = 0;
// var i = 1;
// do {
//     soma += i;
//     i++;
// } while (i <= 100);
// console.log('Soma dos elementos de 1 a 100: ' + soma);

// //Somando os números de 1 a 100
// var soma = 0;
// for (var i = 1; i <= 100; i++)
//     soma += i;
// console.log("Soma dos elementos de 1 a 100: " + soma);

// function obterDiaDaSemana(dia) {
//     var diaSemana = "";
//     switch (dia) {
//         case 0:
//             diaSemana = "Domingo";
//             break;
//         case 1:
//             diaSemana = "Segunda-feira";
//             break;
//         case 2:
//             diaSemana = "Terça-feira";
//             break;
//         case 3:
//             diaSemana = "Quarta-feira";
//             break;
//         case 4:
//             diaSemana = "Quinta-feira";
//             break;
//         case 5:
//             diaSemana = "Sexta-feira";
//             break;
//         case 6:
//             diaSemana = "Sábado";
//             break;
//         default:
//             diaSemana = "Dia inválido";
//     }
//     return diaSemana;
// } //Exemplo de utilização: console.log(obterDiaDaSemana(2));

// function somarElementos(de, ate) {
//     var soma = 0;
//     for (var i = de; i <= ate; i++)
//         soma += i;
//     return soma;
// }
// console.log(somarElementos(1, 100));
// // console.log(somarElementos(2, 2000));

window.addEventListener('load', iniciar);

// Função para escrever nome
// function escreverOla(nome) {
//     alert('Olá, ' + nome + '!');
// }

//Exercício 01
// FAÇA UMA FUNÇÃO QUE RECEBA DOIS NÚMEROS E RETORNE A MÉDIA
function media(num1, num2) {
    var media = (num1 + num2) / 2;
    console.log('MÉDIA: ' + media);
}