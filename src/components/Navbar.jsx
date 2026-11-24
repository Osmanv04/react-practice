import { NavLink } from 'react-router-dom';

export function Navbar() {
    // Función para dar estilo al enlace activo automáticamente
    const getLinkStyle = ({ isActive }) => ({
        color: isActive ? '#38bdf8' : '#9ca3af',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal',
        padding: '6px 12px',
        borderRadius: '6px',
        backgroundColor: isActive ? '#1e293b' : 'transparent',
        transition: 'all 0.2s ease',
    });

    return (
        <nav style={styles.nav}>
            <span style={styles.brand}>⚛️ ReactRouter SPA</span>
            <div style={styles.links}>
                <NavLink to="/" style={getLinkStyle}>
                    Inicio
                </NavLink>
                <NavLink to="/acerca" style={getLinkStyle}>
                    Acerca de
                </NavLink>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px',
        backgroundColor: '#111827',
        borderBottom: '1px solid #374151',
        marginBottom: '32px',
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        color: '#fff',
    },
    links: {
        display: 'flex',
        gap: '12px',
    },
};