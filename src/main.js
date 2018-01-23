// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
// load vuex i18n module
import vuexI18n from 'vuex-i18n';
import App from './App';
import router from './router';
import store from './store'
import en from './resource/en.json';

import de from './resource/de.json';

Vue.use(Vuex);

Vue.config.productionTip = false;

Vue.use(VueI18n)
const messages = {'en':en ,'de':de}
const i18n = new VueI18n({
  locale: 'en',
  messages
})


/* eslint-disable no-new */
new Vue({
  el: '#vuefooter',
  router,
  components: { App },
  template: '<App/>',
  i18n
});
