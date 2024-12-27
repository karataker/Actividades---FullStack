import React, { useEffect } from 'react';
import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import BotonVolver from '../components/BotonVolver';
import '../styles/checkout.css';


const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Pedido realizado con éxito.');
    clearCart();
   // window.location.href = '/main'; // Redirige a la página principal
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/main');  // Redirige a la página principal si el carrito está vacío
    }
  }, [cartItems, navigate]);

  return (
    <div className="container mt-5 checkout">
      <BotonVolver />
      <h2>Resumen de tu compra:</h2>
      {cartItems.length === 0 ? (
        <p className="alert alert-warning">No hay libros en tu carrito.</p>
      ) : (
        <ul className="list-group mb-3">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item">
              <strong>{item.title}</strong> - {item.author}
            </li>
          ))}
        </ul>
      )}
      <button className="btn btn-primary" onClick={handleCheckout}>Proceder al pago</button>
    </div>
  );
};

export default Checkout;