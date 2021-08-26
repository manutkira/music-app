import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
import Song from '../views/song.vue';
import Manage from '../views/manage.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/song/:id',
    name: 'song',
    component: Song,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/manage-music',
    // alias: '/manage',
    name: 'manage',
    meta: {
      requiresAuth: true,
    },
    component: Manage,
    beforeEnter: ((to, from, next) => {
      next();
    }),
  },
  {
    path: '/manage',
    redirect: { name: 'manage' },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});
router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }

  if (store.state.auth.userLoggedIn) {
    next();
  } else {
    next({ name: 'home' });
  }
});

export default router;
