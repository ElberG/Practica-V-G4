import React from "react";

function ScientistCard({ name, image, profession, awards, discoveries }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{name}</h2>
        <img src={image} alt={name} className="scientist-img" />
      </div>
      <ul>
        <li><strong>Profesión:</strong> {profession}</li>
        <li><strong>Premios:</strong> {awards}</li>
        <li><strong>Descubrió:</strong> {discoveries}</li>
      </ul>
    </div>
  );
}

export default ScientistCard;