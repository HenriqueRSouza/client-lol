import React from 'react';
import './ListaGames.css';

import { Link } from 'react-router-dom';
import { MenuGames } from '../MenuItems/MenuGames';

const ListaGames = () => {
  return (
    <div className="lista-games-container">
      <ul>
        {MenuGames.map((item, index) => {
          return (
            <ul key={index} className='games-ul'>
              <Link className="text-games" to={item.path}>
                <h3>{item.champ}</h3>
                <p>{item.temp}, minutos</p>
              </Link>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaGames;
