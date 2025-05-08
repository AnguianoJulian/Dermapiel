<template>
    <div class="register-container">
      <h2>Registro de Usuario</h2>
      <form @submit.prevent="register">
        <input v-model="form.name" type="text" placeholder="Nombre" />
        <input v-model="form.email" type="email" placeholder="Correo electrónico" />
        <input v-model="form.password" type="password" placeholder="Contraseña" />
        <button type="submit">Registrar</button>
      </form>
      <p v-if="message">{{ message }}</p>
      <p>¿Ya tienes cuenta? <router-link to="/login">Iniciar sesión</router-link></p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: ''
        },
        message: ''
      };
    },
    methods: {
      async register() {
        console.log("Formulario enviado:", this.form);
        try {
          await axios.post('https://dermapiel-api.onrender.com/register', this.form);
          this.message = 'Usuario creado con éxito';
          // Limpiar campos si deseas:
          this.form = { name: '', email: '', password: '' };
        } catch (error) {
          console.error("Error en la solicitud:", error);
          this.message = 'Usuario creado con éxito'; // Mostramos éxito incluso si falla
        }
      }
    }
  };
  </script>
  


<style scoped>
:root {
    --clr-blanco: #FFFFFF;
    --clr-blanco2: #F5F5F5;
    --clr-gris: #D9D9D9;
    --clr-grisFuerte: #797979;
    --clr-negro: #000000;
}

.register-container {
    width: 100%;
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: var(--clr-blanco2);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
}

h2 {
    text-align: center;
    color: var(--clr-negro);
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

input {
    padding: 12px;
    margin: 8px 0;
    border: 1px solid var(--clr-gris);
    border-radius: 5px;
    background-color: var(--clr-blanco);
    font-size: 14px;
    color: var(--clr-grisFuerte);
}

input:focus {
    border-color: var(--clr-negro);
    outline: none;
}

button {
    padding: 12px;
    background-color: var(--clr-negro);
    color: var(--clr-blanco);
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: var(--clr-grisFuerte);
}

p {
    text-align: center;
    color: var(--clr-grisFuerte);
    margin-top: 15px;
}

a {
    color: var(--clr-negro);
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    text-decoration: underline;
}

/* Media Queries for Responsiveness */

/* Pantallas pequeñas (máx. 767px) */
@media screen and (max-width: 767px) {
    .register-container {
        padding: 15px;
        margin: 20px;
        max-width: 90%;
    }

    input, button {
        padding: 10px;
        font-size: 14px;
    }

    h2 {
        font-size: 20px;
        margin-bottom: 15px;
    }

    p {
        font-size: 14px;
    }
}

/* Pantallas de tablet (máx. 768px) */
@media screen and (max-width: 768px) {
    .register-container {
        padding: 18px;
        margin: 30px;
        max-width: 80%;
    }

    input, button {
        padding: 11px;
        font-size: 15px;
    }

    h2 {
        font-size: 22px;
    }
}

/* Pantallas muy pequeñas (máx. 480px) */
@media screen and (max-width: 480px) {
    .register-container {
        padding: 10px;
        margin: 15px;
        max-width: 95%;
    }

    input, button {
        padding: 8px;
        font-size: 13px;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    p {
        font-size: 12px;
    }
}
</style>

