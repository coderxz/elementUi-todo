<template>
  <li class="item" @mouseenter="showItem(true)" @mouseleave="showItem(false)" :class="{'bg':flag}">
    <span>
      <el-checkbox v-model="todos.status" style="margin-right:10px;">
    </el-checkbox>
    <span style="font-size:18px">{{todos.title}}</span>
    </span>
    <el-button type="danger" size="mini" class="btn" v-show="dItem" @click="deleTodo">delete!</el-button>
  </li>
</template>

<script>
export default {
props:{
  todos:{
    type:Object
  },
  index:{
    type:Number
  }
},
data(){
  return{
    dItem:false,
    flag:false
  }
},
methods:{
  showItem(flag){
    if(flag){
      this.dItem = true
      this.flag = true
    }else{
      this.dItem = false
      this.flag = false
    }
  },
  deleTodo(){
    this.$bus.$emit('deleTodo',this.index)
    console.log(this.index);
  }
},
watch:{
  todos:{
    handler(newValue){
      this.$bus.$emit('changeStatus',newValue.status,newValue)
    },
    deep:true,
    immediate:true
  }
}
}
</script>

<style>
.item{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 4px;
}
.btn{
  float: right;
}
li{
  list-style: none;
}
.bg{
  background-color: #eee;
}
</style>