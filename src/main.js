import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
// import 'normalize.css';

Vue.config.productionTip = false;

Vue.use(MintUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
