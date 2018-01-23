import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Footer from '@/components/Footer';
import Vuex from 'vuex';

// load vuex i18n module
import vuexI18n from 'vuex-i18n';
const store = new Vuex.Store();
Vue.use(Router);
Vue.use(vuexI18n.plugin, store);
Vue.i18n.add('en', translationsEn);
Vue.i18n.add('de', translationsDe);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Footer',
      component: Footer,
    },
  ],
});
