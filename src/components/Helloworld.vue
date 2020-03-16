<template>
  <div class="hello">
    <h1>这是component组件</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
