<template>
  <div class="nav-box">
    <ul class="nav-ul">
      <li v-for="(item,index) in arr" :key="index">{{item}} </li>
    </ul>
  </div>
</template>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .nav-box{
        width: 100%;
        height: 60px;
        background-color: #fff;
    }
    .nav-ul,li{
        list-style: none;
        margin: 0 auto;
        line-height: 60px;
        font-size: 16px;
        cursor: pointer;
    }
    .nav-box .nav-ul{
        width: 80%;
        display: flex;
        justify-content: space-around;
    }
</style>
<script>
export default {
  name: "ShowNav",
  data() {
    return {
      arr: [
        "全部",
        "演唱会",
        "话剧歌剧",
        "休闲展览",
        "戏曲艺术",
        "音乐节",
        "亲子演出",
        "音乐会",
        "舞蹈芭蕾",
        "剧本杀",
        "体育赛事",
        "演出直播",
        "电竞赛事",
        "其他",
      ],
    };
  },
};
</script>
