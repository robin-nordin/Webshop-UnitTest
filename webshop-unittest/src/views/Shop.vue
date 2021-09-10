<template>
  <main>
    <div v-if="products">
      <p>{{ products.title }}</p>
    </div>
  </main>
</template>

<script>
export default {

  data() {
    return {
      products: {
        id: '',
        title: '',
      }
    }
  },

  created() {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => (this.products.id = data.id) + (this.products.title = data.title))
      .then(json => console.log(json));
  },

  methods: {
    /**mounted() {
    fetch('https://fakestoreapi.com/products' + this.id)
      .then(res => res.json())
      .then(json => console.log(json))
      //.then(data => this.products = data)
  }, */
    /*methods: {
   async getItems() {
      const response = await fetch("https://fakestoreapi.com")
      const data = await response.json();
      this.item.title = data.title; 
      this.item.price = data.price;
      this.item.description = data.description;
    },
  },
     async getFakes () {
     fetch('https://fakestoreapi.com/products' + this.id)
      .then(res => res.json())
      .then(json => console.log(json))
      //.then(data => this.products = data)
   },

   async getItems() {
      const response = await fetch("https://fakestoreapi.com")
      const data = await response.json();
      this.item.title = data.title; 
      this.item.price = data.price;
      this.item.description = data.description;
    },

   mounted: function () {
     this.$nextTick(function () {
       this.getFakes
     })
   },
  */
  },
};
</script>

<style></style>
