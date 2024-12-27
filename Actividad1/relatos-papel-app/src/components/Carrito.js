import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';  // Importamos useNavigate
import '../styles/carrito.css';

const Carrito = ({ items, borraItemCarrito }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();  // Inicializamos useNavigate

  const movimientoCarrito = () => setIsVisible(!isVisible);

  // Función para redirigir al checkout
  const irCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className={`carrito ${isVisible ? 'carrito--visible' : ''}`}>
      <button onClick={movimientoCarrito} className="btn btn-primary carrito-toggle">
        <FontAwesomeIcon icon={faShoppingCart} className="carrito-icon" />
        {isVisible ? 'Cerrar Carrito' : 'Abrir Carrito'}
      </button>
      
      {isVisible && (
        <div className="carrito-content mt-3">
          <h3>Selección:</h3>
          {items.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul className="list-group">
              {items.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{item.titulo} - {item.autor}</span>
                  <button onClick={() => borraItemCarrito(index)} className="btn btn-danger btn-sm">Eliminar</button>
                </li>
              ))}
            </ul>
          )}
          
          {/* Mostrar el botón "Pagar" solo si hay elementos en el carrito */}
          {items.length > 0 && (
            <button onClick={irCheckout} className="btn btn-warning mt-3">
              Pagar
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Carrito;
