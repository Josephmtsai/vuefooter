import Vue from 'vue';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';
import { state, mutations } from './mutations.js';
import * as getters from './getters.js';
import * as actions from './actions.js';

import en from '../resource/en.json';
import de from '../resource/de.json';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true,
});

Vue.use(vuexI18n.plugin, store);
Vue.i18n.add('en', en);
Vue.i18n.add('de', de);
// set the start locale to use
Vue.i18n.set('en');
export default store;
