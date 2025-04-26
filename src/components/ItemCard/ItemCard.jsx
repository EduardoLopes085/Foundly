import React from 'react';
import './ItemCard.css';

function ItemCard({ image, title, category, date, location, contact, status }) {
  return (
    <div className="foundly-card">
      <div className="card-image">
        <img src={image} alt={`Imagem de ${title}`} />
      </div>

      <div className="card-content">
        <div className="object-title">
          <p>{title}</p>
        </div>

        <div className="info-line">
          <strong>Categoria:</strong>
          <span>{category}</span>
        </div>

        <div className="info-line">
          <strong>Data:</strong>
          <span>{date}</span>
        </div>

        <div className="info-line">
          <strong>Local:</strong>
          <span>{location}</span>
        </div>

        <div className="info-line">
          <strong>Contato:</strong>
          <span>{contact}</span>
        </div>

        <div className="status-tag">
          <strong>Status:</strong>
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
