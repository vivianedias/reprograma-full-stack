//pegar o content do 'nome da transação'
//pegar o content do 'valor'
//pegar o content da 'data'

//selecionar o botão
//escrever os inputs na tabela ao apertar o botão 'criar transação' -- mãe <tbody> first-child <tr> second-child <td>
//append tr ao td

//ref + valor
//criar linha
//criar coluna - 3
    //valor + append - nome para td, da minha td para minha tr
    //append das três colunas na tr
    //append da tr para table 

const button = document.querySelector(".transacao_button");

button.addEventListener('click', function(event){
    event.preventDefault();

    const tabela = document.querySelector(".extrato__table");

    const inputName = document.getElementById("transacaoInputName")
    const colunaName = document.createElement("td")
    const colunaNameText = document.createTextNode(inputName.value)
    colunaName.appendChild(colunaNameText);

    const inputMoney = document.getElementById("transacaoInputMoney")
    const inputDate = document.getElementById("transacaoInputDate")

    const linha = document.createElement("tr");
    

    const colunaValor = document.createElement("td");
    const colunaValorText = document.createTextNode(inputMoney.value);
    colunaValor.appendChild(colunaValorText)

    const colunaData = document.createElement("td");
    const colunaDataText = document.createTextNode(inputData.value);
    colunaData.appendChild(colunaDataText)

    linha.appendChild(colunaNome);
    linha.appendChild(colunaValor);
    linha.appendChild(colunaData);
});