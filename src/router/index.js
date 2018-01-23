import Vue from 'vue';
import Router from 'vue-router';

import Footer from '@/components/Footer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Footer',
      component: Footer,
    },
  ],
});
