import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

Vue.config.productionTip = false

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

import store from './store'
import router from './router'

Vue.use(Vuetify)

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
