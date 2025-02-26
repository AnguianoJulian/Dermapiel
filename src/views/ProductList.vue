<template>
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="Css/Productos.css">
</head>
<body>

    <main class="main">
    
    <div class="product-section">
        <h1 class="brand-title">Avène</h1>
        <div class="product-grid">
            <div class="product-item">
                <img :src="require('@/assets/Img/Cleanance Solar SPF50+.jpg')" alt="Producto Eucerin">
                <p class="product-name">Cleanance Solar SPF50+</p>
                <p class="product-price">$509.00</p>
                <br>
                <p class="informacion">Es un Protector solar de alta protección diseñado específicamente para pieles grasas con imperfecciones.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Ultra-Mat Fluido SPF 50+.jpg')" alt="Producto Eucerin">
                <p class="product-name">Ultra-Mat Fluido SPF 50+</p>
                <p class="product-price">$484.00</p>
                <br>
                <p class="informacion">Es un protector solar facial de alta protección, formulado especialmente para pieles sensibles, mixtas y grasas.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Agua termal.jpg')" alt="Producto Eucerin">
                <p class="product-name">Agua termal</p>
                <p class="product-price">$400.00</p>
                <br>
                <p class="informacion">Sus propiedades calmantes, suavizantes y anti-irritantes, lo convierten en un aliado ideal para aliviar la piel sensible, enrojecida o irritada.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Cleanance Comedomed.jpg')" alt="Producto Eucerin">
                <p class="product-name">Cleanance Comedomed</p>
                <p class="product-price">$500.00</p>
                <br>
                <p class="informacion">Es un concentrado anti-imperfecciones diseñado específicamente para pieles con tendencia acnéica.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Cleanance Solar con Color SPF 50+.jpg')" alt="Producto Eucerin">
                <p class="product-name">Cleanance Solar con Color SPF 50+</p>
                <p class="product-price">$509.00</p>
                <br>
                <p class="informacion">Es un protector solar facial con color de alta protección, diseñado especialmente para pieles grasas con imperfecciones.</p>
            </div>
        </div>
    </div>
    
    <div class="product-section">
        <h2 class="brand-title">La Roche-Posay</h2>
        <div class="product-grid">
            <div class="product-item">
                <img :src="require('@/assets/Img/Anthelios UVmune 400 SPF 50+ Oil Control Gel-Crema.jpg')" alt="Producto Eucerin">
                <p class="product-name">Anthelios UVmune 400 SPF 50+ Oil</p>
                <p class="product-price">$509.00</p>
                <br>
                <p class="informacion">Es un protector solar facial de alta protección, diseñado específicamente para pieles grasas y mixtas</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Effaclar Mat.jpg')" alt="Producto Eucerin">
                <p class="product-name">Effaclar Mat</p>
                <p class="product-price">$484.00</p>
                <br>
                <p class="informacion">Es un hidratante matificante diseñado específicamente para las pieles grasas.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Effaclar Gel Limpiador Purificante.jpg')" alt="Producto Eucerin">
                <p class="product-name">Effaclar Gel Limpiador Purificante</p>
                <p class="product-price">$500.00</p>
                <br>
                <p class="informacion">Es un gel limpiador facial diseñado específicamente para pieles grasas con tendencia al acne.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Kerium DS Anti-caspa.jpg')" alt="Producto Eucerin">
                <p class="product-name">Kerium DS Anti-caspa</p>
                <p class="product-price">$600.00</p>
                <br>
                <p class="informacion">Es un shampoo tratante diseñado específicamente para combatir la caspa persistente.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Mela B3 Serum.jpg')" alt="Producto Eucerin">
                <p class="product-name">Mela B3 Serum</p>
                <p class="product-price">$509.00</p>
                <br>
                <p class="informacion">Es un suero concentrado diseñado específicamente a reducir la apariencia de manchas oscuras persistentes y marcas post-imperfecciones.</p>
            </div>
        </div>
    </div>
    
    <div class="product-section">
        <h2 class="brand-title">Eucerin</h2>
        <div class="product-grid">
            <div class="product-item">
                <img :src="require('@/assets/Img/Pigment Control Sun Fluid SPF 50+.jpg')" alt="Producto Eucerin">
                <p class="product-name">Pigment Control Sun Fluid SPF 50+</p>
                <p class="product-price">$509.00</p>
                <br>
                <p class="informacion">Es un protector solar facial de alta protección con una textura ligera, diseñado específicamente para prevenir y reducir la aparición de manchas en la piel.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Atopi Control Bálsamo Textura Ligera.jpg')" alt="Producto Eucerin">
                <p class="product-name">Atopi Control Bálsamo</p>
                <p class="product-price">$484.00</p>
                <br>
                <p class="informacion">Es un bálsamo corporal diseñado específicamente para cuidar la piel seca y propensa a la dermatitis atópica.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Anti-Pigment Crema Contorno de Ojos.jpg')" alt="Producto Eucerin">
                <p class="product-name">Anti-Pigment Crema Contorno de Ojos</p>
                <p class="product-price">$400.00</p>
                <br>
                <p class="informacion">Es una crema diseñada para el contorno de ojos, reduciendo la apariencia de manchas oscuras y ojeras.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Dermopure Oil Control Fluido Facial.jpg')" alt="Producto Eucerin">
                <p class="product-name">Dermopure Oil Control Fluido Facial</p>
                <p class="product-price">$500.00</p>
                <br>
                <p class="informacion">Es un fluido facial diseñado para pieles grasas y con tendencia a las imperfecciones.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Anti-Pigment Dual Serum Facial.jpg')" alt="Producto Eucerin">
                <p class="product-name">Anti-Pigment Dual Serum Facial</p>
                <p class="product-price">$509.00</p>
                <br>
                <p class="informacion">Es un suero facial diseñado específicamente para combatir las manchas en la piel.</p>
            </div>  
        </div>
    </div>
    
    <div class="product-section">
        <h2 class="brand-title">ISDIN</h2>
        <div class="product-grid">
            <div class="product-item">
                <img :src="require('@/assets/Img/Lambdapil Shampoo.jpg')" alt="Producto Eucerin">
                <p class="product-name">Lambdapil Shampoo</p>
                <p class="product-price">$509.00</p>
                <br>
                <p class="informacion">Es un shampoo diseñado específicamente para ayudar a reducir la caída del cabello y aumentar su densidad.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Fotoprotector Gel Cream Wet Skin.jpg')" alt="Producto Eucerin">
                <p class="product-name">Fotoprotector Gel Cream Wet Skin</p>
                <p class="product-price">$500.00</p>
                <br>
                <p class="informacion">Es un protector solar de alta protección en formato de gel-crema diseñado específicamente para aplicarlo sobre la piel mojada.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Warts Verrutop.jpg')" alt="Producto Eucerin">
                <p class="product-name">Warts Verrutop</p>
                <p class="product-price">$450.00</p>
                <br>
                <p class="informacion">Es una solución tópica diseñada para el tratamiento de distintos tipos de verrugas.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Psorisdin Shampoo.jpg')" alt="Producto Eucerin">
                <p class="product-name">Psorisdin Shampoo</p>
                <p class="product-price">$509.00</p>
                <br>
                <p class="informacion">Es un shampoo formulado específicamente para ayudar en el tratamiento de la descamación del cuero cabelludo.</p>
            </div>
            <div class="product-item">
                <img :src="require('@/assets/Img/Nutratopic PRO-AMP Loción Corporal Emoliente.jpg')" alt="Producto Eucerin">
                <p class="product-name">Nutratopic PRO-AMP Loción Corporal Emoliente</p>
                <p class="product-price">$500.00</p>
                <br>
                <p class="informacion">Es una loción corporal diseñada específicamente para hidratar, cuidar y proteger la piel atópica, especialmente en áreas extensas del cuerpo.</p>
            </div>
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
                <a href="Contacto.html">Preguntas frecuentes</a>
            </div>
            <div class="footer-section">
                <h3>Redes sociales</h3>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">YouTube</a>
            </div>
            <div class="footer-section">
                <a href="#"><i class="bi bi-wechat"></i></a>
            </div>

        </div>
    </footer>

</body>
</html>
</template>

<script>
export default {
name: 'ProductList'
}
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

a:hover{
    border-radius: 4px;
    background-color: var(--clr-negro);
    color: var(--clr-blanco);
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

.product-item {
    /* Se aumenta el ancho del recuadro */
    width: 200px; /* Antes: 150px */
    text-align: center;
    background-color: #fff;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
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
</style>