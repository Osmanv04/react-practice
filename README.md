# 📘 Lección 03: Composición vs Prop Drilling

En esta lección aprenderás a estructurar componentes escalables mediante **Composición** utilizando la prop especial `children`, resolviendo uno de los problemas más comunes en React: el **Prop Drilling**.

---

## 🎯 Objetivos de Aprendizaje

1. Identificar el antipatrón de **Prop Drilling** y por qué hace que el código sea frágil.
2. Entender y utilizar la prop especial **`children`**.
3. Aplicar el patrón de **Composición de Componentes** para crear layouts flexibles (Cards, Modals, Paneles).
4. Practicar la técnica de pasar elementos JSX como props (*slots*).

---

## 🧠 Conceptos Clave

### 1. El Problema: Prop Drilling
Imagina este escenario:
```text
App (tiene el dato 'theme' o 'user')
 └── Layout (no necesita 'user', pero debe pasarlo)
      └── Sidebar (no necesita 'user', pero debe pasarlo)
           └── UserBadge (¡es el único que realmente necesita 'user'!)
```
Cada vez que cambias cómo `UserBadge` consume los datos, debes modificar `Sidebar` y `Layout`, volviendo los componentes intermedios rígidos y acoplados.

### 2. La Solución: Composición con `children`
React proporciona la prop `children` para renderizar cualquier contenido que se coloque entre las etiquetas de apertura y cierre de un componente:

```jsx
// Componente contenedor reutilizable
export function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">{children}</div>
    </div>
  );
}

// Uso flexible desde el padre:
<Card title="Mi Cuenta">
  <UserProfile user={user} />
</Card>
```
¡Ahora el contenedor no tiene idea de qué es `user`! Solo se encarga del envoltorio, layout y estilo.

---

## 📂 Archivos de esta Lección

- `src/components/Card.jsx`: Contenedor genérico que utiliza `children` y estilos de contenedor.
- `src/components/Modal.jsx`: Componente modal/diálogo compuesto que demuestra `children` y acciones flexibles.
- `src/App.jsx`: Comparativa práctica de composición para resolver prop drilling.

---

## ✏️ Reto Práctico: Tu Turno

1. **Crear un componente `CollapsibleCard.jsx`:**
   - Debe usar `children` para su contenido.
   - Debe tener un estado local `isOpen` (`useState(true)`).
   - Un botón en la cabecera que diga *"Ocultar"* o *"Mostrar"*.
   - Si `isOpen` es `false`, oculta el `children`.

2. **Agregar una prop de Slot (Acción personalizada):**
   - Agrega al componente `Card` una prop opcional `headerAction` (que puede recibir cualquier JSX, como un `<button>Editar</button>`).
   - Renderízala a la derecha del título si está presente.

---

## 🚀 Cómo ejecutar esta lección

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).