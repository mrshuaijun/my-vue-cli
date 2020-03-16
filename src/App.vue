<template>
  <div>
    <div class="example">{{ msg }}</div>
    <HelloWorld msg="这是传递的msg" />
    <img src="./assets/logo.png" />
    <router-link to="/router1">router1</router-link>
    <router-link to="/router2">router2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from '@component/Helloworld.vue'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
