<template>
  <div id="app">
    <Header />
    <Shop />
  </div>
</template>

<script>
import Shop from "./views/Shop.vue";
import Header from "./components/Header.vue"

export default {
  name: "App",
  components: {
    Header,
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
  font-family: "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: darkgray;
}
</style>
