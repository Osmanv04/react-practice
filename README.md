# 📘 Lección 07: Enrutamiento y Navegación con React Router

En esta lección aprenderás a transformar tu aplicación en una **Single Page Application (SPA)** con navegación entre páginas sin recargar el navegador, utilizando la librería estándar **React Router**.

---

## 🎯 Objetivos de Aprendizaje

1. Entender la diferencia entre la navegación web tradicional (recarga completa) y el enrutamiento del lado del cliente (Client-Side Routing).
2. Configurar `BrowserRouter`, `Routes` y `Route`.
3. Navegar de forma declarativa con `<Link>` y `<NavLink>` (enlaces activos).
4. Capturar parámetros dinámicos en la URL con el hook `useParams` (ej: `/productos/:id`).
5. Realizar navegación programática con el hook `useNavigate`.
6. Manejar rutas no encontradas (Página 404).

---

## 🧠 Conceptos Clave

### 1. ¿Por qué NO usar `<a href="...">` en React?
Las etiquetas HTML tradicionales `<a>` provocan que el navegador solicite una página HTML completa al servidor, borrando el estado de JavaScript y recargando toda la app.
En su lugar, usamos `<Link to="...">` de React Router, que intercepta el clic y cambia la URL en el historial del navegador mediante la API de `History` sin recargar la pantalla.

### 2. Componentes Fundamentales
- `BrowserRouter`: Envuelve la aplicación para habilitar el contexto de rutas.
- `Routes`: Contenedor inteligente que busca la mejor coincidencia entre sus rutas hijas.
- `Route path="..." element={<Componente />}`: Asocia un patrón de URL a un componente JSX.
- `NavLink`: Similar a `Link`, pero inyecta automáticamente una clase o estilo si la ruta está activa actualmente.

### 3. Rutas Dinámicas con `useParams`
Permite extraer parámetros dinámicos definidos en la ruta con dos puntos (`:param`):
```jsx
// Ruta: <Route path="/usuarios/:id" element={<UserDetail />} />
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  return <h2>Detalle del usuario #{id}</h2>;
}
```

---

## 📂 Archivos de esta Lección

- `src/pages/Home.jsx`: Página de inicio.
- `src/pages/About.jsx`: Página de información sobre el proyecto.
- `src/pages/CourseDetail.jsx`: Página dinámica que lee `:courseId` con `useParams` y navega con `useNavigate`.
- `src/pages/NotFound.jsx`: Página 404 para rutas inexistentes (`path="*"`).
- `src/components/Navbar.jsx`: Barra de navegación con enlaces activos (`NavLink`).
- `src/App.jsx`: Definición y configuración del árbol de rutas.

---

## ✏️ Reto Práctico: Tu Turno

1. **Agregar una nueva ruta `/contacto`:**
   - Crea `src/pages/Contact.jsx` con un formulario simple.
   - Agrégalo a las rutas en `App.jsx` y añade el enlace en `Navbar.jsx`.

2. **Botón "Volver atrás" con `useNavigate`:**
   - En `CourseDetail.jsx`, agrega un botón que ejecute `navigate(-1)` para regresar a la página anterior en el historial del navegador.

---

## 🚀 Cómo ejecutar esta lección

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) y haz clic en los enlaces de navegación para notar la velocidad instantánea sin parpadeo ni recargas.