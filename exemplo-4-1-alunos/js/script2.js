const todosAlunos = document.querySelectorAll(".aluno");

// console.log(todosAlunos);

// const ana = "ana";
// const leti = "leti";
// const jub = "jub";

// const todasAlunas = ["ana", "leti", "jub"];
// console.log(todasAlunas);

// for (let indice = 0; indice < todosAlunos.length; indice++) {

//.lenght está contando a quantidade de classes .aluno que existem
for (let i = 0; i < todosAlunos.length; i++) {
    console.log(todosAlunos[i]); //pq não mostra esse console.log quando executado?
    const aluno = todosAlunos[i]; //seleciona todos os alunos listados

    const tdPrimeiraNota = aluno.querySelector(".info-notaum"); // campo
    const primeiraNota = tdPrimeiraNota.textContent; // conteúdo
    console.log(primeiraNota); // imprimir 

    const tdSegundaNota = aluno.querySelector(".info-notadois");
    const segundaNota = tdSegundaNota.textContent;
    console.log(segundaNota);

    const mediaFinal = aluno.querySelector(".info-media");
    const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
    console.log(mediaCalculada);
    //.toFixed(2) converte um número em uma string, mantendo o número de decimais dela fixo
    mediaFinal.textContent = mediaCalculada.toFixed(2);

    if (mediaCalculada < 5){
        //aluno.style.backgroundColor = "red";s
        aluno.classList.add("abaixo-da-media");
    }
    
}  

