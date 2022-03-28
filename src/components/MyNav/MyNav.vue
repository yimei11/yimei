<template>
  <div class="nav">
    <ul class="navbar">
      <li v-for="(item, index) in navArr" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyNav",
  data() {
    return {
      navArr: ["热点首页", "新闻资讯", "预告片"]
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align: middle;
}
.nav {
  width: 100%;
  height: 60px;
  background: #47464a;
  /* margin-top: 81px; */
}
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar li {
  padding: 0 40px;
  height: 60px;
  line-height: 60px;
  color: #999;
  position: relative;
}
.navbar li:after {
  content: "";
  display: block;
  width: 2px;
  height: 0;
  border-bottom: 7px solid #fff;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: none;
}
.navbar li:nth-child(1) {
  color: #ef4238;
}
.navbar li:nth-child(1):after {
  display: block;
}
</style>