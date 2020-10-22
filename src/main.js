import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import store from './store';
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
const b = [1, 2, [1, 2, [1, 2]]].flat(Infinity);
class Test {}
const big = BigInt(100);
