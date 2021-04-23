<template>
<div>
    <ul class="List" v-if="todos.length">
  <Item v-for="(item,index) in todos" :key="item.id" :index="index" :todos="item" />
  </ul>
  <h1 v-else>
    No task！！
  </h1>
</div>
</template>

<script>
import Item from './Item'
export default {
props:{
  todos:{
    type:Array,
  }
},
data(){
  return{
    flag:false
  }
},
mounted(){
  console.log(this.todos);
},
components:{
  Item
}
}
</script>

<style>
.List{
  margin-top: 20px;
  padding: 0;
}
</style>