// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
// load vuex i18n module
import vuexI18n from 'vuex-i18n';
import App from './App';
import router from './router';
import en from './resource/en.json';

import de from './resource/de.json';
Vue.use(Vuex);
const store = new Vuex.Store();
Vue.config.productionTip = false;
Vue.use(vuexI18n.plugin, store);
Vue.i18n.add('en', en);
Vue.i18n.add('de', de);
Vue.i18n.set('de');

/* eslint-disable no-new */
new Vue({
  el: '#vuefooter',
  router,
  components: { App },
  template: '<App/>',
});
