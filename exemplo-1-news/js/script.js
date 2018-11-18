const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener('click', function(event){
    event.preventDefault();
    const resposta = document.createElement("span"); //criou um span
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso") 
    //.appendChild > insere depois
    resposta.appendChild(respostaMensagem); //igual o textContent ou innerHTML 
    const newsForm = document.querySelector(".news__form");
    newsForm.insertBefore(resposta, input.parentNode); //insere antes
});