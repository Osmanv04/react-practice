import { useState } from 'react';

/**
 * Custom Hook: useCounter
 * Encapsula la lógica de un contador con límites opcionales.
 */
export function useCounter({ initial = 0, step = 1, min = -Infinity, max = Infinity } = {}) {
    const [count, setCount] = useState(initial);

    const increment = () => {
        setCount((prev) => Math.min(prev + step, max));
    };

    const decrement = () => {
        setCount((prev) => Math.max(prev - step, min));
    };

    const reset = () => {
        setCount(initial);
    };

    const isAtMin = count <= min;
    const isAtMax = count >= max;

    return { count, increment, decrement, reset, isAtMin, isAtMax };
}