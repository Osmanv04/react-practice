import { Link } from 'react-router-dom';

export function Home() {
    const courses = [
        { id: 'react-basico', title: 'Fundamentos de React' },
        { id: 'react-avanzado', title: 'Patrones Avanzados y Arquitectura' },
        { id: 'fullstack-js', title: 'Fullstack JavaScript' },
    ];

    return (
        <div>
            <h2>Bienvenido al Portal de Cursos</h2>
            <p style={{ color: '#9ca3af' }}>
                Selecciona un curso para ver sus detalles mediante rutas dinámicas:
            </p>

            <div style={styles.grid}>
                {courses.map((course) => (
                    <div key={course.id} style={styles.card}>
                        <h3>{course.title}</h3>
                        <Link to={`/cursos/${course.id}`} style={styles.link}>
                            Ver temario →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    grid: {
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '20px',
    },
    card: {
        backgroundColor: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '10px',
        padding: '20px',
        width: '240px',
        textAlign: 'left',
    },
    link: {
        display: 'inline-block',
        marginTop: '12px',
        color: '#38bdf8',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};