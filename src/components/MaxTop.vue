<template>
  <div>
    <div class="updateTitle">
      <p class="updateTime">
        {{ time }}
        <span class="title">已更新</span>
      </p>
      <p class="listRule">
        榜单规则：将猫眼电影库中的经典影片，按照评分和评分人数从高到低综合排序取前100名，每天上午10点更新。相关数据来源于“猫眼电影库”。
      </p>
      <dl class="boardWrapper">
        <dd
          class="boardItem"
          v-for="(item, value) in hotlist.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )"
          :key="item.id"
        >
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
              <i class="int">{{ item.score[0] }}</i>
              <i class="fraction">{{ item.score[1] }}</i>
            </div>
          </div>
        </dd>
      </dl>
    </div>
    <div class="pagin">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev,pager, next"
        :total="totalNum"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaxTop",
  data() {
    return {
      time: null,
      currentPage: 1,
      pageSize: 10,
      totalNum: 50,
      hotlist: [
        {
          id: 81,
          name: "我不是药神",
          ranking: 1,
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad59253751bd236338fa5bd5a27c710413.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：徐峥,周一围,王传君",
          time: "上映时间：2018-07-05",
          score: ["9.", "6"],
        },
        {
          id: 82,
          name: "肖申克的救赎",
          ranking: 2,
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿",
          time: "上映时间：1994-09-10(加拿大)",
          score: ["9.", "5"],
        },
        {
          id: 83,
          ranking: 3,
          name: "绿皮书",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad59253751b230f21f0818a5bfd4d8679c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：维果·莫腾森,马赫沙拉·阿里,琳达·卡德里尼",
          time: "上映时间：2019-03-01",
          score: ["9.", "5"],
        },
        {
          id: 84,
          ranking: 4,
          name: "海上钢琴师",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2365bf1b63cd25951b722b.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：蒂姆·罗斯,比尔·努恩 ,克兰伦斯·威廉姆斯三世",
          time: "上映时间：2019-11-15",
          score: ["9.", "3"],
        },
        {
          id: 85,
          ranking: 5,
          name: "霸王别姬",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236d7c3c9b6a0b65c4d19d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：张国荣,张丰毅,巩俐",
          time: "上映时间：1993-07-26",
          score: ["9.", "4"],
        },
        {
          id: 86,
          ranking: 6,
          name: "美丽人生",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2367a3507befaed31a5903.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：罗伯托·贝尼尼,朱斯蒂诺·杜拉诺,赛尔乔·比尼·布斯特里克",
          time: "上映时间：2020-01-03",
          score: ["9.", "3"],
        },
        {
          id: 87,
          ranking: 7,
          name: "小偷家族",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5925372ffd7c387a9d01bddad81625c3.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：中川雅也,利利·弗兰克,安藤樱",
          time: "上映时间：2018-08-03",
          score: ["8.", "1"],
        },
        {
          id: 88,
          ranking: 8,
          name: "哪吒之魔童降世",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592537923f0ee07acada3ac59b9f3ffb.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：吕艳婷,囧森瑟夫,瀚墨",
          time: "上映时间：2019-07-26",
          score: ["9.", "6"],
        },
        {
          id: 89,
          ranking: 9,
          name: "这个杀手不太冷",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e13ba3ddd25677b4d70fc45fa.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：让·雷诺,加里·奥德曼,娜塔莉·波特曼",
          time: "上映时间：1994-09-14(法国)",
          score: ["9.", "4"],
        },
        {
          id: 90,
          ranking: 10,
          name: "怦然心动",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592b122ff8d3387a93ccab6036f616c1.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：玛德琳·卡罗尔,卡兰·麦克奥利菲,艾丹·奎因",
          time: "上映时间：2010-07-26(美国)",
          score: ["8.", "9"],
        },
        {
          id: 91,
          name: "我不是药神",
          ranking: 11,
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad59253751bd236338fa5bd5a27c710413.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：徐峥,周一围,王传君",
          time: "上映时间：2018-07-05",
          score: ["9.", "6"],
        },
        {
          id: 92,
          name: "肖申克的救赎",
          ranking: 12,
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿",
          time: "上映时间：1994-09-10(加拿大)",
          score: ["9.", "5"],
        },
        {
          id: 93,
          ranking: 13,
          name: "绿皮书",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad59253751b230f21f0818a5bfd4d8679c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：维果·莫腾森,马赫沙拉·阿里,琳达·卡德里尼",
          time: "上映时间：2019-03-01",
          score: ["9.", "5"],
        },
        {
          id: 94,
          ranking: 14,
          name: "海上钢琴师",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2365bf1b63cd25951b722b.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：蒂姆·罗斯,比尔·努恩 ,克兰伦斯·威廉姆斯三世",
          time: "上映时间：2019-11-15",
          score: ["9.", "3"],
        },
        {
          id: 95,
          ranking: 15,
          name: "霸王别姬",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236d7c3c9b6a0b65c4d19d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：张国荣,张丰毅,巩俐",
          time: "上映时间：1993-07-26",
          score: ["9.", "4"],
        },
        {
          id: 96,
          ranking: 16,
          name: "美丽人生",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2367a3507befaed31a5903.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：罗伯托·贝尼尼,朱斯蒂诺·杜拉诺,赛尔乔·比尼·布斯特里克",
          time: "上映时间：2020-01-03",
          score: ["9.", "3"],
        },
        {
          id: 97,
          ranking: 17,
          name: "小偷家族",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5925372ffd7c387a9d01bddad81625c3.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：中川雅也,利利·弗兰克,安藤樱",
          time: "上映时间：2018-08-03",
          score: ["8.", "1"],
        },
        {
          id: 98,
          ranking: 18,
          name: "哪吒之魔童降世",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592537923f0ee07acada3ac59b9f3ffb.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：吕艳婷,囧森瑟夫,瀚墨",
          time: "上映时间：2019-07-26",
          score: ["9.", "6"],
        },
        {
          id: 99,
          ranking: 19,
          name: "这个杀手不太冷",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e13ba3ddd25677b4d70fc45fa.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：让·雷诺,加里·奥德曼,娜塔莉·波特曼",
          time: "上映时间：1994-09-14(法国)",
          score: ["9.", "4"],
        },
        {
          id: 100,
          ranking: 20,
          name: "怦然心动",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592b122ff8d3387a93ccab6036f616c1.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：玛德琳·卡罗尔,卡兰·麦克奥利菲,艾丹·奎因",
          time: "上映时间：2010-07-26(美国)",
          score: ["8.", "9"],
        },
        {
          id: 101,
          name: "我不是药神",
          ranking: 21,
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad59253751bd236338fa5bd5a27c710413.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：徐峥,周一围,王传君",
          time: "上映时间：2018-07-05",
          score: ["9.", "6"],
        },
        {
          id: 102,
          name: "肖申克的救赎",
          ranking: 22,
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿",
          time: "上映时间：1994-09-10(加拿大)",
          score: ["9.", "5"],
        },
        {
          id: 103,
          ranking: 23,
          name: "绿皮书",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad59253751b230f21f0818a5bfd4d8679c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：维果·莫腾森,马赫沙拉·阿里,琳达·卡德里尼",
          time: "上映时间：2019-03-01",
          score: ["9.", "5"],
        },
        {
          id: 104,
          ranking: 24,
          name: "海上钢琴师",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2365bf1b63cd25951b722b.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：蒂姆·罗斯,比尔·努恩 ,克兰伦斯·威廉姆斯三世",
          time: "上映时间：2019-11-15",
          score: ["9.", "3"],
        },
        {
          id: 105,
          ranking: 25,
          name: "霸王别姬",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236d7c3c9b6a0b65c4d19d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：张国荣,张丰毅,巩俐",
          time: "上映时间：1993-07-26",
          score: ["9.", "4"],
        },
        {
          id: 106,
          ranking: 26,
          name: "美丽人生",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2367a3507befaed31a5903.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：罗伯托·贝尼尼,朱斯蒂诺·杜拉诺,赛尔乔·比尼·布斯特里克",
          time: "上映时间：2020-01-03",
          score: ["9.", "3"],
        },
        {
          id: 107,
          ranking: 27,
          name: "小偷家族",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5925372ffd7c387a9d01bddad81625c3.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：中川雅也,利利·弗兰克,安藤樱",
          time: "上映时间：2018-08-03",
          score: ["8.", "1"],
        },
        {
          id: 108,
          ranking: 28,
          name: "哪吒之魔童降世",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592537923f0ee07acada3ac59b9f3ffb.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：吕艳婷,囧森瑟夫,瀚墨",
          time: "上映时间：2019-07-26",
          score: ["9.", "6"],
        },
        {
          id: 109,
          ranking: 29,
          name: "这个杀手不太冷",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e13ba3ddd25677b4d70fc45fa.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：让·雷诺,加里·奥德曼,娜塔莉·波特曼",
          time: "上映时间：1994-09-14(法国)",
          score: ["9.", "4"],
        },
        {
          id: 110,
          ranking: 30,
          name: "怦然心动",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592b122ff8d3387a93ccab6036f616c1.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：玛德琳·卡罗尔,卡兰·麦克奥利菲,艾丹·奎因",
          time: "上映时间：2010-07-26(美国)",
          score: ["8.", "9"],
        },
        {
          id: 111,
          name: "我不是药神",
          ranking: 31,
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad59253751bd236338fa5bd5a27c710413.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：徐峥,周一围,王传君",
          time: "上映时间：2018-07-05",
          score: ["9.", "6"],
        },
        {
          id: 112,
          name: "肖申克的救赎",
          ranking: 32,
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿",
          time: "上映时间：1994-09-10(加拿大)",
          score: ["9.", "5"],
        },
        {
          id: 113,
          ranking: 33,
          name: "绿皮书",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad59253751b230f21f0818a5bfd4d8679c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：维果·莫腾森,马赫沙拉·阿里,琳达·卡德里尼",
          time: "上映时间：2019-03-01",
          score: ["9.", "5"],
        },
        {
          id: 114,
          ranking: 34,
          name: "海上钢琴师",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2365bf1b63cd25951b722b.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：蒂姆·罗斯,比尔·努恩 ,克兰伦斯·威廉姆斯三世",
          time: "上映时间：2019-11-15",
          score: ["9.", "3"],
        },
        {
          id: 115,
          ranking: 35,
          name: "霸王别姬",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236d7c3c9b6a0b65c4d19d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：张国荣,张丰毅,巩俐",
          time: "上映时间：1993-07-26",
          score: ["9.", "4"],
        },
        {
          id: 116,
          ranking: 36,
          name: "美丽人生",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2367a3507befaed31a5903.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：罗伯托·贝尼尼,朱斯蒂诺·杜拉诺,赛尔乔·比尼·布斯特里克",
          time: "上映时间：2020-01-03",
          score: ["9.", "3"],
        },
        {
          id: 117,
          ranking: 37,
          name: "小偷家族",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5925372ffd7c387a9d01bddad81625c3.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：中川雅也,利利·弗兰克,安藤樱",
          time: "上映时间：2018-08-03",
          score: ["8.", "1"],
        },
        {
          id: 118,
          ranking: 38,
          name: "哪吒之魔童降世",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592537923f0ee07acada3ac59b9f3ffb.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：吕艳婷,囧森瑟夫,瀚墨",
          time: "上映时间：2019-07-26",
          score: ["9.", "6"],
        },
        {
          id: 119,
          ranking: 39,
          name: "这个杀手不太冷",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e13ba3ddd25677b4d70fc45fa.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：让·雷诺,加里·奥德曼,娜塔莉·波特曼",
          time: "上映时间：1994-09-14(法国)",
          score: ["9.", "4"],
        },
        {
          id: 120,
          ranking: 40,
          name: "怦然心动",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592b122ff8d3387a93ccab6036f616c1.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：玛德琳·卡罗尔,卡兰·麦克奥利菲,艾丹·奎因",
          time: "上映时间：2010-07-26(美国)",
          score: ["8.", "9"],
        },
        {
          id: 121,
          name: "我不是药神",
          ranking: 41,
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad59253751bd236338fa5bd5a27c710413.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：徐峥,周一围,王传君",
          time: "上映时间：2018-07-05",
          score: ["9.", "6"],
        },
        {
          id: 122,
          name: "肖申克的救赎",
          ranking: 42,
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿",
          time: "上映时间：1994-09-10(加拿大)",
          score: ["9.", "5"],
        },
        {
          id: 123,
          ranking: 43,
          name: "绿皮书",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad59253751b230f21f0818a5bfd4d8679c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：维果·莫腾森,马赫沙拉·阿里,琳达·卡德里尼",
          time: "上映时间：2019-03-01",
          score: ["9.", "5"],
        },
        {
          id: 124,
          ranking: 44,
          name: "海上钢琴师",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2365bf1b63cd25951b722b.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：蒂姆·罗斯,比尔·努恩 ,克兰伦斯·威廉姆斯三世",
          time: "上映时间：2019-11-15",
          score: ["9.", "3"],
        },
        {
          id: 125,
          ranking: 45,
          name: "霸王别姬",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236d7c3c9b6a0b65c4d19d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：张国荣,张丰毅,巩俐",
          time: "上映时间：1993-07-26",
          score: ["9.", "4"],
        },
        {
          id: 126,
          ranking: 46,
          name: "美丽人生",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2367a3507befaed31a5903.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：罗伯托·贝尼尼,朱斯蒂诺·杜拉诺,赛尔乔·比尼·布斯特里克",
          time: "上映时间：2020-01-03",
          score: ["9.", "3"],
        },
        {
          id: 127,
          ranking: 47,
          name: "小偷家族",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5925372ffd7c387a9d01bddad81625c3.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：中川雅也,利利·弗兰克,安藤樱",
          time: "上映时间：2018-08-03",
          score: ["8.", "1"],
        },
        {
          id: 128,
          ranking: 48,
          name: "哪吒之魔童降世",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592537923f0ee07acada3ac59b9f3ffb.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：吕艳婷,囧森瑟夫,瀚墨",
          time: "上映时间：2019-07-26",
          score: ["9.", "6"],
        },
        {
          id: 129,
          ranking: 49,
          name: "这个杀手不太冷",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e13ba3ddd25677b4d70fc45fa.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：让·雷诺,加里·奥德曼,娜塔莉·波特曼",
          time: "上映时间：1994-09-14(法国)",
          score: ["9.", "4"],
        },
        {
          id: 130,
          ranking: 50,
          name: "怦然心动",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592b122ff8d3387a93ccab6036f616c1.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：玛德琳·卡罗尔,卡兰·麦克奥利菲,艾丹·奎因",
          time: "上映时间：2010-07-26(美国)",
          score: ["8.", "9"],
        },
        {
          id: 131,
          name: "我不是药神",
          ranking: 51,
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad59253751bd236338fa5bd5a27c710413.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：徐峥,周一围,王传君",
          time: "上映时间：2018-07-05",
          score: ["9.", "6"],
        },
        {
          id: 132,
          name: "肖申克的救赎",
          ranking: 52,
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿",
          time: "上映时间：1994-09-10(加拿大)",
          score: ["9.", "5"],
        },
        {
          id: 133,
          ranking: 53,
          name: "绿皮书",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad59253751b230f21f0818a5bfd4d8679c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：维果·莫腾森,马赫沙拉·阿里,琳达·卡德里尼",
          time: "上映时间：2019-03-01",
          score: ["9.", "5"],
        },
        {
          id: 134,
          ranking: 54,
          name: "海上钢琴师",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2365bf1b63cd25951b722b.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：蒂姆·罗斯,比尔·努恩 ,克兰伦斯·威廉姆斯三世",
          time: "上映时间：2019-11-15",
          score: ["9.", "3"],
        },
        {
          id: 135,
          ranking: 55,
          name: "霸王别姬",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236d7c3c9b6a0b65c4d19d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：张国荣,张丰毅,巩俐",
          time: "上映时间：1993-07-26",
          score: ["9.", "4"],
        },
        {
          id: 136,
          ranking: 56,
          name: "美丽人生",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2367a3507befaed31a5903.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：罗伯托·贝尼尼,朱斯蒂诺·杜拉诺,赛尔乔·比尼·布斯特里克",
          time: "上映时间：2020-01-03",
          score: ["9.", "3"],
        },
        {
          id: 137,
          ranking: 57,
          name: "小偷家族",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5925372ffd7c387a9d01bddad81625c3.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：中川雅也,利利·弗兰克,安藤樱",
          time: "上映时间：2018-08-03",
          score: ["8.", "1"],
        },
        {
          id: 138,
          ranking: 58,
          name: "哪吒之魔童降世",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592537923f0ee07acada3ac59b9f3ffb.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：吕艳婷,囧森瑟夫,瀚墨",
          time: "上映时间：2019-07-26",
          score: ["9.", "6"],
        },
        {
          id: 139,
          ranking: 59,
          name: "这个杀手不太冷",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e13ba3ddd25677b4d70fc45fa.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：让·雷诺,加里·奥德曼,娜塔莉·波特曼",
          time: "上映时间：1994-09-14(法国)",
          score: ["9.", "4"],
        },
        {
          id: 140,
          ranking: 60,
          name: "怦然心动",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592b122ff8d3387a93ccab6036f616c1.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：玛德琳·卡罗尔,卡兰·麦克奥利菲,艾丹·奎因",
          time: "上映时间：2010-07-26(美国)",
          score: ["8.", "9"],
        },
        {
          id: 141,
          name: "我不是药神",
          ranking: 61,
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad59253751bd236338fa5bd5a27c710413.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：徐峥,周一围,王传君",
          time: "上映时间：2018-07-05",
          score: ["9.", "6"],
        },
        {
          id: 142,
          name: "肖申克的救赎",
          ranking: 62,
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿",
          time: "上映时间：1994-09-10(加拿大)",
          score: ["9.", "5"],
        },
        {
          id: 143,
          ranking: 63,
          name: "绿皮书",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad59253751b230f21f0818a5bfd4d8679c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：维果·莫腾森,马赫沙拉·阿里,琳达·卡德里尼",
          time: "上映时间：2019-03-01",
          score: ["9.", "5"],
        },
        {
          id: 144,
          ranking: 64,
          name: "海上钢琴师",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2365bf1b63cd25951b722b.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：蒂姆·罗斯,比尔·努恩 ,克兰伦斯·威廉姆斯三世",
          time: "上映时间：2019-11-15",
          score: ["9.", "3"],
        },
        {
          id: 145,
          ranking: 65,
          name: "霸王别姬",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236d7c3c9b6a0b65c4d19d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：张国荣,张丰毅,巩俐",
          time: "上映时间：1993-07-26",
          score: ["9.", "4"],
        },
        {
          id: 146,
          ranking: 66,
          name: "美丽人生",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2367a3507befaed31a5903.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：罗伯托·贝尼尼,朱斯蒂诺·杜拉诺,赛尔乔·比尼·布斯特里克",
          time: "上映时间：2020-01-03",
          score: ["9.", "3"],
        },
        {
          id: 147,
          ranking: 67,
          name: "小偷家族",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5925372ffd7c387a9d01bddad81625c3.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：中川雅也,利利·弗兰克,安藤樱",
          time: "上映时间：2018-08-03",
          score: ["8.", "1"],
        },
        {
          id: 148,
          ranking: 68,
          name: "哪吒之魔童降世",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592537923f0ee07acada3ac59b9f3ffb.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：吕艳婷,囧森瑟夫,瀚墨",
          time: "上映时间：2019-07-26",
          score: ["9.", "6"],
        },
        {
          id: 149,
          ranking: 69,
          name: "这个杀手不太冷",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e13ba3ddd25677b4d70fc45fa.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：让·雷诺,加里·奥德曼,娜塔莉·波特曼",
          time: "上映时间：1994-09-14(法国)",
          score: ["9.", "4"],
        },
        {
          id: 150,
          ranking: 70,
          name: "怦然心动",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592b122ff8d3387a93ccab6036f616c1.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：玛德琳·卡罗尔,卡兰·麦克奥利菲,艾丹·奎因",
          time: "上映时间：2010-07-26(美国)",
          score: ["8.", "9"],
        },
        {
          id: 151,
          name: "我不是药神",
          ranking: 71,
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad59253751bd236338fa5bd5a27c710413.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：徐峥,周一围,王传君",
          time: "上映时间：2018-07-05",
          score: ["9.", "6"],
        },
        {
          id: 152,
          name: "肖申克的救赎",
          ranking: 72,
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿",
          time: "上映时间：1994-09-10(加拿大)",
          score: ["9.", "5"],
        },
        {
          id: 153,
          ranking: 73,
          name: "绿皮书",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad59253751b230f21f0818a5bfd4d8679c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：维果·莫腾森,马赫沙拉·阿里,琳达·卡德里尼",
          time: "上映时间：2019-03-01",
          score: ["9.", "5"],
        },
        {
          id: 154,
          ranking: 74,
          name: "海上钢琴师",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2365bf1b63cd25951b722b.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：蒂姆·罗斯,比尔·努恩 ,克兰伦斯·威廉姆斯三世",
          time: "上映时间：2019-11-15",
          score: ["9.", "3"],
        },
        {
          id: 155,
          ranking: 75,
          name: "霸王别姬",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236d7c3c9b6a0b65c4d19d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：张国荣,张丰毅,巩俐",
          time: "上映时间：1993-07-26",
          score: ["9.", "4"],
        },
        {
          id: 156,
          ranking: 76,
          name: "美丽人生",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2367a3507befaed31a5903.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：罗伯托·贝尼尼,朱斯蒂诺·杜拉诺,赛尔乔·比尼·布斯特里克",
          time: "上映时间：2020-01-03",
          score: ["9.", "3"],
        },
        {
          id: 157,
          ranking: 77,
          name: "小偷家族",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5925372ffd7c387a9d01bddad81625c3.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：中川雅也,利利·弗兰克,安藤樱",
          time: "上映时间：2018-08-03",
          score: ["8.", "1"],
        },
        {
          id: 158,
          ranking: 78,
          name: "哪吒之魔童降世",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592537923f0ee07acada3ac59b9f3ffb.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：吕艳婷,囧森瑟夫,瀚墨",
          time: "上映时间：2019-07-26",
          score: ["9.", "6"],
        },
        {
          id: 159,
          ranking: 79,
          name: "这个杀手不太冷",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e13ba3ddd25677b4d70fc45fa.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：让·雷诺,加里·奥德曼,娜塔莉·波特曼",
          time: "上映时间：1994-09-14(法国)",
          score: ["9.", "4"],
        },
        {
          id: 160,
          ranking: 80,
          name: "怦然心动",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592b122ff8d3387a93ccab6036f616c1.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：玛德琳·卡罗尔,卡兰·麦克奥利菲,艾丹·奎因",
          time: "上映时间：2010-07-26(美国)",
          score: ["8.", "9"],
        },
        {
          id: 161,
          name: "我不是药神",
          ranking: 81,
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad59253751bd236338fa5bd5a27c710413.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：徐峥,周一围,王传君",
          time: "上映时间：2018-07-05",
          score: ["9.", "6"],
        },
        {
          id: 162,
          name: "肖申克的救赎",
          ranking: 82,
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿",
          time: "上映时间：1994-09-10(加拿大)",
          score: ["9.", "5"],
        },
        {
          id: 163,
          ranking: 83,
          name: "绿皮书",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad59253751b230f21f0818a5bfd4d8679c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：维果·莫腾森,马赫沙拉·阿里,琳达·卡德里尼",
          time: "上映时间：2019-03-01",
          score: ["9.", "5"],
        },
        {
          id: 164,
          ranking: 84,
          name: "海上钢琴师",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2365bf1b63cd25951b722b.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：蒂姆·罗斯,比尔·努恩 ,克兰伦斯·威廉姆斯三世",
          time: "上映时间：2019-11-15",
          score: ["9.", "3"],
        },
        {
          id: 165,
          ranking: 85,
          name: "霸王别姬",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236d7c3c9b6a0b65c4d19d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：张国荣,张丰毅,巩俐",
          time: "上映时间：1993-07-26",
          score: ["9.", "4"],
        },
        {
          id: 166,
          ranking: 86,
          name: "美丽人生",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2367a3507befaed31a5903.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：罗伯托·贝尼尼,朱斯蒂诺·杜拉诺,赛尔乔·比尼·布斯特里克",
          time: "上映时间：2020-01-03",
          score: ["9.", "3"],
        },
        {
          id: 167,
          ranking: 87,
          name: "小偷家族",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5925372ffd7c387a9d01bddad81625c3.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：中川雅也,利利·弗兰克,安藤樱",
          time: "上映时间：2018-08-03",
          score: ["8.", "1"],
        },
        {
          id: 168,
          ranking: 88,
          name: "哪吒之魔童降世",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592537923f0ee07acada3ac59b9f3ffb.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：吕艳婷,囧森瑟夫,瀚墨",
          time: "上映时间：2019-07-26",
          score: ["9.", "6"],
        },
        {
          id: 169,
          ranking: 89,
          name: "这个杀手不太冷",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e13ba3ddd25677b4d70fc45fa.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：让·雷诺,加里·奥德曼,娜塔莉·波特曼",
          time: "上映时间：1994-09-14(法国)",
          score: ["9.", "4"],
        },
        {
          id: 170,
          ranking: 90,
          name: "怦然心动",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592b122ff8d3387a93ccab6036f616c1.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：玛德琳·卡罗尔,卡兰·麦克奥利菲,艾丹·奎因",
          time: "上映时间：2010-07-26(美国)",
          score: ["8.", "9"],
        },
        {
          id: 171,
          name: "我不是药神",
          ranking: 91,
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad59253751bd236338fa5bd5a27c710413.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：徐峥,周一围,王传君",
          time: "上映时间：2018-07-05",
          score: ["9.", "6"],
        },
        {
          id: 172,
          name: "肖申克的救赎",
          ranking: 92,
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236f2aa1811a8a64794b33.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿",
          time: "上映时间：1994-09-10(加拿大)",
          score: ["9.", "5"],
        },
        {
          id: 173,
          ranking: 93,
          name: "绿皮书",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad59253751b230f21f0818a5bfd4d8679c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：维果·莫腾森,马赫沙拉·阿里,琳达·卡德里尼",
          time: "上映时间：2019-03-01",
          score: ["9.", "5"],
        },
        {
          id: 174,
          ranking: 94,
          name: "海上钢琴师",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2365bf1b63cd25951b722b.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：蒂姆·罗斯,比尔·努恩 ,克兰伦斯·威廉姆斯三世",
          time: "上映时间：2019-11-15",
          score: ["9.", "3"],
        },
        {
          id: 175,
          ranking: 95,
          name: "霸王别姬",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d236d7c3c9b6a0b65c4d19d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：张国荣,张丰毅,巩俐",
          time: "上映时间：1993-07-26",
          score: ["9.", "4"],
        },
        {
          id: 176,
          ranking: 96,
          name: "美丽人生",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e1d2367a3507befaed31a5903.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：罗伯托·贝尼尼,朱斯蒂诺·杜拉诺,赛尔乔·比尼·布斯特里克",
          time: "上映时间：2020-01-03",
          score: ["9.", "3"],
        },
        {
          id: 177,
          ranking: 97,
          name: "小偷家族",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5925372ffd7c387a9d01bddad81625c3.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：中川雅也,利利·弗兰克,安藤樱",
          time: "上映时间：2018-08-03",
          score: ["8.", "1"],
        },
        {
          id: 178,
          ranking: 98,
          name: "哪吒之魔童降世",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592537923f0ee07acada3ac59b9f3ffb.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：吕艳婷,囧森瑟夫,瀚墨",
          time: "上映时间：2019-07-26",
          score: ["9.", "6"],
        },
        {
          id: 179,
          ranking: 99,
          name: "这个杀手不太冷",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad592c7e7e13ba3ddd25677b4d70fc45fa.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：让·雷诺,加里·奥德曼,娜塔莉·波特曼",
          time: "上映时间：1994-09-14(法国)",
          score: ["9.", "4"],
        },
        {
          id: 180,
          ranking: 100,
          name: "怦然心动",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad592b122ff8d3387a93ccab6036f616c1.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：玛德琳·卡罗尔,卡兰·麦克奥利菲,艾丹·奎因",
          time: "上映时间：2010-07-26(美国)",
          score: ["8.", "9"],
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
      this.time = "2022-03-15";
    },
    handleSizeChange(val) {
      this.pageSize = val; //动态改变
    },
    handleCurrentChange(val) {
      this.currentPage = val; //动态改变
    },
  },
  created() {
    this.timeFn();
    this.totalNum = this.hotlist.length;
  },
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

.pagin {
  display: flex;
  justify-content: center;
}
</style>
