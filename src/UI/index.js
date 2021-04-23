import Vue from 'vue'
import {Button,Input,Checkbox,Row,Col} from 'element-ui'
const UIARRAY = [Button,Input,Checkbox,Row,Col]
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
UIARRAY.forEach(item=>{
  Vue.use(item)
})