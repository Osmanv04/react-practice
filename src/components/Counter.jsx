import { useState } from 'react';

/**
 * Componente: Counter
 * Demuestra:
 * - Declaración de estado local con useState.
 * - Manejadores de eventos onClick.
 * - Actualización funcional del estado (prev => prev + step).
 */
export function Counter({ initialCount = 0, step = 1 }) {
    const [count, setCount] = useState(initialCount);

    const handleIncrement = () => {
        setCount((prev) => prev + step);
    };

    const handleDecrement = () => {
        setCount((prev) => prev - step);
    };

    const handleReset = () => {
        setCount(initialCount);
    };

    return (
        <div style={styles.card}>
            <h3 style={styles.title}>Contador</h3>
            <p style={styles.display}>{count}</p>
            <div style={styles.buttonGroup}>
                <button onClick={handleDecrement} style={styles.button}>
                    -{step}
                </button>
                <button onClick={handleReset} style={{ ...styles.button, backgroundColor: '#4b5563' }}>
                    Reiniciar
                </button>
                <button onClick={handleIncrement} style={styles.button}>
                    +{step}
                </button>
            </div>
        </div>
    );
}

const styles = {
    card: {
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        maxWidth: '320px',
        margin: '16px auto',
        textAlign: 'center',
        border: '1px solid #374151',
    },
    title: {
        margin: '0 0 12px 0',
        fontSize: '1.2rem',
    },
    display: {
        fontSize: '3rem',
        fontWeight: 'bold',
        margin: '8px 0 16px 0',
        color: '#38bdf8',
    },
    buttonGroup: {
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
    },
    button: {
        padding: '8px 16px',
        fontSize: '1rem',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: '#2563eb',
        color: '#fff',
        cursor: 'pointer',
    },
};