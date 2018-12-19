/*
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
*/

import 'materialize-css/dist/css/materialize.min.css'

let counter = 1
let container = document.createElement('div')

container.classList.add('card-panel', 'blue')

let msg = document.createElement('h1')
msg.classList.add('white-text')
msg.textContent = 'Button Not Pressed'

let button = document.createElement('button')
button.textContent = 'Press Me'
button.classList.add('btn', 'grey', 'center-align')
button.onclick = () => (msg.textContent = `Button Presses: ${counter++}`)
container.appendChild(msg)
container.appendChild(button)

let app = document.getElementById('app')
app.parentElement.replaceChild(container, app)
