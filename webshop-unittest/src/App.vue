<template>
  <div id="app">
    <Shop />
    <Checkout />
    <Shoppingcart />
  </div>
</template>

<script>
import Shop from './views/Shop.vue'
import Checkout from './views/Checkout.vue'
import Shoppingcart from './components/Shoppingcart.vue'

export default {
  name: 'App',
  components: {
    Shoppingcart,
    Checkout,
    Shop
  }
}
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
  margin-top: 60px;
}
</style>
