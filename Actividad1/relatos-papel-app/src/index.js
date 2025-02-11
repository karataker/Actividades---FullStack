import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './styles/index.css';

// Crear un root para la app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos la app dentro del root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);