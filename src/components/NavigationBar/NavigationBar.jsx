import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavigationBar.css';
import accountCircle from '../../assets/account_circle.svg';
import apiConfig from '../../config.api.json';
import logoFoundly from '../../assets/logo-foundly.svg';

function NavigationBar() {
  const [userName, setUserName] = useState('Usuário');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const userId = payload?.id;
        if (!userId) return;
        const response = await fetch(
          `${apiConfig.URL_API.replace(/\/$/, '')}/api/users/${userId}`,
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (response.ok) {
          const data = await response.json();
          setUserName(data.name || 'Usuário');
        }
      } catch (err) {
        setUserName('Usuário');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="navigation-container">
      <div className="user-perfil">
        <img
          className="user-image"
          src={accountCircle}
          alt="foto de perfil do usuário"
        />
        <div className="user-name">{loading ? 'Carregando...' : userName}</div>
      </div>

      <div className="nav-options">
        <Link to="/signup-item">
          <i className="fa-solid fa-plus"></i> Cadastrar item
        </Link>
        <Link to="/foundly-itens">
          <i className="fa-solid fa-bars"></i> Meus achados
        </Link>
        <Link to="/edit-profile">
          <i className="fa-solid fa-pen-to-square"></i> Editar perfil
        </Link>
        <Link to="/search-item">
          <i className="fa-solid fa-magnifying-glass"></i> Buscar item perdido
        </Link>
        <Link to="/edit-item">
          <i className="fa-solid fa-pen"></i> Editar item
        </Link>
      </div>

      <img className="FoundlyLogo" src={logoFoundly} alt="Logo Foundly" />

      <div className="logoff">
        <button onClick={handleLogout} className="logout-btn">
          <i className="fa-solid fa-arrow-up-right-from-square"></i> Sair
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
