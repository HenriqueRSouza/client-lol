import React, {useState} from  'react';

import { MenuItems } from '../MenuItems/MenuItems';

import './Dropdown.css';
import { Link } from 'react-router-dom';

const DropDown = () =>{
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <>
            <ul 
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link
                                className="dropdown-link"
                                to={item.path}
                            >
                            <h3>{item.name}</h3>
                            <p>{item.elo}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );

}

export default DropDown;