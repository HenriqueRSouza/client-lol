import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import Dropdown from '../Dropdown/Dropdown'

import './Lobby.css'

const Lobby = () => {
    const [dropdown, setDropdown] = useState(false);
    
    const handleClick = () => setDropdown(!dropdown);
    const closeMenu = () => setDropdown(false);

    return(
        <div className="navbar-container">
            <div className="navbar">
                <button className="button-jogo">
                    <img src="LolBrabo.png" alt="logoJogar" className="logo-button"></img>
                JOGAR
                </button>

            <div className="lista-button">
                <ul>
                    <Link className='link' onClick={closeMenu}><li>Inicio</li></Link>
                    <Link className='link' onClick={closeMenu}><li>Perfil</li></Link>
                    <Link className='link' onClick={closeMenu}><li>Coleção</li></Link>
                    <Link className='link'>
                    <li
                        className="nav-item"
                        onClick={handleClick}
                    >Amigos
                    {dropdown && <Dropdown/>}
                    </li></Link>
                </ul>
            </div>

            <div className='imagem-de-invocador'>
                <Link to="/">
                    <img src="nomeInvocador.jpg" alt="invocador"></img>
                    <p>HikeLost</p>
                </Link>
            </div>  
        </div>               
    </div>
    );
}

export default Lobby;