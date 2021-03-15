import React from 'react';
import './Login.css';

import { Link } from 'react-router-dom';
import { Button } from '../../Components/Button';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-formulario">
        <div className="login-content">
          <img src="LolBrabo.png" alt="logo" />
          <h1>Insira sua Conta Riot</h1>

          <div className="label-float">
            <input type="text" id="dado" placeholder="NOME" />
          </div>

          <div className="label-float">
            <input type="password" id="dado" placeholder="SENHA" />
          </div>

          <div type="checkbox" className="confirma">
            <input type="checkbox" />
            <label>Mantenha conectado</label>
          </div>
          <Link to="/lobby">
            <Button
              className="btn"
              buttonSize="btn--medium"
              buttonStyle="btn--primary"
            >
              <i className="fas fa-arrow-right" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
