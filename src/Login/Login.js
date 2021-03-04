import React from 'react'
import './Login.css'

import Button from '../Button/Button'
import { Link } from 'react-router-dom';

const Login = () => {
    return(
    <div className="login-container">
        <div className="login-formulario">
            <div className="login-content">
                <img src="LolBrabo.png" alt="logo"></img>

                    <h1>Insira sua Conta Riot</h1>

            <div className="label-float" >
                <input type="text" id="dado" placeholder="NOME"></input>
            </div>

            <div className="label-float">
                <input type="password" id="dado" placeholder="SENHA"></input>
            </div>

            <div type="checkbox"className="confirma">
                <input type="checkbox" ></input>
                <label>Mantenha conectado</label>
            </div>
            <Link to="/lobby">
                <Button
                    className="btn"
                    buttonSize="btn--medium"
                    buttonStyle="btn--primary"
                >
                <i className="fas fa-arrow-right"></i></Button>            
            </Link>

            </div>
        </div>
    </div>
    );
}

export default Login