import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/boton-volver.css';

const BotonVolver = () => {
  const navigate = useNavigate();

  return (
    <button className="btn btn-secondary boton-volver" onClick={() => navigate(-1)}>
      &#8592; Volver
    </button>
  );
};

export default BotonVolver;