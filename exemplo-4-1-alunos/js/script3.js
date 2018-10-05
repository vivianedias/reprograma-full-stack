// buscando o botão
const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener('click', function(event){
    event.preventDefault();

//CONTEUDO
    // buscando o formulário
    const formularioAluno = document.querySelector("#form-adiciona");
    // buscando novos alunos pela função
    const novoAluno = obterDadosFormulario(formularioAluno);
    //criando as novas células 
    const nomeAlunoTd = document.createElement("td");
    const notaUmAlunoTd = document.createElement("td");
    const notaDoisAlunoTd = document.createElement("td");
    const mediaAlunoTd = document.createElement("td");

    // buscando pela const que guarda a function, os objects (dados inseridos)
    // escrevendo no td o conteudo inserido
    nomeAlunoTd.textcontent = novoAluno.nomeAluno;
    notaUmAlunoTd.textContent = novoAluno.notaUmAluno.toFixed(2);
    notaDoisAlunoTd.textContent = novoAluno.notaDoisAluno.toFixed(2);
    mediaAlunoTd.textContent = novoAluno.media.toFixed(2);
    
// POSICIONAMENTO

    // buscando a coluna nova <tr>
    const alunoTr = document.createElement("tr");
    // linkando a coluna com as células
    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

    if (novoAluno.media < 5){
        alunoTr.classList.add("abaixo-da-media");
    }

//TABELA
    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);
});

function obterDadosFormulario(formulario){
    const objetoAluno = {
        nomeAluno: formulario.nome.value,
        notaUmAluno: formulario.notaum.value,
        notaDoisAluno: formulario.notadois.value,
        media: calculaMedia(formulario.notaum.value, formulario.notadois.value)
    }
    return objetoAluno;
}

// nossa função irá precisar calcular a média - para novos inputs
// receber dois valores (a + b / 2)

function calculaMedia(primeiroValorRecebido, segundoValorRecebido){
    let mediaCalculadaDentroDaFuncao = 0;
    mediaCalculadaDentroDaFuncao =
    (parseFloat(primeiroValorRecebido) + parseFloat(segundoValorRecebido)) / 2;
    return mediaCalculadaDentroDaFuncao;
}

