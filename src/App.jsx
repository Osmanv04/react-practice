import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CourseDetail } from './pages/CourseDetail';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f9fafb' }}>
        <Navbar />

        <main style={{ padding: '0 24px 40px 24px', textAlign: 'center' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acerca" element={<About />} />
            <Route path="/cursos/:courseId" element={<CourseDetail />} />
            {/* Ruta comodín para capturar cualquier ruta no registrada (404) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;