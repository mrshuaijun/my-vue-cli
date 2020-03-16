import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/router1',
    component: resolve => require(['@pages/TestRouter'], resolve)
  },
  {
    path: '/router2',
    component: resolve => require(['@pages/TestRouter2'], resolve)
  }
]
export default new VueRouter({
  mode: 'history',
  routes
})
