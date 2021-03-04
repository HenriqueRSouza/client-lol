import React, { Component } from 'react'
import api from '../api'

class Amigos extends Component{
    state = {
        nomes: [],
    }

    async componentDidMount() {
        const response = await api.get('/');

        this.setState({ nomes: response.data });
    }

    render() {
        const {nomes} = this.state;
        
        return(
            <div className="lista-amigos">
                <h1>Lista de amigos</h1>
                {nomes.map(nome =>(
                    <li key={nome}>
                        <h2>
                            {nome.name}
                        </h2>
                        <p>
                            {nome.elo}
                        </p>
                    </li>
                ))}
            </div>
        );
    }
}

export default Amigos;