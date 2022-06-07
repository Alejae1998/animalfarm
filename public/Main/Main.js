import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import { animals } from '../../src/data';
import AnimalsFarm from '../Animal/Animal';

export default function main() {
  return (
    <main style={{ backgroundImg: `url(${backgroundImg})` }}>
      {animals.map((animal, i) => (
        <AnimalsFarm {...animals} key={animals.type + i} />
      ))}
    </main>
  );
}
