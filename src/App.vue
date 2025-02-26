<template>
    <div id="app">
    <header class="encabezado">
    <div class="nav">
        <div class="logo-container">
                <img :src="require('@/assets/Img/Farmacia DermaPiel.png')" alt="Logotipo de Dermapiel" class="logo">
            </div>
        <nav class="nav links-desplazar">
        <ul>
            <a><router-link to="/">Inicio</router-link></a>
            <a><router-link to="/productos">Productos</router-link></a>
            <a><router-link to="/contacto">Contacto</router-link></a>
            <a><router-link to="/acercade">Acerca de</router-link></a>   
        </ul>
        </nav>
    </div>

    <div class="nav">
        <nav>
        <ul>
            <a><router-link to="/register">Inicio de sesión</router-link></a>
            <a class="carrito" href="#"><i class="bi bi-cart"></i></a>
        </ul>
        </nav>
    </div>
</header>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
name: 'HeaderComponent',
};
</script>

<style scoped>
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
@media screen and (max-width: 1024px) {
    /* Ajuste para pantallas de tabletas */
    .logo {
        width: 150px; 
    }

    .nav {
        flex-direction: column; 
        font-size: 1em; 
    }

    .nav ul {
        display: flex;
        flex-direction: column; 
        padding: 0;
        list-style-type: none;
    }

    .nav a {
        padding: 10px 0; 
        font-size: 1.1em; 
    }
}

@media screen and (max-width: 768px) {
    /* Ajuste para pantallas de teléfonos móviles */
    .encabezado {
        padding: 20px; 
        height: auto; 
    }

    .logo {
        width: 150px;
    }

    .nav {
        font-size: 1em; 
        flex-direction: column; 
    }

    .nav ul {
        display: flex;
        flex-direction: column; 
        padding: 0;
    }

    .nav a {
        padding: 10px 0;
        font-size: 1em; 
    }

    .carrito {
        font-size: 1.5em; 
    }
}

@media screen and (max-width: 480px) {
    /* Ajuste para pantallas muy pequeñas (teléfonos) */
    .nav a {
        padding: 8px 0; 
        font-size: 0.9em; 
    }

    .logo {
        width: 100px; 
    }

    .carrito {
        font-size: 1.8em; 
    }
}

</style>