import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http = Axios;
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.use(require('vue-moment'));
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
