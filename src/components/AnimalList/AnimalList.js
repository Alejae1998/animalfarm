import React from 'react';
import Animal from '../../Animal/Animal.js';

export default function AnimalList({ animals }) {
  return (
    <div className='animal-list' > 

      {
        animals.map((animal, i) => <Animal {...animal} key={animal.name + i}/>)
        
      }
    </div>
  );
}


{/* <div style={{
        
          position: 'absolute',
          top: animal.top,
          left: animal.left

        }} */}