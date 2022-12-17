import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from "@/store/useUserStore";
//import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'

import PeliculasView from '../views/PeliculasView.vue'

import CategoriaView from '../views/CategoriaView.vue'
import AlquilarVenderPeliculaView from '../views/AlquilarVenderPeliculaView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },

  {
    path: '/peliculas',
    name: 'Peliculas',
    component: PeliculasView
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: CategoriaView
  },
  {
    path: '/vender',
    name: 'Vender Peliculas',
    component: AlquilarVenderPeliculaView
  },

]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const publicPage = ["/login"];
  const authRequire = !publicPage.includes(to.path);
  const user = useUserStore();

  if (authRequire && !user.user) {
    user.returnUrl = to.fullPath;
    return "/login";
  } 
});


