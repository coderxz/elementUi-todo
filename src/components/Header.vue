<template>
<div class="header">
  <el-row :gutter="35" class="row1">
      <el-col :span="20"><el-input v-model="title" placeholder="Please enter a task!" @keyup.enter.native="addTodo"></el-input></el-col>
      <el-col :span="4"><el-button type="success" @click="addTodo">Add</el-button></el-col>
  </el-row>
</div>
</template>

<script>
export default {
  data(){
    return {
      title:""
    }
  },
  methods:{
    addTodo(){
      if(this.title.trim()){
        this.$bus.$emit('addTodo',{title:this.title,id:Math.random(),status:false})
      }else{
        this.$message.error('Please fill in the information correctly！')
      }
      this.title = ''
      window.localStorage.setItem('todos',[JSON.stringify({title:this.title,id:Math.random(),status:false})])
    },
    add(){
      this.addTodo()
      console.log('----');
    }
  }
}
</script>

<style>
.header{
  margin-top: 30px;
}
</style>