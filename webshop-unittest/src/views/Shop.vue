<template>
  <main>
    <div v-if="products" class="shopStructure">
      <div v-for="(product, index) in products" :key="index" class="product">
        <img v-bind:src="product.image" alt="Oops!" class="productImg" />
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>

        <button @click="addToCart(product)" class="buttonAdd">
          add to cart
        </button>
      </div>
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="cart" class="shopStructure">
      <div v-for="(product, index) in cart" :key="index" class="product">
        <img v-bind:src="product.image" alt="Oops!" class="productImg" />
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>

        <button @click="removeFromCart(product)" class="buttonRemove">
          remove from cart
        </button>
      </div>
    </div>
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
.product {
  width: 200px;
  height: 350px;
  border-style: solid;
  margin: 10px;
  padding: 5px;
}

.productImg {
  width: 150px;
  height: 200px;
}

.shopStructure {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
