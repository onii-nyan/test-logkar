<template>
  <NavBar/>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components:{
    NavBar
  }
}
</script>

<style>
#app{
  background-image: url('./assets/bg.jpg');
  height: 100%;
  padding: 10px;
  min-height: 100vh
}
</style>
