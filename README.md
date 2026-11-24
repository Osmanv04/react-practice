# 📘 Lección 01: Componentes, JSX y Props

En esta primera lección aprenderás los bloques fundamentales sobre los cuales se construye cualquier aplicación en React: **Componentes**, **JSX** y **Props**.

---

## 🎯 Objetivos de Aprendizaje

1. Entender qué es un componente funcional en React.
2. Comprender la sintaxis JSX y sus diferencias clave con HTML.
3. Comunicar componentes enviando datos mediante **Props** (Propiedades).
4. Aplicar el **Principio de Responsabilidad Única (SRP)** en la interfaz de usuario.

---

## 🧠 Conceptos Clave

### 1. ¿Qué es un Componente?
En el React moderno, un componente es simplemente una **función de JavaScript** que retorna JSX. Los componentes permiten dividir la interfaz de usuario en piezas independientes, reutilizables y aisladas.

```jsx
export function UserProfile({ name, role, avatarUrl }) {
  return (
    <div className="card">
      <img src={avatarUrl} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
```

### 2. ¿Qué es JSX?
JSX significa *JavaScript XML*. Es una extensión de la sintaxis de JavaScript que permite escribir estructuras que parecen HTML directamente dentro del código JS:
- **Expresiones dinámicas:** Se evalúan dentro de llaves `{}` (variables, funciones, operaciones ternarias).
- **Atributos:** En lugar de `class` se usa `className`, en lugar de `for` se usa `htmlFor`.
- **Raíz única:** Cada componente debe retornar un único elemento padre o un Fragmento vacío (`<> ... </>`).

### 3. ¿Qué son las Props?
Las *props* (propiedades) son los argumentos que le pasas a un componente. Son **de solo lectura (inmutables)**. Un componente hijo nunca debe modificar sus propias props; si necesita que los datos cambien con el tiempo, usará **estado** (Lección 2).

### 4. Principio de Responsabilidad Única (SRP)
Un componente debe encargarse de una única responsabilidad visual o lógica. Si un componente muestra el perfil, la lista de amigos y el carrito de compras a la vez, debe dividirse en componentes más pequeños.

---

## 📂 Archivos de esta Lección

- `src/components/UserProfile.jsx`: Componente presentacional puro con responsabilidad única que recibe `name`, `role` y `avatarUrl`.
- `src/App.jsx`: Componente contenedor que demuestra la reutilización de `UserProfile` con distintas props.

---

## 🚀 Cómo ejecutar esta lección

```bash
npm run dev
```

Abre tu navegador en [http://localhost:5173](http://localhost:5173).