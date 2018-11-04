import React from 'react'
import logo from './logo.png'
import Menu from '../../componentes/Menu/Menu'
import './Navbar.css'

// <Navbar usuario={usuario} />
// const props = {usuario: usuario, deslogaUsuario: deslogaUsuario}
function Navbar(props) {
    return (
        <header className="navbar">
            <a href="/">
                <img className="navbar__logo" src={logo} alt="Logo" />
            </a>

            <Menu usuario={props.usuario} deslogaUsuaria={props.deslogaUsuaria}/>
        </header>
    )
}

export default Navbar 