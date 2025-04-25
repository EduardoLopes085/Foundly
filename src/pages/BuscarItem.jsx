import React from 'react';
import './buscarItem.css';
import avatar from '../assets/avatar.png';
import { FaList, FaPencilAlt, FaSearch, FaSignOutAlt } from 'react-icons/fa';

function BuscarItem() {
  return (
    <div className="buscar-item-container">
      <div className="menu-bar">
        <img src={avatar} alt="Avatar" className="avatar-img" />
        <p className="user-name">Ingrid Almeida</p>
        
        <a href="#" className="menu-link">
          <FaList /> Meus achados
        </a>
        <a href="#" className="menu-link">
          <FaPencilAlt /> Editar perfil
        </a>
        <a href="#" className="menu-link">
          <FaSearch /> Buscar item perdido
        </a>

        <a href="#" className="menu-link logout-link">
          <FaSignOutAlt /> Sair
        </a>
      </div>

      <div className="content-box">
        <h1>O que você perdeu?</h1>
        
        {/* Barra de pesquisa  */}
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Buscar um item perdido" 
            className="search-input"
          />
        </div>
        
        {/* Filtros  abaixo da barra de pesquisa */}
        <div className="filter-section">
          <div className="filter-column">
            <h3>Categoria</h3>
            <select className="custom-select">
              <option value="">Todas categorias</option>
              <option value="carteiras">Carteiras</option>
              <option value="papelaria">Papelaria</option>
              <option value="chaves">Chaves</option>
              <option value="bolsas">Bolsas</option>
              <option value="eletronicos">Eletrônicos</option>
            </select>
          </div>
          
          <div className="filter-column">
            <h3>Localização</h3>
            <select className="custom-select">
              <option value="">Todas localizações</option>
              <option value="shopping-iguatemi">Shopping Iguatemi</option>
              <option value="ponte-ingleses">Ponte dos Ingleses</option>
              <option value="shopping-riomar">Shopping Riomar</option>
              <option value="praca-ferreira">Praça do Ferreira</option>
            </select>
          </div>
          
          <div className="filter-column">
            <h3>Status</h3>
            <select className="custom-select">
              <option value="">Todos status</option>
              <option value="encontrado">Encontrado</option>
              <option value="perdido">Perdido</option>
            </select>
          </div>
        </div>
        
        <div className="footer">
          <span>fQundly</span>
          
        </div>
      </div>
    </div>
  );
}

export default BuscarItem;