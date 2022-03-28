<template>
  <div class="ishit">
    <ol>
      <li>
        <input type="radio" name="movies" />
        按热门排序
      </li>
      <li>
        <input type="radio" name="movies" />
        按时间排序
      </li>
      <li>
        <input type="radio" name="movies" />
        按评价排序
      </li>
    </ol>
    <ul>
      <li v-for="(item, index) in hits" :key="index">
        <img :src="item.imgSrc" @mouseenter="blow($event)" @mouseleave="shrink($event)" />
        <p>{{ item.title }}</p>
        <p>{{ item.grade }}</p>
      </li>
    </ul>
    <div>
      <p class="page">1</p>
      <p>2</p>
      <p>下一页</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "MyIshit",
  data() {
    return {
      hits: null
    };
  },
  methods: {
    async getIshit() {
      let { data } = await axios.get("/api/film");
      this.hits = data.ishit;
    },
    blow(e) {
      e.target.style.transform = "scale(1.3)";
    },
    shrink(e) {
      e.target.style.transform = "scale(1)";
    }
  },
  created() {
    this.getIshit();
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
  position: relative;
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
  font-size: 20px;
  color: orange;
}
.ishit div {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.ishit div p {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 0 10px;
}
.ishit div .page {
  border: none;
  background: red;
  color: #fff;
}
</style>