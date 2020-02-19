import Vue from 'vue'
import axios from 'axios'
// styling
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

// services
import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// enable
Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
