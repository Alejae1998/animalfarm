import React from 'react';
import './Animal.css';

export default function Animal({ name, type, says }) {
  return (
    <div className="animal">
      <p className="name">{name}</p>
      <p>{says}</p>
      <img src={`/public/images${type}.svg`}/>
    </div>
  );
}
