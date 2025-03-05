<template>
    <div id="app">
    <header class="encabezado">
        <div class="logo-container">
            <img :src="require('@/assets/Img/Farmacia DermaPiel.png')" alt="Logotipo de Dermapiel" class="logo">
        </div>

        <div class="nav">
        <nav class="nav links-desplazar">
            <ul>
            <a><router-link to="/">Inicio</router-link></a>
            <a><router-link to="/productos">Productos</router-link></a>
            <a><router-link to="/contacto">Contacto</router-link></a>
            <a><router-link to="/acercade">Acerca de</router-link></a>
            </ul>
        </nav>
        </div>

        <div>
        <nav class="nav nav-2">
            <ul>
                <a><router-link to="/register">Iniciar sesión</router-link></a>
                <a class="carrito">
                <!-- Icono de carrito con el número de productos -->
                <router-link to="/cart">
                <i class="bi bi-cart"></i> <!-- Icono del carrito -->
                <!-- Mostrar la cantidad de productos en el carrito -->
                <span v-if="cartItemsCount > 0" class="cart-count">{{ cartItemsCount }}</span>
                </router-link>
            </a>
            </ul>
        </nav>
        </div>
    </header>
    <router-view></router-view> <!-- Para renderizar las vistas según el enrutador -->
    </div>
</template>

<script setup>
import { computed } from 'vue';
  import { useCartStore } from '@/stores/cartStore'; // Importar la tienda del carrito

  const cartStore = useCartStore(); // Usar la tienda de Pinia

  // Computed para obtener el número de productos en el carrito
const cartItemsCount = computed(() => cartStore.cart.length);
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.logo-container {
    text-align: center; /* Centra el logotipo */
    padding: 20px 0; /* Espaciado superior e inferior */
}

.logo {
    height: auto; /* Mantiene la proporción del logotipo */
    width: 200px; /* Tamaño base del logotipo (ajusta según sea necesario) */
}

::v-deep .encabezado{
    grid-area: encabezado;
    height: 200px;
    padding: 40px;
    background-color: var(--clr-blanco);
    color: var(--clr-negro);
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    font-size: 16px;
}

.nav{
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav ul{
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
}

a{
    padding-left: 25px;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}

a:hover{
    border-radius: 4px;
    background-color: var(--clr-negro);
    color: var(--clr-blanco);
}

/* Estilos responsive */
@media screen and (max-width: 1465px) {
    /* Ajuste para pantallas de tabletas */
    .encabezado{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        background-color: red;
    }

    .nav{
        flex-direction: column;
        margin: 10px;
    }

}

@media screen and (max-width: 940px){


    .nav{
        flex-direction: column;
        margin: 10px;
    }


    .nav ul {
        display: flex;
        flex-direction: column;
    }

    .nav ul a{
        padding: 5px;
    }
}

</style>