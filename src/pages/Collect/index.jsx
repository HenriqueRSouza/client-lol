import React from 'react'

import Collection from '../../Components/Collection/'
import Navbar from '../../Components/Navbar';

const Collect = () => {
    return(
        <div className="lobby-container">
            <Navbar />
            <Collection />
        </div>
    );
}

export default Collect;