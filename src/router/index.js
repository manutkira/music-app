import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/song/:id',
    name: 'song',
    component: () => import(/* webpackChunkName: "groupedChunk" */'../views/song.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/manage-music',
    // alias: '/manage',
    name: 'manage',
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "groupedChunk" */'../views/manage.vue'),
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
