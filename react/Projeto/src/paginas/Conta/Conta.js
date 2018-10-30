import React, { Component } from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Conta.css'

class Conta extends Component {
  constructor(props) {
    super(props)
    this.nomeRef = React.createRef()
    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()
    this.state = { desabilitado: true }
  }

  habilitaOuDesabilita = () => {
    const campoNome = this.nomeRef.current
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    if (campoEmail.temErro() || campoSenha.temErro() || campoNome.temErro()) {
      this.setState({ desabilitado: true })
    } else {
      this.setState({ desabilitado: false })
    }
  }

  render() {
    return (
      <main className="conta">
      <h1>Conta</h1>
      <p>Envie o formulário para criar uma conta!</p>
      
      <Legenda htmlFor="nome">Nome:</Legenda>
      <Campo 
        ref={this.nomeRef}    
        id="nome" 
        type="text" 
        name="nome" 
        placeholder="Nome" 
        required
        onChange={this.habilitaOuDesabilita}
      />
      
      <Legenda htmlFor="telefone">Telefone:</Legenda>
      <Campo 
        ref={this.telRef}
        id="telefone" 
        type="tel" 
        name="telefone" 
        placeholder="Telefone"
      />
      
      <Legenda htmlFor="email">Email:</Legenda>
      <Campo 
        ref={this.emailRef}
        id="email" 
        type="email" 
        name="email"
        placeholder="Email"
        required
        onChange={this.habilitaOuDesabilita}
      />
      
      <Legenda htmlFor="senha">Senha:</Legenda>
      <Campo 
        ref={this.senhaRef}
        id="senha" 
        type="password" 
        name="senha"
        placeholder="Senha"
        required
        minLength={6}
        onChange={this.habilitaOuDesabilita}
      />
      
      <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>

      <Link url="/conta">Criar Conta</Link>
    </main>
    )
  }
}

export default Conta