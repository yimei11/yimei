import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue"; //首页
import Film from "../views/Film.vue" //电影
import MovieView from "../components/MovieView.vue"; //影院
import PerForm from "../views/PerForm.vue" //演出
import MovieList from "../views/MovieList.vue" //榜单
import HotSpot from "../views/HotSpot.vue" //热点
import ShopingMall from "../views/ShopingMall.vue" //商城


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomePage,
    redirect: '/homePage'
  },
  {
    path: "/homePage",
    component: HomePage,
  },
  {
    path: "/film",
    component: Film,
    redirect: "/film/ishit",
    children: [
      {
        path: "ishit",
        name: 'ishit',
        component: () => import("@/components/MyIshit.vue"),
      },
      {
        path: "coming",
        name: 'coming',
        component: () => import("@/components/MyComing.vue"),
      },
      {
        path: "classic",
        name: 'classic',
        component: () => import("@/components/MyClassic.vue"),
      }
    ]
  },
  {
    path: "/movie",
    name: "MovieView",
    component: MovieView,
  },
  {
    path: "/shopingmall",
    name: "shop",
    component: ShopingMall
  },
  {
    path: "/perform",
    component: PerForm
  },
  {
    path: "/movielist",
    component: MovieList,
    redirect: "/movielist/hotList",
    children: [
      {
        path: "hotList",
        name: "hotList",
        component: () => import("../components/HotList.vue"),
      },
      {
        path: "expectList",
        name: "expectList",
        component: () => import("../components/ExpectList.vue"),
      },
      {
        path: "domesticList",
        name: "domesticList",
        component: () => import("../components/DomesticList.vue"),
      },
      {
        path: "northUsa",
        name: "northUsa",
        component: () => import("../components/NorthUsa.vue"),
      },
      {
        path: "maxTop",
        name: 'maxTop',
        component: () => import("../components/MaxTop.vue"),
      },
    ],
  },
  {
    path: "/hot",
    component: HotSpot
  }
];

const router = new VueRouter({
  routes,
});

export default router;
