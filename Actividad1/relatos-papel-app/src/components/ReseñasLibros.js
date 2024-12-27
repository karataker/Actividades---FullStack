import React, { useState } from 'react';

const ReseñasLibro = ({ idLibro }) => {
    const [reseñas, setReseñas] = useState([]);
    const [nuevaReseña, setNuevaReseña] = useState({ nombre: 'Usuario Logado XXX', puntuación: 0, comentario: '' });

    const manejarCambioEntrada = (e) => {
        const { name, value } = e.target;
        setNuevaReseña({ ...nuevaReseña, [name]: value });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (nuevaReseña.puntuación && nuevaReseña.comentario) {
            setReseñas([...reseñas, { ...nuevaReseña, id: Date.now() }]);
            setNuevaReseña({ nombre: 'Usuario Logado XXX', puntuación: 0, comentario: '' });
        }
    };

    return (
        <div className="reseñas-libro">
            <h3>Reseñas</h3>
            {reseñas.length === 0 ? (
                <p>No hay reseñas todavía. ¡Sé el primero en dejar una!</p>
            ) : (
                <ul className="list-group mb-3">
                    {reseñas.map((reseña) => (
                        <li key={reseña.id} className="list-group-item">
                            <strong>{reseña.nombre}</strong> 
                            <span className="text-muted"> - {reseña.puntuación} estrellas</span>
                            <p>{reseña.comentario}</p>
                        </li>
                    ))}
                </ul>
            )}
            <h4>Deja tu reseña</h4>
            <form onSubmit={manejarEnvio}>
                <div className="mb-3">
                    <select
                        name="puntuación"
                        value={nuevaReseña.puntuación}
                        onChange={manejarCambioEntrada}
                        className="form-select"
                    >
                        <option value={0}>Selecciona una puntuación</option>
                        {[1, 2, 3, 4, 5].map((estrella) => (
                            <option key={estrella} value={estrella}>{estrella} estrella{estrella > 1 ? 's' : ''}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <textarea
                        name="comentario"
                        value={nuevaReseña.comentario}
                        onChange={manejarCambioEntrada}
                        placeholder="Escribe tu comentario"
                        className="form-control"
                        rows="3"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-success">Enviar Reseña</button>
            </form>
        </div>
    );
};

export default ReseñasLibro;
