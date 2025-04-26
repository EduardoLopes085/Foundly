import React, { useEffect, useState } from 'react';
import accountCircle from '../../assets/account_circle.svg';
import '../RegisterItem/Register.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import apiConfig from '../../../config.api.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(true);

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
          setName(data.name || '');
          setEmail(data.email || '');
          setTelefone(data.telefone || '');
        }
      } catch {}
      setLoading(false);
    };
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const userId = payload?.id;
      if (!userId) return;
      const response = await fetch(
        `${apiConfig.URL_API.replace(/\/$/, '')}/api/users/${userId}`,
        {
          method: 'PUT',
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            telefone,
          }),
        },
      );
      if (response.ok) {
        toast.success('Perfil atualizado com sucesso!');
      } else {
        toast.error('Erro ao atualizar perfil.');
      }
    } catch {
      toast.error('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="card-total">
      <ToastContainer position="top-center" autoClose={2500} />
      <NavigationBar />

      <div className="card-form">
        <form className="cadastrar-form" onSubmit={handleSubmit}>
          <div className="cadastrar-header">
            <h1>Editar Perfil</h1>
          </div>

          <div
            className="campo-nome"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              marginBottom: '16px',
            }}
          >
            <p style={{ alignSelf: 'center' }}>Nome Completo</p>
            <input
              className="input-cadastrar"
              type="text"
              placeholder="Digite seu nome completo"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '350px',
                marginTop: '6px',
              }}
            />
          </div>

          <div
            className="campo-email"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              marginBottom: '16px',
            }}
          >
            <p style={{ alignSelf: 'center' }}>Email</p>
            <input
              className="input-cadastrar"
              type="email"
              placeholder="Digite seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '350px',
                marginTop: '6px',
              }}
            />
          </div>

          <div
            className="campo-telefone"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              marginBottom: '16px',
            }}
          >
            <p style={{ alignSelf: 'center' }}>Telefone</p>
            <input
              className="input-cadastrar"
              type="text"
              placeholder="Digite seu telefone"
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '350px',
                marginTop: '6px',
              }}
            />
          </div>

          <div
            className="campo-senha"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              marginBottom: '16px',
            }}
          >
            <p style={{ alignSelf: 'center' }}>Nova Senha</p>
            <input
              className="input-cadastrar"
              type="password"
              placeholder="Digite sua nova senha"
              style={{
                width: '100%',
                maxWidth: '350px',
                marginTop: '6px',
              }}
            />
          </div>

          <div
            className="campo-senha"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              marginBottom: '16px',
            }}
          >
            <p style={{ alignSelf: 'center' }}>Confirme a Nova Senha</p>
            <input
              className="input-cadastrar"
              type="password"
              placeholder="Confirme sua nova senha"
              style={{
                width: '100%',
                maxWidth: '350px',
                marginTop: '6px',
              }}
            />
          </div>

          <button className="button-salvar" type="submit" disabled={loading}>
            SALVAR ALTERAÇÕES
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
