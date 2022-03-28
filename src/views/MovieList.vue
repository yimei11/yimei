<template>
  <div class="movie">
    <div class="movieList">
      <div>
        <router-link :to="{name:'hotList'}" active-class="active">热映口碑榜</router-link>
        <router-link :to="{name:'expectList'}" active-class="active">最受期待榜</router-link>
        <router-link :to="{name:'domesticList'}" active-class="active">国内票房榜</router-link>
        <router-link :to="{name:'northUsa'}" active-class="active">北美票房榜</router-link>
        <router-link :to="{name:'maxTop'}" active-class="active">TOP100榜</router-link>
      </div>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  data() {
    return {
      activerouter: "",
      num: 0
    };
  },
  methods: {},
  mounted() {},
  computed: {}
};
</script>

<style scoped>
.movie {
  margin-bottom: 115px;
}
.movieList >>> a.active {
  color: #ef4238;
}
.movieList > div {
  width: 100vw;
  height: 60px;
  background: #47464a;
  display: flex;
  justify-content: center;
  align-items: center;
}
.movieList > div a {
  width: 160px;
  font-size: 16px;
  color: #999;
  display: flex;
  justify-content: center;
}
.movieList > div a:hover {
  color: #fff;
}
.movieList > div a.active:hover {
  color: #ef4238;
}
.main {
  margin-top: 70px;
}
.el-menu-item {
  padding: 0 40px;
}
</style>
