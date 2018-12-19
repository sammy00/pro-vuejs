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
  template: `<div class="card-panel blue">
  <h1 class="white-text center-align">
    This is the main.js file
  </h1>
  <custom />
</div>`,
})
