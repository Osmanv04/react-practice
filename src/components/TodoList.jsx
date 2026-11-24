import { useState } from 'react';
import { TodoItem } from './TodoItem';

/**
 * Componente: TodoList
 * Demuestra:
 * 1. Renderizado con .map() utilizando identificadores únicos y estables (key={todo.id}).
 * 2. Operaciones inmutables sobre arrays (agregar al inicio con spread y eliminar con .filter).
 */
export function TodoList() {
    const [todos, setTodos] = useState([
        { id: 'todo-1', title: 'Comprender Virtual DOM' },
        { id: 'todo-2', title: 'Aprender el uso de keys únicas' },
        { id: 'todo-3', title: 'Evitar index como key en listas dinámicas' },
    ]);

    const [newTitle, setNewTitle] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!newTitle.trim()) return;

        // Creamos un nuevo objeto con ID único (timestamp o crypto.randomUUID)
        const newTodo = {
            id: `todo-${Date.now()}`,
            title: newTitle.trim(),
        };

        // Agregamos al inicio para probar la importancia de las keys estables
        setTodos((prev) => [newTodo, ...prev]);
        setNewTitle('');
    };

    const handleDeleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleAddTodo} style={styles.form}>
                <input
                    type="text"
                    placeholder="Nueva tarea..."
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    style={styles.formInput}
                />
                <button type="submit" style={styles.addBtn}>
                    Agregar al inicio
                </button>
            </form>

            <ul style={styles.list}>
                {todos.map((todo) => (
                    // ¡Importante! Usamos un id único y estable, NUNCA el índice del array
                    <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
                ))}
            </ul>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '480px',
        margin: '0 auto',
    },
    form: {
        display: 'flex',
        gap: '8px',
        marginBottom: '20px',
    },
    formInput: {
        flex: 1,
        padding: '10px 14px',
        borderRadius: '6px',
        border: '1px solid #4b5563',
        backgroundColor: '#1f2937',
        color: '#fff',
    },
    addBtn: {
        backgroundColor: '#2563eb',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        padding: '10px 16px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
};