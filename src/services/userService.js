/**
 * Servicio falso (Mock API): simula una llamada de red asíncrona con delay.
 */
const MOCK_USERS = [
    { id: 1, name: 'Grace Hopper', role: 'Creadora del compilador COBOL', status: 'active' },
    { id: 2, name: 'Linus Torvalds', role: 'Creador de Linux y Git', status: 'active' },
    { id: 3, name: 'Ken Thompson', role: 'Co-creador de UNIX y Go', status: 'inactive' },
];

export async function fetchUsers() {
    // Simular latencia de red de 1 segundo
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_USERS);
        }, 1000);
    });
}