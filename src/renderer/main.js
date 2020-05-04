import Vue from 'vue'
import axios from 'axios'
// styling

// services
import App from './App'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// enable

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  vuetify,
  store,
  template: '<App/>'
}).$mount('#app');
