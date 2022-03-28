<template>
  <div class="top-box">
    <div class="top-wrap">
      <div>
        <ul class="lef-ul">
          <li>
            <img class="log-img" src="../../img/logo.jpg" alt />
          </li>
          <li class="city-text">上海</li>
        </ul>
        <ul class="rig-ul">
          <li>
            <input class="search" type="text" placeholder="请输入演出信息" />
          </li>
          <li class="wecat-text">微信扫码购票</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowTop",
  data() {
    return {};
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
.top-box {
  width: 100%;
  height: 80px;
}
.top-wrap {
  width: 100%;
  height: 80px;
  background: #ef4238;
}
.top-wrap > div {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.lef-ul {
  display: flex;
}
.lef-ul li .log-img {
  width: 330px;
  height: 43px;
  margin-top: 20px;
}
.lef-ul .city-text {
  color: #fff;
  margin-left: 30px;
  font-size: 18px;
  margin-top: 30px;
}
.rig-ul {
  display: flex;
  line-height: 40px;
  margin-top: 20px;
}
.rig-ul li .search {
  width: 230px;
  height: 40px;
  border-radius: 10px;
  border: none;
  opacity: 0.5;
  text-indent: 2rem;
  line-height: 40px;
}
.rig-ul .wecat-text {
  color: #fff;
  margin-left: 40px;
  font-size: 18px;
}
</style>
