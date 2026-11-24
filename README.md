# 📘 Lección 08: Estado Global con Zustand

En esta lección aprenderás a gestionar el estado global de una aplicación de forma simple, rápida y sin boilerplate utilizando **Zustand**.

---

## 🎯 Objetivos de Aprendizaje

1. Entender cuándo se requiere **Estado Global** vs **Estado Local**.
2. Conocer las ventajas de Zustand frente a Redux y Context API.
3. Crear un *Store* centralizado con la función `create` de Zustand.
4. Consumir y modificar el estado global desde cualquier componente sin necesidad de `<Provider>`.
5. Utilizar **Selectores** para evitar re-renderizados innecesarios y optimizar el rendimiento.
6. Persistir el estado automáticamente en `localStorage` usando el middleware `persist`.

---

## 🧠 Conceptos Clave

### 1. ¿Por qué Estado Global?
El estado global es necesario cuando múltiples componentes que **no están relacionados jerárquicamente** (o que están muy separados en el árbol de componentes) necesitan leer o modificar la misma información compartida. 

Ejemplos comunes:
- Un carrito de compras que se actualiza desde tarjetas de productos y se lee en la barra de navegación y en el checkout.
- La sesión y autenticación del usuario actual.
- Preferencias de la aplicación (tema oscuro/claro, idioma).

### 2. ¿Por qué Zustand?
Zustand es actualmente la solución de estado global más popular y ligera en el ecosistema moderno de React:

- **Cero boilerplate:** No necesitas definir *actions*, *reducers*, *dispatchers* ni envolver toda tu aplicación con `<Providers>` complejos como en Redux o Context API.
- **Renderizados óptimos:** Permite suscribirse únicamente a la porción de estado que el componente específico necesita mediante **selectores**, evitando re-renderizados innecesarios en el resto de la interfaz.
- **Persistencia sencilla:** Permite guardar y sincronizar el estado en `localStorage` o `sessionStorage` con un simple middleware (`persist`), sobreviviendo a recargas de pantalla.

### 3. ¿Cómo funciona Zustand en código?
Zustand crea un *hook* personalizado que conecta cualquier componente con una tienda de datos externa:

```jsx
import { create } from 'zustand';

export const useCartStore = create((set) => ({
  items: [],
  addItem: (product) => set((state) => ({ items: [...state.items, product] })),
  clearCart: () => set({ items: [] }),
}));
```

### 4. Uso en Componentes (con selectores)
Para evitar que un componente se re-renderice si cambia algo del store que no le interesa, extraemos únicamente lo que necesitamos:

```jsx
// Solo se re-renderiza cuando la cantidad de items cambia
const count = useCartStore((state) => state.items.length);
const addItem = useCartStore((state) => state.addItem);
```

### 5. Persistencia con `persist`
Con una sola línea de configuración podemos hacer que el estado persista:

```jsx
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({ ... }),
    { name: 'shopping-cart-storage' }
  )
);
```

---

## 📂 Archivos de esta Lección

- `src/store/useCartStore.js`: Store global de un carrito de compras (productos, total, agregar, eliminar y persistencia).
- `src/components/Navbar.jsx`: Muestra el contador global de productos en tiempo real.
- `src/components/ProductCard.jsx`: Permite agregar productos al store global.
- `src/components/CartView.jsx`: Visualiza los artículos agregados, calcula el total y permite vaciar el carrito.
- `src/App.jsx`: Ensamblado de la aplicación.

---

## ✏️ Reto Práctico: Tu Turno

1. **Control de Cantidades:**
   - Si se agrega el mismo producto dos veces, en lugar de duplicar el elemento en el array, incrementa su propiedad `quantity: number`.
2. **Botón para Incrementar/Disminuir cantidad:**
   - En `CartView.jsx`, agrega botones `+` y `-` para cada producto en el carrito.
3. **Crear un Theme Store (`useThemeStore.js`):**
   - Crea una tienda global para alternar entre modo claro (`light`) y modo oscuro (`dark`).
   - Conéctalo con un botón en el `Navbar`.

---

## 🚀 Cómo ejecutar esta lección

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173), interactúa con los productos y prueba recargar la página.