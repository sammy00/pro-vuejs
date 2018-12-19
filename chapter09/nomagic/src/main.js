/*
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
*/

import 'materialize-css/dist/css/materialize.min.css'

import Vue from 'vue'
new Vue({
  el: '#app',
  data: {
    counter: 0,
  },
  methods: {
    handleClick() {
      this.counter++
    },
  },
  template: `<div class="card-panel grey">
    <h1 class="white-text">
      Button Presses: {{ counter }}
    </h1>
    <button class="btn grey" @click="handleClick"> Press Me </button>
  </div>`,
})
