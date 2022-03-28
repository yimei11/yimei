<template>
  <div class="homepage">
    <div class="homewrapper">
      <div class="homebanner">
        <img src="../assets/homeBanner.jpg" alt />
      </div>
      <div class="home-movie">
        <!-- 正在热映 -->
        <div class="movie-header">
          <div class="movie-header-left">
            <div class="movie-header-leftTop">
              <span>正在热播（58部）</span>
              <span>全部</span>
            </div>
            <ul class="movie-header-leftList">
              <li v-for="item in panel" :key="item.id">
                <img :src="item.imgsrc" alt />
                <p>
                  <span>{{item.info}}</span>
                  <span>{{item.score}}</span>
                </p>
                <span>{{item.text}}</span>
              </li>
            </ul>
          </div>
          <div class="movie-header-right">
            <dl>
              <dt>今日票房</dt>
              <div>
                <img
                  src="https://p0.pipi.cn/friday/a5748fcc04224b87ee0df0cb35766bc0.JPG?imageView2/1/w/120/h/80"
                  alt
                />
                <div>
                  <p>神秘海域</p>
                  <p>321.69万</p>
                </div>
              </div>
              <dd v-for="item in boxoffice" :key="item.id">
                <div>
                  <span :class="item.color">{{item.number}}</span>
                  <p>{{item.text}}</p>
                </div>
                <p>{{item.money}}</p>
              </dd>
            </dl>
            <div class="todayInfo">
              <div class="todayInfo-left">
                <p>今日大盘</p>
              </div>
              <div class="todayInfo-right">
                <p>
                  <span>810.0万</span>
                  <span>查看更多</span>
                </p>
                <p>
                  <span>北京时间 08:22:23</span>
                  <span>猫眼专业版实时票房数据</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 即将上映 -->
        <div class="willMovies">
          <div class="movie-header-left">
            <div class="movie-header-leftTop">
              <span>即将上映（95部）</span>
              <span>全部</span>
            </div>
            <ul class="willMovies-list">
              <li v-for="item in willMovies" :key="item.id">
                <div>
                  <img :src="item.imgsrc" alt />
                  <p class="title">{{item.title}}</p>
                  <p class="number">{{item.number}}</p>
                  <p class="preview">
                    <span>{{item.text}}</span>
                    <span>{{item.info}}</span>
                  </p>
                </div>
                <p class="day">{{item.day}}</p>
              </li>
            </ul>
          </div>
          <div class="willMovies-right">
            <div class="besthope">
              <p class="hope-title">
                <span>最受期待</span>
                <span>查看完整榜单</span>
              </p>
              <div class="hope-header">
                <img
                  src="https://p0.pipi.cn/mmdb/25bfd69ad7cdddd2368ea330e1cfd760cd4ab.jpg?imageView2/1/w/140/h/194"
                  alt
                />
                <div>
                  <div>
                    <p class="title">神奇动物:邓不利多之谜</p>
                    <p class="day">上映时间:2022-04-08</p>
                    <p class="number">126268人想看</p>
                  </div>
                </div>
              </div>
              <div class="hope-banner">
                <div>
                  <img
                    src="https://p0.pipi.cn/friday/20717f0b7a8b6b46344e5d9ad37f12b3.jpg?imageView2/1/w/170/h/118"
                    alt
                  />
                  <p>人生大事</p>
                  <span>147602人想看</span>
                </div>
                <div>
                  <img
                    src="https://p0.pipi.cn/friday/7dc2b898e2a0d4aa6391dde4ff0abe00.jpg?imageView2/1/w/170/h/118"
                    alt
                  />
                  <p>月球陨落</p>
                  <span>95819人想看</span>
                </div>
              </div>
              <ul class="hope-list">
                <li v-for="item in hope" :key="item.id">
                  <div>
                    <p class="number">{{item.number}}</p>
                    <p class="text">{{item.text}}</p>
                  </div>
                  <p class="info">{{item.info}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 热播电影 -->
        <div class="hotMovies">
          <div class="hotMovies-left">
            <div class="hotMovies-leftTop">
              <div>
                <p>热播电影</p>
                <ul>
                  <li>爱情</li>
                  <li>喜剧</li>
                  <li>动作</li>
                  <li>恐怖</li>
                  <li>动画</li>
                </ul>
              </div>
              <span>全部</span>
            </div>
            <ul class="hotMovies-leftList">
              <li :class="item.className" v-for="item in hotMovies" :key="item.id">
                <img :src="item.imgsrc" alt />
                <p>
                  <span class="text">{{item.text}}</span>
                  <span class="score">{{item.score}}</span>
                </p>
              </li>
            </ul>
          </div>
          <div class="hotMovies-right">
            <div class="top-title">
              <p>TOP 100</p>
              <span>查看完整榜单</span>
            </div>
            <div class="top-banner">
              <img
                src="https://p0.meituan.net/movie/574c998b534c4354e46e8c0cf89ca76037249.jpg@120w_80h_1e_1c"
                alt
              />
              <div>
                <div>
                  <p>我不是药神</p>
                  <span>9.6分</span>
                </div>
              </div>
            </div>
            <ul class="top-list">
              <li v-for="item in hotList" :key="item.id">
                <div>
                  <p class="number">{{item.number}}</p>
                  <p class="text">{{item.text}}</p>
                </div>
                <p class="score">{{item.score}}</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 热门影人 -->
        <div class="movie-people">
          <div class="movie-peopleWrapper">
            <p>热门影人</p>
            <ul class="movie-peopleList">
              <li>
                <img
                  src="https://p1.meituan.net/moviemachine/0da279bf85e8138ee892fd6ca3218903173789.jpg@120w_72h_1e_1c"
                  alt
                />
                <span>易烊千玺</span>
              </li>
              <li v-for="item in peopleList" :key="item.id" class="active">
                <span>{{item.info}}</span>
                <span>{{item.text}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 娱乐热点 -->
        <div class="recreation-wrapper">
          <div class="recreation">
            <p class="recreation-title">娱乐热点</p>
            <div class="recreation-banner">
              <img
                src="https://p0.meituan.net/moviemachine/056bf742cbd128b12b658a346b5c971e729582.png@120w_72h_1e_1c"
                alt
              />
              <p class="text">五一动画票房冠军又回来啦！新的冒险，新的精彩，等你来影院解锁</p>
            </div>
            <ul class="recreation-list">
              <li v-for="item in recreations" :key="item.id">
                <p class="number">{{item.number}}</p>
                <p class="text">{{item.text}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data(){
    return {
      panel:[
        {id:1,imgsrc:"https://p0.pipi.cn/mmdb/25bfd69a9235bfecd8b535cb9e40b04b22831.jpg?imageView2/1/w/160/h/220",info:"新蝙蝠侠",score:"",text:"购票"},
        {id:2,imgsrc:"https://p0.pipi.cn/mmdb/25bfd6be9abc7e8d3311e5bd9b6d287be0f28.png_webp?imageView2/1/w/160/h/220",info:"长津湖之水门桥",score:"9.6",text:"购票"},
        {id:3,imgsrc:"https://p0.pipi.cn/mmdb/25bfd69a9abb12f0ee7e12418459419ad84a6.jpg?imageView2/1/w/160/h/220",info:"这个杀手不太冷静",score:"",text:"购票"},
        {id:4,imgsrc:"https://p0.pipi.cn/mmdb/25bfd69ad7c3385bf180779c8ca665bf97ce5.jpg?imageView2/1/w/160/h/220",info:"神秘海域",score:"8.8",text:"购票"},
        {id:5,imgsrc:"https://p0.pipi.cn/mmdb/25bfd6bec7e7e1030cb12da89b6f158d2d3ce.jpg?imageView2/1/w/160/h/220",info:"花束般的恋爱",score:"9.0",text:"购票"},
        {id:6,imgsrc:"https://p0.pipi.cn/mmdb/25bfd69a02f9235bf106d6960a11ad9e9932d.jpg?imageView2/1/w/160/h/220",info:"如果有一天我将...",score:"",text:"购票"},
        {id:7,imgsrc:"https://p0.pipi.cn/mmdb/25bfd68de7adddddd2395b4c04f4737cd31fc.jpg?imageView2/1/w/160/h/220",info:"奇迹.笨小孩",score:"9.5",text:"购票"},
        {id:8,imgsrc:"https://p0.pipi.cn/mmdb/25bfd6bee7a8078ea38ea3f0ad723c82f372f.jpg?imageView2/1/w/160/h/220",info:"好想去你的世界...",score:"8.8",text:"购票"},
      ],
      boxoffice:[
        {id:1,number:2,text:"长津湖之水门桥",money:"260.10万",color:"active"},
        {id:2,number:3,text:"新蝙蝠侠",money:"114.27万",color:"active"},
        {id:3,number:4,text:"这个杀手不太冷静",money:"101.98万",color:""},
        {id:4,number:5,text:"奇迹.笨小孩",money:"56.11万",color:""},
      ],
      willMovies:[
        {id:1,imgsrc:"https://p0.pipi.cn/mmdb/25bfd69abe1923ddd29ab4c069e3afeca2be4.jpg?imageView2/1/w/160/h/220",title:"玛纳斯人之失落的秘境",number:"8176人想看",text:"预告片",info:"预售",day:"3月19日上映"},
        {id:2,imgsrc:"https://p0.pipi.cn/mmdb/25bfd69adddddd8ea3af33d441fff7dde177e.jpg?imageView2/1/w/160/h/220",title:"月球陨落",number:"95819人想看",text:"预告片",info:"预售",day:"3月25日上映"},
        {id:3,imgsrc:"https://p0.pipi.cn/mmdb/d2dad5925372ff50c8281eee25cc56e33b4a6.jpg?imageView2/1/w/160/h/220",title:"新灰姑娘",number:"26853人想看",text:"预告片",info:"预售",day:"3月25日上映"},
        {id:4,imgsrc:"https://p0.pipi.cn/mmdb/25bfd69ab12dddf0eec696ed5a4049ecd4a26.jpg?imageView2/1/w/160/h/220",title:"卧鼠藏虫",number:"25191人想看",text:"预告片",info:"预售",day:"3月25日上映"},
        {id:5,imgsrc:"https://p0.pipi.cn/mmdb/25bfd69ab12dddf0ee5bf1223d7f0151389be.jpg?imageView2/1/w/160/h/220",title:"印度女孩",number:"9997人想看",text:"预告片",info:"预售",day:"3月25日上映"},
        {id:6,imgsrc:"https://p0.pipi.cn/mmdb/25bfd69ac7e5bf501539dd20cf832e324548a.jpg?imageView2/1/w/160/h/220",title:"囧男进化论",number:"2216人想看",text:"预告片",info:"预售",day:"3月25日上映"},
        {id:7,imgsrc:"https://p0.pipi.cn/mmdb/25bfd6be339338537c06d6bdec6f6ba734bf1.jpg?imageView2/1/w/160/h/220",title:"十三行",number:"1254人想看",text:"预告片",info:"预售",day:"3月25日上映"},
        {id:8,imgsrc:"https://p0.pipi.cn/mmdb/25bfd69abe10fad236230f2940ba6162b2160.jpg?imageView2/1/w/160/h/220",title:"野夏天",number:"927人想看",text:"预告片",info:"预售",day:"3月25日上映"}
      ],
      hope:[
        {id:1,number:4,text:"一周的朋友",info:"113289人想看"},
        {id:2,number:5,text:"回廊亭",info:"144274人想看"},
        {id:3,number:6,text:"我真的讨厌异地恋",info:"93760人想看"},
        {id:4,number:7,text:"被害人",info:"93263人想看"},
        {id:5,number:8,text:"哥，你好",info:"82915人想看"},
        {id:6,number:9,text:"精灵旅社4：变身大冒险",info:"70220人想看"},
        {id:7,number:10,text:"你是我的春天",info:"41104人想看"},
      ],
      hotMovies:[
        {id:1,imgsrc:"https://p1.meituan.net/movie/3ee52ce5d15a09e07eaa346d1230f97f55997.jpg@350w_220h_1e_1c",text:"厉鬼将映",score:"7.2",className:"active"},
        {id:2,imgsrc:"https://p0.pipi.cn/mmdb/d2dad592b125bfbe2a87a9aa10a4ba4bd4f8d.webp?imageView2/1/w/160/h/220",text:"魁拔Ⅲ战神崛起",score:"9.4",className:""},
        {id:3,imgsrc:"https://p0.pipi.cn/mmdb/d2dad592b125bfc9fd1789337993cec80ab62.jpg?imageView2/1/w/160/h/220",text:"战狼",score:"9.3",className:""},
        {id:4,imgsrc:"https://p0.pipi.cn/mmdb/d2dad592b12f2ab12d339e7ef5bd56a01e21d.jpg?imageView2/1/w/160/h/220",text:"夏洛特烦恼",score:"9.3",className:""},
        {id:5,imgsrc:"https://p0.pipi.cn/mmdb/d2dad592b12f2a030c030cc45d1917ed1b610.jpg?imageView2/1/w/160/h/220",text:"唐人街探案",score:"9.0",className:""},
        {id:6,imgsrc:"https://p0.pipi.cn/mmdb/d2dad592b12f2a7e12e19b5ff96f5099159c2.jpg?imageView2/1/w/160/h/220",text:"小王子",score:"8.9",className:""},
        {id:7,imgsrc:"https://p0.pipi.cn/mmdb/d2dad592b12f2a8077d7c32110c7d9d7ef26a.jpg?imageView2/1/w/160/h/220",text:"大圣归来",score:"9.3",className:""},
      ],
      hotList:[
        {id:1,number:2,text:"肖申克的救赎",score:"9.5分"},
        {id:2,number:3,text:"绿皮书",score:"9.5分"},
        {id:3,number:4,text:"海上钢琴师",score:"9.3分"},
        {id:4,number:5,text:"霸王别姬",score:"9.4分"},
        {id:5,number:6,text:"美丽人生",score:"9.3分"},
        {id:6,number:7,text:"小偷家族",score:"8.1分"},
        {id:7,number:8,text:"哪吒之魔童降世",score:"9.6分"},
        {id:8,number:9,text:"这个杀手不太冷",score:"9.4分"},
        {id:9,number:10,text:"怦然心动",score:"8.9分"},
      ],
      peopleList:[
        {id:1,info:"2",text:"黄晓明"},
        {id:2,info:"3",text:"耿乐"},
        {id:3,info:"4",text:"章宇"},
        {id:4,info:"5",text:"赵今麦"},
        {id:5,info:"6",text:"齐溪"},
        {id:6,info:"7",text:"蔡卓妍"},
        {id:7,info:"8",text:"约瑟夫.巴德拉玛"},
        {id:8,info:"9",text:"冯绍峰"},
        {id:9,info:"10",text:"罗伯特.帕丁森"},
      ],
      recreations:[
        {id:1,number:2,text:"“像被岁月狠狠抽过了”——黄晓明要求“扮老扮丑”只为还原人物"},
        {id:2,number:3,text:"包揽春季档观众笑声 喜剧电影《卧鼠藏虫》3月25日狂欢开启！"},
        {id:3,number:4,text:"电影《雪鹰领主》定档3月27日 超凡天团高燃集结勇斗血魔兽"},
        {id:4,number:5,text:"《你是我的春天》赵今麦哭戏感染力超强网友:这年头哭戏这么卷了"},
        {id:5,number:6,text:"青春校园喜剧电影《年少有你》今日上映 打破套路的原创青春"},
        {id:6,number:7,text:"犯罪爽片《边缘行者》再曝预告 任贤齐演绎嚣张卧底直上青云"},
        {id:7,number:8,text:"李汶翰徐若晗夏日初吻定情 《遇见你》展现十四亿分之一的浪漫"},
        {id:8,number:9,text:"电影《野夏天》曝题曲MV 陈嘉桦Ella唱尽青春心酸不易"},
        {id:9,number:10,text:"《神秘海域》中国风海报“逐浪夺金” 古船决战撼天动地"},
      ]
    }
  }
};
</script>

<style scoped>
.homepage {
  width: 100vw;
}
.homewrapper {
  width: 93%;
  margin: 0 auto;
}
.homebanner {
  width: 100%;
  height: 440px;
}
.homebanner img {
  width: 100%;
  height: 100%;
}
.home-movie {
  box-sizing: border-box;
  width: 100%;
  padding: 65px 125px;
}
.movie-header {
  width: 100%;
  height: 675px;
  display: flex;
  justify-content: space-between;
}
.movie-header-left {
  width: 62.2%;
}
.movie-header-leftTop {
  width: 100%;
  height: 26px;
  margin-bottom: 23px;
  display: flex;
  justify-content: space-between;
}
.movie-header-leftTop span {
  color: #ef4238;
}
.movie-header-leftTop span:first-child {
  font-size: 26px;
}
.movie-header-leftTop span:last-child {
  font-size: 14px;
}
.movie-header-leftList {
  box-sizing: border-box;
  width: 100%;
  height: 564.5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
}
.movie-header-leftList li {
  width: 160px;
  height: 260px;
  border: 1px solid #efefef;
  position: relative;
  /* background: red; */
}
.movie-header-leftList li img {
  width: 100%;
  height: 220px;
}
.movie-header-leftList li p {
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
  margin-top: -30px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #fff;
}
.movie-header-leftList li p span:first-child {
  width: 115px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.movie-header-leftList li p span:last-child {
  color: #ffb400;
  font-size: 18px;
}
.movie-header-leftList li > span {
  display: inline-block;
  width: 100%;
  height: 39px;
  line-height: 39px;
  text-align: center;
  color: #ef4238;
  font-size: 14px;
  position: absolute;
  bottom: 0;
}
.movie-header-right {
  width: 31.7%;
}
.movie-header-right dl > div {
  height: 78px;
  display: flex;
  border: 1px solid #efefef;
  margin-bottom: 10px;
}
.movie-header-right dl > div div {
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.movie-header-right dl dt {
  margin-bottom: 15px;
}
.movie-header-right dl dd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
.movie-header-right dl dd div {
  display: flex;
  align-items: center;
}

.movie-header-right dl dd div span {
  margin-right: 15px;
}
.movie-header-right dl dd span {
  font-size: 18px;
  color: #999;
}
.movie-header-right dl dd span.active {
  color: #ef4238;
}
.movie-header-right dl dd div p {
  color: #333;
}
.movie-header-right dl dd > p {
  font-size: 14px;
  color: #ef4238;
}

.todayInfo {
  width: 100%;
  height: 103px;
  border: 1px solid #efefef;
  margin-top: 29px;
  padding-right: 15px;
  display: flex;
}
.todayInfo-left {
  width: 20px;
  height: 103px;
  color: #fff;
  font-size: 17px;
  padding: 0 10px;
  background: #ef4238;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.todayInfo-right {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
.todayInfo-right p {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
}
.todayInfo-right p:first-child {
  padding-left: 13px;
  align-items: flex-end;
  justify-content: space-between;
}
.todayInfo-right p:first-child span {
  color: #ef4238;
  font-size: 14px;
}
.todayInfo-right p:first-child span:first-child {
  font-size: 30px;
}
.todayInfo-right p:last-child {
  display: flex;
  justify-content: space-around;
}
.todayInfo-right p:last-child span {
  font-size: 14px;
  color: #999;
}

/* 即将上映 */
.willMovies {
  height: 820px;
  display: flex;
  justify-content: space-between;
}
.willMovies .movie-header-leftTop span {
  color: #2d98f3;
}
.willMovies-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.willMovies-list li {
  width: 160px;
  margin-bottom: 20px;
  /* height: 327px; */
}
.willMovies-list li div {
  width: 100%;
  height: 295px;
  border: 1px solid #efefef;
  /* position: relative; */
}
.willMovies-list li div img {
  width: 100%;
  height: 220px;
}
.willMovies-list li div .title {
  width: 140px;
  height: 22px;
  margin: -25px 10px 0 10px;
  font-size: 16px;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  /* position: absolute;
  bottom: 5px; */
}
.willMovies-list li div .number {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #ffb400;
  padding-left: 10px;
}
.willMovies-list li div .preview {
  display: flex;
}
.willMovies-list li div .preview span {
  flex: 1;
  height: 40px;
  font-size: 14px;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.willMovies-list li div .preview span:last-child {
  color: #2d98f3;
  border-left: 1px solid #efefef;
}
.willMovies-list li .day {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  color: #999;
}
.willMovies-right {
  width: 31.7%;
  position: relative;
  top: -100px;
}
.hope-title {
  font-size: 14px;
  color: #ffb400;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.hope-title span {
  display: flex;
  align-items: center;
}
.hope-title span:first-child {
  font-size: 26px;
}
.hope-header {
  height: 194px;
  display: flex;
}
.hope-header > div {
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.hope-header > div .title {
  font-size: 18px;
  color: #333;
}
.hope-header > div .day {
  font-size: 16px;
  color: #999;
  margin-top: 12px;
}
.hope-header > div .number {
  font-size: 14px;
  color: #ffb400;
  margin-top: 12px;
}
.hope-banner {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
.hope-banner > div {
  width: 170px;
  height: 180px;
  border: 1px solid #efefef;
}
.hope-banner > div p {
  font-size: 18px;
  color: #333;
  margin: 8px 10px 0px;
}
.hope-banner > div span {
  display: inline-block;
  font-size: 14px;
  color: #fdb863;
  margin: 6px 0px 0px 10px;
}
.hope-list {
  display: flex;
  flex-wrap: wrap;
}
.hope-list li {
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hope-list li div {
  min-width: 105px;
  display: flex;
}
.hope-list li div .number {
  margin-right: 15px;
}
.hope-list li .number {
  font-size: 18px;
  color: #999;
}
.hope-list li .text {
  font-size: 16px;
  color: #333;
}
.hope-list li .info {
  font-size: 14px;
  color: #fdb863;
}

/* 热播电影 */
.hotMovies {
  display: flex;
  justify-content: space-between;
}
.hotMovies-left {
  width: 62.2%;
}
.hotMovies-leftTop {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hotMovies-leftTop div {
  display: flex;
}
.hotMovies-leftTop div p {
  font-size: 26px;
  color: #ef4238;
  margin-right: 5px;
}
.hotMovies-leftTop div ul {
  display: flex;
  align-items: center;
}
.hotMovies-leftTop div ul li {
  font-size: 16px;
  color: #000;
  margin-left: 10px;
}
.hotMovies-leftTop span {
  font-size: 14px;
  color: #ef4238;
}
.hotMovies-leftList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.hotMovies-leftList li.active {
  width: 352px;
  position: relative;
}
.hotMovies-leftList li {
  width: 160px;
  height: 220px;
  margin-bottom: 30px;
  position: relative;
}
.hotMovies-leftList li img {
  width: 100%;
  height: 100%;
}
.hotMovies-leftList li p {
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  bottom: 5px;
  padding: 0 8px 0 10px;
  display: flex;
  justify-content: space-between;
}
.hotMovies-leftList li p span.text {
  font-size: 16px;
  color: #fff;
}
.hotMovies-leftList li p span.score {
  font-size: 18px;
  color: #ffb400;
}

.hotMovies-right {
  width: 31.7%;
}
.top-title {
  font-size: 14px;
  color: #ffb400;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.top-title p {
  font-size: 26px;
}
.top-banner {
  height: 78px;
  border: 1px solid #efefef;
  display: flex;
  margin-bottom: 10px;
}
.top-banner > div {
  padding-left: 10px;
  display: flex;
  align-items: center;
}
.top-banner > div p {
  font-size: 18px;
  color: #333;
}
.top-banner > div span {
  display: inline-block;
  font-size: 14px;
  color: #ffb400;
  margin-top: 12px;
}
.top-list {
  display: flex;
  flex-wrap: wrap;
}
.top-list li {
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-list li div {
  display: flex;
}
.top-list li .number {
  font-size: 18px;
  color: #ffb400;
  margin-right: 15px;
}
.top-list li .text {
  font-size: 16px;
  color: #333;
}
.top-list li .score {
  font-size: 14px;
  color: #fdb863;
}

/* 热门影人 */
.movie-people {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.movie-peopleWrapper {
  width: 31.7%;
  margin-top: 80px;
}
.movie-peopleWrapper > p {
  font-size: 26px;
  color: #ef4238;
  margin-bottom: 20px;
}
.movie-peopleList {
  display: flex;
  flex-wrap: wrap;
}
.movie-peopleList li {
  width: 100%;
  display: flex;
  align-items: center;
}
.movie-peopleList li:first-child {
  margin-bottom: 15px;
}
.movie-peopleList li img {
  margin-right: 10px;
}
.movie-peopleList li.active {
  height: 40px;
}
.movie-peopleList li.active span {
  font-size: 14px;
  color: #333;
}
.movie-peopleList li.active span:first-child {
  font-size: 16px;
  color: #999;
  margin-right: 15px;
}

.movie-peopleList li.active:nth-child(2) span:first-child {
  color: #ef4238;
}
.movie-peopleList li.active:nth-child(3) span:first-child {
  color: #ef4238;
}

/* 娱乐热点 */
.recreation-wrapper {
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
}
.recreation {
  width: 31.7%;
}
.recreation-title {
  font-size: 26px;
  color: #ef4238;
  margin-bottom: 20px;
}
.recreation-banner {
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 15px;
}
.recreation-banner img {
  width: 120px;
}
.recreation-banner p {
  width: 224px;
  display: flex;
  padding-left: 10px;
}
.recreation-list {
  display: flex;
  flex-wrap: wrap;
}
.recreation-list li {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
.recreation-list li p.number {
  margin-right: 15px;
  font-size: 16px;
  color: #999;
}
.recreation-list li:first-child p.number {
  color: #ef4238;
}
.recreation-list li:nth-child(2) p.number {
  color: #ef4238;
}
.recreation-list li p.text {
  font-size: 14px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
