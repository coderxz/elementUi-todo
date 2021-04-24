import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import './UI'
Vue.prototype.moment = moment
Vue.config.productionTip = false

new Vue({
  beforeCreate(){
  Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')
