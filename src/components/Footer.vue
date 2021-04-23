<template>
<div class="footer item">
   <span>
      <el-checkbox v-model="isFullDone" style="margin-right:10px;">
    </el-checkbox>
    <span style="font-size:18px">Completed:{{doneTodo}}/Undone:{{noDoneTodo}}/Total task:{{todoLength}}</span>
    </span>
    <el-button type="danger" size="mini" class="btn" v-show="dItem" v-if="doneTodo" @click="deleTodo">Delete completed!</el-button>
</div>
</template>

<script>
export default {
  props:{
    todos:{
      type:Array
    }
  },
  data(){
    return{
      status:false,
      dItem:true
    }
  },
  mounted(){
  },
  computed:{
    doneTodo(){
      return this.todos.filter(item=>{
        return item.status === true
      }).length
    },
    noDoneTodo(){
        return this.todos.filter(item=>{
        return item.status === false
      }).length
    },
    todoLength(){
      return this.todos.length
    },
    isFullDone:{
      get(){
        return this.doneTodo === this.todoLength && this.todoLength>0
      },
      set(newValue){
        this.$bus.$emit('showStatus',newValue)
      }
    }
  },
  updated(){

  },
  methods:{
    deleTodo(){
      this.$bus.$emit('deleDoneTodo')
    }
  }
}
</script>

<style>
.footer{
  margin-top: 40px;
  height: 50px;
}
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
</style>