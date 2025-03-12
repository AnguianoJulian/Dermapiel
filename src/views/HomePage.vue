<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dermapiel</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
    <main class="main">
        <div class="content-oferta">
            <!-- Slider de imagenes -->
            <div class="slider">
                <figure>
                    <div class="slide">
                        <h1>Eucerin Atopic</h1>
                        <img :src="require('@/assets/Img/eucerin atopic1.jpg')" alt="" >
                    </div>
                    <div class="slide">
                        <h1>Agua termal</h1>
                        <img :src="require('@/assets/Img/Agua termal1.jpg')" alt="" >
                    </div>
                    <div class="slide">
                        <h1>Effaclar Mat</h1>
                        <img :src="require('@/assets/Img/Effaclar Mat1.jpg')" alt="" >
                    </div>
                    <div class="slide">
                        <h1>Mela B3 Serum</h1>
                        <img :src="require('@/assets/Img/Mela B3 Serum1.jpg')" alt="" >
                    </div>
                    
                </figure>
            </div>
        </div>

        <div class="informacion-general">
            <div class="info-doc">
                <h3>Dr. Juan Carlos Moreno González</h3>
                <br>
                <p><strong>Especialización:</strong> Dermatología clínica y cosmética.</p>
                <p><strong>Experiencia:</strong> 15 años.</p>
                <br>
                <strong>Educación:</strong>
                <ul>
                    <li>Medicina General, Universidad Nacional Autónoma de México (UNAM).</li>
                    <li>Especialidad en Dermatología, Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán.</li>
                    <li>Maestría en Dermatología Cosmética y Láser, Universidad de Barcelona.</li>
                </ul>
                <br>
                <strong>Áreas de especialización:</strong>
                <ul>
                    <li>Tratamiento de acné y cicatrices.</li>
                    <li>Terapias anti-envejecimiento (rellenos dérmicos, toxina botulínica, etc).</li>
                    <li>Dermatología pediátrica.</li>
                    <li>Trastornos pigmentarios (melasma, vitiligo).</li>
                    <li>Cáncer de piel y detección temprana.</li>
                </ul>
                <br>
                <p>
                    El Dr. Juan Carlos Moreno es reconocido por su enfoque integral en el <br>
                    cuidado de la piel. Con una vasta experiencia tanto en tratamientos clínicos <br>
                    como estéticos, ha ayudado a miles de pacientes a mejorar la salud y <br>
                    apariencia de su piel. Es conocido por su trato cercano y su capacidad <br>
                    para personalizar tratamientos según las necesidades individuales de cada <br>
                    paciente. Además, el Dr. Moreno dedica parte de su tiempo a la <br>
                    investigación y educación, impartiendo talleres y charlas en universidades <br>
                    y foros especializados.
                </p>
                <br>

                <button class="button"><a class="cita" href="Login.html">Agenda tu cita</a></button>
            </div>

            <div class="foto-doc">
                <img :src="require('@/assets/Img/doc.jpeg.jpg')" alt="" width="250px">
            </div>
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
                <a href="Productos.html">Tienda</a>
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
    name: 'HomePage',
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

    
}
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

.foto-doc{
    padding-top: 15px;
}

.cita{
    color: var(--clr-blanco);
} 

/* Estilos base (para todos los dispositivos) */
.content-oferta {
    width: 100%;
    padding: 0 30px;
    background-color: var(--clr-gris);
    display: block;
}

.content-oferta p {
    text-align: center;
    font-size: 24px;
    padding-top: 18px;
}

.oferta-info {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 15px;
    padding: 20px;
    flex-wrap: wrap; /* Permite que los elementos se ajusten en pantallas pequeñas */
}

.text-desplazar {
    padding-left: 60px;
}

.informacion-general {
    width: 100%;
    margin: 15px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; /* Permite que los elementos se ajusten en pantallas pequeñas */
}

.info-doc ul {
    padding-left: 30px;
}

.button {
    margin: 30px 0;
    border: none;
    width: 200px;
    height: 50px;
    background-color: var(--clr-negro);
    color: var(--clr-blanco);
    font-weight: bold;
}

.foto-doc {
    padding-top: 15px;
}

.cita {
    color: var(--clr-blanco);
    text-decoration: none;
}

.slider{
    width: 100%;
    height: auto;
    overflow: hidden;
}

figure{
    position: relative;
    left: 0;
    width: 400%;
    animation: 20s slide infinite;
}

.slide{
    position: relative;
    width: 25%;
    height: auto;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.slide h1{
    position: absolute;
    font-size: 2.30rem;
    width: 100%;
    text-align: center;
    margin-top: 50px;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.slide img{
    width: 30%;
}

@keyframes slide{
    0%{
        left: 0;
    }
    10%{
        left: 0;
    }
    20%{
        left: -100%;
    }
    30%{
        left: -100%;
    }
    40%{
        left: -200%;
    }
    50%{
        left: -200%;
    }
    55%{
        left: -300%;
    }
    65%{
        left: -300%;
    }
    66%{
        left: -200%;
    }
    74%{
        left: -200%;
    }
    75%{
        left: -100%;
    }
    85%{
        left: -100%;
    }
    90%{
        left: 0;
    }
    100%{
        left: 0;
    }
}

/* Estilos para dispositivos móviles (max-width: 767px) */
@media (max-width: 767px) {
    .content-oferta p {
        font-size: 18px;
    }

    .slide h1{
        font-size: 1rem;
    }

    .oferta-info {
        flex-direction: column; 
        align-items: center; 
    }

    .oferta-info div {
        margin-bottom: 20px;

    .informacion-general {
        flex-direction: column; 
        align-items: center; 
    }

    .info-doc {
        text-align: center; 
    }

    .info-doc ul {
        padding-left: 0; 
        list-style-position: inside; 
    }

    .foto-doc img {
        width: 100%; 
        max-width: 250px; 
    }

    .correo-oferta {
        flex-direction: column;
        align-items: center; 
    }

    .correo-info {
        flex-direction: column; 
        align-items: center; 
    }

    .footer {
        flex-direction: column; 
        align-items: center; 
    }
}

/* Estilos para tabletas y dispositivos de tamaño medio (min-width: 768px) y (max-width: 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
    .content-oferta p {
        font-size: 20px; 
    }

    .oferta-info {
        flex-wrap: wrap; 
    }

    .oferta-info div {
        flex-basis: 45%; 
        margin-bottom: 20px; 
    }

    .informacion-general {
        flex-wrap: wrap; 
    }

    .info-doc {
        flex-basis: 60%; 
    }

    .foto-doc {
        flex-basis: 40%; 
    }

    .foto-doc img {
        width: 100%;
        max-width: 250px;
    }

    .correo-oferta {
        flex-wrap: wrap;
    }

    .footer {
        flex-wrap: wrap; 
    }
}

/* Estilos para pantallas grandes (min-width: 1025px) */
@media (min-width: 1025px) {
    .content-oferta p {
        font-size: 24px;
    } 

    .oferta-info {
        flex-wrap: nowrap; 
    }

    .informacion-general {
        flex-wrap: nowrap; 
    }

    .info-doc {
        flex-basis: 70%; 
    }

    .foto-doc {
        flex-basis: 30%; 
    }

    .foto-doc img {
        width: 100%; 
        max-width: 300px; 
    }

    .correo-oferta {
        flex-wrap: nowrap; 
    }

    .footer {
        flex-wrap: nowrap; 
    }
}
}
</style>