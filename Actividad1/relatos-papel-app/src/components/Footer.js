import React from 'react';
import '../styles/footer.css';

const Footer = () => {
return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <p><strong>Correo electrónico:</strong> relotosdepapel@relatos.es</p>
                </div>
                <div className="col">
                    <p><strong>Teléfono:</strong> 61 111 222</p>
                </div>
                <div className="col">
                <p><strong>Dirección:</strong> C\ Avenida de la Lectura, 123. Madrid</p>
                </div>
            </div>
            <p>&copy; 2024 Relatos de Papel. Todos los derechos reservados.</p>
        </div>
    </footer>
);
};

export default Footer;