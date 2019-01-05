import Vue from 'vue'
import App from './App.vue'

import 'materialize-css/dist/css/materialize.min.css'

import MathsPlugin from './plugins/maths'
Vue.use(MathsPlugin)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
