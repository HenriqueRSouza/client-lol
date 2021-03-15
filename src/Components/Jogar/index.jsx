import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Navbar from '../Navbar/index'

const Jogar = () => {
  const JogarContainer = styled.div`
    width: 100%;
    height: 100vh;

    margin: auto;

    background: ${props => props.theme.bg};
    font-family: 'Roboto';
  `;
  const JogarLinks = styled.div`
    width: 100%;

    display: flex;
    
    justify-content: center;
    align-items: center;
    align-items: center; 
  `;
  const LinkStyle = styled(Link)`
    width: 100%;
    
    display: flex;
    
    justify-content: center;
    align-items: center;
    align-items: center; 

    color: white;
  `;
  const Games = styled.div`
    width: 100%;
    
    display: grid;
    
    grid-template-columns: repeat(5, 20%);

    justify-content: center;
    align-items: center;
    align-items: center; 
  `;
  const theme = {
    wt: "white",
    bg: "blue"
  };
  
  return (
    <JogarContainer theme={theme}>
      <Jogar>
        <Navbar />

        <JogarLinks>
          <LinkStyle href="/">Personalizada</LinkStyle>
          <LinkStyle href="/">Mode treino</LinkStyle>
          <LinkStyle href="/">Criar Torneio</LinkStyle>
        </JogarLinks>

        <Games>
          <LinkStyle href="/">Normal Game</LinkStyle>
          <LinkStyle href="/">Normal Alternada</LinkStyle>
          <LinkStyle href="/">Solo DUO</LinkStyle>
          <LinkStyle href="/">Solo Flex</LinkStyle>
        </Games>
      </Jogar>
    </JogarContainer>
  );
};

export default Jogar;
