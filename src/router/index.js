import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ForgotPassword from '../components/ForgotPassword.vue';
import SignInSignUp from '../components/SignInSignUp.vue';

const routes = [
  {
    path: '/',
    name: 'SignInSignUp',
    component: SignInSignUp
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

export default router;
