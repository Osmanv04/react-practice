import { useCartStore } from '../store/useCartStore';

export function Navbar() {
    // Selector optimizado: solo escucha la longitud del carrito
    const totalItems = useCartStore((state) => state.cart.length);

    return (
        <nav style={styles.nav}>
            <span style={styles.brand}>🛍️ Tienda Tech</span>
            <div style={styles.badge}>
                <span>🛒 Carrito:</span>
                <strong style={styles.counter}>{totalItems}</strong>
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
        marginBottom: '24px',
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.25rem',
        color: '#fff',
    },
    badge: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#1f2937',
        padding: '6px 14px',
        borderRadius: '9999px',
        border: '1px solid #4b5563',
    },
    counter: {
        color: '#38bdf8',
        fontSize: '1.1rem',
    },
};