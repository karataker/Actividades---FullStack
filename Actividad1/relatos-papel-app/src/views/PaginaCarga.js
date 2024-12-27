import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pagina-carga.css';

const PaginaCarga = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main'); // Redirige a la página principal después de 5 segundos
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="centered-flex-column">
        <div className="welcome-message">
          <h2>Bienvenido a Relatos de Papel</h2>
          <p>Explora nuestra colección de libros.</p>
        </div>
        {/* Spinner de carga de Bootstrap */}
        <div className="spinner-border text-primary mt-3" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    </div>
  );
};

export default PaginaCarga;
