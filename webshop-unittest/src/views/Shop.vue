<template>
  <main>
    <li>{{item.titel}}</li>
  </main>
</template>

<script>
export default {
  data() {
    return {
      item: {
        titel: "",
        price: "",
        description: "",
      },
    };
  },

  methods: {
   async getItems() {
      const response = await fetch("https://fakestoreapi.com/products/1")
      const data = await response.json();
      this.item.titel = data.titel; 
      this.item.price = data.price;
      this.item.description = data.description; 
    },
  },
}
</script>

<style>

</style>