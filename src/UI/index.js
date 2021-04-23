import Vue from 'vue'
import {Button,Input,Checkbox,Row,Col, Message} from 'element-ui'
const UIARRAY = [Button,Input,Checkbox,Row,Col,Message]
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
Vue.prototype.$message = Message
UIARRAY.forEach(item=>{
  Vue.use(item)
})