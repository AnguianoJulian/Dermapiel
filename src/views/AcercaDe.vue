<template>
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acerca de Nosotros - Dermapiel</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="/Css/Acercade.css">

</head>
<body>
    <main class="main">
        <div class="contenido">
            <h2>Nuestra Visión</h2><br>
            <p>Ser una empresa líder en el cuidado integral de la piel, reconocida por su innovación, calidad y compromiso con la salud dermatológica. Aspiramos a mejorar la calidad de vida de nuestros clientes a través de productos y servicios efectivos, seguros y accesibles, respaldados por la última tecnología y la mejor atención personalizada.</p><br>

            <h2>Nuestra Misión</h2><br>
            <p>En Dermapiel, nos dedicamos a ofrecer soluciones dermatológicas avanzadas que promuevan la salud, bienestar y belleza de la piel. Trabajamos con los más altos estándares de calidad, brindando productos de vanguardia y un servicio profesional que garantice resultados visibles y satisfactorios para nuestros clientes.</p><br>

            <h2>Políticas de Calidad</h2><br>
            <ul>
                <li><strong>Compromiso con la excelencia.</strong><br>Nos comprometemos a ofrecer productos y servicios que cumplan con los más altos estándares de calidad, asegurando su eficacia, seguridad y confiabilidad en todos los procesos de desarrollo y distribución.</li>
                <li><strong>Innovación constante.</strong><br>Fomentamos la investigación y el desarrollo de nuevos productos y tecnologías que mejoren la salud dermatológica y estética de nuestros clientes, manteniéndonos a la vanguardia del sector.</li>
                <li><strong>Satisfacción del cliente.</strong><br>La satisfacción del cliente es nuestra prioridad. Nos aseguramos de entender sus necesidades y expectativas, brindando un servicio personalizado y soluciones que respondan eficazmente a sus problemas dermatológicos.</li>
                <li><strong>Cumplimiento normativo.</strong><br>Cumplimos con todas las normativas locales e internacionales en términos de seguridad, salud y calidad de nuestros productos y servicios, garantizando la total transparencia y confianza en lo que ofrecemos.</li>
                <li><strong>Capacitación continua.</strong><br>Promovemos la capacitación constante de nuestro personal, asegurando que nuestros colaboradores cuenten con los conocimientos y habilidades necesarias para brindar un servicio de calidad, actualizado y enfocado en el bienestar del cliente.</li>
                <li><strong>Mejora continua.</strong><br>Mantenemos un sistema de gestión de calidad basado en la mejora continua, promoviendo la evaluación y optimización de nuestros procesos, productos y servicios para superar las expectativas de nuestros clientes.</li>
            </ul>

        </div>

        <!-- Validación de páginas -->
        <div>
    <h1 :style="{ textAlign: 'center', margin: '20px' }">Valoración de Página</h1>

    <div class="rating-container">
    <button
        v-for="star in stars"
        :key="star"
        :data-value="star"
        @click="setRating(star)"
        @mouseover="highlightStars(star)"
        @mouseleave="highlightStars(currentRating)"
        :class="{'selected': star <= currentRating}"
        class="star-button"
    >
        ★
    </button>
    </div>

    <div id="rating-result">
    <p :style="{ textAlign: 'center', margin: '20px' }">
        Valoración: <span>{{ currentRating }}</span>/5
    </p>
    </div>
</div>

        <div class="correo-oferta">
            <div class="info-ofertas">
                <strong>Especialmente para ti</strong>
                <br>
                <p>
                    Regístrate y sé la primera en enterarte <br>
                    de los descuentos, los consejos y todo lo que <br> 
                    ofrece Maca.</p>
            </div>
            <div class="correo-info">
                <input type="email" placeholder="Correo electronico"><input/>
                <button class="button-enviar">Enviar</button>
            </div>
        </div>

    </main>

<footer class="footer">
    <div class="domicilio">
    <div class="footer-section">
        <p><strong>Encuéntranos en el domicilio:</strong> Hacienda la venta 1752, Balcones de Oblatos, 44720, Guadalajara, Jalisco</p>
    </div>
    </div>

    <div class="informacion-global">
        <div class="footer-section ">
            <a><strong>Marca</strong></a>
            <a href="Producto.html">Tienda</a>
            <a href="Acercade.html">Acerca de</a>
            <a href="Contacto.html">Contacto</a>
        </div>
        <div class="footer-section">
            <h3>Información</h3>
            <a><router-link to="/contacto">Preguntas frecuentes</router-link></a>
        </div>
        <div class="footer-section">
                <h3>Redes sociales</h3>
                <a href="https://www.instagram.com/dermapiel28/saved/" target="_blank">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61573914891631&locale=es_LA" target="_blank">Facebook</a>
                <a href="https://x.com/derma_piel" target="_blank">Twitter</a>
                <a href="https://www.youtube.com/channel/UCqx96ulc_RMJIxzm0CqVlmw" target="_blank">YouTube</a>
            </div>
            <div class="footer-section">
                <a href="https://wa.me/523330359838" target="_blank"><i class="bi bi-wechat"></i></a>
            </div>

    </div>
