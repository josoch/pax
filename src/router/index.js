import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import App from '../App.vue';
import ForgotPassword from '../components/ForgotPassword.vue';

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('user');
  if (isLoggedIn && to.name === 'App') {
    next({ name: 'HomeView' });
  } else {
    next();
  }
});

export default router;
