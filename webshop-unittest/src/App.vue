<template>
  <div id="app">
    <Shop />
  </div>
</template>

<script>
import Shop from "./views/Shop.vue";

export default {
  name: "App",
  components: {
    Shop,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
