import { UserListContainer } from './containers/UserListContainer';
import './App.css';

function App() {
  return (
    <main style={{ padding: '24px', textAlign: 'center' }}>
      <h1>Lección 05: Patrón Contenedor y Presentacional</h1>
      <p style={{ color: '#888', marginBottom: '24px' }}>
        Separa la lógica de negocio y las llamadas asíncronas de la interfaz de usuario.
      </p>

      <UserListContainer />
    </main>
  );
}

export default App;