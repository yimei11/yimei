<template>
  <div class="wrap">
    <div class="center-box">
      <div class="lef-box">
        <div class="cen-txt-box">
          <span class="sing-text">热门演唱会</span>
          <span class="all-text">全部 ></span>
        </div>

        <ul class="lef-ul">
          <li v-for="(item,index) of lefArr" :key="index">
            <img :src="item.imgurl" alt />
            <p class="txt">{{item.dic}}</p>
          </li>
        </ul>
      </div>
      <div class="rig-box">
        <p class="rig-top">最新开售</p>
        <ul class="rig-ul">
          <li class="first-li">
            <img src="../../img/icon1.jpg" alt />
            <div class="rig-txt-box">
              <p class="rig-txt-p">【KPOP Queendom女团之夜】 ——随机舞蹈&歌曲</p>
              <p class="rig-txt-time">2022.4.30 20:00 周六</p>
            </div>
          </li>
          <li v-for="(item,index) of rigArr" :key="index">
            <p class="rig-txt">{{item.dic}}</p>
            <p class="rig-time">{{item.time}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  background: #f4f4f4;
}
.first-li img {
  width: 120px;
  height: 90px;
}
.rig-txt-box .rig-txt-p {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.rig-txt-box .rig-txt-time {
  font-size: 12px;
  color: #666;
  margin: 10px 0 0 10px;
}
.rig-box {
  border-radius: 10px;
  width: 310px;
  padding: 0px 20px;
}
.rig-top {
  font-size: 20px;
  margin-bottom: 20px;
}
.rig-ul {
  width: 310px;
}
.rig-ul .first-li {
  display: flex;
  height: 100px;
}
.rig-ul li {
  border-radius: 5px;
  width: 310px;
  height: 60px;
  background-color: #fff;
  padding: 5px 5px;
  border-bottom: 1px solid #666;
}
.rig-ul li .rig-txt {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-left: 10px;
}
.rig-ul li .rig-time {
  font-size: 12px;
  color: #666;
  margin-left: 10px;
}
.rig-ul li p {
  line-height: 30px;
}

.lef-box {
  width: 900px;
}
.lef-box .cen-txt-box {
  width: 900px;
  display: flex;
  justify-content: space-between;
}
.cen-txt-box .sing-text {
  margin-left: 23px;
  font-size: 21px;
  border-left: 5px solid #ef4238;
  text-indent: 0.5em;
}
.cen-txt-box .all-text {
  margin-right: 20px;
  margin-top: 10px;
  font-size: 12px;
  color: #666;
}
* {
  margin: 0;
  padding: 0;
}
.wrap {
  width: 100%;
  padding: 50px 0;
}
ul,
li {
  list-style: none;
}
.center-box {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.lef-ul {
  width: 900px;
  display: flex;
  flex-wrap: wrap;
}
.lef-ul li {
  margin: 10px 0;
  margin-left: 20px;
  width: 200px;
  border-radius: 5px;
  background-color: #fff;
  padding: 0 0 5px 0;
}
.lef-ul li .txt {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 3px;
  line-height: 25px;
  font-size: 15px;
}
.lef-ul li img {
  width: 100%;
  height: 240px;
}
</style>
<script>
export default {
  name: "ShowSing",
  data() {
    return {
      lefArr: [
        {
          dic: "PeaceHotel和平饭店 2022 [宾至如归] 春夏巡演 【上海站】",
          imgurl: require("../../img/item1.jpg")
        },
        {
          dic: "PeaceHotel和平饭店 2022 [宾至如归] 春夏巡演 【上海站】",
          imgurl: require("../../img/item2.jpg")
        },
        {
          dic: "PeaceHotel和平饭店 2022 [宾至如归] 春夏巡演 【上海站】",
          imgurl: require("../../img/item3.jpg")
        },
        {
          dic: "PeaceHotel和平饭店 2022 [宾至如归] 春夏巡演 【上海站】",
          imgurl: require("../../img/item4.jpg")
        },
        {
          dic: "PeaceHotel和平饭店 2022 [宾至如归] 春夏巡演 【上海站】",
          imgurl: require("../../img/item5.jpg")
        },
        {
          dic: "PeaceHotel和平饭店 2022 [宾至如归] 春夏巡演 【上海站】",
          imgurl: require("../../img/item6.jpg")
        },
        {
          dic: "PeaceHotel和平饭店 2022 [宾至如归] 春夏巡演 【上海站】",
          imgurl: require("../../img/item7.jpg")
        },
        {
          dic: "PeaceHotel和平饭店 2022 [宾至如归] 春夏巡演 【上海站】",
          imgurl: require("../../img/item8.jpg")
        }
      ],
      rigArr: [
        {
          dic: "栗先达 如约'于一万处旷野嬉戏 2022巡演 上海站",
          time: "2022.5.7 20:00 周六",
          img: require("../../img/icon2.png")
        },
        {
          dic: "闷声音乐2022 [扪心] 全国巡演 上海站",
          time: "2022.4.3 20:30 周日",
          img: require("../../img/icon3.png")
        },
        {
          dic: "【特别返厂】倒带2004'青春园游演唱会-一键预定谢谢",
          time: "2022.5.7 20:30 周五",
          img: require("../../img/icon4.jpg")
        },
        {
          dic: "不速之客2022双张专辑巡演上海站",
          time: "2022.4.10 20:30 周日",
          img: require("../../img/icon5.jpg")
        },
        {
          dic: "3.31全场畅饮|夜猫俱乐部...",
          time: "2022.3.31 20:30 周四",
          img: require("../../img/icon6.jpg")
        },
        {
          dic: "刘莉莉X王欣宇 嘉宾:张钰 [你来替我做个梦] ...",
          time: "2022.5.31 20:00 周五",
          img: require("../../img/icon7.jpg")
        },
        {
          dic: "M-LAB 呈现| [失序链接] 第五节噪盯迷研讨论 ...",
          time: "2022.5.31 20:00 周五",
          img: require("../../img/icon8.jpg")
        }
      ]
    };
  }
};
</script>