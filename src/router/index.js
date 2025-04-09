import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductList from '../views/ProductList.vue';
import ContactoPage from '../views/ContactoPage.vue';
import AcercaDe from '../views/AcercaDe.vue';
import LoginUp from '../views/LoginUp.vue';
import RegisterUser from '../views/RegisterUser.vue';
import CartPage from '../views/CartPage.vue'; // Importar la página del carrito

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/productos', name: 'productos', component: ProductList },
  { path: '/contacto', name: 'contacto', component: ContactoPage },
  { path: '/acercade', name: 'acercade', component: AcercaDe },
  { path: '/login', name: 'login', component: LoginUp },
  { path: '/register', name: 'register', component: RegisterUser },
  { path: '/cart', name: 'cart', component: CartPage }, // Ruta para el carrito
  { path: '/pago', name: 'Pago', component: () => import('@/views/FormularioPago.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

