import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import Main from './modules/main/component.vue'
import store from './store'
import router from './router'

Vue.use(VueRouter)

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Main)
})
