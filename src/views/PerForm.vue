<template>
  <div>
    <ShowTop />
    <ShowNav />
    <ShowSing />
  </div>
</template>

<script>
import ShowNav from "../components/MyShow/ShowNav.vue";
import ShowSing from "../components/MyShow/ShowSing.vue";
import ShowTop from "../components/MyShow/ShowTop.vue";
export default {
  name: "PerForm",
  components: {
    ShowNav,
    ShowSing,
    ShowTop
  }
};
</script>

<style>
</style>