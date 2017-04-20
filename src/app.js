import Vue from 'vue'
import Counter from './components/counter.vue'
import store from './store'
import './style/main.css'

new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})
