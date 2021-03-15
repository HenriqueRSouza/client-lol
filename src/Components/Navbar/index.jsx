import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';

import './Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setDropdown(!dropdown);
  const closeMenu = () => setDropdown(false);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link className="button-jogo" to="/jogar">
          <img src="LolBrabo.png" alt="logoJogar" className="logo-button" />
          JOGAR
        </Link>

        <div className="lista-button">
          <ul className='navbar-ul'>
            <Link className="link-start" onClick={closeMenu} to="/lobby">
              <li className="navbar-li">Inicio</li>
            </Link>
            <Link className="link-profile" onClick={closeMenu} to="/perfil">
              <li className="navbar-li">Perfil</li>
            </Link>
            <Link className="link-collect" onClick={closeMenu} to="/collection">
              <li className="navbar-li">Coleção</li>
            </Link>
            <Link className="link-friend" href="/">
              <li className="nav-item" onClick={handleClick}>
                Amigos
                <i className="fas fa-arrow-right" id="logo-logo"></i>
                {dropdown && <Dropdown />}
              </li>
            </Link>
          </ul>
        </div>

        <div className="imagem-de-invocador">
          <Link to="/">
            <img src="nomeInvocador.jpg" alt="imagem" />
            <p>HikeLost</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
