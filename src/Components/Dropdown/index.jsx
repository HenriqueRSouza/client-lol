import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { MenuItems } from '../MenuItems/MenuItems';

import './Dropdown.css';

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className="dropdown-link" to={item.path}>
                <h3>{item.name}</h3>
                <p>{item.elo}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
