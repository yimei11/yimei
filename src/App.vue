<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>
<style>
:root {
  overflow-x: hidden;
}
:root body {
  position: absolute;
}
body {
  font-size: 16px;
  font-family: Microsoft YaHei, Helvetica, Arial, sans-serif;
  background-color: #fff;
  padding-top: 81px;
}
* {
  margin: 0;
  padding: 0;
}
img {
  display: block;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}
input {
  outline: none;
}
</style>
