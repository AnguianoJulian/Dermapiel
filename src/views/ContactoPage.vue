<template>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto Dermapiel</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
    
    <main class="main">
        <div class="contacto">
            <div class="info-basica">
                <strong class="strong">¡Salúdanos!</strong>
                <br>
                <p>
                    La belleza de tu historia es que continuará <br> 
                    evolucionando y tu sitio evolucionará con <br>
                    ella.
                </p>
                <p>
                    Dermapiel@hotmail.com <br>
                    (52) 33342 53122
                </p>
                <p>
                    <strong>Encuentranos en el domicilio:</strong> <br> 
                    Hacienda la venta 1752, Balcones de oblatos, <br> 
                    44720, Guadalajara, Jalisco
                </p>
<br>
<br>
<br>
    <section class="recommendations">
    <h2>Consultorio dermatologico</h2>
    <br>
    <div class="recommendations-grid">
    <a 
        v-for="rec in Recommendations" 
        :key="rec.id"
        :href="rec.youtubeUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="recommendation-card"
    >
        <img :src="rec.imageUrl" :alt="rec.title">
        <h3>{{ rec.title }}</h3>
    </a>
    </div>
</section>
<br>
<br>
                <div class="galeria">
                    <img :src="require('@/assets/Img/IMG-20250317-WA0001.jpg')" alt="">
                    <img :src="require('@/assets/Img/IMG-20250317-WA0002.jpg')" alt="">
                    <img :src="require('@/assets/Img/IMG-20250317-WA0003.jpg')" alt="">
                    <img :src="require('@/assets/Img/IMG-20250317-WA0004.jpg')" alt="">
                </div>
            </div>

            <div class="formulario-contacto">
                <form action="#" method="POST" class="contact-form">
                    <div class="nombres-input">
                        <div class="input-nombre">
                            <label for="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre">
                        </div>
                        <div class="input-apellido">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" id="apellidos" name="apellidos">
                        </div>
                    </div>
                    <div>
                        <label for="email">Correo electrónico <span>(obligatorio)</span></label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div>
                        <label for="asunto">Asunto <span>(obligatorio)</span></label>
                        <input type="text" id="asunto" name="asunto" required>
                    </div>
                    <div>
                        <label for="mensaje">Mensaje <span>(obligatorio)</span></label>
                        <textarea id="mensaje" name="mensaje" rows="3" required></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            
            </div>
        </div>
        <br>
        <br>
        <div class="preguntas-frecuentes">
            <h2><strong>Preguntas Frecuentes de Dermapiel</strong></h2>
            <br>
            <ol>
                <li>
                    <strong> ¿Qué tipo de productos ofrece Dermapiel?</strong> <br>
                    Dermapiel ofrece una amplia gama de productos dermatológicos, que incluyen cremas, serums, limpiadores, tónicos <br>
                    y protectores solares, todos formulados para mejorar la salud y la estética de la piel. También contamos con <br>
                    tratamientos especializados para diversas afecciones cutáneas, como acné, rosácea, manchas y envejecimiento <br> 
                    prematuro.
                </li>
                <li>
                    <strong>¿Cómo puedo saber cuál es el producto adecuado para mi piel?</strong> <br>
                    En Dermapiel, ofrecemos asesoría personalizada a través de nuestros dermatólogos y expertos en cuidado de la piel. <br> 
                    Puedes agendar una consulta en línea o presencial para recibir una recomendación específica basada en tu tipo de <br> 
                    piel y necesidades. Además, en nuestra página web encontrarás guías detalladas sobre los diferentes tipos de piel y <br>
                    cómo elegir los productos más adecuados.
                </li>
                <li>
                    <strong>¿Los productos de Dermapiel son aptos para piel sensible?</strong> <br>
                    Sí, muchos de nuestros productos están formulados específicamente para pieles sensibles. Utilizamos ingredientes <br> 
                    dermatológicamente probados y no comedogénicos, sin fragancias artificiales ni parabenos, para minimizar el riesgo <br> 
                    de reacciones alérgicas.
                </li>
                <li>
                    <strong> ¿Los productos de Dermapiel están probados clínicamente?</strong> <br>
                    Sí, todos nuestros productos pasan por rigurosos controles de calidad y pruebas dermatológicas antes de ser <br>
                    lanzados al mercado. Nos aseguramos de que cada fórmula sea segura y efectiva a través de pruebas clínicas <br>
                    realizadas por expertos en dermatología.
                </li>
                <li>
                    <strong>¿Puedo comprar los productos de Dermapiel en línea?</strong> <br>
                    Sí, en nuestra tienda en línea puedes adquirir todos nuestros productos y recibirlos en la comodidad de tu hogar. <br>
                    Ofrecemos envíos a nivel nacional y contamos con diferentes métodos de pago seguros.
                </li>
                <li>
                    <strong>¿Dermapiel ofrece consultas dermatológicas?</strong> <br>
                    Sí, Dermapiel cuenta con un equipo de dermatólogos profesionales que ofrecen consultas en línea o presenciales, <br>
                    dependiendo de tu ubicación. Durante la consulta, podremos evaluar tu tipo de piel y ofrecerte el tratamiento <br> 
                    adecuado, además de recomendaciones personalizadas sobre el cuidado de tu piel.
                </li>
                <li>
                    <strong>¿Qué debo hacer si tengo una reacción alérgica a un producto?</strong> <br>
                    Si experimentas cualquier reacción alérgica o efecto no deseado, te recomendamos suspender el uso del producto <br> 
                    inmediatamente y contactar con nuestro servicio de atención al cliente. En caso necesario, te orientaremos sobre los <br> 
                    pasos a seguir y te brindaremos recomendaciones sobre cómo tratar la reacción.
                </li>
                <li>
                    <strong>¿Los productos de Dermapiel tienen garantía?</strong> <br>
                    Sí, ofrecemos una garantía de satisfacción en todos nuestros productos. Si no estás satisfecho con tu compra o el <br> 
                    producto no cumple con lo prometido, puedes contactarnos dentro de los primeros 30 días y procederemos con un <br> 
                    reembolso o cambio, según lo que prefieras.
                </li>
                <li>
                    <strong>¿Puedo usar los productos de Dermapiel si estoy embarazada?</strong> <br>
                    Para cualquier tratamiento o producto relacionado con el cuidado de la piel durante el embarazo, recomendamos <br> 
                    consultar primero con tu médico o dermatólogo. Aunque la mayoría de nuestros productos son seguros, algunas <br> 
                    personas pueden requerir ajustes en su rutina de cuidado de la piel durante esta etapa.
                </li>
                <li>
                    <strong>¿Cómo puedo obtener más información sobre los ingredientes de los productos?</strong> <br>
                    En la página de cada producto de nuestra tienda en línea encontrarás una lista detallada de ingredientes, junto con <br> 
                    información sobre sus beneficios y cómo trabajan en la piel. Si tienes alguna duda específica sobre los ingredientes, <br> 
                    nuestro equipo de atención al cliente está disponible para responder todas tus preguntas.
                </li>
            </ol>
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
name: "ContactoPage",
data() {
    return {
    stars: [1, 2, 3, 4, 5],
    currentRating: 0,
    Recommendations: [
        {
        id: 1,
        title: 'Farmacia DermaPiel',
        imageUrl: 'https://i9.ytimg.com/vi_webp/Eu2zikCnL5c/mqdefault.webp?v=67de0816&sqp=COijhr8G&rs=AOn4CLAE8ytJoxmsVVVQBmWyqGeScGFv-A',
        youtubeUrl: 'https://youtu.be/Eu2zikCnL5c'
        }
    ]
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

.contacto{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    margin: 10px;
}

.info-basica, .formulario-contacto{
    flex: 1;
    min-width: 250px;
}

.info-basica p{
    font-size: 14px;
}

.info-basica .strong{
    font-size: 25px;
}

.contact-form {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    max-width: 600px;
}

.contact-form div {
    margin-bottom: 10px;
}

.contact-form label {
    font-size: 14px;
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: #007bff;
    outline: none;
}

.contact-form button {
    width: 100%;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
}

.contact-form button:hover {
    background-color: #333;
}

.preguntas-frecuentes {
    margin: 40px;
    padding: 30px;
    width: 100%;
}

.preguntas-frecuentes h2{
    margin-bottom: 30px;
}

.preguntas-frecuentes li{
    margin: 30px;
    font-size: 14px;
}
/*Galeria*/
.galeria{
    margin-top: 20px;
    width: 500px;
    display: flex;
    height: 400px;
    border-radius: 8px;
}

.galeria img{
    width: 0;
    flex-grow: 1;
    object-fit: cover;
    opacity: .8;
    transition: .5s ease;
}

.galeria img:hover{
    width: 250px;
    opacity: 1;
    cursor: crosshair;
}

/* Responsive styles */
@media (max-width: 1200px) {
    .contacto{
        flex-direction: column;
        gap: 10px;
    }

    .info-basica, .formulario-contacto{
        max-width: 100%;
    }

    .contact-form button {
        width: 50%;
    }

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

@media (max-width: 768px) {
    .contacto{
        padding: 10px;
    }

    .contact-form button {
        width: 100%;
    }

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

.galeria{
    width: 450px;
}

.galeria img:hover{
    width: 200px;
}

@media (max-width: 480px) {
    .info-basica .strong {
        font-size: 20px;
    }

    .contact-form input, .contact-form textarea {
        font-size: 14px;
    }

    .contact-form button {
        width: 100%;
    }

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

    .galeria{
    width: 350px;
}

}
.recommendations {
  margin-top: 2rem;
  padding: 2rem;
  background-color: #ffffff;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 2rem; /* Ajusta el tamaño de la letra */
}

.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
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
  text-decoration: none;
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
</style>