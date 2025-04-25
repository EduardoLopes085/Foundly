import React from 'react';
import './editProfile.css';
import avatar from '../assets/avatar.png'; // ajuste o caminho se necessário
import { FaPencilAlt } from 'react-icons/fa'; // Ícone de lista
import { FaList } from 'react-icons/fa'; // ícone de lista
import { FaSearch } from 'react-icons/fa'; // ícone de lupa
import { FaSignOutAlt } from 'react-icons/fa'; // ícone de logout

function EditProfile() {
  return (
    <div className="edit-profile-container">
      <div className="menu-bar">
        <img src={avatar} alt="Avatar" className="avatar-img" />
        <p className="user-name">Ingrid Almeida</p>
        
        {/* Menu com Meus Achados, Editar perfil e Buscar item perdido */}
        <a href="#" className="menu-link">
          <FaList style={{ marginRight: '8px' }} />
            Meus achados
        </a>
        <a href="#" className="menu-link">
          <FaPencilAlt style={{ marginRight: '8px' }} />
            Editar perfil
        </a>
        <a href="#" className="menu-link">
          <FaSearch style={{ marginRight: '8px' }} />
            Buscar item perdido
        </a>

        {/* Link Sair */}
        <a href="#" className="menu-link logout-link">
          <FaSignOutAlt style={{ marginRight: '8px' }} />
            Sair
        </a>
      </div>

      {/* Barra de edição de perfil */}
      <div className="rounded-box">
        <h1>Editar Perfil</h1>

        {/* Formulário para editar os dados */}
        <form className="edit-profile-form">
          <label htmlFor="full-name">Nome Completo</label>
          <input
            type="text"
            id="full-name"
            placeholder="Digite seu nome completo"
            className="form-input"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            className="form-input"
          />

          <label htmlFor="phone">Telefone</label>
          <input
            type="text"
            id="phone"
            placeholder="Digite seu telefone"
            className="form-input"
          />

          <label htmlFor="new-password">Nova Senha</label>
          <input
            type="password"
            id="new-password"
            placeholder="Digite sua nova senha"
            className="form-input"
          />

          <label htmlFor="confirm-password">Confirme a Nova Senha</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirme sua nova senha"
            className="form-input"
          />

          {/* Botão Salvar Alterações */}
          <button type="submit" className="save-btn">SALVAR ALTERAÇÕES</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
