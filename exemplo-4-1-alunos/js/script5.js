window.addEventListener('load', function(){
    imprimeTabeladoHTML(document.querySelectorAll(".aluno"));
});
function imprimeTabeladoHTML(todosOsAlunos){
    // buscando todos os aluno

    todosOsAlunos.forEach(function(aluno){
    
        let primeiraNota = aluno.querySelector(".info-notaum").textContent;

        // buscar o valor da segunda nota
        const segundaNota = aluno.querySelector(".info-notadois").textContent;
        
        let mediaCalculada = calculaMedia(primeiraNota, segundaNota);
            // calculando a média e apresentando o resultado

            if (mediaCalculada < 5) {
                // aluno.style.backgroundColor = "red";
                aluno.classList.add("abaixo-da-media");
            }
            aluno.querySelector('.info-media').textContent = mediaCalculada;
        }
    )};


function calculaMedia(notaUmRecebida, notaDoisRecebida) {
    return ((parseFloat(notaUmRecebida) + parseFloat(notaDoisRecebida)) / 2).toFixed(2);
}
