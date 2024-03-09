alert ('Bem-vindo ao Jogo do Caio')

var limite = 100

var array = [];
for (var i = 0; i <= limite; i++) {
    array.push(i);

};

function SelecionarIndiceAleatorio (array) {
    var indiceAleatorio = Math.floor(Math.random() * array.length)

    return indiceAleatorio;
}
var tentativas = 0

var indiceAleatorio = SelecionarIndiceAleatorio(array);

let palavraTentativa = tentativas > 1 ? 'tentativa' : 'tentativas'

while (true) {
    var chute = parseInt(prompt(`Escolha um número de 0 a ${limite}`));
    tentativas++;

    if (chute === indiceAleatorio) {

        if (tentativas === 1) {

        alert(`Parabéns! Você acertou o número secreto: ${indiceAleatorio} com ${tentativas} ${palavraTentativa} `);
        
        } else { 

        alert(`Parabéns! Você acertou o número secreto: ${indiceAleatorio} com ${tentativas} ${palavraTentativa} `);

        }
        break;
    } else if (chute < indiceAleatorio) {
        alert(`Tente um número maior que ${chute}`);
    } else {
        alert(`Tente um número menor que ${chute}`);
    }
}

