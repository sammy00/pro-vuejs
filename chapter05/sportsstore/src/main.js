import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'materialize-css/dist/css/materializecss.min.js'

new Vue({
  render: (h) => h(App),
}).$mount('#app')
