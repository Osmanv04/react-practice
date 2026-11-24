import { Counter } from './components/Counter';
import './App.css';

function App() {
  return (
    <main style={{ padding: '24px', textAlign: 'center' }}>
      <h1>Lección 02: Gestión de Estado y Eventos</h1>
      <p style={{ color: '#888', marginBottom: '24px' }}>
        El estado permite que los componentes sean dinámicos e interactivos.
      </p>

      {/* Renderizamos dos instancias independientes para verificar el aislamiento del estado */}
      <Counter initialCount={0} step={1} />
      <Counter initialCount={10} step={5} />
    </main>
  );
}

export default App;