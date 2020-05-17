import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

require('materialize-css');
require('materialize-css/dist/css/materialize.min.css');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
