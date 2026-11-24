/**
 * Componente Compuesto: Modal
 * Demuestra:
 * - Renderizado condicional basado en la prop 'isOpen'.
 * - Uso de 'children' para permitir cualquier contenido dentro de la ventana modal.
 * - Callback 'onClose' para que el padre controle cuándo cerrarlo.
 */
export function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div style={styles.overlay} onClick={onClose}>
            {/* Detener la propagación del click para que no cierre el modal si se hace click adentro */}
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <header style={styles.header}>
                    <h3 style={styles.title}>{title}</h3>
                    <button style={styles.closeBtn} onClick={onClose} aria-label="Cerrar modal">
                        ✕
                    </button>
                </header>

                <div style={styles.body}>{children}</div>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: '#1f2937',
        borderRadius: '12px',
        padding: '24px',
        maxWidth: '480px',
        width: '90%',
        color: '#f9fafb',
        border: '1px solid #374151',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
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
    closeBtn: {
        background: 'none',
        border: 'none',
        color: '#9ca3af',
        fontSize: '1.2rem',
        cursor: 'pointer',
        padding: '4px 8px',
    },
    body: {
        lineHeight: '1.5',
    },
};