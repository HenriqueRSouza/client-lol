import React from 'react';
import ListaGames from '../ListaGames/ListaGames'
import NavGames from './Navbar';

import styled from 'styled-components';

const Perfil = () => {
  const PerfilContainer = styled.div`
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
  
  const Perfil = styled.div`
    width: 100%;
    display: grid;
  `;
    
  return (
    <PerfilContainer>
      <Perfil>
        <NavGames />
        <ListaGames />
      </Perfil>
    </PerfilContainer>
  );
};
export default Perfil;
