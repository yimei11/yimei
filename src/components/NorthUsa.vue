<template>
  <div class="updateTitle">
     <p class="updateTime">
      {{ time }}
      <span class="title">已更新</span>
    </p>
    <p class="listRule">
      榜单规则：将北美地区热映的影片，按照上周末票房从高到低排列，每周一更新。相关数据来源于“猫眼专业版”。
    </p>
    <dl class="boardWrapper">
      <dd class="boardItem" v-for="(item, value) in hotlist" :key="item.id">
        <i :class="item.boardIndex">{{ item.ranking }}</i>
        <div class="boardImg">
          <img :src="item.hotImg" alt="" />
        </div>
        <div class="item-main">
          <div class="item-content">
            <p class="name">{{ item.name }}</p>
            <p class="actor">{{ item.actor }}</p>
            <p class="time">{{ item.time }}</p>
          </div>
          <div class="score-num">
            <p class="real-time">
              上周末票房：<span>{{ item.realTime }}</span
              >万
            </p>
            <p class="total">总票房：{{ item.total }}</p>
          </div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name:"NorthUsa",
   data(){
     return {
      time: null,
      hotlist: [
        {
          id: 71,
          name: "精灵旅社3：疯狂假期",
          ranking: 1,
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad5927e10fa7e120e133e8e384aca6880e.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：亚当·桑德勒,赛琳娜·戈麦斯,凯瑟琳·哈恩",
          time: "上映时间：2018-08-17",
          realTime: "4410.0",
          total: "4537.0万",
        },
        {
          id: 72,
          name: "蚁人2：黄蜂女现身",
          ranking: 2,
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad5927e10fa7e12d23ce1d96c1943b7cc6.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：保罗·路德,伊万杰琳•莉莉,迈克尔·佩纳",
          time: "上映时间：2018-08-24",
          realTime: "2884.6",
          total: "1.33亿",
        },
        {
          id: 73,
          ranking: 3,
          name: "摩天营救",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad59253751b395baf33b1871d050625035.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：道恩·强森,昆凌,文峰",
          time: "上映时间：2018-07-20",
          realTime: "2548.0",
          total: "2548.0万",
        },
        {
          id: 74,
          ranking: 4,
          name: "超人总动员2",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5927e10fa87a9281e4eb5e2fd6f7112a.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：格雷格·T·尼尔森,霍利·亨特,莎拉·沃威尔",
          time: "上映时间：2018-06-22",
          realTime: "1622.0",
          total: "5.36亿",
        },
        {
          id: 75,
          ranking: 5,
          name: "侏罗纪世界2",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5927e10fa2ff72ff7bcd3708341b11e6.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：克里斯·帕拉特,布莱丝·达拉斯·霍华德,泰德·拉文",
          time: "上映时间：2018-06-15",
          realTime: "1551.0",
          total: "3.63亿",
        },
        {
          id: 76,
          ranking: 6,
          name: "人类清除计划4",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad59253751b7e1211e5fe4cc970a122428.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：莫·麦克雷,劳伦·维莱斯,梅罗妮·迪亚兹",
          time: "上映时间：2018-07-04(美国)",
          realTime: "913.0",
          total: "4950.0万",
        },
        {
          id: 77,
          ranking: 7,
          name: "抱歉打扰",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592e7a06df0ee39dd965c898765f11bf.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：泰莎·汤普森,勒凯斯·斯坦菲尔德,史蒂文·元",
          time: "上映时间：2018-01-20(圣丹斯电影节)",
          realTime: "425.0",
          total: "532.0万",
        },
        {
          id: 78,
          ranking: 8,
          name: "边境杀手2：边境战士",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad5927e10fab12dc6961486c84b1ccf65f.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：本尼西奥·德·托罗,乔什·布洛林,凯瑟琳·基纳",
          time: "上映时间：2018-06-29(美国)",
          realTime: "385.0",
          total: "4320.0万",
        },
        {
          id: 79,
          ranking: 9,
          name: "德鲁大叔",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad5925372ff9235be12cf6982b41461288.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：凯里·欧文,里尔·莱尔·哈瓦瑞,沙奎尔·奥尼尔",
          time: "上映时间：2019-01-11",
          realTime: "322.0",
          total: "3669.0万",
        },
        {
          id: 80,
          ranking: 10,
          name: "瞒天过海：美人计",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592030807ecd87df5d907b75ce57d98d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：桑德拉·布洛克,凯特·布兰切特,安妮·海瑟薇",
          time: "上映时间：2018-06-08(美国)",
          realTime: "291.0万",
          total: "1.32亿",
        },
      ],
    };
  },
  methods:{
    timeFn() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      month = month > 10 ? month : "0" + month;
      day = day > 10 ? day : "0" + day;
      this.time = year + "-" + month + "-" + day;
      this.time ="2018-07-16"
    },
  },
  created(){
    this.timeFn();
  }
};
</script>

<style scoped>
.title {
  font-size: 12px;
  color: #ffb400;
}
.updateTitle {
  width: 950px;
  margin: 0 auto;
  font-size: 12px;
  color: #999;
}
.updateTime {
  text-align: center;
  line-height: 22px;
}
.listRule {
  text-align: center;
}
.boardWrapper {
  width: 950px;
  margin: 0 auto;
  margin-top: 40px;
}
.boardItem {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
}
.board-index {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #f7f7f7;
  font-size: 18px;
  color: #999;
  font-weight: 700;
  position: absolute;
  left: 0;
  top: 85px;
}
.board-index-1 {
  font-size: 0;
  background: url("../assets/hot-icon.png");
}
.board-index-2,
.board-index-3 {
  color: #fff;
  background: #ffb400;
}
.boardImg {
  margin-left: 80px;
}
.item-main {
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  height: 219px;
  border-bottom: 1px solid #e5e5e5;
}
.item-content {
  color: #333;
}
.item-content .name {
  font-size: 26px;
}
.item-content .actor {
  margin-top: 18px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-content .time {
  font-size: 16px;
  color: #999;
  margin-top: 8px;
}
.item-main .int {
  font-size: 56px;
  font-weight: 700;
}
.fraction {
  font-size: 26px;
  font-weight: 700;
}
.score-num {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.real-time {
  font-size: 16px;
  color: #ef4238;
}
.real-time span {
  font-size: 26px;
  font-weight: 700;
}
.total {
  margin-top: 8px;
  font-size: 16px;
  color: #999;
}
</style>
