import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const NavGames = () => {
  const NavgamesContainer = styled.div`
    
  `;
  const LinkStyled = styled(Link)`
    color:white;  
    &+&{
      margin-left: 20px;
      color: white;
    } 
  `;

  return (
    <NavgamesContainer> 
      <LinkStyled to="/">Partidas</LinkStyled>
      <LinkStyled to="/">Tudo</LinkStyled>
      <LinkStyled to="/">Replays</LinkStyled>
      <LinkStyled to="/">Ranked</LinkStyled>
    </NavgamesContainer>
  );
};

export default NavGames;
