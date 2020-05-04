import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/Main.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/Landing.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
