/**
 * Componente Presentacional: UserList
 * Responsabilidad: Únicamente renderizar la lista y notificar eventos al padre.
 * No tiene estado ni sabe de dónde provienen los datos.
 */
export function UserList({ users, selectedUserId, onSelectUser }) {
    if (users.length === 0) {
        return <p style={{ color: '#9ca3af' }}>No hay usuarios para mostrar.</p>;
    }

    return (
        <ul style={styles.list}>
            {users.map((user) => {
                const isSelected = user.id === selectedUserId;
                return (
                    <li
                        key={user.id}
                        onClick={() => onSelectUser(user.id)}
                        style={{
                            ...styles.item,
                            borderColor: isSelected ? '#38bdf8' : '#374151',
                            backgroundColor: isSelected ? '#1e293b' : '#111827',
                        }}
                    >
                        <div>
                            <strong style={{ display: 'block', fontSize: '1.05rem' }}>{user.name}</strong>
                            <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>{user.role}</span>
                        </div>
                        <span
                            style={{
                                ...styles.badge,
                                backgroundColor: user.status === 'active' ? '#065f46' : '#7f1d1d',
                                color: user.status === 'active' ? '#34d399' : '#f87171',
                            }}
                        >
                            {user.status === 'active' ? 'Activo' : 'Inactivo'}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
}

const styles = {
    list: {
        listStyle: 'none',
        padding: 0,
        margin: '16px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 18px',
        borderRadius: '10px',
        border: '2px solid transparent',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    badge: {
        fontSize: '0.75rem',
        fontWeight: 'bold',
        padding: '4px 8px',
        borderRadius: '9999px',
        textTransform: 'uppercase',
    },
};