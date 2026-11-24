# 📘 Lección 02: Gestión de Estado y Manejo de Eventos

En esta lección aprenderás cómo hacer que una aplicación de React sea interactiva utilizando el hook fundamental **`useState`** y los manejadores de eventos.

---

## 🎯 Objetivos de Aprendizaje

1. Entender qué es el **Estado** en React y cómo se diferencia de las **Props**.
2. Usar el hook `useState` para declarar variables de estado reactivas.
3. Comprender el principio de **Inmutabilidad** y por qué nunca debemos modificar el estado directamente.
4. Conectar eventos del usuario (`onClick`, etc.) con funciones manejadoras (*event handlers*).
5. Utilizar la forma de actualización funcional `setState(prev => prev + 1)` para evitar condiciones de carrera.

---

## 🧠 Conceptos Clave

### 1. ¿Qué es el Estado (`useState`)?
Mientras que las props son datos que un componente *recibe desde fuera* (de solo lectura), el **estado** es la memoria interna de un componente. Cuando el estado cambia mediante su función actualizadora, React programa un **re-renderizado** automático para actualizar la interfaz.

```jsx
const [count, setCount] = useState(0);
```
- `count`: El valor actual del estado.
- `setCount`: La función para actualizar el valor.
- `0`: El valor inicial.

### 2. Inmutabilidad: Nunca mutes el estado
En React el estado debe tratarse como inmutable:
- ❌ **Incorrecto:** `count = count + 1;` (React no se enterará del cambio y no re-renderizará la UI).
- ✅ **Correcto:** `setCount(count + 1);` o `setCount(prev => prev + 1);`

### 3. Actualización Funcional
Cuando el nuevo valor del estado depende directamente del valor anterior, se recomienda pasar una función a `setCount`:
```jsx
// Garantiza que siempre trabajamos con el estado más reciente, incluso en actualizaciones rápidas
setCount((prev) => prev + 1);
```

### 4. Aislamiento del Estado
Cada instancia de un componente tiene su propio estado independiente. Si renderizas `<Counter />` tres veces, cada uno tendrá su propio conteo sin interferir con los demás.

---

## 📂 Archivos de esta Lección

- `src/components/Counter.jsx`: Componente interactivo que implementa `useState`, botones de incremento, decremento y reinicio.
- `src/App.jsx`: Componente principal que demuestra cómo dos contadores mantienen estados completamente aislados.

---

## ✏️ Reto Práctico: Tu Turno

Pon a prueba tu comprensión de `useState` y los eventos agregando las siguientes funcionalidades:

1. **Límite mínimo (No permitir números negativos):**
   - Agrega una prop opcional `min = 0` al componente `Counter`.
   - Modifica `handleDecrement` para que el contador no baje de ese número mínimo.
   - **Extra:** Deshabilita el botón de restar (`disabled={count <= min}`) y dale un estilo opaco cuando esté deshabilitado.

2. **Límite máximo:**
   - Agrega una prop opcional `max = 50`.
   - Si el contador alcanza el límite máximo, deshabilita el botón de sumar.

3. **Crear un nuevo componente `TextInput.jsx` (Estado con strings):**
   - Crea `src/components/TextInput.jsx` con un campo `<input type="text" />`.
   - Usa un estado `const [text, setText] = useState('')`.
   - Escucha el evento `onChange={(e) => setText(e.target.value)}`.
   - Muestra en tiempo real debajo del input: *"Escribiste: {text}"* y la cantidad de caracteres: *"Total: {text.length} caracteres"*.

---

## 🚀 Cómo ejecutar esta lección

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) e interactúa con los componentes.