import { useState, useEffect } from 'react';
import { fetchUsers } from '../services/userService';
import { UserList } from '../components/UserList';

/**
 * Componente Contenedor: UserListContainer
 * Responsabilidad: Gestionar el ciclo de vida de la petición asíncrona,
 * controlar los estados de carga y error, y pasar los datos al componente presentacional.
 */
export function UserListContainer() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function loadData() {
            try {
                setIsLoading(true);
                setError(null);
                const data = await fetchUsers();
                if (isMounted) {
                    setUsers(data);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || 'Error al cargar usuarios');
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        loadData();

        return () => {
            isMounted = false;
        };
    }, []);

    const handleSelectUser = (id) => {
        setSelectedUserId(id === selectedUserId ? null : id);
    };

    return (
        <div style={styles.card}>
            <h3 style={styles.header}>Lista de Usuarios (Patrón Contenedor)</h3>

            {/* Manejo de Estado: Cargando */}
            {isLoading && (
                <p style={{ color: '#38bdf8', fontStyle: 'italic' }}>⏳ Cargando usuarios desde la API...</p>
            )}

            {/* Manejo de Estado: Error */}
            {error && <p style={{ color: '#ef4444' }}>⚠️ {error}</p>}

            {/* Manejo de Estado: Éxito -> Renderiza el componente presentacional */}
            {!isLoading && !error && (
                <UserList
                    users={users}
                    selectedUserId={selectedUserId}
                    onSelectUser={handleSelectUser}
                />
            )}
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: '#1f2937',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '24px',
        maxWidth: '520px',
        margin: '20px auto',
        color: '#f9fafb',
        textAlign: 'left',
    },
    header: {
        margin: '0 0 16px 0',
        borderBottom: '1px solid #374151',
        paddingBottom: '10px',
    },
};