<template>
    <div v-if="authStore.currentUser">
    <h2>Bienvenido, {{ authStore.currentUser.name }}</h2>
    <button @click="logout">Cerrar sesión</button>
    </div>
    <div v-else>
    <p>No tienes acceso. <router-link to="/login">Inicia sesión</router-link></p>
    </div>
</template>

<script>
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

export default {
    setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const logout = () => {
        authStore.logout();
        router.push('/login');
    };

    return { authStore, logout };
    }
};
</script>
