// // Este evento permite carregar o JavaScript antes ...
window.addEventListener('load', iniciar);

function iniciar() {
    var inputExercicio01 = document.querySelector('#inputExercicio01');
    inputExercicio01.addEventListener('keyup', monitorarInput);
}

// EXERCÍCIO 00
// FAÇA UMA FUNÇÃO PARA ESCREVER "Olá, (nome)!" NO
CONSOLE:
    function escreverOla(nome) {
        console.log("Olá, " + nome + "!");
    }
escreverOla("Raphael"); //Olá, Raphael!
escreverOla("Bruno"); //Olá, Bruno!
escreverOla("Marcelle"); //Olá, Marcelle!

// EXERCÍCIO 01
// FAÇA UMA FUNÇÃO QUE RECEBA DOIS NÚMEROS E RETORNE A MÉDIA:
function media(num1, num2) {
    var media = (num1 + num2) / 2;
}
return 'MEDIA: ' + media;

// EXERCÍCIO 02
// CRIAR FUNÇÕES PARA ESCREVER NÚMEROS NO CONSOLE DE 1 ATÉ DETERMINADO VALOR, UTILIZANDO 'FOR':
function escreverNumerosAte(ate) {
    for (var i = 1; i <= ate; i++) {
        console.log(i);
    }
    return 'contagem efetuada';
}

// EXERCÍCIO 03
// CRIAR FUNÇÃO PARA EXIBIR OS NÚMEROS DIVISÍVEIS POR X
// CONSIDERANDO O INTERVALO DE X A Y

function divisiveisPor(x, y) {
    for (var i = x; i <= y; i++) {
        if (i % x == 0) {
            console.log(i);
        }
    }
}

// EXERCÍCIO 04
// CRIAR UMA FUNÇÃO PARA MOSTRAR O MAIOR E MENOR VALOR DE
// UM VETOR DE NÚMEROS
function maiorMenor(vetor) {
    var menor = vetor[0];
    var maior = vetor[0];

    // MAIOR NÚMERO NO VETOR
    // VAMOR ASSUMIR QUE O PRIMEIRO NÚMERO DIGITADO NO VETOR É O MAIOR
    maior = vetor[0]
    for (var i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }

    // MENOR NÚMERO NO VETOR
    // VAMOR ASSUMIR QUE O PRIMEIRO NÚMERO DIGITADO NO VETOR É O MENOR
    menor = vetor[0]
    for (var i = 0; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
    }

    //CALCULA A SOMA E MÉDIA
    soma = 0
    for (var i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i]
    }
    media2 = soma / vetor.length;

    // APRESENTAÇÃO DOS VALORES
    console.log("MENOR: ", menor);
    console.log("MAIOR: ", maior);

    console.log("SOMA: ", soma);
    console.log("MEDIA: ", media2.toFixed(2));
}