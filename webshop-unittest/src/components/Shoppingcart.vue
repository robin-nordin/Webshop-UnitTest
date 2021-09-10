<template>
  <main>
      
      <button class="remove">Remove</button> <!-- Add @click for the remove funtionality -->

      <button class="btn-checkout">Checkout</button> <!-- Brings us to checkout. Add funtion and @click for that -->

  </main>
</template>

<script>
export default {




  // checkout()

  // remove()
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: flex-start;
  margin-left: 10rem;
  max-width: 900px;
}

.btn-checkout {
  width: 10rem;
  height: 2rem;
  color: white;
  background-color: rgb(68, 163, 218);
  border-radius: 8px;
  border: transparent;
}

.btn-checkout:hover {
  cursor: pointer;
}

.remove {
  width: 4rem;
  height: 2rem;
  background-color: rgb(68, 163, 218);
  color: white;
  border-radius: 8px;
  border: transparent;
}

.remove:hover {
  cursor: pointer;
}
</style>