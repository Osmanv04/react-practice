export function About() {
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
            <h2>Acerca de este Proyecto</h2>
            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                Este proyecto demuestra cómo React Router v6+ permite crear experiencias fluidas de tipo Single
                Page Application (SPA) sin recargar la página.
            </p>
            <div style={{ backgroundColor: '#1f2937', padding: '16px', borderRadius: '8px', border: '1px solid #374151' }}>
                <h4>Tecnologías utilizadas:</h4>
                <ul style={{ color: '#9ca3af', margin: '8px 0 0 20px' }}>
                    <li>Vite + React (JavaScript)</li>
                    <li>React Router DOM</li>
                </ul>
            </div>
        </div>
    );
}