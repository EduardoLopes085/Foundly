import React, { useEffect, useState } from 'react';
import accountCircle from '../../assets/account_circle.svg';
import '../RegisterItem/Register.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import apiConfig from '../../../config.api.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}

function ModalUpload({ open, onClose, onUpload }) {
  const [file, setFile] = useState(null);

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '32px 24px',
          minWidth: '320px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          textAlign: 'center',
        }}
      >
        <h2>Deseja cadastrar uma imagem para o item?</h2>
        <input
          type="file"
          accept="image/*"
          style={{ margin: '16px 0' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          <button
            style={{
              padding: '8px 24px',
              borderRadius: '6px',
              border: 'none',
              background: '#5B86E5',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={() => file && onUpload(file)}
            disabled={!file}
          >
            Enviar imagem
          </button>
          <button
            style={{
              padding: '8px 24px',
              borderRadius: '6px',
              border: 'none',
              background: '#ccc',
              color: '#333',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={onClose}
          >
            Não cadastrar imagem
          </button>
        </div>
      </div>
    </div>
  );
}

function RegisterItem() {
  const [categorias, setCategorias] = useState([]);
  const [categoriaId, setCategoriaId] = useState(
    () => localStorage.getItem('categoriaId') || '',
  );
  const [loadingCategorias, setLoadingCategorias] = useState(true);
  const [name, setName] = useState('');
  const [descricao, setDescricao] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [contactError, setContactError] = useState('');
  const [observacao, setObservacao] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [lastItemId, setLastItemId] = useState(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      setLoadingCategorias(true);
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(
          `${apiConfig.URL_API.replace(/\/$/, '')}/api/categories`,
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (response.ok) {
          const data = await response.json();
          setCategorias(data);
        }
      } catch (err) {
        setCategorias([]);
      } finally {
        setLoadingCategorias(false);
      }
    };
    fetchCategorias();
  }, []);

  const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  const cleanTelefone = (tel) => tel.replace(/\D/g, '');

  const handleCategoriaChange = (e) => {
    setCategoriaId(e.target.value);
    localStorage.setItem('categoriaId', e.target.value);
  };

  const handleContactChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 0) value = '(' + value;
    if (value.length > 3) value = value.slice(0, 3) + ') ' + value.slice(3);
    if (value.length > 10) value = value.slice(0, 10) + '-' + value.slice(10);
    setContact(value);
    if (!telefoneRegex.test(value)) {
      setContactError('Digite um telefone válido no padrão (41) 99999-9999.');
    } else {
      setContactError('');
    }
  };

  const handleDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + '/' + value.slice(5);
    setDate(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoriaIdStorage =
      localStorage.getItem('categoriaId') || categoriaId;

    if (!categoriaIdStorage) {
      toast.error('Selecione uma categoria!');
      return;
    }
    if (!telefoneRegex.test(contact)) {
      setContactError('Digite um telefone válido no padrão (41) 99999-9999.');
      return;
    }
    setContactError('');

    const token = localStorage.getItem('token');
    const userData = parseJwt(token);
    const userId = userData?.id;

    if (!userId) {
      toast.error('Usuário não autenticado.');
      return;
    }

    let isoDate = '';
    if (date) {
      const [dia, mes, ano] = date.split('/');
      if (dia && mes && ano) {
        isoDate = new Date(`${ano}-${mes}-${dia}T00:00:00`).toISOString();
      } else {
        toast.error('Data inválida. Use o formato DD/MM/AAAA.');
        return;
      }
    }

    try {
      const response = await fetch(
        `${apiConfig.URL_API.replace(/\/$/, '')}/api/items`,
        {
          method: 'POST',
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            descricao,
            categoriaId: Number(categoriaIdStorage),
            date: isoDate,
            location,
            contact: cleanTelefone(contact),
            status: 'PERDIDO',
            userId,
          }),
        },
      );
      if (response.ok) {
        const data = await response.json();
        setLastItemId(data.id);
        setShowModal(true);
        toast.success('Item cadastrado com sucesso!');
        setName('');
        setDescricao('');
        setCategoriaId('');
        setDate('');
        setLocation('');
        setContact('');
        setObservacao('');
        localStorage.removeItem('categoriaId');
      } else {
        const data = await response.json();
        toast.error(data.message || 'Erro ao cadastrar item.');
      }
    } catch (err) {
      toast.error('Erro ao conectar com o servidor.');
    }
  };

  const handleUploadImage = async (file) => {
    if (!lastItemId || !file) return;
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('foto', file);

    try {
      const response = await fetch(
        `${apiConfig.URL_API.replace(/\/$/, '')}/api/items/${lastItemId}/upload`,
        {
          method: 'POST',
          headers: {
            accept: '*/*',
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );
      if (response.ok) {
        toast.success('Imagem enviada com sucesso!');
      } else {
        toast.error('Erro ao enviar imagem.');
      }
    } catch (err) {
      toast.error('Erro ao conectar com o servidor.');
    }
    setShowModal(false);
    setLastItemId(null);
  };

  return (
    <div className="card-total">
      <ToastContainer position="top-center" autoClose={2500} />
      <NavigationBar />

      <ModalUpload
        open={showModal}
        onClose={() => {
          setShowModal(false);
          setLastItemId(null);
        }}
        onUpload={handleUploadImage}
      />

      <div className="card-form">
        <form className="cadastrar-form" onSubmit={handleSubmit}>
          <div className="cadastrar-header">
            <h1>Achei um item</h1>
          </div>

          <div className="campo-nome">
            <p>Nome do item</p>
            <input
              className="input-cadastrar"
              type="text"
              placeholder="O que você achou?"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="campo-descricao">
            <p>Descrição</p>
            <input
              className="input-cadastrar"
              type="text"
              placeholder="Descreva o item"
              required
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="row">
            <div className="campo-categoria">
              <label htmlFor="categoria">Categoria:</label>
              <select
                id="categoria"
                name="categoria"
                required
                value={categoriaId}
                onChange={handleCategoriaChange}
                disabled={loadingCategorias}
              >
                <option value="">
                  {loadingCategorias ? 'Carregando...' : 'Selecione uma opção'}
                </option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="campo-localizacao">
              <label htmlFor="localizacao">Local:</label>
              <input
                className="input-cadastrar"
                type="text"
                id="localizacao"
                name="localizacao"
                placeholder="Ex: Centro, Curitiba/Pr"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="campo-data">
            <p>Data</p>
            <input
              className="input-cadastrar"
              type="text"
              placeholder="DD/MM/AAAA"
              required
              value={date}
              onChange={handleDateChange}
              maxLength={10}
            />
          </div>

          <div className="campo-contato">
            <p>Contato</p>
            <input
              className="input-cadastrar"
              type="text"
              placeholder="Disponibilize número para contato"
              required
              value={contact}
              onChange={handleContactChange}
              maxLength={16}
            />
            {contactError && (
              <span className="input-error">{contactError}</span>
            )}
          </div>

          <div className="campo-observacao">
            <p>Observação (opcional)</p>
            <input
              className="input-cadastrar"
              type="text"
              placeholder="Deixe alguma observação sobre o item"
              value={observacao}
              onChange={(e) => setObservacao(e.target.value)}
            />
          </div>

          <button className="button-salvar" type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterItem;
