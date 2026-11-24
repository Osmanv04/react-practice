import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  return (
    <main style={{ padding: '24px', textAlign: 'center' }}>
      <h1>Lección 06: Listas y Keys Estables</h1>
      <p style={{ color: '#888', marginBottom: '24px' }}>
        Renderizado dinámico con <code>.map()</code> y la importancia de keys únicas para no perder
        el estado.
      </p>

      <TodoList />
    </main>
  );
}

export default App;