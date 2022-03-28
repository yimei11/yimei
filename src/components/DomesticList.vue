<template>
  <div class="updateTitle">
    <p class="updateTime">
      {{ time }}
      <span class="title">已更新</span>
    </p>
    <p class="listRule">
      榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。相关数据来源于“猫眼专业版”。
    </p>
    <dl class="boardWrapper">
      <dd class="boardItem" v-for="(item, value) in hotlist" :key="value">
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
              实时票房：<span>{{ item.realTime }}</span
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
  name: "DomesticList",
  data() {
    return {
      time: null,
      hotlist: [
        {
          id: 61,
          name: "新蝙蝠侠",
          ranking: 1,
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd69a9235bfecd8b535cb9e40b04b22831.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "罗伯特·帕丁森,佐伊·克拉维兹,杰弗里·怀特",
          time: "上映时间：2022-03-18",
          realTime: "3104.9",
          total: "5359.0万",
        },
        {
          id: 62,
          name: "神秘海域",
          ranking: 2,
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd69ad7c3385bf180779c8ca665bf97ce5.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：汤姆·赫兰德,马克·沃尔伯格,索菲娅·阿里",
          time: "上映时间：2022-03-14",
          realTime: "1232.6",
          total: "5732.0万",
        },
        {
          id: 63,
          ranking: 3,
          name: "长津湖之水门桥",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd6be9abc7e8d3311e5bd9b6d287be0f28.png?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：吴京,易烊千玺,朱亚文",
          time: "上映时间：2022-02-01",
          realTime: "384.5",
          total: "40.19亿",
        },
        {
          id: 64,
          ranking: 4,
          name: "这个杀手不太冷静",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69a9abb12f0ee7e12418459419ad84a6.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：马丽,魏翔,陈明昊",
          time: "上映时间：2022-02-01",
          realTime: "277.4",
          total: "25.99亿",
        },
        {
          id: 65,
          ranking: 5,
          name: "熊出没·重返地球",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd68decdb12b53592351a40d2bc6da3453.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：张秉君,张伟,谭笑",
          time: "上映时间：2022-02-01",
          realTime: "197.7",
          total: "9.55亿",
        },
        {
          id: 66,
          ranking: 6,
          name: "奇迹·笨小孩",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd68de7adddddd2395b4c04f4737cd31fc.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：易烊千玺,田雨,陈哈琳",
          time: "上映时间：2022-02-01",
          realTime: "129.8",
          total: "13.66亿",
        },
        {
          id: 67,
          ranking: 7,
          name: "花束般的恋爱",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd6bec7e7e1030cb12da89b6f158d2d3ce.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：有村架纯,菅田将晖,细田佳央太",
          time: "上映时间：2022-02-22",
          realTime: "77.3",
          total: "8315.0万",
        },
        {
          id: 68,
          ranking: 8,
          name: "我们的冬奥",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69a87a3389ab407ac971b04da28b5ef8.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：冰墩墩,雪容融,刘思奇",
          time: "上映时间：2022-02-19",
          realTime: "56.7",
          total: "6261.0万",
        },
        {
          id: 69,
          ranking: 9,
          name: "狙击手",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad5927a302fd23651ba357a97181552c5d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：陈永胜,章宇,刘奕铁",
          time:"上映时间：2022-02-01",
          realTime: "43.5",
          total: "5.98亿",
        },
        {
          id: 70,
          ranking: 10,
          name: "可不可以你也刚好喜欢我",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69a923f2a06d6b12dac78277e7ffdba2.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：曹佑宁,陈妤,林映唯",
          time: "上映时间：2022-03-11",
          realTime: "38.2",
          total: "1418.0万",
        },
      ],
    };
  },
  methods: {
    timeFn() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      month = month > 10 ? month : "0" + month;
      day = day > 10 ? day : "0" + day;
      this.time = year + "-" + month + "-" + day;
    },
  },
  created() {
    this.timeFn();
  },
};
</script>

<style scoped>
.updateTitle {
  width: 950px;
  margin: 0 auto;
  font-size: 12px;
  color: #999;
}
.title {
  font-size: 12px;
  color: #ffb400;
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
