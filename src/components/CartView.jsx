import { useCartStore } from '../store/useCartStore';

export function CartView() {
    const cart = useCartStore((state) => state.cart);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearCart = useCartStore((state) => state.clearCart);
    // ✅ Selector reactivo: calcula el total derivado directamente del array 'cart'
    const total = useCartStore((state) =>
        state.cart.reduce((sum, item) => sum + item.price, 0)
    );

    return (
        <aside style={styles.container}>
            <div style={styles.header}>
                <h3 style={{ margin: 0 }}>Resumen del Carrito</h3>
                {cart.length > 0 && (
                    <button style={styles.clearBtn} onClick={clearCart}>
                        Vaciar
                    </button>
                )}
            </div>

            {cart.length === 0 ? (
                <p style={{ color: '#9ca3af', fontStyle: 'italic' }}>El carrito está vacío.</p>
            ) : (
                <>
                    <ul style={styles.list}>
                        {cart.map((item) => (
                            <li key={item.cartItemId} style={styles.item}>
                                <div>
                                    <strong>{item.name}</strong>
                                    <span style={{ color: '#34d399', marginLeft: '8px' }}>${item.price}</span>
                                </div>
                                <button
                                    style={styles.deleteBtn}
                                    onClick={() => removeItem(item.cartItemId)}
                                    aria-label="Eliminar"
                                >
                                    ✕
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div style={styles.footer}>
                        <span>Total a pagar:</span>
                        <strong style={{ fontSize: '1.3rem', color: '#38bdf8' }}>${total}</strong>
                    </div>
                </>
            )}
        </aside>
    );
}

const styles = {
    container: {
        backgroundColor: '#111827',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '20px',
        minWidth: '300px',
        maxWidth: '360px',
        textAlign: 'left',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #374151',
        paddingBottom: '12px',
        marginBottom: '16px',
    },
    clearBtn: {
        background: 'none',
        border: 'none',
        color: '#ef4444',
        cursor: 'pointer',
        fontSize: '0.85rem',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        maxHeight: '260px',
        overflowY: 'auto',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1f2937',
        padding: '8px 12px',
        borderRadius: '6px',
    },
    deleteBtn: {
        background: 'none',
        border: 'none',
        color: '#9ca3af',
        cursor: 'pointer',
        padding: '2px 6px',
    },
    footer: {
        borderTop: '1px solid #374151',
        marginTop: '16px',
        paddingTop: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
};