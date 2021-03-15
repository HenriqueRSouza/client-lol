import React from 'react';
import { Link } from 'react-router-dom';

import './Collection.css';

const Collection = () => {
  return (
    <div className="collection-container">
      <div className="collection">
        <div className="links-collection">
          <Link href="/">Campeões</Link>
          <Link href="/">Skins</Link>
          <Link href="/">Emotes</Link>
          <Link href="/">Runas</Link>
          <Link href="/">Feitiços</Link>
          <Link href="/">Item</Link>
          <Link href="/">Icones</Link>
        </div>
        <div className="maestria">
          <h1>331 pontos de maestria</h1>
        </div>
      </div>
    </div>
  );
};
export default Collection;
