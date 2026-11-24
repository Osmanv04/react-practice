import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', margin: 0, color: '#ef4444' }}>404</h1>
            <h2>Página no encontrada</h2>
            <p style={{ color: '#9ca3af' }}>La ruta a la que intentas acceder no existe.</p>
            <Link to="/" style={{ color: '#38bdf8', fontWeight: 'bold' }}>
                ← Volver al Inicio
            </Link>
        </div>
    );
}