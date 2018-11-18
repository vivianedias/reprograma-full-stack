//pegar o content do 'nome da transação'
//pegar o content do 'valor'
//pegar o content da 'data'

//selecionar o botão
//escrever os inputs na tabela ao apertar o botão 'criar transação' -- mãe <tbody> first-child <tr> second-child <td>
//append tr ao td

const btn = document.querySelector('.transacao__button');

btn.addEventListener('click', function(event){
    event.preventDefault();
    conditioName();

    const tBody = document.querySelector('#tBody');
    const row = document.createElement("tr");
    tBody.appendChild(row);

    const inputName = document.getElementById("transacaoInputName"); //pegar o input
    const tdName = document.createElement("td");  //criar coluna
    const tdNameText = document.createTextNode(inputName.value); //inserir o texto do input no td
    tdName.appendChild(tdNameText); //texto vai ser filho da coluna

    const inputMoney = document.getElementById("transacaoInputMoney");
    const tdMoney = document.createElement("td")
    const tdMoneyText = document.createTextNode(inputMoney.value);
    tdMoney.appendChild(tdMoneyText);

    const inputDate = document.getElementById("transacaoInputDate");
    const tdDate = document.createElement("td")
    const tdDateText = document.createTextNode(inputDate.value);
    tdDate.appendChild(tdDateText);

    row.appendChild(tdName);
    row.appendChild(tdDate);
    row.appendChild(tdMoney);

});

function conditioName(){
    const validacao = document.querySelector(".validacao");
    //const inputName = document.getElementById("transacaoInputName");
    //const inputMoney = document.getElementById("transacaoInputMoney");
    //const inputDate = document.getElementById("transacaoInputDate");

    var inputs = [];
    inputs[0] = document.getElementById("transacaoInputName");
    inputs[1] = document.getElementById("transacaoInputMoney");
    inputs[2] = document.getElementById("transacaoInputDate");
    for( i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "" ){
            validacao.textContent = "Campo obrigatório";
            document.querySelector('.validacao').style.color = 'red';
            return false;
        } else{
            return true;
        }
    }
}