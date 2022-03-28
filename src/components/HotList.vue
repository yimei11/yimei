<template>
  <div>
    <div class="updateTitle">
      <p class="updateTime">
        {{ time }}
        <span class="title">已更新</span>
      </p>
      <p class="listRule">榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。相关数据来源于“猫眼专业版”及“猫眼电影库”。</p>
      <dl class="boardWrapper">
        <dd class="boardItem" v-for="item in hotlist" :key="item.id">
          <i :class="item.boardIndex">{{ item.id }}</i>
          <div class="boardImg">
            <img :src="item.hotImg" alt />
          </div>
          <div class="item-main">
            <div class="item-content">
              <p class="name">{{ item.name }}</p>
              <p class="actor">{{ item.actor }}</p>
              <p class="time">{{ item.time }}</p>
            </div>
            <div class="score-num">
              <i class="int">{{ item.score[0] }}</i>
              <i class="fraction">{{ item.score[1] }}</i>
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: null,
      hotlist: [
        {
          id: 1,
          name: "长津湖之水门桥",
          ranking: 1,
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd6be9abc7e8d3311e5bd9b6d287be0f28.png?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：吴京,易烊千玺,朱亚文",
          time: "上映时间：2022-02-01",
          score: ["9.", "6"]
        },
        {
          id: 2,
          name: "奇迹·笨小孩",
          ranking: 2,
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd68de7adddddd2395b4c04f4737cd31fc.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：易烊千玺,田雨,陈哈琳",
          time: "上映时间：2022-02-01",
          score: ["9.", "5"]
        },
        {
          id: 3,
          ranking: 3,
          name: "狙击手",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad5927a302fd23651ba357a97181552c5d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：陈永胜,章宇,刘奕铁",
          time: "上映时间：2022-02-01",
          score: ["9.", "5"]
        },
        {
          id: 4,
          ranking: 4,
          name: "熊出没·重返地球",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd68decdb12b53592351a40d2bc6da3453.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：张秉君,张伟,谭笑",
          time: "上映时间：2022-02-01",
          score: ["9.", "4"]
        },
        {
          id: 5,
          ranking: 5,
          name: "我们的冬奥",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69a87a3389ab407ac971b04da28b5ef8.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：冰墩墩,雪容融,刘思奇",
          time: "上映时间：2022-02-19",
          score: ["9.", "3"]
        },
        {
          id: 6,
          ranking: 6,
          name: "喜羊羊与灰太狼之筐出未来",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd6be339338e5bcddd27c26c671a1e1972.png?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：祖晴,张琳,邓玉婷",
          time: "上映时间：2022-02-01",
          score: ["9.", "3"]
        },
        {
          id: 7,
          ranking: 7,
          name: "小虎墩大英雄",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd68d7a3f2af2aa230f42534752867f010.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：沈念慈,张健儒,梁达伟",
          time: "上映时间：2022-02-01",
          score: ["9.", "3"]
        },
        {
          id: 8,
          ranking: 8,
          name: "这个杀手不太冷静",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69a9abb12f0ee7e12418459419ad84a6.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：马丽,魏翔,陈明昊",
          time: "上映时间：2022-02-01",
          score: ["9.", "1"]
        },
        {
          id: 9,
          ranking: 9,
          name: "我心飞扬",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd6be7a30fa51ba5015279c588a148728a.png?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：孟美岐,夏雨,裴魁山",
          time: "上映时间：2022-02-25",
          score: ["9.", "1"]
        },
        {
          id: 10,
          ranking: 10,
          name: "花束般的恋爱",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd6bec7e7e1030cb12da89b6f158d2d3ce.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：有村架纯,菅田将晖,细田佳央太",
          time: "上映时间：2022-02-22",
          score: ["9.", "0"]
        }
      ]
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
    }
  },
  created() {
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
  color: #ffb400;
}
</style>
