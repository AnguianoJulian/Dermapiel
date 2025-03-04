import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
state: () => ({
    cart: []  // Array que contendrá los productos en el carrito
}),
actions: {
    // Método para agregar un producto al carrito
    addToCart(product) {
    this.cart.push(product);
    },
    // Método para eliminar un producto del carrito
    removeFromCart(product) {
    this.cart = this.cart.filter(item => item.name !== product.name);
    },
    // Método para limpiar todo el carrito
    clearCart() {
    this.cart = [];
    }
},
getters: {
    // Obtenemos el número de productos en el carrito
    cartCount: (state) => state.cart.length
}
});
