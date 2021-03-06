import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import FontPay from '@/pages/fontPay/FontPay'
import RePay from '@/pages/rePay/RePay'
import Loan from '@/pages/loan/loan'

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
    },
    {
      path: '/RePay',
      name: 'rePay',
      component: RePay
    },
    {
      path: '/loan',
      name: 'loan',
      component: Loan
    }
  ]
})
