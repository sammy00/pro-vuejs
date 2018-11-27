import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

import store from './store'

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app')
