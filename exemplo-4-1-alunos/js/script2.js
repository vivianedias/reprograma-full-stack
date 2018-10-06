const btn = document.querySelector("#adicionar-aluno");

btn.addEventListener('click', function(event){
    event.preventDefault();
    
    const form = document.querySelector("#form-adiciona");
    //funcão que pega os dados do input, através do objeto
    const novoAluno =  dadosAlunos(form);

    const alunoTr = document.createElement("tr");

    const nomeTd = document.createElement("td");
    const notaUmTd = document.createElement("td");
    const notaDoisTd = document.createElement("td");
    const mediaTd = document.createElement("td");

    nomeTd.textContent = novoAluno.nomeAluno;
    notaUmTd.textContent = novoAluno.notaUmAluno;
    notaDoisTd.textContent = novoAluno.notaDoisAluno;
    mediaTd.textContent = novoAluno.mediaAluno;

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(notaUmTd);
    alunoTr.appendChild(notaDoisTd);
    alunoTr.appendChild(mediaTd);

    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

    if (novoAluno.mediaAluno < 5){
        alunoTr.classList.add("abaixo-da-media")
    }

});

function dadosAlunos(formulario){
    const objetoAluno = {
        nomeAluno: formulario.nome.value,
        notaUmAluno: formulario.notaum.value,
        notaDoisAluno: formulario.notadois.value,
        mediaAluno: mediaAlunos(formulario.notaum.value, formulario.notadois.value)
    }
    return objetoAluno;
}

function mediaAlunos(primeiroValor, segundoValor){
    let mediaAlunos = 0;
    mediaAlunos = (parseFloat(primeiroValor) + parseFloat(segundoValor)) / 2;
    return mediaAlunos;
}