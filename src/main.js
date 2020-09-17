import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Print from 'vue-print-nb'

Vue.use(Print);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


