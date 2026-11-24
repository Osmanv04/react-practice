import { useCounter } from './hooks/useCounter';
import { useWindowSize } from './hooks/useWindowsSize';
import './App.css';

function App() {
  // Consumiendo el hook useCounter con límites configurados
  const { count, increment, decrement, reset, isAtMin, isAtMax } = useCounter({
    initial: 5,
    step: 1,
    min: 0,
    max: 10,
  });

  // Consumiendo el hook useWindowSize que reacciona al tamaño de pantalla
  const { width, height } = useWindowSize();

  return (
    <main style={{ padding: '24px', textAlign: 'center' }}>
      <h1>Lección 04: Custom Hooks</h1>
      <p style={{ color: '#888', marginBottom: '24px' }}>
        Extrae y reutiliza lógica con estado sin duplicar código en tus componentes.
      </p>

      {/* Demostración de useCounter */}
      <section style={cardStyle}>
        <h3>useCounter (Min: 0, Max: 10)</h3>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#38bdf8', margin: '12px 0' }}>
          {count}
        </p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <button style={buttonStyle} onClick={decrement} disabled={isAtMin}>
            -1
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: '#6b7280' }}
            onClick={reset}
          >
            Reset
          </button>
          <button style={buttonStyle} onClick={increment} disabled={isAtMax}>
            +1
          </button>
        </div>
        {(isAtMin || isAtMax) && (
          <small style={{ color: '#f87171', display: 'block', marginTop: '8px' }}>
            {isAtMin ? 'Límite mínimo alcanzado' : 'Límite máximo alcanzado'}
          </small>
        )}
      </section>

      {/* Demostración de useWindowSize */}
      <section style={cardStyle}>
        <h3>useWindowSize</h3>
        <p style={{ color: '#9ca3af', margin: '8px 0' }}>
          Cambia el tamaño de la ventana de tu navegador para ver la actualización en vivo:
        </p>
        <p style={{ fontSize: '1.2rem', fontFamily: 'monospace', color: '#10b981' }}>
          Ancho: <strong>{width}px</strong> | Alto: <strong>{height}px</strong>
        </p>
        <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
          {width < 768 ? '📱 Vista Móvil' : '💻 Vista de Escritorio'}
        </span>
      </section>
    </main>
  );
}

const cardStyle = {
  backgroundColor: '#1f2937',
  border: '1px solid #374151',
  borderRadius: '12px',
  padding: '20px',
  maxWidth: '420px',
  margin: '16px auto',
  color: '#f9fafb',
};

const buttonStyle = {
  backgroundColor: '#2563eb',
  color: '#fff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default App;