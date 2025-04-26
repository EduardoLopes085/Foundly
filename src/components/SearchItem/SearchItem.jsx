import React, { useEffect, useState } from 'react';
import accountCircle from '../../assets/account_circle.svg';
import '../RegisterItem/Register.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import ItemCard from '../ItemCard/ItemCard';
import apiConfig from '../../../config.api.json';

function SearchItem() {
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buscou, setBuscou] = useState(false);

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

  const getCategoriaNome = (categoriaId) => {
    const cat = categorias.find((c) => c.id === categoriaId);
    return cat ? cat.nome : 'Categoria';
  };

  const formatDate = (iso) => {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleDateString('pt-BR');
  };

  const handleBuscar = async () => {
    setLoading(true);
    setBuscou(true);
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
        let data = await response.json();
        if (categoriaSelecionada) {
          data = data.filter(
            (item) => String(item.categoriaId) === categoriaSelecionada,
          );
        }
        setItens(data);
      } else {
        setItens([]);
      }
    } catch {
      setItens([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-total">
      <NavigationBar />

      <div className="card-form">
        <div className="cadastrar-header">
          <h1>O que você perdeu?</h1>
        </div>

        <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <label htmlFor="categoria" style={{ fontWeight: 'bold' }}>
              Categoria
            </label>
            <select
              id="categoria"
              className="input-cadastrar"
              style={{ maxWidth: '200px' }}
              value={categoriaSelecionada}
              onChange={(e) => setCategoriaSelecionada(e.target.value)}
            >
              <option value="">Todas categorias</option>
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nome}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          style={{
            marginTop: '24px',
            padding: '10px 32px',
            background: '#00ADF1',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
          }}
          onClick={handleBuscar}
        >
          Buscar
        </button>

        <div className="card-grid-container" style={{ marginTop: 32 }}>
          {loading ? (
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginTop: 32,
                fontSize: 18,
                color: '#555',
              }}
            >
              Carregando...
            </div>
          ) : buscou && itens.length === 0 ? (
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginTop: 48,
                padding: '32px 0',
                background: '#f8f8fa',
                borderRadius: '16px',
                fontSize: 20,
                color: '#888',
                fontWeight: 500,
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
              }}
            >
              <i
                className="fa-regular fa-face-frown"
                style={{ fontSize: 32, color: '#bbb', marginBottom: 8 }}
              ></i>
              <div>Nenhum item encontrado.</div>
            </div>
          ) : (
            itens.map((item) => (
              <ItemCard
                key={item.id}
                image={item.foto}
                title={item.name}
                category={getCategoriaNome(item.categoriaId)}
                date={formatDate(item.createdAt)}
                location={item.location}
                contact={item.contact}
                descricao={item.descricao}
                status={item.status}
              />
            ))
          )}
        </div>

        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingTop: '20px',
          }}
        >
          <span style={{ fontWeight: 'bold', color: '#333' }}>foundly</span>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
