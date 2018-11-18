/////////////////////////////////////////////////////////////////
//                       CRIANDO A QUESTÃO
/////////////////////////////////////////////////////////////////
const readline = require('readline')

const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/////////////////////////////////////////////////////////////////
//                 SELECIONAR DIFICULDADE
/////////////////////////////////////////////////////////////////
function selecioneDificuldade(){
    io.question('Selecione uma dificuldade: Fácil, Médio, Difícil.', (answer) => {
        const baixinha = answer.toLowerCase();
        if(baixinha === 'fácil' || baixinha === 'facil'){
            console.log('Você selecionou a dificuldade Fácil!')
            let numeroTentativas = 0;
            const tryFacil = 20;
            while(tryFacil >= numeroTentativas){
                perguntar();
                numeroTentativas++;
            }
        } else if (baixinha === 'médio' || baixinha === 'medio'){
            console.log('Você selecionou a dificuldade Média.')
            let numeroTentativas1 = 0;
            const tryMedio = 12;
            while(tryMedio >= numeroTentativas1){
                perguntar();
                numeroTentativas1++;
            }
        } else if(baixinha === 'difícil' || baixinha === 'dificil'){
            console.log('Você selecionou a dificuldade Difícil.')
            let numeroTentativas2 = 0;
            const tryDificil = 6;
            while(tryDificil >= numeroTentativas2){
                perguntar();
                numeroTentativas2++;
            }
        }
    }) 
}

/////////////////////////////////////////////////////////////////
//                       PERGUNTA
/////////////////////////////////////////////////////////////////
function perguntar() {
    io.question('Adivinhe um número de 0 a 100!', (answer) => {
        if (!/^[0-9]+$/.test(answer)){
            console.log('Somente números são caracteres válidos.')
            perguntar();
        } else{
            let resposta = parseFloat(answer);
            condicoes(resposta);
        }   
    })
}

/////////////////////////////////////////////////////////////////
//                   GERAR NÚMERO RANDOMICO
/////////////////////////////////////////////////////////////////
let numeroRandom = Math.floor(Math.random() * (100 - 0) + 0);

/////////////////////////////////////////////////////////////////
//                CONDIÇÕES PARA A RESPOSTA
/////////////////////////////////////////////////////////////////
function condicoes(answer) {
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

/////////////////////////////////////////////////////////////////
//                      JOGAR NOVAMENTE?
/////////////////////////////////////////////////////////////////
function jogarNovamente(){
    io.question('Deseja jogar novamente? Responda "s" para SIM ou "n" para NÃO.', (answer) => aceitou(answer));
}

function aceitou(answer){
    const baixinha = answer.toLowerCase();
    if (baixinha === 's'){
        perguntar();
    } else{
        io.close();
    }
}



/////////////////////////////////////////////////////////////////
//                      RODAR O JOGO
/////////////////////////////////////////////////////////////////
selecioneDificuldade();

// transformar em módulo npm
// subir no npm
// usar o npm

// usar classes para modelar o jogo