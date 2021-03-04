import React from 'react';

import ListaAmigos from '../ListaAmigos/ListaAmigos'

import './Lobby.css'

const Lobby = () => {
    return(
        <div className="lobby-container">
            <div className="navbar">
                <button className="button-jogo">
                    <img src="LolBrabo.png" alt="logoJogar" className="logo-botao"></img>
                JOGAR
                </button>

                <div className="lista-buttons">
                    <ul>
                        <li>Inicio</li>
                        <li>Perfil</li>
                        <li>Coleção</li>
                    </ul>
                </div>
            </div>
                    <div className="button-lobby">
                        <div className="lista">
                            <ListaAmigos />
                        </div>
                        
                    </div>
                </div>
    );
}

export default Lobby;