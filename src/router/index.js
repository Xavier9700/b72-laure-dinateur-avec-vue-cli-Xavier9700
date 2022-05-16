import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('../views/PageAccueil.vue'),
  },
  {
    path: '/informations',
    name: 'Informations',
    component: () => import('../views/PageInformations.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/PageContact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
