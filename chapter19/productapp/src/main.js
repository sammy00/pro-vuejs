import Vue from 'vue'
import App from './App.vue'

import 'materialize-css/dist/css/materialize.min.css'
import { RestDataSource } from './restDataSource'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  provide() {
    return {
      eventBus: new Vue(),
      restDataSource: new RestDataSource(),
    }
  },
}).$mount('#app')
