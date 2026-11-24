import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Store Global de Carrito con Zustand
 * Demuestra:
 * - Acciones directas (addItem, removeItem, clearCart).
 * - Middleware 'persist' para sincronizar con localStorage.
 */
export const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],

            // Agregar un producto al carrito
            addItem: (product) => {
                set((state) => ({
                    cart: [...state.cart, { ...product, cartItemId: Date.now() + Math.random() }],
                }));
            },

            // Eliminar un producto por su id de carrito
            removeItem: (cartItemId) => {
                set((state) => ({
                    cart: state.cart.filter((item) => item.cartItemId !== cartItemId),
                }));
            },

            // Vaciar el carrito
            clearCart: () => set({ cart: [] }),

            // Selector de cálculo: total a pagar
            getTotalPrice: () => {
                const { cart } = get();
                return cart.reduce((total, item) => total + item.price, 0);
            },
        }),
        {
            name: 'shopping-cart-storage', // Clave en localStorage
        }
    )
);