<template>
  <div>
    <div class="example">{{ msg }}</div>
    <div class="test"></div>
    <HelloWorld msg="这是传递的msg" />
    <img src="./assets/logo.png" />
    <router-link to="/router1">router1</router-link>
    <router-link to="/router2">router2</router-link>
    <router-view></router-view>
    <button @click="add">+1</button>
    <button @click="des">-1</button>
    <h1>Vuex state: {{ count }}</h1>
  </div>
</template>
<script>
import HelloWorld from '@component/Helloworld.vue'
import { mapState } from 'vuex'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'Hello world!'
    }
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    add() {
      this.$store.dispatch('increment')
    },
    des() {
      this.$store.dispatch('decrement')
    }
  }
}
</script>

<style lang="less">
@green: #5fbc0e;
.example {
  color: @green;
}
.border-radius (@radius) {
  border-radius: @radius;
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
}
.test {
  width: 100px;
  height: 100px;
  background: @green;
  .border-radius(50px);
}
</style>
