import React, { useState } from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiConfig from '../../../config.api.json';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const BASE_URL = apiConfig.URL_API.replace(/\/$/, '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token || data.token);
        navigate('/foundly-itens');
      } else {
        toast.error('E-mail ou senha inválidos!');
      }
    } catch (err) {
      toast.error('Erro ao conectar com o servidor.');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    toast.info('Essa funcionalidade esta em desenvolvimento!');
  };

  return (
    <div className="form-container-login">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="login-text">
        <div>
          <h1>
            Registre, busque e <br /> encontre{' '}
          </h1>
          <h2>
            O Foundly <br /> cuida do resto
          </h2>
        </div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-title">
          <h1>
            Bem vindo ao <span>Foundly!</span>
          </h1>
        </div>
        <div className="login-form-input-email">
          <input
            type="email"
            placeholder="e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="login-form-input-password">
          <input
            type="password"
            placeholder="senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="fa-solid fa-key"></i>
        </div>
        <a href="#" onClick={handleForgotPassword}>
          {' '}
          Esqueci a senha{' '}
        </a>
        <button className="form-login-button" type="submit">
          {' '}
          Entrar{' '}
        </button>
        <div className="login-form-title-botton">
          <h1>
            Ainda não possui uma conta?{' '}
            <span>
              {' '}
              <Link to="/register">Cadastre-se!</Link>{' '}
            </span>
          </h1>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
