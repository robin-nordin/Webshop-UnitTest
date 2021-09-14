<template>
  <main>
    <header>
      <h1>Random Web Shop</h1>
      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </header>
    <div v-if="products" class="shopStructure">
      <div v-for="(product, index) in products" :key="index" class="product">
        <img v-bind:src="product.image" alt="Oops!" class="productImg" />
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>

        <button @click="addToCart">add to cart</button>
      </div>
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="cart" class="shopStructure">
      <div v-for="(product, index) in cart" :key="index" class="test">
        <img v-bind:src="product.image" alt="Oops!" class="productImg" />
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>

        <button @click="removeFromCart(product.id)">remove from cart</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Shop',
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
          price: 109.95,
          description:
            'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          category: "men's clothing",
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          rating: { rate: 3.9, count: 120 },
        },
      ],
      cart: [],
    };
  },

  computed: {
    error() {
      return this.products.length <= 0 ? 'unable to get items' : '';
    },
  },

  created() {
    console.log('created in Shop.vue');
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      // .then(data => (this.products.id = data.id) + (this.products.title = data.title))
      .then((data) => (this.products = data));
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log('running init in mounted in Shop.vue');
    },

    addToCart(index) {
      this.cart.push(index);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
};
</script>

<style>
h1 {
  color: rgb(71, 70, 70);
  padding: 20px;
}

.product {
  width: 200px;
  height: 400px;
  border-style: solid;
  border-color: rgb(71, 70, 70);
  border-radius: 3px;
  margin: 10px;
  padding: 5px;
  background: white;
}

.productImg {
  width: 150px;
  height: 200px;
}

.shopStructure {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: darkgray;
}

.topnav {
  background-color: #333;
  overflow: hidden;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: rgb(125, 129, 128);
  color: white;
}

#app {
  background-color: lightgray;
  margin: 0;
}
</style>
