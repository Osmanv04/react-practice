import { UserProfile } from './components/UserProfile';
import './App.css';

function App() {
  return (
    <main style={{ padding: '24px', textAlign: 'center' }}>
      <h1>Lección 01: Componentes, JSX y Props</h1>
      <p style={{ color: '#888', marginBottom: '24px' }}>
        Los componentes son bloques de construcción reutilizables y modulares.
      </p>

      {/* Renderizamos el componente con diferentes props */}
      <UserProfile
        name="Ada Lovelace"
        role="Pionera de la Programación"
        avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
      />

      <UserProfile
        name="Alan Turing"
        role="Científico de la Computación"
        avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
      />
    </main>
  );
}

export default App;