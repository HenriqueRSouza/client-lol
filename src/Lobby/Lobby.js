import React from 'react';
import {Link} from 'react-router-dom'

import ListaAmigos from '../ListaAmigos/ListaAmigos'

import './Lobby.css'

const Lobby = () => {
    return(
        <div className="navbar-container">
            <div className="navbar">
                <button className="button-jogo">
                    <img src="LolBrabo.png" alt="logoJogar" className="logo-button"></img>
                JOGAR
                </button>

            <div className="lista-button">
                <ul>
                    <Link className='link'><li>Inicio</li></Link>
                    <Link className='link'><li>Perfil</li></Link>
                    <Link className='link'><li>Coleção</li></Link>
                    <Link className='link'><li>Amigos</li></Link>
                </ul>
            </div>

            <div className='imagem-de-invocador'>
                <Link to="/">
                    <img src="nomeInvocador.jpg" alt="invocador"></img>
                    <p>HikeLost</p>
                </Link>
            </div>

            <div className="cards">
                <video src="https://www.youtube.com/watch?v=hwLIKeDFXMY"></video>
            </div>

            </div>                  
        </div>
    );
}

export default Lobby;