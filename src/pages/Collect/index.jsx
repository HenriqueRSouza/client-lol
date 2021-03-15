import React from 'react'
import styled from 'styled-components';

import Collection from '../../Components/Collection/'
import Navbar from '../../Components/Navbar';

const Collect = () => {
    const LobbyContainer  = styled.div`
        width: 100%;
        height: 100vh;

        display: flex;  
        font-family: 'Roboto';
        
        justify-content: flex-start;

        background-image: url('../../assets/PlanoDeLobby2.jpg');
        background-position-x: right;
        background-size: 100% 100vh;
        background-repeat: no-repeat;
  `;
    return(
        <div className="lobby-container">
            <Navbar />
            <Collection />
        </div>
    );
}

export default Collect;