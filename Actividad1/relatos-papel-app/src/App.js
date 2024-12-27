import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalRouter from './router/GlobalRouter';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <GlobalRouter />
      <Footer />
    </div>
  );
}

export default App;