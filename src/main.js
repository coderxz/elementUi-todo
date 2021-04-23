import Vue from 'vue'
import App from './App.vue'
import './UI'
Vue.config.productionTip = false

new Vue({
  beforeCreate(){
  Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')
