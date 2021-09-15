<template>
  <main>
<<<<<<< Updated upstream
    <header>
      <h1>Random Web Shop</h1>
      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </header>
    <section class="mainShopping">
=======
    <div class="mainShopping">
>>>>>>> Stashed changes
      <div v-if="cart" class="cartStructure">
        <h3>Shopping Cart</h3>
        <div v-for="(product, index) in cart" :key="index" class="cartProduct">
          <p class="cartTitle">{{ product.title }}</p>
          <p class="cartPrice">{{ product.price }}</p>

          <button @click="removeFromCart(product)" class="buttonRemove">
            Remove from Cart
          </button>
        </div>
      </div>
      <div v-if="products" class="shopStructure">
        <div v-for="(product, index) in products" :key="index" class="product">
          <img v-bind:src="product.image" alt="Oops!" class="productImg" />
          <p>{{ product.title }}</p>
          <p>{{ product.price }}</p>

          <button @click="addToCart(product)" class="buttonAdd">
            Add to Cart
          </button>
        </div>
      </div>

      <div v-if="error" class="error">
        {{ error }}
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: { rate: 3.9, count: 120 },
        },
      ],
      cart: [],
    };
  },

  computed: {
    error() {
      return this.products.length <= 0 ? "unable to get items" : "";
    },
  },

  mounted() {
    this.init();
  },
  methods: {
    init() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => (this.products = data));
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
.mainShopping {
  display: flex;
  align-items: flex-start;
  background-color: #ddd;
  margin-top: 1.5rem;
}

.cartStructure {
  flex-direction: column;
  width: 40%;
  max-height: 600px;
  border-style: solid;
  border-color: rgb(71, 70, 70);
  padding: 50px;
  border-radius: 3px;
  overflow: scroll;
  background: white;
}
.shopStructure {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #ddd;
}

h2 {
  padding: 20px;
}

h3 {
  padding: 10px;
  margin: 0;
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

.cartProduct {
  align-self: flex-start;
  height: 150px;
  padding: 5px;
  border-bottom: solid;
  border-color: rgb(71, 70, 70);
}

.productImg {
  width: 150px;
  height: 200px;
}

.cartTitle,
.cartPrice {
  font-size: small;
  display: inline-block;
}

.cartStructure {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
}

.topnav {
  background-color: #333;
  overflow: hidden;
}

<<<<<<< Updated upstream
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

.buttonAdd {
  padding: 3px;
  background-color: rgb(125, 129, 128);
  color: white;
  width: 50%;
  box-shadow: 3px 3px 2px rgb(179, 176, 176);
  border-radius: 3px;
  border-width: 2px;
  border-color: rgb(88, 88, 88);
  border-style: solid;
  border-width: 2px;
=======
#app {
  background-color: #FAF9F6;
  margin: 0;
>>>>>>> Stashed changes
}

.buttonRemove {
  border-style: solid;
  border-width: 2px;
  border-color: rgb(88, 88, 88);
  padding: 3px;
  background-color: rgb(125, 129, 128);
  color: white;
  width: 100%;
  border-radius: 3px;
  box-shadow: 3px 3px 2px rgb(179, 176, 176);
}
</style>
