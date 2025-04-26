import React, { useEffect, useState } from 'react';
import './FoundlyItens.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import ItemCard from '../ItemCard/ItemCard';
import apiConfig from '../../../config.api.json';
import { useNavigate } from 'react-router-dom';

function FoundlyItens() {
  const [itens, setItens] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

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
    const fetchItens = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
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
        }
      } catch {
        setItens([]);
      } finally {
        setLoading(false);
      }
    };
    fetchItens();
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

  const filteredItens = itens.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="foundly-conatiner">
      <NavigationBar />

      <div className="foundly-content">
        <div className="foundly-header">
          <h1>Meus achados</h1>
          <button onClick={() => navigate('/signup-item')}>
            <i className="fa-solid fa-plus"></i> achei um item
          </button>
        </div>

        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="search"
            name="search"
            placeholder="Buscar em Meus achados"
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="card-grid-container">
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
          ) : filteredItens.length === 0 ? (
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
            filteredItens.map((item) => (
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
      </div>
    </div>
  );
}

export default FoundlyItens;
