import Vue from 'vue'
import VueRouter from 'vue-router'

import BasicRoutes from './basicRoutes'
import SideBySideRoutes from './sideBySideRoutes'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    ...BasicRoutes,
    SideBySideRoutes,

    { path: '*', redirect: '/products/list' },
  ],
})
