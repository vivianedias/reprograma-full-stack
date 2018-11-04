import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

// <Menu usuario={props.usuario} />

class Menu extends Component{
    constructor(props) {
        super (props)
        this.state = { aberto: false }
    }

abreOuFechaMenu = (evento) => {
    if (this.state.aberto) {
        this.setState({ aberto: false })
      } else {
        this.setState({ aberto: true })
      }
}

sair = () =>{
    this.abreOuFechaMenu()
    this.props.deslogaUsuaria()
}
    render () {
        let classesDoBotao = 'navbar-menu__botao'
        let classesDasOpcoes = 'navbar-menu__opcoes'
        
        if(this.state.aberto){
            classesDoBotao += ' navbar-menu__botao--aberto'
            classesDasOpcoes += ' navbar-menu__opcoes--aberto'
        }
        return (
            <nav className="navbar-menu">
                <a className={classesDoBotao} onClick={this.abreOuFechaMenu}>Menu</a>
                <ul className={classesDasOpcoes}>
                    <li>
                        <NavLink activeClassName="navbar-menu__opcoes--ativo" to="/quemsomos" onClick={this.abreOuFechaMenu}>Quem Somos</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="navbar-menu__opcoes--ativo" to="/contato" onClick={this.abreOuFechaMenu}>Contato</NavLink>
                    </li>
                {this.props.usuario ? (
                    <li>
                        <NavLink activeClassName="navbar-menu__opcoes--ativo" to="/login" onClick={this.sair}>Sair</NavLink>
                    </li>
                ) : (
                    <li>
                        <NavLink activeClassName="navbar-menu__opcoes--ativo" to="/login" onClick={this.abreOuFechaMenu}>Login</NavLink>
                    </li>
                )}
                </ul>
            </nav>
        )
    }
}

export default Menu