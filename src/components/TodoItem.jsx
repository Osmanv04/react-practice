import { useState } from 'react';

/**
 * Componente TodoItem
 * Contiene estado local (nota opcional interna) para demostrar visualmente
 * que React preserva el estado del componente correcto gracias a la 'key' estable.
 */
export function TodoItem({ todo, onDelete }) {
    const [note, setNote] = useState('');

    return (
        <li style={styles.item}>
            <div style={styles.content}>
                <span style={styles.title}>{todo.title}</span>
                <input
                    type="text"
                    placeholder="Escribe una nota aquí..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    style={styles.input}
                />
            </div>

            <button
                onClick={() => onDelete(todo.id)}
                style={styles.deleteBtn}
                aria-label={`Eliminar ${todo.title}`}
            >
                🗑️
            </button>
        </li>
    );
}

const styles = {
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        backgroundColor: '#1f2937',
        borderRadius: '8px',
        border: '1px solid #374151',
        gap: '12px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        flex: 1,
        textAlign: 'left',
    },
    title: {
        color: '#f9fafb',
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#111827',
        border: '1px solid #4b5563',
        color: '#e5e7eb',
        borderRadius: '4px',
        padding: '6px 10px',
        fontSize: '0.85rem',
    },
    deleteBtn: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.2rem',
        padding: '6px',
    },
};