import VueRouter from 'vue-router'
import Counter from './modules/counter/component.vue'
import PageOne from './modules/pageone/component.vue'
import PageTwo from './modules/pagetwo/component.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Counter },
    { path: '/one', component: PageOne },
    { path: '/two', component: PageTwo }
  ]
})

export default router
