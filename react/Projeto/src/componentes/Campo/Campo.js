import React, { Component } from 'react'
import './Campo.css'

/*
1) O componente pode mudar de estado? Sim // Class
2) O que muda? setState({ erro: '' }) ou  // setState({ erro: '' })
3) Qual o estado inicial? state = { erro: '' } // constructor
4) O que faz ele mudar?
// function onChange pra verificar se devemos exibir mensagem de erro
- Email: obrigatório e válido
- Senha: obrigatório e 6 caracteres
*/
class Campo extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      modificado: false, 
      erro: '' 
    }
  }

  temErro = () => {
    if ((this.props.required && !this.state.modificado) || this.state.erro) {
      return true
    } else {
      return false
    }
  }

  valida = (evento) => {
    const input = evento.target
    const { value, type } = input
    const { required, minLength } = this.props
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let mensagem = ''

    if (required && value.trim() === '') {
      mensagem = 'Campo obrigatório'
    } else if (minLength && value.length < minLength) {
      mensagem = `Digite pelo menos ${minLength} caracteres`
    } else if (type === 'email' && !regex.test(value)) {
      mensagem = 'Valor inválido'
    }

    this.setState(
      { modificado: true, erro: mensagem }, 
      this.props.onChange
    )
  }

  render() {
    return (
      <div>
        <input 
          id={this.props.id}
          className="campo"
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.valida}
          onBlur={this.valida}
        />

        <p className="campo__erro">{this.state.erro}</p>
      </div>
    )
  }
}

export default Campo