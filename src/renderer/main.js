import Vue from 'vue'
import axios from 'axios'
// services
import './global'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

// main app
import App from './App'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  components: { App },
  router,
  vuetify,
  store,
  template: '<App/>'
}).$mount('#app');
