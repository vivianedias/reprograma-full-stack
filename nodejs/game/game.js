const readline = require('readline')
// criar numero random, store (0 a 100)


// input adivinhar número
const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar() {
    io.question('Adivinhe um número de 0 a 100!', (answer) => {
        let resposta = parseFloat(answer)
        condicao(resposta);
    })
}


function jogarNovamente(){
    io.question('Deseja jogar novamente? Responda "s" para SIM ou "n" para NÃO.', (answer) => aceitou(answer));
}

function aceitou(answer){
    let baixinha = answer.toLowerCase();
    if (baixinha === 's'){
        perguntar();
    } else{
        io.close();
    }
}

let numeroRandom = Math.floor(Math.random() * (100 - 0) + 0);

function condicao(answer) {
    console.log(numeroRandom);
    if (answer === numeroRandom) {
        console.log('Parabéns! Você é foda.');
        jogarNovamente();
    } else if (answer !== numeroRandom && answer > numeroRandom) {
        console.log('Hm, seu palpite é muito alto!');
        perguntar();
    } else {
        console.log('Hm, seu palpite é muito baixo');
        perguntar();
    }
}

perguntar();




//  condicionais acertou ou não *console.log    
// se não acertou >>
    // maior ou menor?

// bônus:
// se acertar jogar novamente ou parar o programa

// caracter invalido - só pode números

// transformar em módulo npm
// subir no npm
// usar o npm

// usar classes para modelar o jogo

// limitar o número de palpites conforme a dificuldade