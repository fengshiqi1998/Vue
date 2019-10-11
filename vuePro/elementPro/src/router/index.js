import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import FontPay from '@/pages/fontPay/FontPay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/FontPay',
      name: 'FontPay',
      component: FontPay
    }
  ]
})
