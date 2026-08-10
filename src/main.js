import Vue from 'vue'
import App from './App'
import 'bootstrap'
import VueClipboard from 'vue-clipboard2'

require('jquery.easing')
require('devicons/css/devicons.css')
// require('font-awesome/css/font-awesome.css')
require('@fortawesome/fontawesome-free/css/all.css')

Vue.prototype.jquery = require('jquery')

Vue.config.productionTip = false

Vue.use(VueClipboard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})



// WEBPACK FOOTER //
// ./src/main.js