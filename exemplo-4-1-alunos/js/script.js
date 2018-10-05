const aluno = document.querySelector("#primeiro-da-lista");
// console.log(aluno);

// const x = 10;
//console.log(x);
//x=11;
//console.log(x);

// buscando o valor da primeira nota do primeiro aluno
const tdPrimeiraNota = aluno.querySelector(".info-notaum");
const primeiraNota = tdPrimeiraNota.textContent;
console.log(primeiraNota);

// buscando o segundo valor
const tdSegundaNota = aluno.querySelector(".info-notadois");
const segundaNota = tdPrimeiraNota.textContent;
console.log(segundaNota);

const mediaFinal = aluno.querySelector(".info-media");
//parsefloat busca em uma string, um valor numérico
const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
mediaFinal.textContent = mediaCalculada;