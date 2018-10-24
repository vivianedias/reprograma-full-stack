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


    //React Puro
//React.createElement(Nome da tag, atributos que esperamos que a tag receba)
/*const linkCriarUmaConta = React.createElement('a', {className: 'link', href: '/conta', children: 'Criar uma conta'})
const fazerLogin = React.createElement('a', {className: 'link', href: '/login', children: 'Fazer Login'})
const formularioLogin = React.createElement('form', {
    children:[linkCriarUmaConta, fazerLogin]
})*/

/*
const linkCriarUmaConta = <a class="link" href="/conta">Criar uma conta</a>
const fazerLogin = <a class="link" href="/login">Fazer Login</a>

const formularioLogin = (
    <form>
        {linkCriarUmaConta}
        {fazerLogin}
    </form>
)

//React tem um DOM próprio, a biblioteca do REACT só faz possível que nós criemos elementos. O React DOM faz uma conexão com o DOM real.
//só aceita dois parâmetros - ReactDOM.render(elementReact, tagHTML)
const divisaoProjeto = document.getElementById('projeto')

ReactDOM.render(formularioLogin, divisaoProjeto)
*/

function Link(props){
    return(
        <a className="link" href={props.url}>
            {props.children}
        </a>
    )   
}

//<button id="adicionar-aluno" class="botao bto-principal">Adicionar</button>
function Botao(props){
    let classes = 'botao'

    if (props.desabilitado){
        classes += " botao--desabilitado"
    }
    return (
        <input className={classes} type="submit" value={props.children}/>
    )
}

const paginaLogin = (
    <main className="pagina-login">
        <h1>Login</h1>
        <p>Entre com seu e-mail e senha.</p>
        <Link url="/conta">Criar uma conta</Link>
        <Link url="/login">Fazer login</Link>
        <Botao>Enviar</Botao>
        <Botao desabilitado={true}>Enviar</Botao>
    </main>
)



const divisaoProjeto = document.getElementById('projeto')
ReactDOM.render(paginaLogin, divisaoProjeto)