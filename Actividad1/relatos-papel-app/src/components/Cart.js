import React, { useState } from 'react';
import '../styles/cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';  // Importamos useNavigate

const Cart = ({ items, removeFromCart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();  // Inicializamos useNavigate

  const toggleCart = () => setIsVisible(!isVisible);

  // Función para redirigir al checkout
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className={`cart ${isVisible ? 'cart--visible' : ''}`}>
      <button onClick={toggleCart} className="btn btn-primary cart-toggle">
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        {isVisible ? 'Cerrar Carrito' : 'Abrir Carrito'}
      </button>
      
      {isVisible && (
        <div className="cart-content mt-3">
          <h3>Selección:</h3>
          {items.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul className="list-group">
              {items.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{item.title} - {item.author}</span>
                  <button onClick={() => removeFromCart(index)} className="btn btn-danger btn-sm">Eliminar</button>
                </li>
              ))}
            </ul>
          )}
          
          {/* Mostrar el botón "Pagar" solo si hay elementos en el carrito */}
          {items.length > 0 && (
            <button onClick={handleCheckout} className="btn btn-warning mt-3">
              Pagar
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
