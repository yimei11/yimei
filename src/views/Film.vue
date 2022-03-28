<template>
  <div>
    <div class="option">
      <router-link :to="{name:'ishit'}" active-class="a">正在热映</router-link>
      <router-link :to="{name:'coming'}" active-class="a">即将上映</router-link>
      <router-link :to="{name:'classic'}" active-class="a">经典影片</router-link>
    </div>
    <div class="list center">
      <div>
        <p>类型：</p>
        <ul>
          <li v-for="(item, index) in molds" :key="index">
            <router-link to active-class="li">{{ item }}</router-link>
          </li>
        </ul>
      </div>
      <div>
        <p>区域：</p>
        <ul>
          <li v-for="(item, index) in areas" :key="index">
            <router-link to active-class="li">{{ item }}</router-link>
          </li>
        </ul>
      </div>
      <div>
        <p>年代：</p>
        <ul>
          <li v-for="(item, index) in times" :key="index">
            <router-link to active-class="li">{{ item }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view class="center"></router-view>
  </div>
</template>
<script>
export default {
  name: "MyHome",
  data() {
    return {
      molds: [
        "全部",
        "爱情",
        "喜剧",
        "动画",
        "剧情",
        "恐怖",
        "惊悚",
        "科幻",
        "动作",
        "悬疑",
        "犯罪",
        "冒险",
        "战争",
        "奇幻",
        "运动",
        "家庭",
        "古装",
        "武侠",
        "西部",
        "历史",
        "传记",
        "歌舞",
        "黑色电影",
        "短片",
        "纪录片",
        "戏曲",
        "音乐",
        "灾难",
        "青春",
        "儿童",
        "其他"
      ],
      areas: [
        "全部",
        "大陆",
        "美国",
        "韩国",
        "日本",
        "中国香港",
        "泰国",
        "印度",
        "法国",
        "英国",
        "俄罗斯",
        "意大利",
        "西班牙",
        "德国",
        "波兰",
        "澳大利亚",
        "伊朗",
        "其他"
      ],
      times: [
        "全部",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2013",
        "2012",
        "2011",
        "2000-2010",
        "90年代",
        "80年代",
        "70年代",
        "更早"
      ]
    };
  }
};
</script>
<style scoped>
div {
  width: 100%;
}
.option .a {
  color: rgb(233, 20, 20);
}
.center {
  width: 80%;
  margin: 30px auto;
}
.option {
  width: 100%;
  height: 65px;
  background: rgb(53, 52, 52);
  display: flex;
  align-items: center;
  justify-content: center;
}
.option a {
  color: #ccc;
  margin: 0 40px;
}
.list {
  border: 1px solid #ccc;
}
.list div {
  width: 95%;
  margin: 10px auto;
  font-size: 14px;
  padding-bottom: 10px;
  display: flex;
  border-bottom: 1px dotted #ccc;
}
.list div:last-child {
  border: none;
  padding: 0;
}
.list div p {
  width: 80px;
  color: rgb(133, 131, 131);
  text-align: center;
  line-height: 25px;
  flex: 1;
}
.list div ul {
  flex: 20;
  display: flex;
  flex-wrap: wrap;
}
.list div ul li {
  margin: 0 10px;
  padding: 3px 5px;
  border-radius: 30%;
}
.list div ul li a {
  color: #000;
}
.list div ul li a:hover {
  color: red;
  cursor: pointer;
}
</style>