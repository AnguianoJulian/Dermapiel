<template>
    <div>
    <!-- Barra de Búsqueda -->
    <div class="buscar">
        <input v-model="searchQuery" type="text" placeholder="Buscar productos..." class="search-input" />
    </div>

    <main class="main">
        <div v-for="brand in filteredProducts" :key="brand.name" class="product-section">
        <h1 class="brand-title">{{ brand.name }}</h1>
        <div class="product-grid">
            <div v-for="product in brand.items" :key="product.name" class="product-item">
            <img :src="product.image" :alt="product.name" />
            <p class="product-name">{{ product.name }}</p>
            <p class="product-price">${{ product.price }}</p>
            <br />
            <p class="informacion">{{ product.description }}</p>
            <!-- Botón para agregar al carrito -->
            <div class="boton-agregar">
            <br>
                <button class="agregar" @click="addToCart(product)">Añadir al carrito</button>
            </div>
            </div>
        </div>
        </div>
    </main>
    </div>
<section class="recommendations">
        <h2 class="recommendations-title">Recomendaciones.</h2>
        <br>
        <div class="video-container">
            <div class="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/wfZc1QDLRhw?si=WyEAyuDEIvtGDLk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kovaxLJ8VLE?si=87YS2d4XpWwY_mRV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
  import { useCartStore } from '@/stores/cartStore'; // Importa el store de Pinia para el carrito

  const searchQuery = ref(""); // Estado del input de búsqueda

const products = ref([
{
    name: "Avène",
    items: [
    { name: "Cleanance Solar SPF50+", price: 509, image: new URL("@/assets/Img/Cleanance Solar SPF50+.jpg", import.meta.url).href, description: "Protector solar para piel grasa." },
    { name: "Ultra-Mat Fluido SPF 50+", price: 484, image: new URL("@/assets/Img/Ultra-Mat Fluido SPF 50+.jpg", import.meta.url).href, description: "Protector solar para piel mixta." },
    { name: "Agua Termal", price: 400, image: new URL("@/assets/Img/Agua termal.jpg", import.meta.url).href, description: "Calma la piel sensible." },
    { name: "Cleanance Comedomed", price: 500.00, image: new URL("@/assets/Img/Cleanance Comedomed.jpg", import.meta.url).href, description: "Tratamiento anti-acné." },
    { name: "Cleanance Solar con Color SPF 50+", price: 509.00, image: new URL("@/assets/Img/Cleanance Solar con Color SPF 50+.jpg", import.meta.url).href, description: "Protector solar con color para piel grasa." }
    ]
},
{
    name: "La Roche-Posay",
    items: [
{ name: "Anthelios UVmune 400 SPF 50+ Oil", price: 509.00, image: new URL("@/assets/Img/Anthelios UVmune 400 SPF 50+ Oil Control Gel-Crema.jpg", import.meta.url).href, description: "Protector solar facial para piel grasa." },
{ name: "Effaclar Mat", price: 484.00, image: new URL("@/assets/Img/Effaclar Mat.jpg", import.meta.url).href, description: "Hidratante matificante para piel grasa." },
{ name: "Effaclar Gel Limpiador", price: 500.00, image: new URL("@/assets/Img/Effaclar Gel Limpiador Purificante.jpg", import.meta.url).href, description: "Gel limpiador facial para piel con acné." },
{ name: "Kerium DS Anti-caspa", price: 600.00, image: new URL("@/assets/Img/Kerium DS Anti-caspa.jpg", import.meta.url).href, description: "Shampoo anti-caspa persistente." },
{ name: "Mela B3 Serum", price: 509, image: new URL("@/assets/Img/Mela B3 Serum.jpg", import.meta.url).href, description: "Serum para manchas y marcas." }
    ]
},
{
    name: "Eucerin",
    items: [
    { name: "Pigment Control Sun Fluid SPF 50+", price: 509, image: new URL("@/assets/Img/Pigment Control Sun Fluid SPF 50+.jpg", import.meta.url).href, description: "Protección solar para prevenir manchas." },
    { name: "Atopi Control Bálsamo", price: 484, image: new URL("@/assets/Img/Atopi Control Bálsamo Textura Ligera.jpg", import.meta.url).href, description: "Bálsamo para piel atópica." },
    { name: "Anti-Pigment Crema Contorno de Ojos", price: 400, image: new URL("@/assets/Img/Anti-Pigment Crema Contorno de Ojos.jpg", import.meta.url).href, description: "Reduce manchas y ojeras." },
    { name: "Dermopure Oil Control Fluido Facial", price: 500, image: new URL("@/assets/Img/Dermopure Oil Control Fluido Facial.jpg", import.meta.url).href, description: "Fluido facial para piel grasa." },
    { name: "Anti-Pigment Dual Serum Facial", price: 509, image: new URL("@/assets/Img/Anti-Pigment Dual Serum Facial.jpg", import.meta.url).href, description: "Serum para manchas en la piel." }
    ]
},
{
    name: "ISDIN",
    items: [
    { name: "Lambdapil Shampoo", price: 509, image: new URL("@/assets/Img/Lambdapil Shampoo.jpg", import.meta.url).href, description: "Shampoo para caída del cabello." },
    { name: "Fotoprotector Gel Cream Wet Skin", price: 500, image: new URL("@/assets/Img/Fotoprotector Gel Cream Wet Skin.jpg", import.meta.url).href, description: "Protector solar en gel-crema." },
    { name: "Warts Verrutop", price: 450, image: new URL("@/assets/Img/Warts Verrutop.jpg", import.meta.url).href, description: "Solución para tratar verrugas." },
    { name: "Psorisdin Shampoo", price: 509, image: new URL("@/assets/Img/Psorisdin Shampoo.jpg", import.meta.url).href, description: "Shampoo para descamación del cuero cabelludo." },
    { name: "Nutratopic PRO-AMP Loción Corporal Emoliente", price: 500, image: new URL("@/assets/Img/Nutratopic PRO-AMP Loción Corporal Emoliente.jpg", import.meta.url).href, description: "Loción para piel atópica." }
    ]
}
]);

  // Computed para filtrar productos por búsqueda
