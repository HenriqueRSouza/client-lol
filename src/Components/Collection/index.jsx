import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const Collection = () => {
  const Collections = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    color: white;
    margin: auto;

    justify-content: flex-start;
    align-items: center;
    text-align: center;
      
    background-image: url('../../assets/PlanoDeLobby2.jpg');
    background-position-x: right;
    background-size: 100% 100vh;
    background-repeat: no-repeat;
  `;
      
  const Collect = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
  `; 
  const Links = styled.div`
    width: 100%;
    height: 30px;

    display: flex;
    top: 0;
  `; 
  const LinkStyled = styled(Link)`
    width: 100%;
    color: white;
  `;

  const Maestria = styled.h1`
    width: 20%;
    display: flex;
    font-size: 20px;

    margin: 0;

    top: 0;
  `;

  return (
    <Collections>
      <Collect>
        <Links>
          <LinkStyled to="/">Campeões</LinkStyled>
          <LinkStyled to="/">Skins</LinkStyled>
          <LinkStyled to="/">Emotes</LinkStyled>
          <LinkStyled to="/">Runas</LinkStyled>
          <LinkStyled to="/">Feitiços</LinkStyled>
          <LinkStyled to="/">Item</LinkStyled>
          <LinkStyled to="/">Icones</LinkStyled>
        </Links>

        <Maestria>
          <h1>331 pontos de maestria</h1>
        </Maestria>
      </Collect>
    </Collections>
  );
};

export default Collection;
