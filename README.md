# ⚛️ Repositorio de Aprendizaje: React desde Cero (JS)

Este repositorio está estructurado para aprender React paso a paso mediante ramas (`branches`). La rama `main` contiene la configuración base del proyecto, las instrucciones de configuración y la guía de arquitectura y buenas prácticas. Cada rama posterior (`lesson/...`) contiene una lección práctica con ejemplos y código funcional.

---

## 🛠️ Cómo se creó este proyecto

Este proyecto fue inicializado con **Vite** y la plantilla de **React con JavaScript**:

```bash
# 1. Crear proyecto React (JavaScript) con Vite
npm create vite@latest . -- --template react

# 2. Inicializar repositorio Git
git init
git branch -M main

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

---

## 🌿 Estructura de Ramas (Lecciones)

Cada lección vive en su propia rama para aislar los conceptos:

| Rama | Descripción | Conceptos Clave |
| :--- | :--- | :--- |
| `main` | Base del proyecto y documentación | Vite, setup, arquitectura |
| `lesson/01-componentes-y-jsx` | Componentes y JSX | Funciones, JSX, Props, SRP |
| `lesson/02-gestion-de-estado-y-eventos` | Estado y Eventos | `useState`, manejadores de eventos |
| `lesson/03-composicion-vs-prop-drilling` | Composición | `children`, evitar prop drilling |
| `lesson/04-custom-hooks` | Custom Hooks | Reutilización de lógica reactiva |
| `lesson/05-patron-contenedor-presentacional` | Patrón Contenedor/Presentacional | Separación lógica vs interfaz |
| `lesson/06-listas-y-keys-estables` | Renderizado de Listas | `.map()`, keys únicas y estables |
| `lesson/07-react-router` | Navegación y Rutas (React Router v6/v7) | SPA, `BrowserRouter`, `Routes`, `Route`, `Link`, `useParams`, `useNavigate` |
| `lesson/08-estado-global-zustand` | Estado Global con Zustand | `create`, selector stores, persistencia, sin boilerplate |

## 🔄 Cómo navegar entre lecciones

Para ver todas las lecciones disponibles:

```bash
git branch -a
```

Para cambiarte a una lección específica y explorarla:

```bash
git checkout lesson/01-componentes-y-jsx
npm run dev
```

Para regresar a la rama principal:

```bash
git checkout main
```

---

## 📁 Arquitectura Recomendada por Funcionalidad (Features)

Para proyectos escalables en React, se recomienda estructurar por **funcionalidades (features)** en lugar de agrupar sólo por tipo de archivo:

```text
src/
├── assets/                  # Recursos estáticos globales (imágenes, SVGs)
├── components/              # Componentes de UI genéricos (Button, Modal, Input)
├── features/                # Módulos organizados por funcionalidad
│   ├── auth/
│   │   ├── components/      # LoginForm.jsx, UserMenu.jsx
│   │   ├── hooks/           # useAuth.js
│   │   └── api/             # authApi.js
│   └── products/
│       ├── components/      # ProductCard.jsx, ProductList.jsx
│       ├── hooks/           # useProducts.js
│       └── utils/           # formatPrice.js
├── hooks/                   # Custom hooks globales reutilizables
├── services/                # Clientes API y llamadas externas
└── utils/                  # Funciones utilitarias globales
```

---

## 📐 Principios de Buenas Prácticas

1. **Responsabilidad Única (SRP):** Cada componente debe hacer una sola cosa y hacerla bien. Si supera 100-150 líneas o mezcla demasiadas responsabilidades, divídelo.
2. **Separación de Lógica y Presentación:**
   - _Contenedor:_ Maneja el estado, llamadas a APIs y lógica de negocio.
   - _Presentacional:_ Componentes puros enfocados solo en renderizar la UI a partir de props.
3. **Custom Hooks:** Encapsula lógica con estado (`useState`, `useEffect`) en funciones reutilizables (`useFetch`, `useForm`).
4. **Composición con `children`:** Evita pasar props por 5 niveles innecesarios usando la propiedad `children`.
5. **Estado Local Cercano:** Mantén el estado en el componente más cercano que lo necesita, evitando estados globales prematuros.
6. **Keys Únicas y Estables:** Al renderizar listas con `.map()`, usa siempre IDs únicos (`item.id`). Evita usar el índice (`index`) del array como key.
