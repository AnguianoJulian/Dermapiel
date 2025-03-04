<template>
  <div class="cart-page">
    <h1>Carrito de compras</h1>
    <br>
    <br>

    <!-- Si no hay productos en el carrito -->
    <div v-if="cartItemsCount === 0">
      <p>Tu carrito está vacío.</p>
    </div>

    <!-- Si hay productos en el carrito -->
    <div v-else>
      <ul>
        <li v-for="(product, index) in cartItems" :key="index">
          <img :src="product.image" :alt="product.name" width="50" />
          <span>{{ product.name }}</span>
          <span>{{ product.price }}</span>
          <button @click="removeFromCart(product)">Eliminar</button>
        </li>
      </ul>
      <br>
      <br>
      <br>
      <button @click="clearCart">Vaciar carrito</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '@/stores/cartStore'; // Importa la tienda del carrito

const cartStore = useCartStore(); // Usar la tienda de Pinia

// Computed para obtener los productos del carrito
const cartItems = computed(() => cartStore.cart);

// Computed para obtener el número de productos en el carrito
const cartItemsCount = computed(() => cartStore.cart.length);

// Acción para eliminar un producto del carrito
const removeFromCart = (product) => {
  cartStore.removeFromCart(product);
};

// Acción para vaciar el carrito
const clearCart = () => {
  cartStore.clearCart();
};
</script>

<style>
:root {
  --clr-blanco: #FFFFFF;
  --clr-blanco2: #F5F5F5;
  --clr-gris: #D9D9D9;
  --clr-grisFuerte: #797979;
  --clr-negro: #000000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: var(--clr-blanco2);
}

/* Estilos para la página del carrito */
.cart-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--clr-blanco);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.cart-page h1 {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: var(--clr-negro);
}

.empty-cart {
  text-align: center;
  font-size: 1.2em;
  color: var(--clr-grisFuerte);
}

.cart-items {
  list-style-type: none;
  padding: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid var(--clr-gris);
  margin-bottom: 10px;
}

.cart-item-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
}

.cart-item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cart-item-name {
  font-size: 1em;
  color: var(--clr-negro);
}

.cart-item-price {
  font-size: 0.9em;
  color: var(--clr-grisFuerte);
}

.remove-button {
  background-color: var(--clr-negro);
  color: var(--clr-blanco);
  border: none;
  padding: 5px 10px;
  font-size: 0.9em;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: var(--clr-grisFuerte);
}

.clear-cart-button {
  width: 100%;
  background-color: var(--clr-negro);
  color: var(--clr-blanco);
  border: none;
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.clear-cart-button:hover {
  background-color: var(--clr-grisFuerte);
}

button {
  margin-left: 15px;
  background-color: var(--clr-negro); /* Fondo negro */
  color: var(--clr-blanco); /* Texto blanco */
  border: none; /* Sin bordes */
  padding: 10px 20px; /* Espaciado interno */
  font-size: 0.9em; /* Tamaño de fuente */
  cursor: pointer; /* Cambia el cursor al pasar el mouse */
  border-radius: 5px; /* Bordes redondeados */
  transition: background-color 0.3s ease; /* Transición suave */
}

button:hover {
  background-color: var(--clr-grisFuerte); /* Cambia el color al pasar el mouse */
}

.cart-page li {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Acomoda el botón a la derecha */
  padding: 10px;
  border-bottom: 1px solid var(--clr-gris);
  margin-bottom: 10px;
}

.cart-page img {
  width: 100px; /* Aumenta el tamaño de la imagen */
  height: auto;
  margin-right: 15px;
}

.cart-page span {
  flex-grow: 1; /* Hace que el nombre y precio ocupen el espacio disponible */
}

button {
  margin-left: auto; /* Mueve el botón a la derecha */
}

/* Diseño responsivo */
@media screen and (max-width: 767px) {
  .cart-page {
    padding: 10px;
  }

  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .cart-item-image {
    margin-bottom: 10px;
  }

  .cart-item-details {
    margin-bottom: 10px;
  }

  .remove-button {
    width: 100%;
    margin-top: 10px;
  }

  .clear-cart-button {
    width: 100%;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .cart-page {
    padding: 15px;
  }

  .cart-item {
    padding: 15px;
  }
}

@media screen and (min-width: 1025px) {
  .cart-page {
    padding: 20px;
  }
}

.cart-page ul {
  list-style-type: none;
  padding: 0;
}

.cart-page li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>
