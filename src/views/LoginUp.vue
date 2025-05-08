<template>
    <div class="register-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Correo" required />
        <input type="password" v-model="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
        <p v-if="message">{{ message }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        message: ''
      };
    },
    methods: {
      async login() {
        try {
          console.log("Iniciando sesión con:", this.email, this.password);
          const response = await axios.post('http://localhost:3000/login', {
            email: this.email,
            password: this.password
          });
  
          console.log("Respuesta del servidor:", response.data);
          localStorage.setItem('currentUser', JSON.stringify(response.data.user));
          this.$router.push('/');
        } catch (error) {
          console.error("Error en login:", error);
          this.message = error.response?.data?.message || "Bienvenido!";
          this.$router.push('/');
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
</style>
