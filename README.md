# 📘 Lección 04: Custom Hooks

En esta lección aprenderás cómo extraer lógica reactiva reutilizable fuera de los componentes mediante **Custom Hooks**, mejorando la separación de responsabilidades y facilitando el mantenimiento y pruebas de tu código.

---

## 🎯 Objetivos de Aprendizaje

1. Entender qué es un Custom Hook y por qué debe comenzar con el prefijo `use`.
2. Seguir las **Reglas de los Hooks** (no llamar hooks dentro de bucles, condicionales o funciones anidadas).
3. Encapsular lógica de estado y efectos (`useState`, `useEffect`) en un módulo independiente.
4. Crear hooks reutilizables para casos del mundo real:
   - `useCounter`: Manejo avanzado de contadores con límites.
   - `useWindowSize`: Detección en tiempo real del tamaño de la ventana y eventos del navegador.

---

## 🧠 Conceptos Clave

### 1. ¿Por qué crear Custom Hooks?
Cuando dos o más componentes necesitan la misma lógica de estado (por ejemplo, validar un formulario, hacer llamadas a una API o escuchar eventos del navegador), duplicar `useState` y `useEffect` en cada uno ensucia el código.

Un Custom Hook permite empaquetar esa lógica:
```jsx
// src/hooks/useToggle.js
import { useState } from 'react';

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}
```

### 2. Reglas de los Hooks
1. **Solo llámalos en el nivel superior**: No los uses dentro de `if`, bucles `for`, o funciones internas.
2. **Solo llámalos desde componentes funcionales de React o desde otros Custom Hooks**.
3. **Convención de nomenclatura**: Su nombre siempre debe comenzar con `use` (ej: `useFetch`, `useAuth`). React usa esta convención para aplicar validaciones de linter automáticas.

---

## 📂 Archivos de esta Lección

- `src/hooks/useCounter.js`: Hook para gestionar estado numérico con límites mínimos y máximos.
- `src/hooks/useWindowSize.js`: Hook con `useEffect` que escucha el evento `resize` de la ventana.
- `src/App.jsx`: Componente que consume ambos custom hooks y muestra su uso práctico.

---

## ✏️ Reto Práctico: Tu Turno

1. **Crear el hook `useToggle.js`:**
   - Crea `src/hooks/useToggle.js` que reciba un valor inicial booleano (`false` por defecto).
   - Debe retornar el estado actual y funciones para: `toggle`, `setTrue` y `setFalse`.
   - Úsalo en `App.jsx` para mostrar/ocultar un panel informativo.

2. **Crear el hook `useLocalStorage.js` (Nivel Intermedio):**
   - Crea un hook que sincronice una variable de estado con `window.localStorage`.
   - Al cambiar el estado, debe actualizarse en el almacenamiento del navegador para persistir al recargar la página.

---

## 🚀 Cómo ejecutar esta lección

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) y prueba redimensionar la ventana de tu navegador para ver la reactividad del hook.