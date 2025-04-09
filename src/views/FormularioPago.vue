<template>
    <div class="pago-page">
    <h1>Formulario de pago</h1>
    <form @submit.prevent="submitPayment">
        <div>
        <label>Nombre completo:</label>
        <input v-model="form.nombre" type="text" required />
        </div>

        <div>
        <label>Correo electrónico:</label>
        <input v-model="form.email" type="email" required />
        </div>

        <div>
        <label>Dirección:</label>
        <input v-model="form.direccion" type="text" required />
        </div>

        <div>
        <label>Ciudad:</label>
        <input v-model="form.ciudad" type="text" required />
        </div>

        <div>
        <label>Código postal:</label>
        <input v-model="form.cp" type="text" required />
        </div>

        <div>
        <label>Número de tarjeta:</label>
        <input v-model="form.tarjeta" type="text" maxlength="16" required />
        </div>

        <div>
        <label>Fecha de vencimiento:</label>
        <input v-model="form.vencimiento" type="month" required />
        </div>

        <div>
        <label>CVV:</label>
        <input v-model="form.cvv" type="password" maxlength="4" required />
        </div>

        <br />
        <button type="submit">Confirmar pago</button>
    </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cartStore'; // <-- Importa la tienda

const router = useRouter();
const cartStore = useCartStore(); // <-- Usa la tienda

const form = reactive({
nombre: '',
email: '',
direccion: '',
ciudad: '',
cp: '',
tarjeta: '',
vencimiento: '',
cvv: '',
});

const submitPayment = () => {
alert('¡Pago realizado con éxito!, espera la fecha de entrega');
  cartStore.clearCart(); // <-- Vacía el carrito
  router.push('/'); // <-- Redirige después del pago
};
</script>


<style>
.pago-page{
    margin: auto;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 10px 10px 40px 5px rgb(175, 178, 179);
}

h1{
    margin: 15px;
}

input{
    width: 100%;
    margin: 10px 0;
    padding: 5px;
    border: none;
    border-radius: 8px;
    box-shadow: 10px 10px 50px 5px rgb(211, 214, 215);
}


</style>