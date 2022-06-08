import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header name="Ale" />
      <Main animals={animals} />
      <Footer />
    </div>
  );
}

export default App;
