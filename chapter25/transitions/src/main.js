import Vue from 'vue'
import App from './App.vue'

import 'animate.css/animate.min.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'popmotion/dist/popmotion.global.min.js'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
