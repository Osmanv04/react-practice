import { useCartStore } from '../store/useCartStore';

export function ProductCard({ product }) {
    // Extraemos la acción addItem del store
    const addItem = useCartStore((state) => state.addItem);

    return (
        <div style={styles.card}>
            <h4 style={styles.title}>{product.name}</h4>
            <p style={styles.price}>${product.price}</p>
            <button style={styles.btn} onClick={() => addItem(product)}>
                + Agregar al Carrito
            </button>
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '10px',
        padding: '16px',
        width: '200px',
        textAlign: 'left',
    },
    title: {
        margin: '0 0 8px 0',
        color: '#f9fafb',
        fontSize: '1.1rem',
    },
    price: {
        color: '#34d399',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        margin: '0 0 12px 0',
    },
    btn: {
        width: '100%',
        backgroundColor: '#2563eb',
        color: '#fff',
        border: 'none',
        padding: '8px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '500',
    },
};