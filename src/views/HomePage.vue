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
            <p>Tu piel es el reflejo de tu bienestar. Cuídala con <br> amor, y ella te lo agradecerá.</p>
            <br>
            <div class="oferta-info">
            <div>
                <p>OFERTA</p>
            </div>
            <div>
                <img :src="require('@/assets/Img/eucerin atopic.jpg')" alt="" width="120px">
            </div>
            <div class="text-oferta">
                <p>Tienda</p>
                <p class="text-desplazar">Cuerpo</p>
            </div>
            <div>
                <img :src="require('@/assets/Img/effaclar limpiador.jpg')" alt="" width="120px">
            </div>
            <div class="text-oferta">
                <p>Tienda</p>
                <p class="text-desplazar">Rostro</p>
            </div>
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
    name: 'HomePage'
}
</script>

<style scoped>
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
    background-color: var(--clr-negro);
    color: var(--clr-blanco);
    font-weight: bold;
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
    width: 150px;
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

/* Estilos para dispositivos móviles (max-width: 767px) */
@media (max-width: 767px) {
    .content-oferta p {
        font-size: 18px;
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