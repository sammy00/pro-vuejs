import Vue from 'vue'
import App from './App.vue'

import 'materialize-css/dist/css/materialize.min.css'
import { RestDataSource } from './restDataSource'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
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
