<template>
  <div class="coming">
    <ol>
      <li>
        <input type="radio" name="movies" />
        按热门排序
      </li>
      <li>
        <input type="radio" name="movies" />
        按时间排序
      </li>
    </ol>
    <ul>
      <li v-for="(item, index) in comings" :key="index">
        <img :src="item.imgSrc" alt />
        <p>{{ item.title }}</p>
        <p>{{ item.grade }}</p>
      </li>
    </ul>
    <div>
      <p class="active">1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>下一页</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "MyComing",
  data() {
    return {
      comings: null
    };
  },
  methods: {
    async getComing() {
      let { data } = await axios.get("/api/film");
      this.comings = data.coming;
    }
  },
  created() {
    this.getComing();
  }
};
</script>
<style scoped>
ol {
  display: flex;
}
ol li {
  margin-right: 30px;
}
ol li input {
  margin-right: 3px;
}
ul {
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
}
ul li {
  text-align: center;
  margin-right: 35.2px;
  margin-bottom: 20px;
}
ul li img:hover {
  transform: scale(1.3);
}
ul li:nth-child(6n) {
  margin-right: 0;
}
ul li p {
  width: 160px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 3px 0;
}
ul li p + p {
  margin-top: 10px;
  font-style: italic;
  font-size: 15px;
  color: orange;
}
.coming div {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.coming div p {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 0 10px;
}
.coming div .active {
  border: none;
  background: red;
  color: #fff;
}
</style>