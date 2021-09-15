<template>
  <header>
    <h1 class="title">Random Web Shop</h1>
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
h1 {
  background-color: white;
}
header {
  display: flex;
  flex-direction: column;
}
.title {
  background-image: linear-gradient(90deg, rgb(92, 88, 88), black);
  background-clip: text;
  color: transparent;
  background-color: white;
  width: 100%;
}

.topnav {
  background-color: #faf9f6;
  width: 100%;
}

.topnav a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  background-image: linear-gradient(90deg, darkgrey, black);
  background-size: 0% 3px;
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: background-size 300ms ease;

  text-decoration: none;
  font-weight: 700;
}

.topnav a:hover {
  background-size: 100% 3px;
}

.topnav a.active {
  color: rgb(63, 63, 63);
}
</style>
