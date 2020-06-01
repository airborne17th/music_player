import React from 'react';
import Header from './view/header';
import Footer from './view/footer';
import Player2 from './components/Player2';

import './App.css';

function App() {
  return (
    <div className="app-main">
    <Header />
    <Player2 />
    <Footer />
    </div>
  );
}

export default App;
