import Vue from 'vue'
import App from './App.vue'

import 'materialize-css/dist/css/materialize.min.css'
import { RestDataSource } from './restDataSource'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  store,
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
      restDataSource: new RestDataSource(this.eventBus),
    }
  },
}).$mount('#app')