const filteredProducts = computed(() => {
    if (!searchQuery.value) return products.value;

    const query = searchQuery.value.toLowerCase();

    return products.value
    .map(brand => ({
        name: brand.name,
        items: brand.items.filter(product => product.name.toLowerCase().includes(query))
    }))
      .filter(brand => brand.items.length > 0); // Excluir marcas sin productos que coincidan
});

  // Función para agregar un producto al carrito
const cartStore = useCartStore();
const addToCart = (product) => {
    cartStore.addToCart(product);
};

</script>

<style scoped>
:root{
    --clr-blanco: #FFFFFF;
    --clr-blanco2: #F5F5F5;
    --clr-gris: #D9D9D9;
    --clr-grisFuerte: #797979;
    --clr-negro:#000000;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.encabezado{
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

.links-desplazar{
    padding-left: 80px;
}

h1{
    font-size: 1.9em;
    font-weight: bold;
    text-transform: uppercase;
}

a{
    text-decoration: none;
    padding-right: 30px;
    color: var(--clr-negro);
}

/* Reseteo básico */
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

.buscar{
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 15px;
}

.search-input{
    margin-right: 30px;
    border: none;
    border-radius: 6px;
    padding: 10px;
}

.product-section { 
    padding: 10px;
    background-color: #fff;
}

.brand-title {
    background-color: #d9d9d9;
    padding: 30px;
    font-size: 1.5em;
    color: #000000;
    text-align: center;
    font-size: 2em; /* Tamaño aumentado */
    font-weight: bold; /* Negritas */
}

.product-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
    justify-content: center;
}

/*ANIMACIONES ENBEBIDAS*/
.product-item {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    background-color: #fff;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    transition: .5s, color .10s;
        -webkit-transition: .5s, color .10s;
        -moz-transition: .5s, color .10s;
}

.product-item:hover{
    transform: translatey(-10px);
        -webkit-transform: translatey(-10px);
        -moz-transform: translatey(-10px);
}

.product-item img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
}

.product-name {
    font-size: 0.9em;
    color: #666;
}

.product-price {
    font-weight: bold;
    color: #333;
}

.add-to-cart {
    background-color: var(--clr-negro);
    color: var(--clr-blanco);
    border: none;
    padding: 10px 20px;
    font-size: 0.9em;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
    transition: background-color 0.3s ease;
}

.add-to-cart:hover {
    background-color: var(--clr-grisFuerte);
}

.content-oferta{
    width: 100%;
    padding: 0 30px;
    background-color: var(--clr-gris);
    display: block;
}

.content-oferta p{
    text-align: center;
    font-size: 24px;
    padding-top: 18px;
}

.oferta-info{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 15px;
    padding: 20px;
}

.text-desplazar{
    padding-left: 60px;
}

.informacion-general{
    width: 100%;
    margin: 15px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
}

.info-doc ul{
    padding-left: 30px;
}

.button{
    margin: 30px 0;
    border: none;
    width: 150px;
    height: 50px;
    background-color: #000000;
    font-weight: bold;
}

.correo-oferta{
    width: 100%;
    background-color: var(--clr-gris);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px 0;
}

.info-ofertas p{
    padding-top: 15px;
    font-size: 14px;
}

.correo-info{
    display: flex;
    justify-content: center;
    align-items: center;
}

.correo-info input{
    width: 300px;
    height: 45px;
    padding: 10px;
}

