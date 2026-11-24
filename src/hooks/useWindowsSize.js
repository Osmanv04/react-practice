import { useState, useEffect } from 'react';

/**
 * Custom Hook: useWindowSize
 * Demuestra:
 * - Uso de useEffect para suscribirse a un evento global del navegador.
 * - Función de limpieza (cleanup) para remover el event listener y prevenir memory leaks.
 */
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Suscripción al evento
        window.addEventListener('resize', handleResize);

        // Limpieza al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Array vacío: se ejecuta solo una vez al montar

    return windowSize;
}