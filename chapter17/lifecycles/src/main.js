import Vue from 'vue'
import App from './App.vue'

import 'materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false

/*
new Vue({
  render: (h) => h(App),
}).$mount('#app')
*/

new Vue({
  el: '#app',
  components: { App },
  template: '<App data-names="Bob, Alice, Peter, Dora" />',
})
