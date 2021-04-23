<template>
  <div id="app">
    <h1 class="top">TODOLIST</h1>
    <Header/>
    <List :todos="todos"/>
    <Footer :todos="todos"/>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List.vue'
import Footer from './components/Footer'
export default {
  name: 'App',
  data(){
    return {
      todos:[
        {title:'taskA',status:false,id:'dqweq11'},
        {title:'taskB',status:true,id:'dqwe1q11'},
        {title:'taskC',status:false,id:'dqwe12q11'},
      ]
    }
  },
  mounted(){
    this.$bus.$on('deleTodo',this.deleTodo)
    this.$bus.$on('addTodo',this.addTodo)
    this.$bus.$on('changeStatus',this.changeStatus)
    this.$bus.$on('deleDoneTodo',this.deleDoneTodo)
    this.$bus.$on('showStatus',this.showStatus)
    // this.todos = JSON.parse(window.localStorage.getItem('todos'))
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleTodo(index){
      this.todos.splice(index,1)
    },
    changeStatus(status,item){
      item.status = status
    },
    deleDoneTodo(){
      // this.todos = this.todos.map(item=>{
      //   return item.status === false
      // })
    this.todos =  this.todos.reduce((p,i)=>{
       if(i.status===false){
         p.push(i)
       }
       return p
     },[])
    },
    showStatus(flag){
      this.todos.forEach(item=>{
        item.status = flag
      })
    }
  },
  components: {
  Header,
  List,
  Footer
  }
}
</script>

<style>
#app {
position: relative;
padding: 12px;
width: 600px;
margin: 100px auto;
border-radius: 5px;
border: 1px solid #ccc;
}
.top{
  margin: 0 auto;
  text-align: center;
}
</style>
