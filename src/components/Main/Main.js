import React from 'react';
import './Main.css';
import backgroundImg from '../Main/background.png';
// import { animals } from '../../data';
import AnimalList from '../AnimalList/AnimalList';
// import AnimalList from '../AnimalList/AnimalList';

export default function Main({ animals }) {
  return <main style={{ backgroundImage: `url(${backgroundImg})` }}>
    <AnimalList animals={animals}/>


  </main>;
    

      
  
  
  
}
  // return <main style={{ backgroundImage: `url(${backgroundImg})` }}>
  //   {animal.map((name, type, i) => (
  //     <AnimalsList {...animals} key={name.type + i} />
  //   ))}
  // </main>;

