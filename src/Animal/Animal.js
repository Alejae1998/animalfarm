import React from 'react';
import './Animal.css';

export default function Animal({ name, type, says }) {
  return (
    <div className="animal">
      <h2 className="name">{name}</h2>
      <span>{says}</span>
      <img src={`/public/animals${type}.svg`}/>
    </div>
  );
}
