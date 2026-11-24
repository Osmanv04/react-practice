import { Card } from './components/Card';
import './App.css';

function App() {
  const user = { name: 'Margaret Hamilton', role: 'Directora de Software Apollo 11' };

  return (
    <main style={{ padding: '24px', textAlign: 'center' }}>
      <h1>Lección 03: Composición vs Prop Drilling</h1>
      <p style={{ color: '#888', marginBottom: '24px' }}>
        Usar <code>children</code> permite crear componentes reutilizables sin arrastrar props
        innecesarias.
      </p>

      {/* Caso 1: Card componiendo texto y botones */}
      <Card
        title="Notificación del Sistema"
        headerAction={
          <button style={actionBtnStyle} onClick={() => alert('Marcada como leída')}>
            Leído
          </button>
        }
      >
        <p>Tu actualización de perfil se procesó exitosamente.</p>
        <small style={{ color: '#9ca3af' }}>Hace 5 minutos</small>
      </Card>

      {/* Caso 2: La misma Card componiendo información de usuario */}
      <Card
        title="Perfil de Usuario"
        headerAction={
          <button style={actionBtnStyle} onClick={() => alert('Editando...')}>
            Editar
          </button>
        }
      >
        <p>
          <strong>Nombre:</strong> {user.name}
        </p>
        <p>
          <strong>Rol:</strong> {user.role}
        </p>
      </Card>
    </main>
  );
}

const actionBtnStyle = {
  backgroundColor: '#3b82f6',
  color: '#fff',
  border: 'none',
  padding: '6px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default App;