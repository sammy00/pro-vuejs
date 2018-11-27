import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'materialize-css/dist/css/materialize.min.js'
import 'material-design-icons/iconfont/material-icons.css'

new Vue({
  render: (h) => h(App),
}).$mount('#app')
