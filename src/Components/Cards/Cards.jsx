import React from 'react';
import { Link } from 'react-router-dom';

const Cards = () =>{
  return(
    <div className="cards-container">
      <div className="cards">
        <Link>
          <img src="" alt=""></img>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde qui dignissimos animi commodi corporis! Voluptatem ut aut dolore. Veritatis perspiciatis quis optio repellat error beatae facilis tempora minus vero veniam!</p>
        </Link>
        <Link>
          <img src="" alt=""></img>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde qui dignissimos animi commodi corporis! Voluptatem ut aut dolore. Veritatis perspiciatis quis optio repellat error beatae facilis tempora minus vero veniam!</p>
        </Link>
        <Link>
          <img src="" alt=""></img>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde qui dignissimos animi commodi corporis! Voluptatem ut aut dolore. Veritatis perspiciatis quis optio repellat error beatae facilis tempora minus vero veniam!</p>
        </Link>
      </div>
    </div>
  );
}

export default Cards;