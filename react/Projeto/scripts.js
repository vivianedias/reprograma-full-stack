const linkCriarUmaConta = document.createElement('a')
linkCriarUmaConta.className = 'link'
linkCriarUmaConta.href = '/conta'
linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'))

const fazerLogin = document.createElement('a')
fazerLogin.className = 'link'
fazerLogin.href = '/login'
fazerLogin.appendChild(document.createTextNode('Fazer login'))

const divisaoProjeto = document.getElementById('projeto')

const form = document.createElement('form')
form.appendChild(linkCriarUmaConta)
form.appendChild(fazerLogin)
divisaoProjeto.appendChild(form)






