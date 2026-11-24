import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { CartView } from './components/CartView';
import './App.css';

const PRODUCTS = [
  { id: 1, name: 'Teclado Mecánico', price: 95 },
  { id: 2, name: 'Mouse Inalámbrico', price: 45 },
  { id: 3, name: 'Monitor 4K IPS', price: 320 },
  { id: 4, name: 'Auriculares ANC', price: 150 },
];

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f9fafb' }}>
      <Navbar />

      <main style={{ padding: '0 24px 40px 24px', maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h1>Lección 08: Estado Global con Zustand</h1>
          <p style={{ color: '#888' }}>
            Estado accesible desde cualquier componente sin prop drilling ni Context Providers.
          </p>
        </header>

        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Catálogo de Productos */}
          <section>
            <h3 style={{ textAlign: 'left', marginBottom: '16px' }}>Catálogo de Productos</h3>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', maxWidth: '450px' }}>
              {PRODUCTS.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </section>

          {/* Carrito de Compras (conectado al mismo store) */}
          <section>
            <CartView />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;