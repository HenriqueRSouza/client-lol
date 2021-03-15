import React from 'react';
import { Link } from 'react-router-dom';

import './Jogar.css';

const Jogar = () => {
  return (
    <div className="jogar-container">
      <div className="jogar">
        <div className="links-jogar">
          <Link href="/">Personalizada</Link>
          <Link href="/">Mode treino</Link>
          <Link href="/">Criar Torneio</Link>
        </div>
        <div className="games">
          <Link href="/">Normal Game</Link>
          <Link href="/">Normal Alternada</Link>
          <Link href="/">Solo DUO</Link>
          <Link href="/">Solo Flex</Link>
        </div>
      </div>
    </div>
  );
};

export default Jogar;
