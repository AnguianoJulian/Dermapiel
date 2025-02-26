import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'; // Importa Pinia
import "@/assets/base.css";

// Crea la instancia de Pinia
const pinia = createPinia();

// Crear la aplicación y usar tanto el router como Pinia
createApp(App)
  .use(router)   // Usa el router
  .use(pinia)    // Usa Pinia
  .mount('#app');
