import { useState } from 'react';
import { Card } from './components/Card';
import { Modal } from './components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

      {/* Caso 2: Card componiendo información de usuario */}
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

      {/* Caso 3: Modal Compuesto con children */}
      <div style={{ marginTop: '24px' }}>
        <button
          style={{ ...actionBtnStyle, backgroundColor: '#10b981', padding: '10px 18px' }}
          onClick={() => setIsModalOpen(true)}
        >
          Abrir Modal Compuesto
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirmación de Acción"
      >
        <p>
          Este modal puede albergar <strong>cualquier contenido</strong> que le pases entre sus
          etiquetas.
        </p>
        <p style={{ color: '#9ca3af' }}>
          El modal solo maneja el overlay y la apertura; no está atado a ningún tipo de dato.
        </p>

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '16px' }}>
          <button
            style={{ ...actionBtnStyle, backgroundColor: '#6b7280' }}
            onClick={() => setIsModalOpen(false)}
          >
            Cancelar
          </button>
          <button
            style={{ ...actionBtnStyle, backgroundColor: '#ef4444' }}
            onClick={() => {
              alert('¡Acción confirmada!');
              setIsModalOpen(false);
            }}
          >
            Aceptar
          </button>
        </div>
      </Modal>
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