/**
 * Componente Contenedor Genérico: Card
 * Demuestra:
 * - Uso de la prop especial 'children'.
 * - Inversión de control: el contenedor no necesita saber qué contenido renderizará.
 */
export function Card({ title, headerAction, children }) {
    return (
        <section style={styles.card}>
            <header style={styles.header}>
                <h3 style={styles.title}>{title}</h3>
                {headerAction && <div>{headerAction}</div>}
            </header>
            <div style={styles.body}>{children}</div>
        </section>
    );
}

const styles = {
    card: {
        backgroundColor: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '20px',
        maxWidth: '450px',
        margin: '16px auto',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        color: '#f9fafb',
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
    title: {
        margin: 0,
        fontSize: '1.25rem',
    },
    body: {
        lineHeight: '1.5',
    },
};