<template>
  <div>
    <div class="example">{{ msg }}</div>
    <HelloWorld msg="这是传递的msg" />
    <img src="./assets/logo.png" />
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
