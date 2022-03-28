<template>
  <div class="expect">
    <div class="updateTitle">
      <p class="updateTime">
        {{ time }}
        <span class="title">已更新</span>
      </p>
      <p class="listRule">
        榜单规则：将昨日国内待映影片，按照之前30天的想看数总量从高到低排列取前50名，每天上午10点更新。相关数据来源于“猫眼电影库”。
      </p>
      <dl class="boardWrapper">
        <dd
          class="boardItem"
          v-for="(item, value) in tableData.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )"
          :key="value"
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
              <p class="month-wish">
                本月新增想看：<span>{{ item.monthWish }}</span
                >人
              </p>
              <p class="total-wish">总想看：{{ item.totalWish }}人</p>
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
  data() {
    return {
      time: null,
      currentPage: 1,
      pageSize: 10,
      totalNum: 50,
      tableData: [
        {
          id: 11,
          ranking: 1,
          name: "神奇动物:邓布利多之谜",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69ad7cdddd2368ea330e1cfd760cd4ab.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：埃迪·雷德梅恩,凯瑟琳·沃特森,裘德·洛",
          time: "上映时间：2022-04-08",
          monthWish: 47970,
          totalWish: 80188,
        },
        {
          id: 12,
          ranking: 2,
          name: "人生大事",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69a02fc7e57e2e5bc9f015f0baa6a6b2.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：朱一龙,杨恩又,王戈",
          time: "上映时间：2022-04-02",
          monthWish: 99908,
          totalWish: 155229,
        },
        {
          id: 13,
          ranking: 3,
          name: "月球陨落",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：哈莉·贝瑞,帕特里克·威尔森,约翰·布莱德利",
          time: "上映时间：2022-03-25",
          monthWish: 93344,
          totalWish: 108099,
        },
        {
          id: 14,
          ranking: 4,
          name: "一周的朋友",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69a3389237a35395b62cc301f0ca66ff.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：赵今麦,林一,沈月",
          time: "上映时间：2022-04-02",
          monthWish: 68470,
          totalWish: 119632,
        },
        {
          id: 15,
          ranking: 5,
          name: "回廊亭",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69ab129235bf1c6960d3380a950d6ebc.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：任素汐,刘敏涛,李传缨",
          time: "上映时间：2022",
          monthWish: 61952,
          totalWish: 145449,
        },
        {
          id: 16,
          ranking: 6,
          name: "我是真的讨厌异地恋",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69a92392306d6925761434763519a63c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：任敏,辛云来,李孝谦",
          time: "上映时间：2022-04-29",
          monthWish: 60331,
          totalWish: 98945,
        },
        {
          id: 17,
          ranking: 7,
          name: "被害人",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad52fc69f2abe2a030ca982cd661a8e5cf.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：冯绍峰,陶虹,黄觉",
          time: "上映时间：2022-04-02",
          monthWish: 53458,
          totalWish: 94724,
        },
        {
          id: 18,
          ranking: 8,
          name: "精灵旅社4：变身大冒险",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd69ad7c51b71f71789bba71e041d3018a.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：布赖恩·哈尔,安迪·萨姆伯格,赛琳娜·戈麦斯",
          time: "上映时间：2022-04-03",
          monthWish: 52274,
          totalWish: 76776,
        },
        {
          id: 19,
          ranking: 9,
          name: "哥,你好",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd68d0fa51b7a352c9517ce57975ddc06c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：马丽,常远,魏翔",
          time: "上映时间：2022-04-30",
          monthWish: 50011,
          totalWish: 86442,
        },
        {
          id: 20,
          ranking: 10,
          name: "你是我的春天",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69a923b12e7aa395b69676b7c08ace44.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：周冬雨,尹昉,宋小宝",
          time: "上映时间：2022-04-02",
          monthWish: 42885,
          totalWish: 45880,
        },
        {
          id: 21,
          ranking: 11,
          name: "神探大战",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd69a9ab51bf2aa0faf04e688fd95d9cf9.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：刘青云,蔡卓妍,林峯",
          time: "上映时间：2022-04-02",
          monthWish: 40891,
          totalWish: 42261,
        },
        {
          id: 22,
          ranking: 12,
          name: "检察风云",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad52fb5351becd88ea32788b202758a8be.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：黄景瑜,白百何,王丽坤",
          time: "上映时间：2022-04-30",
          monthWish: 32940,
          totalWish: 64851,
        },
        {
          id: 23,
          ranking: 13,
          name: "暗恋·橘生淮南",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad52fbe10fab12d7df590e96f92d9fc532.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：张雪迎,辛云来,伍嘉成",
          time: "上映时间：2022-05-20",
          monthWish: 31221,
          totalWish: 74925,
        },
        {
          id: 24,
          ranking: 14,
          name: "超能一家人",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad52fc6951b67cbe7aa9e33bddb10275de.png?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：艾伦,沈腾,陶慧",
          time: "上映时间：2022",
          monthWish: 25636,
          totalWish: 545779,
        },
        {
          id: 25,
          ranking: 15,
          name: "断·桥",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad52f2c951b51ba06d6240be0cbf8812f0.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：马思纯,王俊凯,范伟",
          time: "上映时间：2022-06-02",
          monthWish: 24546,
          totalWish: 179359,
        },
        {
          id: 26,
          ranking: 16,
          name: "独行月球",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5927a302f87a951baee944f98892b080.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：沈腾,马丽",
          time: "上映时间：2022",
          monthWish: 21026,
          totalWish: 177798,
        },
        {
          id: 27,
          ranking: 17,
          name: "巨齿鲨2：深渊",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd6be030dddbe2a8ea33f88aa2c6e784f2.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：吴京,杰森•斯坦森,蔡书雅",
          time: "上映时间：2023",
          monthWish: 16638,
          totalWish: 17329,
        },
        {
          id: 28,
          ranking: 18,
          name: "保你平安",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd69a5bf923cbae300b3c6773718770c4d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：大鹏,李雪琴,尹正",
          time: "上映时间：2022-04-29",
          monthWish: 14826,
          totalWish: 16062,
        },
        {
          id: 29,
          ranking: 19,
          name: "暗杀风暴",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd68d11eddde7aabe2a448f95e847d36a3.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：张智霖,古天乐,吴镇宇",
          time: "上映时间：2022",
          monthWish: 14026,
          totalWish: 124872,
        },
        {
          id: 30,
          ranking: 20,
          name: "无名",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad5927a30fa8d33b8605f671206f584437.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：梁朝伟,王一博",
          time: "上映时间：2022",
          monthWish: 13799,
          totalWish: 85806,
        },
        {
          id: 31,
          ranking: 21,
          name: "人间世",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69abe15bf11e5030c7fe2299da39cf94.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：许烈英,王思蓉,刘子涵",
          time: "上映时间：2022-04-15",
          monthWish: 12886,
          totalWish: 26958,
        },
        {
          id: 32,
          ranking: 22,
          name: "卧鼠藏虫",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd69a7e151bb8603139aacae59b6c9ff45.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：文松,贾冰,张晨光",
          time: "上映时间：2022-03-25",
          monthWish: 11399,
          totalWish: 25630,
        },
        {
          id: 33,
          ranking: 23,
          name: "维和防暴队",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5927a32ff21f07a3576f32fb05446fc7.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：黄景瑜,王一博,钟楚曦",
          time: "上映时间：2022-03-25",
          monthWish: 10331,
          totalWish: 132726,
        },
        {
          id: 34,
          ranking: 24,
          name: "最后的真相",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5927a32ff339e7df539e811577c25513.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：黄晓明,闫妮,涂们",
          time: "上映时间：2022-04-02",
          monthWish: 10073,
          totalWish: 48104,
        },
        {
          id: 35,
          ranking: 25,
          name: "可不可以不要离开我",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd68dc69f2ab12d50c8c17692a66fa9e07.png?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：陈乔恩,贾冰,卢靖姗",
          time: "上映时间：2022",
          monthWish: 10047,
          totalWish: 20481,
        },
        {
          id: 36,
          ranking: 26,
          name: "遇见你",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd69ab12ddd300bcbaecff15130dd11949.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：李汶翰,徐若晗,王博文",
          time: "上映时间：2022-05-01",
          monthWish: 7805,
          totalWish: 8666,
        },
        {
          id: 37,
          ranking: 27,
          name: "边缘行者",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd69ab12ddd281ed23cd966d6a14e48412.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：任贤齐,任达华,方中信",
          time: "上映时间：2022-04-15",
          monthWish: 6813,
          totalWish: 6898,
        },
        {
          id: 38,
          ranking: 28,
          name: "大圣降妖",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad5927a302f8d339235cb7f75bceb1bfed.png?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：张杰楠,彭珍珠,李铖",
          time: "上映时间：2022-06-01",
          monthWish: 6310,
          totalWish: 24573,
        },
        {
          id: 39,
          ranking: 29,
          name: "错乱空间",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69addd51b925706d60fda538846a3d8d.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：付然,葛恒瑞,李北岳",
          time: "上映时间：2022-03-25",
          monthWish: 6133,
          totalWish: 10673,
        },
        {
          id: 40,
          ranking: 30,
          name: "平原上的火焰",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad52ff2a80757e207ac50871b7473dba19.png?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：周冬雨,刘昊然,梅婷",
          time: "上映时间：2022",
          monthWish: 5745,
          totalWish: 317612,
        },
        {
          id: 41,
          ranking: 31,
          name: "猪猪侠大电影·海洋日记",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd69a5bfc7e030c0faf05e20812024111c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：陆双,谢蔚,吉莹",
          time: "上映时间：2022-04-30",
          monthWish: 5640,
          totalWish: 11121,
        },
        {
          id: 42,
          ranking: 32,
          name: "迷你世界之觉醒",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd6beb12dddbe2aaf33514706d67436f52.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：何春,花信,万宝鹿",
          time: "上映时间：2022-04-30",
          monthWish: 5080,
          totalWish: 8392,
        },
        {
          id: 43,
          ranking: 33,
          name: "学爸",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd68d8ea923c7edf0ee3aeaefbb953b77c.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：黄渤,闫妮,张钧甯",
          time: "上映时间：2022-07-08",
          monthWish: 4699,
          totalWish: 12310,
        },
        {
          id: 44,
          ranking: 34,
          name: "龙马精神",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd68d7a351b8077c9fdc7cb3bf3882a7b6.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：成龙,刘浩存,郭麒麟",
          time: "上映时间：2022-12-31",
          monthWish: 4627,
          totalWish: 38856,
        },
        {
          id: 45,
          ranking: 35,
          name: "明日战记",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd68d7a351b8077c9fdc7cb3bf3882a7b6.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：古天乐,刘青云,朱监然",
          time: "上映时间：2022",
          monthWish: 4368,
          totalWish: 62632,
        },
        {
          id: 46,
          ranking: 36,
          name: "燃冬",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd6be33951b0e1307acc8f727a3ead5e34.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：周冬雨,刘昊然,屈楚萧",
          time: "上映时间：2022",
          monthWish: 4124,
          totalWish: 9704,
        },
        {
          id: 47,
          ranking: 37,
          name: "天珠传奇",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad59253792339dd300b0d537c58ea8e54f.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：洪金宝,彭于晏,钱小豪",
          time: "上映时间：2022-05",
          monthWish: 4102,
          totalWish: 33446,
        },
        {
          id: 48,
          ranking: 38,
          name: "新灰姑娘",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad5925372ff50c8281eee25cc56e33b4a6.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：Cassandra Morris,Kristen Day,Chris Niosi",
          time: "上映时间：2018-10-01",
          monthWish: 3853,
          totalWish: 27991,
        },
        {
          id: 49,
          ranking: 39,
          name: "外太空的莫扎特",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad52fc7e5bfddd27a353aa024823f3c035.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：黄渤,荣梓杉",
          time: "上映时间：2022",
          monthWish: 3847,
          totalWish: 81799,
        },
        {
          id: 50,
          ranking: 40,
          name: "猎毒",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5927a3c7e0faf57e21eeadfc03fc2953.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：杨紫,王千源,尚语贤",
          time: "上映时间：2022",
          monthWish: 3752,
          totalWish: 17496,
        },
        {
          id: 51,
          ranking: 41,
          name: "念念相忘",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad52fecd2ff87a99ab4745691bae9e47ce.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-1",
          actor: "主演：刘浩存,宋威龙",
          time: "上映时间：2022-08-04",
          monthWish: 3563,
          totalWish: 21487,
        },
        {
          id: 52,
          ranking: 42,
          name: "我是霸王龙",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69ab1251b9257e7aa9df622f9deb1614.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-2",
          actor: "主演：依诺,林浪,温池禹",
          time: "上映时间：2022-04-30",
          monthWish: 3518,
          totalWish: 31743,
        },
        {
          id: 53,
          ranking: 43,
          name: "妈妈",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd69ad7c51b02ff338f2b148275c79f3a4.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-3",
          actor: "主演：吴彦姝,奚美娟",
          time: "上映时间：2022-05-08",
          monthWish: 2837,
          totalWish: 8298,
        },
        {
          id: 54,
          ranking: 44,
          name: "隐秘的世界",
          hotImg:
            "https://p0.pipi.cn/mmdb/25bfd69ad7c51b02ff338f2b148275c79f3a4.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-4",
          actor: "主演：韩庚,王千源,张馨予",
          time: "上映时间：2022",
          monthWish: 2509,
          totalWish: 10103,
        },
        {
          id: 55,
          ranking: 45,
          name: "迷失1231",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd6be7e106dd7c3030c5a486b525abf264.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-5",
          actor: "主演：孙飞翔,申容泽,郭蓉",
          time: "上映时间：2022-04-15",
          monthWish: 2208,
          totalWish: 2397,
        },
        {
          id: 56,
          ranking: 46,
          name: "新灰姑娘2",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd69a02f51bc6963ba3f07c7654d1b61f9.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-6",
          actor: "主演：蒋丽,邵敏佳,赵路",
          time: "上映时间：2022-06-01",
          monthWish: 2204,
          totalWish: 4355,
        },
        {
          id: 57,
          ranking: 47,
          name: "搜救",
          hotImg:
            "	https://p0.pipi.cn/mmdb/d2dad5927a302f16bd8ea3141512d01e03b50.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-7",
          actor: "主演：甄子丹,韩雪,贾冰",
          time: "上映时间：2022",
          monthWish: 2114,
          totalWish: 8089,
        },
        {
          id: 58,
          ranking: 48,
          name: "红毯先生",
          hotImg:
            "https://p0.pipi.cn/mmdb/d2dad5927a35bfc7ed281e36e77810b888968.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-8",
          actor: "主演：刘德华,瑞玛席丹,单立文",
          time: "上映时间：2023",
          monthWish: 1938,
          totalWish: 2289,
        },
        {
          id: 59,
          ranking: 49,
          name: "遇见你之后",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd69a2ff0fabe12ddd2f997fd6872194f1.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-9",
          actor: "主演：黄尧,刘迅,付美",
          time: "上映时间：2022-04-15",
          monthWish: 1891,
          totalWish: 1919,
        },
        {
          id: 60,
          ranking: 50,
          name: "隐入尘烟",
          hotImg:
            "	https://p0.pipi.cn/mmdb/25bfd68d030f2ac7ed07acf130b714d7ccd79.jpg?imageView2/1/w/160/h/220",
          boardIndex: "board-index board-index-10",
          actor: "主演：海清,武仁林",
          time: "上映时间：2022",
          monthWish: 1847,
          totalWish: 3904,
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
    handleSizeChange(val) {
      this.pageSize = val; //动态改变
    },
    handleCurrentChange(val) {
      this.currentPage = val; //动态改变
    },
  },
  created() {
    this.timeFn();
    this.totalNum = this.tableData.length;
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
.score-num {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.month-wish {
  font-size: 16px;
  color: #ffb400;
}

.month-wish span {
  font-size: 26px;
  font-weight: 700;
}
.total-wish {
  margin-top: 8px;
  font-size: 16px;
  color: #999;
}
.pagin {
  display: flex;
  justify-content: center;
}
</style>
