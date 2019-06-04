
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HeaderTop from './components/HeaderTop/HeaderTop.vue'

Vue.component('HeaderTop',HeaderTop)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
