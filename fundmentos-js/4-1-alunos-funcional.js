// buscando todos os alunos
function imprimeTabeladoHTML(){
    const todosOsAlunos = document.querySelectorAll(".aluno");
// console.log(todosOsAlunos);
}


// imprimindo cada aluno da lista
for (let i = 0; i < todosOsAlunos.length; i++) {
    // console.log(todosOsAlunos[i]);

    let aluno = todosOsAlunos[i];

    // buscar o valor da primeira nota
    let tdPrimeiraNota = aluno.querySelector(".info-notaum").textContent;

    // buscar o valor da segunda nota
    const tdSegundaNota = aluno.querySelector(".info-notadois").textContent;

    const mediaFinal = aluno.querySelector(".info-media");
   
    let mediaCalculada = calculaMedia(primeiraNota, segundaNota);

    if (notaEhValida) {
        // calculando a média e apresentando o resultado

        if (mediaCalculada < 5) {
            // aluno.style.backgroundColor = "red";
            aluno.classList.add("abaixo-da-media");
        }

        const mediaFinal = mediaCalculada.toFixed(2);
        aluno.querySelector('info-media').textContent - mediaFinal;
    }
}

imprimeTabeladoHTML();

function calculaMedia(notaUmRecebida, notaDoisRecebida) {
    return (parseFloat(notaUmRecebida) + parseFloat(notaDoisRecebida)) / 2;
}