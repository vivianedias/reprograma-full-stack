const btn = document.querySelector(".news__button");

btn.addEventListener('click', function(event){
    event.preventDefault();
    const inputEmail = document.querySelector("#newsInputEmail").value;
    const validacao = document.getElementById("validacao");
    if (inputEmail !== "vivipirolad@gmail.com"){
        validacao.textContent = "Insira algum e-mail!"
        document.getElementById('validacao').style.color = "red";
    } else{
        validacao.textContent = "E-mail validado com sucesso."
        document.getElementById('validacao').style.color = "green";
    }
});

//1 - input + botao
//2 - Evento
//3 - event.preventDefault();
//4 - criar elemento
//5 - conteúdo
//6 - append
//7 - insertBefore