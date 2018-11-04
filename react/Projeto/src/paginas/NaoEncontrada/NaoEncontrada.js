import React from 'react'
import Imagem from './404.jpg'
import './NaoEncontrada.css'

function NaoEncontrada() {
    return (
        <main className="nao-encontrada">
            <h1>Página não encontrada</h1>
            <p className="nao-encontrada__simbolo">
            :-(
            </p>
            <img src={Imagem} alt="Cachorrinho não encontrado"/>
        </main>
    )
}

export default NaoEncontrada