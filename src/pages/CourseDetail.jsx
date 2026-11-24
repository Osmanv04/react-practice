import { useParams, useNavigate } from 'react-router-dom';

export function CourseDetail() {
    const { courseId } = useParams();
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h2>Detalle del Curso</h2>
            <div style={styles.card}>
                <p style={{ color: '#9ca3af', margin: '0 0 8px 0' }}>Identificador dinámico de la URL:</p>
                <code style={styles.code}>:courseId = "{courseId}"</code>

                <div style={{ marginTop: '24px', display: 'flex', gap: '10px' }}>
                    <button style={styles.btnSecondary} onClick={() => navigate(-1)}>
                        ← Volver atrás
                    </button>
                    <button style={styles.btnPrimary} onClick={() => navigate('/')}>
                        Ir al Inicio
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '500px',
        margin: '0 auto',
    },
    card: {
        backgroundColor: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px',
        textAlign: 'left',
    },
    code: {
        backgroundColor: '#111827',
        padding: '6px 12px',
        borderRadius: '6px',
        color: '#38bdf8',
        fontSize: '1.1rem',
        display: 'inline-block',
    },
    btnPrimary: {
        backgroundColor: '#2563eb',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    btnSecondary: {
        backgroundColor: '#4b5563',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '6px',
        cursor: 'pointer',
    },
};