.button-enviar{
    width: 100px;
    height: 45px;
    margin-left: 15px;
    border: none;
    background-color: #000000;
    font-weight: bold;
    color: #D9D9D9;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    color: #fff;
    padding: 20px;
    font-family: sans-serif;
}

.footer .domicilio{
    margin: 40px;
    padding: 30px;
    width: 100%;
}

.informacion-global{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: 90px;
}

.footer-section {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    align-items: center;
}

.footer-section h3 {
    font-size: 1.1em;
    margin-bottom: 10px;
    align-items: center;
}

.footer-section a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 5px;
    text-align: left;
}

.footer-section a:hover {
    text-decoration: underline;
}

.footer-section p {
    font-size: 0.9em;
}

.bi-wechat{
    font-size: 25px;
    background-color: var(--clr-blanco2);
    width: 60px;
    height: 60px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    color: var(--clr-negro);
}

.main{
    grid-area: main; /* Asigna al área principal */
    align-self: center; /* Centra verticalmente dentro de su área */
    justify-self: center; /* Centra horizontalmente dentro de su área */
    width: 80%; /* Ajusta el ancho */
    max-width: 1500px; /* Limita el ancho máximo */
    background-color: var(--clr-blanco); /* Fondo del main */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para darle profundidad */
    flex: 1;
    font-family:sans-serif;
}

.agregar{
    background-color: var(--clr-negro);
    border: none;
    border-radius: 6px;
    color: var(--clr-blanco2);
    padding: 10px;
    margin-top: 10px;
}

/* Diseño base para móviles y tabletas */
@media screen and (max-width: 767px) {
    .encabezado {
        padding: 20px;
        height: auto;
        flex-direction: column;
        text-align: center;
    }

    .nav ul {
        flex-direction: column;
        padding: 0;
        margin: 0;
    }

    .nav a {
        padding: 15px 0;
        font-size: 1.2em;
    }

    .main {
        width: 95%;
        padding: 15px;
    }

    .correo-oferta {
        flex-direction: column;
        text-align: center;
        padding: 15px 0;
    }

    .correo-info input {
        width: 80%;
    }

    .footer {
        flex-direction: column;
        text-align: center;
    }

    .informacion-global {
        flex-direction: column;
        align-items: center;
    }

    .footer-section {
        max-width: 90%;
        margin-bottom: 20px;
    }

    .bi-wechat {
        width: 50px;
        height: 50px;
    }
}

/* Diseño para tabletas y dispositivos de tamaño medio (768px a 1024px) */
@media screen and (min-width: 768px) and (max-width: 1024px) {
    .encabezado {
        padding: 30px;
        height: 160px;
    }

    .nav ul {
        flex-direction: row;
    }

    .main {
        width: 85%;
        max-width: 1200px;
    }

    .correo-oferta {
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 0;
    }

    .correo-info input {
        width: 250px;
    }

    .footer {
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
    }

    .informacion-global {
        flex-direction: row;
    }

    .footer-section {
        max-width: 45%;
    }
}

/* Diseño para pantallas más grandes */
@media screen and (min-width: 1025px) {
    .encabezado {
        height: 200px;
    }

    .main {
        width: 80%;
        max-width: 1500px;
    }

    .correo-oferta {
        padding: 25px 0;
    }

    .correo-info input {
        width: 300px;
    }

    .footer {
        justify-content: space-between;
    }

    .informacion-global {
        justify-content: space-between;
    }

    .footer-section {
        max-width: 300px;
    }

    .bi-wechat {
        width: 60px;
        height: 60px;
    }
}

.recommendations {
margin-top: 2rem;
padding: 2rem;
background-color: #f5f5f5;
}

h2 {
text-align: center;
margin-bottom: 1.5rem;
color: #333;
   font-size: 4rem; /* Ajusta el tamaño de la letra */
}

.recommendations-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 5rem;
max-width: 1200px;
margin: 0 auto;
}

.recommendation-card {
display: block;
background: white;
border-radius: 8px;
overflow: hidden;
transition: transform 0.2s ease;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.recommendation-card:hover {
transform: translateY(-4px);
}

.recommendation-card img {
width: 100%;
height: 200px;
object-fit: cover;
}

.recommendation-card h3 {
padding: 1rem;
margin: 0;
font-size: 1.1rem;
color: #333;
text-align: center;
}

.video-container {
display: flex; 
justify-content: center; 
gap: 2rem; 
margin: 0 auto;
flex-wrap: wrap; 
}

.video-wrapper {
max-width: 560px; 
width: 100%; 
}

@media screen and (max-width: 767px) {
.video-container {
    flex-direction: column; 
    align-items: center; 
}

.video-wrapper {
    max-width: 100%; 
}
}
</style>