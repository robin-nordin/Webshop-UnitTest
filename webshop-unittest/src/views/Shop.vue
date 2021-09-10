<template>
  <main>
    <div v-if="products">
      <div v-for="(product, index) in products" :key="index">
        <img v-bind:src=" product.image" alt="Oops!">
        <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {

  data() {
    return {
      products: [],
    }
  },

  created() {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
     // .then(data => (this.products.id = data.id) + (this.products.title = data.title))
      .then(data => this.products = data)
  },

  
};
</script>

<style></style>
