/*
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
*/

import 'materialize-css/dist/css/materialize.min.css'

import MyComponent from './App'

import Vue from 'vue'
new Vue({
  el: '#app',
  components: { custom: MyComponent },
  template: `<custom />`,
})
