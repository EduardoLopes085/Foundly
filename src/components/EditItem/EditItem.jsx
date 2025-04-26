import React, { useEffect, useState } from 'react';
import accountCircle from '../../assets/account_circle.svg';
import '../RegisterItem/Register.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import apiConfig from '../../../config.api.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditItem() {
  const [itens, setItens] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(
    localStorage.getItem('IdItemEditar') || '',
  );
  const [form, setForm] = useState({
    name: '',
    descricao: '',
    categoriaId: '',
    date: '',
    location: '',
    contact: '',
    status: 'PERDIDO',
  });
  const [loading, setLoading] = useState(false);
  const [itensLoaded, setItensLoaded] = useState(false);

  useEffect(() => {
    const fetchCategorias = async () => {
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
      } catch {
        setCategorias([]);
      }
    };
    fetchCategorias();
  }, []);

  useEffect(() => {
    if (selectedItemId && itens.length > 0) {
      const item = itens.find((i) => String(i.id) === String(selectedItemId));
      if (item) {
        setForm({
          name: item.name || '',
          descricao: item.descricao || '',
          categoriaId: item.categoriaId || '',
          date: item.date ? item.date.slice(0, 16) : '',
          location: item.location || '',
          contact: item.contact || '',
          status: item.status || 'PERDIDO',
        });
      }
    }
  }, [selectedItemId, itens]);

  const handleSelectFocus = async () => {
    if (itensLoaded) return;
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${apiConfig.URL_API.replace(/\/$/, '')}/api/items`,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.ok) {
        const data = await response.json();
        setItens(data);
        setItensLoaded(true);
      }
    } catch {
      setItens([]);
    }
    setLoading(false);
  };

  const handleSelectItem = (e) => {
    setSelectedItemId(e.target.value);
    localStorage.setItem('IdItemEditar', e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedItemId) return;
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      let dateISO = form.date;
      if (dateISO && dateISO.length === 16) {
        dateISO = new Date(dateISO).toISOString();
      }
      const response = await fetch(
        `${apiConfig.URL_API.replace(/\/$/, '')}/api/items/${selectedItemId}`,
        {
          method: 'PUT',
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: form.name,
            descricao: form.descricao,
            categoriaId: Number(form.categoriaId),
            date: dateISO,
            location: form.location,
            contact: form.contact,
            status: form.status,
          }),
        },
      );
      if (response.ok) {
        toast.success('Item atualizado com sucesso!');
      } else {
        toast.error('Erro ao atualizar item.');
      }
    } catch {
      toast.error('Erro ao conectar com o servidor.');
    }
    setLoading(false);
  };

  return (
    <div className="card-total">
      <ToastContainer position="top-center" autoClose={2500} />
      <NavigationBar />

      <div className="card-form">
        <form className="cadastrar-form" onSubmit={handleSubmit}>
          <div className="cadastrar-header">
            <h1>Editar Item</h1>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              marginBottom: '16px',
            }}
          >
            <p style={{ alignSelf: 'center' }}>Selecione o item</p>
            <select
              className="input-cadastrar"
              value={selectedItemId}
              onChange={handleSelectItem}
              onFocus={handleSelectFocus}
              required
              style={{ width: '100%', maxWidth: '350px', marginTop: '6px' }}
            >
              <option value="">Selecione um item</option>
              {itens.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {selectedItemId && (
            <>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '24px',
                  justifyContent: 'center',
                  marginBottom: 24,
                }}
              >
                <div style={{ flex: '1 1 220px', minWidth: 220 }}>
                  <p>Nome do item</p>
                  <input
                    className="input-cadastrar"
                    type="text"
                    placeholder="Nome do item"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ flex: '1 1 220px', minWidth: 220 }}>
                  <p>Categoria</p>
                  <select
                    className="input-cadastrar"
                    name="categoriaId"
                    required
                    value={form.categoriaId}
                    onChange={handleChange}
                  >
                    <option value="">Selecione uma categoria</option>
                    {categorias.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.nome}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ flex: '1 1 220px', minWidth: 220 }}>
                  <p>Status</p>
                  <select
                    className="input-cadastrar"
                    name="status"
                    required
                    value={form.status}
                    onChange={handleChange}
                  >
                    <option value="PERDIDO">Perdido</option>
                    <option value="ENCONTRADO">Encontrado</option>
                  </select>
                </div>
                <div style={{ flex: '1 1 220px', minWidth: 220 }}>
                  <p>Data</p>
                  <input
                    className="input-cadastrar"
                    type="datetime-local"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ flex: '1 1 220px', minWidth: 220 }}>
                  <p>Localização</p>
                  <input
                    className="input-cadastrar"
                    type="text"
                    placeholder="Localização"
                    name="location"
                    required
                    value={form.location}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ flex: '1 1 220px', minWidth: 220 }}>
                  <p>Contato</p>
                  <input
                    className="input-cadastrar"
                    type="text"
                    placeholder="Contato"
                    name="contact"
                    required
                    value={form.contact}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBottom: 24,
                }}
              >
                <p>Descrição</p>
                <textarea
                  className="input-cadastrar"
                  placeholder="Descrição do item"
                  name="descricao"
                  required
                  value={form.descricao}
                  onChange={handleChange}
                  style={{
                    minHeight: '60px',
                    resize: 'vertical',
                    width: 350,
                    maxWidth: '100%',
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  className="button-salvar"
                  type="submit"
                  disabled={loading}
                >
                  Atualizar
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default EditItem;
