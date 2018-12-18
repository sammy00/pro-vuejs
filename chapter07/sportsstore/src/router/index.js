import Vue from 'vue'
import VueRouter from 'vue-router'

import Admin from '../components/admin/Admin'
import Authentication from '../components/admin/Authentication'
import Checkout from '../components/Checkout'
import OrderThanks from '../components/OrderThanks'
import Store from '../components/Store'
import ShoppingCart from '../components/ShoppingCart'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Store },
    { path: '/admin', component: Admin },
    { path: '/cart', component: ShoppingCart },
    { path: '/checkout', component: Checkout },
    { path: '/login', component: Authentication },
    { path: '/thanks/:id', component: OrderThanks },
    { path: '*', redirect: '/' },
  ],
})
