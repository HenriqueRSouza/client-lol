import React from 'react';
import ListaGames from '../ListaGames/ListaGames'
import NavGames from './Navbar';

import './Perfil.css';

const Perfil = () => {
  return (
    <>
      <div className="perfil-container">
        <div className="perfil">
          <NavGames />
          <ListaGames />
        </div>
      </div>
    </>
  );
};
export default Perfil;
