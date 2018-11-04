import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './paginas/Home/Home'
import Navbar from './componentes/Navbar/Navbar'
import QuemSomos from './paginas/QuemSomos/QuemSomos';
import Contato from './paginas/Contato/Contato';
import Conta from './paginas/Conta/Conta';
import Login from './paginas/Login/Login';
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada';
import './index.css'

let usuario = JSON.parse(localStorage.getItem('usuario'))

function logaUsuaria(dados) {
    const json = JSON.stringify(dados)
    localStorage.setItem('usuario', json)
    usuario = dados
}

function deslogaUsuaria(){
    localStorage.removeItem('usuario')
    usuario = null
}

function App(){
    return(
        <div className="app">
        <Navbar usuario={usuario} deslogaUsuaria={deslogaUsuaria}/>

        <Switch>
            <Route path="/"  exact render={ () => {
                return usuario ? <Home /> : <Redirect to="/login"/>
            }}/>
            <Route path="/quemsomos" component={QuemSomos}/>
            <Route path="/contato" component={Contato}/>
            <Route path="/conta" component={Conta}/>
            <Route path="/login" render={(props) => {
                return <Login historico={props.history} onEnviar={logaUsuaria} />
            }}/>
            <Route component={NaoEncontrada}/>
        </Switch>
        </div>
    )
}

ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('projeto'))
