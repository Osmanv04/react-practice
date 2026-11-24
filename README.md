# 📘 Lección 05: Patrón Contenedor y Presentacional

En esta lección aprenderás uno de los patrones de diseño arquitectónico más utilizados y recomendados en React: la separación estricta entre **Componentes Contenedores** (lógica y datos) y **Componentes Presentacionales** (renderizado de interfaz).

---

## 🎯 Objetivos de Aprendizaje

1. Entender la diferencia entre componentes "inteligentes" (*smart/containers*) y componentes "tontos" (*dumb/presentational*).
2. Manejar estados asíncronos completos: `loading`, `error` y `data`.
3. Crear componentes puramente presentacionales que se puedan probar y reutilizar en cualquier parte con simples `props`.
4. Mejorar la mantenibilidad desacoplando el origen de los datos de su representación visual.

---

## 🧠 Conceptos Clave

| Característica | Componente Presentacional | Componente Contenedor |
| :--- | :--- | :--- |
| **Propósito** | Cómo se ve la UI | Cómo funciona la aplicación |
| **Sabe de Redux/APIs** | No | Sí (hace fetch, usa custom hooks, etc.) |
| **Lee datos de** | `props` exclusivamente | Estado local, APIs, Context o Redux |
| **Cambia datos con** | Invoca callbacks recibidos en `props` | Dispara acciones, ejecuta `setState` |
| **Estilos CSS** | Sí (diseño, layout, colores) | Mínimo o ninguno (solo estructura) |

### Ejemplo del Flujo:
```text
[ UsersContainer ] (Maneja: isLoading, users, error, fetch)
         │
         ├── Si isLoading: <Spinner />
         ├── Si error:     <ErrorMessage message={error} />
         └── Si éxito:     <UserList users={users} onSelectUser={...} />
```

---

## 📂 Archivos de esta Lección

- `src/services/userService.js`: Simulación de un servicio API con promesas y retardo (`delay`).
- `src/components/UserList.jsx`: Componente **Presentacional** puro que recibe la lista de usuarios y un evento de selección.
- `src/containers/UserListContainer.jsx`: Componente **Contenedor** que gestiona el ciclo de vida de la petición asíncrona.
- `src/App.jsx`: Punto de entrada que monta el contenedor.

---

## ✏️ Reto Práctico: Tu Turno

1. **Agregar botón de Recarga (*Refresh*):**
   - Agrega un botón *"Recargar Usuarios"* en el componente presentacional.
   - Pásale una prop `onRefresh` desde el contenedor para que vuelva a disparar la petición a la API.

2. **Simular y Manejar Errores:**
   - Modifica `userService.js` para que acepte un parámetro opcional `shouldFail = false`.
   - Agrega un checkbox en la UI para simular un fallo en la red y comprueba que se renderice el mensaje de error apropiadamente.

---

## 🚀 Cómo ejecutar esta lección

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) y observa el estado de carga seguido de la lista renderizada.