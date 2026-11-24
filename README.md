# 📘 Lección 06: Listas y Keys Estables

En esta lección aprenderás a renderizar colecciones dinámicas de datos con `.map()` y entenderás la importancia crítica del atributo especial **`key`** en el algoritmo de reconciliación de React.

---

## 🎯 Objetivos de Aprendizaje

1. Transformar arrays en elementos visuales utilizando `.map()`.
2. Comprender cómo funciona la prop `key` en el Virtual DOM de React.
3. Descubrir por qué el índice del array (`index`) como `key` es un **antipatrón** cuando la lista cambia dinámicamente.
4. Implementar adición, eliminación y reordenamiento de elementos garantizando keys únicas y estables.

---

## 🧠 Conceptos Clave

### 1. Renderizado de Colecciones con `.map()`
En JSX no usamos bucles tradicionales como `for` o `while`. En su lugar, usamos métodos declarativos de arrays, principalmente `.map()`:

```jsx
const items = [{ id: 'a1', text: 'Aprender JSX' }, { id: 'b2', text: 'Dominar Hooks' }];

return (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.text}</li>
    ))}
  </ul>
);
```

### 2. ¿Para qué sirve la prop `key`?
La prop `key` le da a cada elemento una **identidad persistente**. Le dice a React:
*"Este es el elemento X, sin importar si ahora está al principio, al final o si borraron su vecino"*.

### 3. ¿Por qué NO usar `key={index}`?
Si usas el índice como clave:
- Al agregar un elemento al inicio de la lista, todos los elementos siguientes cambian de índice (`0` pasa a ser `1`, `1` pasa a ser `2`).
- React cree que todos los elementos cambiaron y puede reasignar estados internos (como texto escrito en inputs o animaciones) al elemento equivocado.
- **Regla de oro:** Usa identificadores únicos (`id`, `uuid`, etc.) generados al crear el dato.

---

## 📂 Archivos de esta Lección

- `src/components/TodoItem.jsx`: Elemento de la lista con estado propio (un input o checkbox) para evidenciar la estabilidad de la clave.
- `src/components/TodoList.jsx`: Componente interactivo que permite agregar tareas al principio/final y eliminar elementos.
- `src/App.jsx`: Demostración práctica y comparativa.

---

## ✏️ Reto Práctico: Tu Turno

1. **Reordenar la Lista (Invertir orden):**
   - Agrega un botón *"Invertir orden"* que aplique `[...todos].reverse()`.
   - Observa cómo las notas o textos escritos en cada tarea se mantienen intactos con sus respectivas tareas gracias a `key={todo.id}`.

2. **Filtro de Búsqueda en tiempo real:**
   - Agrega un campo `<input placeholder="Buscar tarea..." />`.
   - Filtra la lista con `.filter()` antes del `.map()`.
   - Comprueba que la lista filtrada se renderice de forma fluida.

---

## 🚀 Cómo ejecutar esta lección

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).