</footer>
</body>
</html>

</template>

<script>
export default {
    name: "AcercaDe",
    data() {
    return {
    stars: [1, 2, 3, 4, 5], 
    currentRating: 0, 
    };
},
created() {
    
    const savedRating = localStorage.getItem('rating');
    if (savedRating) {
    this.currentRating = parseInt(savedRating, 10); 
    }
},
methods: {

    setRating(value) {
    this.currentRating = value;
    localStorage.setItem('rating', value); 
    },
    
    highlightStars(value) {
    this.currentRating = value;
    },
},

};
</script>

<style scoped>

/* Estilo de valoración de páginas */
.rating-container {
    display: flex;
    justify-content: center;
}

.star-button {
    padding: 0;
    margin: 0;
    font-size: 3em; 
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.2s, color 0.3s, box-shadow 0.3s;
    color: #ddd; 
}

.star-button.selected {
    color: gold;
    transform: scale(1.2); 
}

.star-button:hover {
    color: orange;
    transform: scale(1.3); 
    box-shadow: 0 0 10px rgba(255, 165, 0, 0.5); 
}
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
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--clr-blanco2);
}

.encabezado {
    height: 100px;
    padding: 40px;
    background-color: var(--clr-blanco);
    color: var(--clr-negro);
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    font-size: 16px;
}

.nav {
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul {
    justify-content: center;
    align-items: center;
}

a {
    padding-left: 25px;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}

a:hover {
    border-radius: 4px;
    background-color: var(--clr-negro);
    color: var(--clr-blanco);
}

.links-desplazar {
    padding-left: 80px;
}

h1 {
    font-size: 1.9em;
    font-weight: bold;
    text-transform: uppercase;
}

a {
    text-decoration: none;
    padding-right: 30px;
    color: var(--clr-negro);
}

.correo-oferta {
    width: 100%;
    background-color: var(--clr-gris);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px 0;
}

.info-ofertas p {
    padding-top: 15px;
    font-size: 14px;
}

.correo-info {
    display: flex;
    justify-content: center;
    align-items: center;
}

.correo-info input {
    width: 300px;
    height: 45px;
    padding: 10px;
}

.button-enviar {
    width: 100px;
    height: 45px;
    margin-left: 15px;
    border: none;
    background-color: var(--clr-negro);
    font-weight: bold;
    color: var(--clr-blanco);
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

.footer .domicilio {
    margin: 40px;
    padding: 30px;
    width: 100%;
}

.informacion-global {
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

main {
    grid-area: main;
    align-self: center;
    justify-self: center;
    width: 80%;
    max-width: 1500px;
    background-color: var(--clr-blanco);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    flex: 1;
    font-family: sans-serif;
}

.contenido {
    padding: 40px;
}

.bi-wechat {
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

/* Media Queries para hacer el diseño responsivo */
@media screen and (max-width: 767px) {
    .correo-oferta {
        flex-direction: column;
        align-items: stretch;
        padding: 20px;
    }

    .correo-info {
        width: 100%;
        margin-top: 15px;
    }

    .correo-info input {
        width: 100%;
        margin-bottom: 10px;
    }

    .button-enviar {
        width: 100%;
    }

    .informacion-global {
        flex-direction: column;
        align-items: center;
        margin-right: 0;
    }

    .footer {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-section {
        max-width: 100%;
        margin-bottom: 10px;
    }
}

@media screen and (max-width: 768px) {
    
    .correo-oferta {
        padding: 20px;
    }

    .correo-info input {
        width: 100%;
    }

    .button-enviar {
        width: 100%;
    }

    .footer {
        flex-direction: column;
    }

    .footer-section {
        width: 100%;
        margin-bottom: 15px;
    }
}

@media screen and (max-width: 480px) {
    .contenido {
        padding: 20px;
    }

    .correo-oferta {
        padding: 15px;
    }

    .info-ofertas p {
        font-size: 12px;
    }

    .footer {
        padding: 15px;
    }

    .footer-section {
        max-width: 100%;
        margin-bottom: 10px;
    }

    .footer-section a {
        font-size: 0.9em;
    }
}
</style>
