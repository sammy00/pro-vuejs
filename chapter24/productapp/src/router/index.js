import Vue from 'vue'
import VueRouter from 'vue-router'

import Preferences from '../components/Preferences'
import ProductDisplay from '../components/ProductDisplay'
import ProductEditor from '../components/ProductEditor'
import Products from '../components/Products'
import SideBySide from '../components/SideBySide'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/preferences', component: Preferences },
    {
      path: '/products',
      component: Products,
      children: [
        { name: 'table', path: 'list', component: ProductDisplay },
        {
          name: 'editor',
          path: ':op(create|edit)/:id(\\d+)?',
          component: ProductEditor,
        },
        { path: '', redirect: 'list' },
      ],
    },
    { path: '/edit/:id', redirect: (to) => `/products/edit/${to.params.id}` },
    { path: '*', redirect: '/products/list' },

    {
      path: '/named',
      component: SideBySide,
      children: [
        {
          path: 'tableleft',
          components: {
            left: ProductDisplay,
            right: ProductEditor,
          },
        },
        {
          path: 'tableright',
          components: {
            left: ProductEditor,
            right: ProductDisplay,
          },
        },
      ],
    },
  ],
})
