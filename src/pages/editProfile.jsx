import React from 'react';
import './editProfile.css';
import NavigationBar from '../components/navigationBar/navigationBar'; // importa a barra de navegação

function EditProfile() {
  return (
    <div className="edit-profile-page">
      {/* Barra lateral cinza */}
      <NavigationBar />

      {/* Conteúdo principal da página */}
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
