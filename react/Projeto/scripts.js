/* const linkCriarUmaConta = document.createElement('a')
linkCriarUmaConta.className = 'link'
linkCriarUmaConta.href = '/conta'
linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'))

const fazerLogin = document.createElement('a')
fazerLogin.className = 'link'
fazerLogin.href = '/login'
fazerLogin.appendChild(document.createTextNode('Fazer login'))

const form = document.createElement('form')
form.appendChild(linkCriarUmaConta)
form.appendChild(fazerLogin)

divisaoProjeto.appendChild(form)*/

//React.createElement(Nome da tag, atributos que esperamos que a tag receba)
const linkCriarUmaConta = React.createElement('a', {className: 'link', href: '/conta', children: 'Criar uma conta'})
const fazerLogin = React.createElement('a', {className: 'link', href: '/login', children: 'Fazer Login'})

const formularioLogin = React.createElement('form', {
    children:[linkCriarUmaConta, fazerLogin]
})

//React tem um DOM próprio, a biblioteca do REACT só faz possível que nós criemos elementos. O React DOM faz uma conexão com o DOM real.
//só aceita dois parâmetros - ReactDOM.render(elementReact, tagHTML)
const divisaoProjeto = document.getElementById('projeto')
ReactDOM.render(formularioLogin, divisaoProjeto)