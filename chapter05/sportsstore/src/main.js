import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

Vue.config.productionTip = false

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

import store from './store'

Vue.use(Vuetify)

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app')
