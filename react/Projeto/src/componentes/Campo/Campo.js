import React from 'react'
import './Campo.css'

class Campo extends React.Component {
  constructor(props){
    super(props)
      this.state = { erro: "" } 
    }

  valida = (evento) => {
    const input = evento.target

    if(this.props.required && input.value.trim() === ''){
      this.setState({erro: 'Campo Obrigatório'})
    } else if(this.props.minLength && input.value.length < this.props.minLength ){
        this.setState({erro: `Digite pelo menos ${this.props.minLength} caracteres`})
    } else{
      this.setState({erro: ''})
    }
  }

  render() {
    console.log('Quero ver se o render foi chamado')
    console.log(`this.props do campo ${this.props.name}`, this.props)
    return (
      <div>
        <input 
          id={this.props.id}
          className="campo"
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.valida}

        />

      <p className="grupo__erro">{this.state.erro}</p>  
      </div>
    )
  }
}

export default Campo