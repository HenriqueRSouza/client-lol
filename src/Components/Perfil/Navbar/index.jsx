import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const NavGames = () => {
  return (
    <div className="navgames-container"> 
      <Link to="/">Partidas</Link>
      <Link href="">Tudo</Link>
      <Link href="">Replays</Link>
      <Link href="">Ranked</Link>
    </div>
  );
};

export default NavGames;
