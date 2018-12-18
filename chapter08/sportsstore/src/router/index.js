import Vue from 'vue'
import VueRouter from 'vue-router'

//import Admin from '../components/admin/Admin'
//import Authentication from '../components/admin/Authentication'
import Checkout from '../components/Checkout'
//import OrderAdmin from '../components/admin/OrderAdmin'
import OrderThanks from '../components/OrderThanks'
//import ProductAdmin from '../components/admin/ProductAdmin'
//import ProductEditor from '../components/admin/ProductEditor'
import Store from '../components/Store'
import ShoppingCart from '../components/ShoppingCart'

import dataStore from '../store'

const Authentication = () =>
  import(/* webpackChunkName: "admin" */ '../components/admin/Authentication')
const Admin = () =>
  import(/* webpackChunkName: "admin" */ '../components/admin/Admin')
const ProductAdmin = () =>
  import(/* webpackChunkName: "admin" */ '../components/admin/ProductAdmin')
const OrderAdmin = () =>
  import(/* webpackChunkName: "admin" */ '../components/admin/OrderAdmin')
const ProductEditor = () =>
  import(/* webpackChunkName: "admin" */ '../components/admin/ProductEditor')

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Store },
    {
      path: '/admin',
      component: Admin,
      beforeEnter(to, from, next) {
        if (dataStore.state.auth.authenticated) {
          next()
        } else {
          next('/login')
        }
      },
      children: [
        { path: 'products', component: ProductAdmin },
        {
          path: 'products/:op(create|edit)/:id(\\d+)?',
          component: ProductEditor,
        },
        { path: 'orders', component: OrderAdmin },
        { path: '', redirect: '/admin/products' },
      ],
    },
    { path: '/cart', component: ShoppingCart },
    { path: '/checkout', component: Checkout },
    { path: '/login', component: Authentication },
    { path: '/thanks/:id', component: OrderThanks },
    { path: '*', redirect: '/' },
  ],
})
