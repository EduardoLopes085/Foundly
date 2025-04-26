import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';
import logoFoundly from '../../assets/logo-foundly.svg';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-bg-anim" />
      <img src={logoFoundly} alt="Logo Foundly" className="notfound-logo" />
      <h1 className="notfound-title">
        <span className="notfound-glitch" data-text="404">404</span>
      </h1>
      <h2 className="notfound-subtitle">Página não encontrada</h2>
      <p className="notfound-text">
        Opa! Você se perdeu no universo Foundly.<br />
        Mas não se preocupe, te ajudamos a voltar!
      </p>
      <div className="notfound-actions">
        <button className="notfound-btn" onClick={() => navigate(-1)}>
          Voltar
        </button>
        <Link className="notfound-btn" to="/foundly-itens">
          Ir para a Home
        </Link>
      </div>
      <div className="notfound-footer">foundly</div>
    </div>
  );
}