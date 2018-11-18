const todosAlunos = document.querySelectorAll(".aluno");

for (let i = 0; i < todosAlunos.length; i++){
    const aluno = todosAlunos[i];

    const notaUmTd = aluno.querySelector(".info-notaum");
    const primeiraNota = notaUmTd.textContent;
    console.log(notaUmTd);

    const notaDoisTd = aluno.querySelector(".info-notadois");
    const segundaNota = notaDoisTd.textContent;
    console.log(segundaNota);
    const mediaTd = aluno.querySelector(".info-media");
    const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
    mediaTd.textContent = mediaCalculada.toFixed(2);
    
    if (mediaCalculada < 5){
        aluno.classList.add("abaixo-da-media");
    }
}