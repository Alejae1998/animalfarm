import React from 'react';
import './Header.css';
export default function Header(greeting) {
  return (
    <header>
      {greeting.name} Animal Farm 
    </header>
  );
}
