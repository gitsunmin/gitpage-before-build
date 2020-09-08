import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '../layouts/layout/index.vue';
import Home from '../views/Home/index.vue';
import Works from '../views/Works/index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/works',
        name: 'Works',
        component: Works,
      },
    ],
  },
  // {
  //   path: '/works',
  //   name: 'Works',
  //   component: Works,
  // },
  // {
  //   path: '/sample',
  //   name: 'Sample',
  //   component: Sample,
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
