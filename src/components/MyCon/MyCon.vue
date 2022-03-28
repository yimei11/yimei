<template>
  <div class="container">
    <div class="container-box">
      <div class="hot-news">
        <div class="news">
          <div class="news-title">
            <h2 class="new">{{ news.newHot }}</h2>
            <div class="all">
              <span class="all">{{ news.all }}</span>
              <img :src="news.rightArrow" alt="" class="right-arrow" />
            </div>
          </div>
          <div class="news-info">
            <ul class="news-list">
              <li
                class="news-item"
                v-for="(item, index) in news.newsArr"
                :key="index"
              >
                <img :src="item.imgSrc" alt="" />
                <p class="item-con">{{ item.content }}</p>
                <div class="item-control">
                  <div class="control-title">{{ item.title }}</div>
                  <div class="control">
                    <img :src="item.controlImg" alt="" class="control-img" />
                    <div class="control-count">{{ item.controlCount }}</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="hot">
          <h4>{{ hot.hotTitle }}</h4>
          <ul class="hot-list">
            <li class="top-item">
              <div class="item-l">
                <img :src="hot.topSrc" alt="" class="topImg" />
                <i class="count">1</i>
              </div>
              <div class="item-r">{{ hot.topCon }}</div>
            </li>
            <li
              class="hot-item"
              v-for="(item, index) in hot.hotArr"
              :key="index"
            >
              <i class="count">{{ index + 2 }}</i>
              <p class="hot-con">{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="trailer-fast">
        <div class="trailer">
          <div class="trailer-title">
            <h2 class="trailerTitle">{{ trailer.fast }}</h2>
            <div class="all">
              <span class="all">{{ trailer.all }}</span>
              <img :src="trailer.rightArrow" alt="" class="right-arrow" />
            </div>
          </div>
          <div class="trailer-info">
            <ul class="trailer-list">
              <li
                class="trailer-item"
                v-for="(item, index) in trailer.trailerArr"
                :key="index"
              >
                <img :src="item.imgSrc" alt="" class="trailerImg" />
                <div class="item-info">
                  <div class="info-con">{{ item.con }}</div>
                  <div class="info-count">{{ item.count }}</div>
                </div>
                <img :src="item.playSrc" alt="" class="imgPlay" />
              </li>
            </ul>
          </div>
        </div>
        <div class="hotTrailer">
          <h4>{{ hotTrailer.title }}</h4>
          <ul class="hotTrailer-list">
            <li
              class="hotTrailer-item"
              v-for="(item, index) in hotTrailer.hotTrailerArr"
              :key="index"
            >
              <div class="item-left">
                <img :src="item.imgSrc" alt="" class="leftImg" />
                <i class="left-count">{{ index + 1 }}</i>
                <img :src="item.playSrc" alt="" class="imgPlay" />
              </div>
              <div class="item-right">
                <div class="right-con">{{ item.con }}</div>
                <div class="right-control">
                  <div class="right-count">{{ item.count }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCon",
  data() {
    return {
      news: {
        newHot: "最新资讯",
        all: "全部",
        rightArrow:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOBAMAAADgeEClAAAAIVBMVEUAAADvQjjvQjjvQjjvQjjvQjjvQjjvQjjvQjjvQjjvQjiWrWKOAAAACnRSTlMA09cZFc0XycEanhmhUgAAADhJREFUCNdjKDRgYGCIUgYSjouATBYpOJNNSg3ITFwKJCYtZ2Bg1hJhYDBa6ABnALUBGQytCQwMAFe+CgbfyLZDAAAAAElFTkSuQmCC",
        newsArr: [
          {
            imgSrc:
              "https://p0.meituan.net/moviemachine/1a08f30559646d48865b3102de42bb6859620.jpg@230w_129h_1e_1c",
            content: "《绑架游戏》定档12.23 彭昱畅演技拉满入局危险游戏",
            title: "猫眼电影",
            controlImg:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAMAAAA+9+1qAAAAUVBMVEUAAADY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NhkrvBmAAAAGnRSTlMA5vgsCTXTq5BkSUM37urduh8TAcSTc8WSco5k4a0AAAC+SURBVDjLjZNZDsMgDETNDgnZl7a+/0Eroig4dSp4f0hjY83YQFEfZ3spe+t2BY/oYJFgg2aSJQj8QYQFbkwjPjBOQGg7fKRrs6aR+AfZwEnMGq6KcDCTkTlihoSjhT5qHT1t7Y6haZk6XaXN0/Ar6aMu70mvFcBgxsOFx4yBN30lO4Ro4F67wYCZlJZAFClJzAx1oq3iu7rByxa8qszksRitDYulHHD9qpSXrry+5UOoPqnycXLU7myPyM78CyK+Pnjq1xjnAAAAAElFTkSuQmCC",
            controlCount: 200,
          },
          {
            imgSrc:
              "https://p0.pipi.cn/friday/6a2854abb7e69dad1a878121049dc23e.jpg?imageView2/1/w/230/h/129",
            content: "《相逢时节》今晚大结局 雷佳音袁泉陷两家恩怨纠纷难抉择",
            title: "猫眼电影",
            controlImg:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAMAAAA+9+1qAAAAUVBMVEUAAADY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NhkrvBmAAAAGnRSTlMA5vgsCTXTq5BkSUM37urduh8TAcSTc8WSco5k4a0AAAC+SURBVDjLjZNZDsMgDETNDgnZl7a+/0Eroig4dSp4f0hjY83YQFEfZ3spe+t2BY/oYJFgg2aSJQj8QYQFbkwjPjBOQGg7fKRrs6aR+AfZwEnMGq6KcDCTkTlihoSjhT5qHT1t7Y6haZk6XaXN0/Ar6aMu70mvFcBgxsOFx4yBN30lO4Ro4F67wYCZlJZAFClJzAx1oq3iu7rByxa8qszksRitDYulHHD9qpSXrry+5UOoPqnycXLU7myPyM78CyK+Pnjq1xjnAAAAAElFTkSuQmCC",
            controlCount: 212,
          },
          {
            imgSrc:
              "https://p0.pipi.cn/friday/dc0d5c398510e761a6c9943334d52390.jpeg?imageView2/1/w/230/h/129",
            content: "《东北往事我叫黄中华》定档3月24日 东北豪情江湖霸气回归",
            title: "猫眼电影",
            controlImg:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAMAAAA+9+1qAAAAUVBMVEUAAADY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NhkrvBmAAAAGnRSTlMA5vgsCTXTq5BkSUM37urduh8TAcSTc8WSco5k4a0AAAC+SURBVDjLjZNZDsMgDETNDgnZl7a+/0Eroig4dSp4f0hjY83YQFEfZ3spe+t2BY/oYJFgg2aSJQj8QYQFbkwjPjBOQGg7fKRrs6aR+AfZwEnMGq6KcDCTkTlihoSjhT5qHT1t7Y6haZk6XaXN0/Ar6aMu70mvFcBgxsOFx4yBN30lO4Ro4F67wYCZlJZAFClJzAx1oq3iu7rByxa8qszksRitDYulHHD9qpSXrry+5UOoPqnycXLU7myPyM78CyK+Pnjq1xjnAAAAAElFTkSuQmCC",
            controlCount: 182,
          },
          {
            imgSrc:
              "https://p0.pipi.cn/friday/874d3e2bbb1efa02acc879fdccd5558b.jpg?imageView2/1/w/230/h/129",
            content:
              "《你是我的春天》发布主题曲MV 黄渤周冬雨黄晓明献唱抚慰人心",
            title: "猫眼电影",
            controlImg:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAMAAAA+9+1qAAAAUVBMVEUAAADY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NhkrvBmAAAAGnRSTlMA5vgsCTXTq5BkSUM37urduh8TAcSTc8WSco5k4a0AAAC+SURBVDjLjZNZDsMgDETNDgnZl7a+/0Eroig4dSp4f0hjY83YQFEfZ3spe+t2BY/oYJFgg2aSJQj8QYQFbkwjPjBOQGg7fKRrs6aR+AfZwEnMGq6KcDCTkTlihoSjhT5qHT1t7Y6haZk6XaXN0/Ar6aMu70mvFcBgxsOFx4yBN30lO4Ro4F67wYCZlJZAFClJzAx1oq3iu7rByxa8qszksRitDYulHHD9qpSXrry+5UOoPqnycXLU7myPyM78CyK+Pnjq1xjnAAAAAElFTkSuQmCC",
            controlCount: 182,
          },
          {
            imgSrc:
              "https://p0.pipi.cn/friday/d4db89a5d6c57590f21159a2c16a0f5a.jpg?imageView2/1/w/230/h/129",
            content: "IMAX发布《新蝙蝠侠》特辑 邀观众IMAX银幕揭秘侠影真相",
            title: "猫眼电影",
            controlImg:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAMAAAA+9+1qAAAAUVBMVEUAAADY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NhkrvBmAAAAGnRSTlMA5vgsCTXTq5BkSUM37urduh8TAcSTc8WSco5k4a0AAAC+SURBVDjLjZNZDsMgDETNDgnZl7a+/0Eroig4dSp4f0hjY83YQFEfZ3spe+t2BY/oYJFgg2aSJQj8QYQFbkwjPjBOQGg7fKRrs6aR+AfZwEnMGq6KcDCTkTlihoSjhT5qHT1t7Y6haZk6XaXN0/Ar6aMu70mvFcBgxsOFx4yBN30lO4Ro4F67wYCZlJZAFClJzAx1oq3iu7rByxa8qszksRitDYulHHD9qpSXrry+5UOoPqnycXLU7myPyM78CyK+Pnjq1xjnAAAAAElFTkSuQmCC",
            controlCount: 321,
          },
          {
            imgSrc:
              "https://p1.meituan.net/moviemachine/2e6997c55ddaeb2064424c02d7ba805f121615.jpg@230w_129h_1e_1c",
            content: "《精灵旅社4》发布“人在囧途”片段 德古拉悲惨体验雨林冒险",
            title: "猫眼电影",
            controlImg:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAMAAAA+9+1qAAAAUVBMVEUAAADY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NhkrvBmAAAAGnRSTlMA5vgsCTXTq5BkSUM37urduh8TAcSTc8WSco5k4a0AAAC+SURBVDjLjZNZDsMgDETNDgnZl7a+/0Eroig4dSp4f0hjY83YQFEfZ3spe+t2BY/oYJFgg2aSJQj8QYQFbkwjPjBOQGg7fKRrs6aR+AfZwEnMGq6KcDCTkTlihoSjhT5qHT1t7Y6haZk6XaXN0/Ar6aMu70mvFcBgxsOFx4yBN30lO4Ro4F67wYCZlJZAFClJzAx1oq3iu7rByxa8qszksRitDYulHHD9qpSXrry+5UOoPqnycXLU7myPyM78CyK+Pnjq1xjnAAAAAElFTkSuQmCC",
            controlCount: 200,
          },
        ],
      },
      hot: {
        hotTitle: "热门资讯",
        topSrc:
          "https://p0.pipi.cn/friday/192ee24568ba5466f7851afc71d456fa.png?imageView2/1/w/120/h/72",
        topCon: "脑洞大开狂掀头骨 惊悚电影《迷失1231》4月15日全国上映",
        hotArr: [
          "电影《迷你世界之觉醒》曝“冒险世界”版动态海报 展现多重奇观",
          "《惊天救援》定档0708 杜江王千源绝境救援致敬“火焰蓝”",
          "《刺猬索尼克2》（暂译）曝终极预告及升级海报蛋头博士卷土重来",
          "《神秘海域》“致敬成龙名场面”片段  荷兰弟惊艳打戏圈粉获赞",
          "《神秘海域》“萌宠出击”预告  银幕爽片被赞“全民沉浸冒险”",
          "顾晓刚新作《草木人间》杭州开机 吴磊蒋勤勤首次合作演“母子”",
          "动物联“萌”来袭 动画电影《诺亚方舟漂流记2》4月8日上映",
          "破冰影业打造“少年”励志系列电影 促进儿童电影产业健康发展",
          "《相逢时节》收官在即，简宁两家风波暂平人物多面性凸显",
        ],
      },
      trailer: {
        fast: "预告片速递",
        all: "全部",
        rightArrow:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOBAMAAADgeEClAAAAIVBMVEUAAAAtmPMtmPMtmPMtmPMtmPMtmPMtmPMtmPMtmPMtmPPl0NUbAAAACnRSTlMA0xXXGc0XycEaTXrFtQAAADhJREFUCNdjKHRgYGCIMgESiouBTCYpMzAzAc5cCiQmL2dgYLESYmBwXqgAYSQDGQxRQAZDK5ABAF2ICeUU3lp8AAAAAElFTkSuQmCC",
        trailerArr: [
          {
            imgSrc:
              "https://p0.pipi.cn/friday/b0e32685d6c6587d7122d3bec8cd8975.jpeg?imageView2/1/w/480/h/270",
            con: "《刿心剑》电影《刿心剑》兄弟情版预告片：你为兄弟做过傻事吗？",
            count: 24,
            playSrc:
              "data:image/png;base64,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",
          },
          {
            imgSrc:
              "https://p0.pipi.cn/friday/fac4ab644b36e7d3a46fb090a0447f4e.jpg?imageView2/1/w/230/h/125",
            con: "《绑架游戏》彭昱畅主演电影《绑架游戏》定档12.23，颠覆形象演绎东野圭吾集大成之作",
            count: 249,
            playSrc:
              "data:image/png;base64,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",
          },
          {
            imgSrc:
              "https://p0.meituan.net/moviemachine/59408cbcc8b662088001d6499c688852226886.png@230w_125h_1e_1c",
            con: "《新蝙蝠侠》《新蝙蝠侠》“全面好评”口碑预告，经典之作扣人心弦",
            count: 22369,
            playSrc:
              "data:image/png;base64,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",
          },
          {
            imgSrc:
              "https://p1.meituan.net/moviemachine/821e3cca2b26214f102ec1b43e2bfb38685695.jpg@230w_125h_1e_1c",
            con: "《精灵旅社4：变身大冒险》《精灵旅社4》曝“人在囧途”片段，德古拉下场演绎“做人好难”",
            count: 77,
            playSrc:
              "data:image/png;base64,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",
          },
          {
            imgSrc:
              "https://p0.meituan.net/moviemachine/7a1b28b948a825fd2c8824d34f0d584f316517.png@230w_125h_1e_1c",
            con: "《哥，你好》《哥，你好》曝“我帮爸妈搞对象”版预告，常远催马丽魏翔谈恋爱",
            count: 9471,
            playSrc:
              "data:image/png;base64,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",
          },
          {
            imgSrc:
              "	https://p0.pipi.cn/friday/f1349a576bc870fd34f3b1192ea56220.jpg?imageView2/1/w/230/h/125",
            con: "《月球陨落》全制式无死角轰炸银幕！《月球陨落》全新预告引爆惊心动魄大灾难",
            count: 15450,
            playSrc:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAACQRJREFUeAHlm21MFVcexnm7yousCOiSXYQaharUhtrYpVFjjalJJRB8qTGaTdH49mXThE/1ixq/1C+amP1i1EQ2GxOtq+KS3SYaN77Rspq6BkGCYCxIN6wWxEVeFIQ+v9uZyQBz5QIzcJFJTmbumXPOPM9z/2fOOf/zn7CwSX6Ee82/r69vmp6xWClDKd1IiTrHKsUpcbQrdSi1KNUbqVbnO+Hh4S909uzwRACRThXiXKWlul7Q2dkZ8+rVqylKvu7ubl9vb2+EmWAWERHRayafz9c9ZcoU0quYmJhOCVCtImVK/9B1I+XdPFwTQEQjBexTpY0il93W1hbX3t4eK/K+hw8fPquqqmp59OhR24MHD140NDR0Pn/+vKelpaUHMomJiVHTp0+PSktLi8nMzJw2Z86c+KysrMS5c+fOkAjdcXFxHfHx8e0S6a6Kf6N0WWK8pu5oj1ELYBDPE5DCrq6uua2trb8ROV95efl/S0tLH1+6dKlZYowIrEhHrl69OikvL292Tk7O7yRSd0JCwv+jo6Mf6nnFSqWjFWJUAoj8ewKxR8Tf17+Z8Pjx455Tp07VFBcXN46UtNpzPBCjsLAwdcuWLe/Onj07SlbTKiEqVPhriVDpWCmIzBEJYPzrX/b09Pyxubl5RmNjY9jRo0erTp482fj69Yj+7CCg/lokMjIybOvWram7d+/OSk1NDUtKSnoWFRX1V909MhJrGLYAIh+vhx3s6OhY0dTUlHT+/Pm6AwcO1Lj9jw+lCBaxd+/ed9etWzcvJSWlOTY29prqfCUR2oaqa78/LAFE/h1VPqw+nlVfXx9TVFT07ytXrjB0jduxatWqxMOHD/8hPT29U++IKgEpkgg/BgsoaAFE/mOlg0+fPk2rrq7u3r59e3ldXV1nsA/ysty8efNiTpw4kbNgwQLfzJkzGyQAlvB9MM8MSgDIa2j7s0z+tzdu3Ph5x44dP4y1yQ9Fhi5x/PjxD5cvX56sLvE/DZl/CkaEiKEaxuz55yF/5syZ+k2bNt0KNfJwABPYwAhWMIN9KH5vtAA1wAvvL0+ePPlAfb118+bNt4ZqMBTunz59+qOVK1cmzJo16z/C84UsIeCLMaAFiDwzu4O88Ojzu3bt+iEUyAWDgS4KZrDDweDiWDWgACr9JUMdb3teeKFo9o6MlAlWMIMdDnAJVNZRACn2HpMc9aUkhrpQedsHIuGUD2awwwEucHIqN0gAw1z2MMNjkjPe47wT6GDzwA4HuKjOHqeuMEgAFcxjbs/0lhlesA8L1XJwgAuc4DYQZz8BDIUKWdgwt59I/X4gMfM3HOACJ+UVDrSCfgKowKcsaVnVsbAxG5noZ7jACW5wtPMZKMBG1vMsab1e1dlBeH0NFzjBTc/aaH+eJYBMIxVPDs4M1vP2Qm/DNZzgBke4mpwsAZSRq/4ShyfHi75fUVGxRpOT/Nzc3GTz4WN5hpPBDUcs/kr/YRdgKT483FjmTTfPixYt+v38+fNT1H7B2bNnc+TainKz/WDaghscVXapWd4vgEximhLeWx8+PPOmy2f/ukPz8ogNGza8X1tb+7lma5Ypuvwsx+bgBke4wplCpgUsxnWt2dMzL8zfCU1ycnK8lq9rrl69ulJe4GinMm7nwQ0PNVzVNnsVlgCZ+O3v378/5t6dFStWZNy7d2/jvn37Mt0m7NQe7nm46l4G900LSGfTAr+9UyWv8+T3j96/f/8nelHmLlmyhKHKswOOcNUD3uEhpgBp7NiwaUHmeB28KMvKyjZo5pY9derUN/oqRooRjnBV/TTaMAVI1PgYwY7NSBt2q562xqLke/hIQNfl5+fPdKtdsx04wlW/2Z+0BIglUxMF/1aVWXg8z9omSyopKSm4cOHCx2yduYUFjoYADIeWAHFkasEQMgIATkNmeEFBwaKbN29+xm83DjgaAjAhsgRwo23P2pAOnrVtvgPYee1109TcQKzJSt/Fixcrly1b9q0b7dEGHOGqS2ISLAvoIJMtajJD4dDytXnt2rUl6gLfyaPjWteEoyEAARmWAC1ksj8/3uTlv+vRDPFWRkbGef37T93GA0dDAP+kz+wCDURmEJzg9gOH015lZeVPMve/7dy58+7Lly/7hlM32LJwhKvK11PHNPkfCUshMiPYhtwsJ9d116FDh8q12/vAzXad2oIjXHWvnwC1xOQsXLjQPzlwquhV3vXr1+u2bdv2nRYpXV49w94uoTdwVR5BWNY74A4BSdplncEmo72CV9d6sbVpxvetFkP/GivycDPijpjx3oGb/x2gcfaFUjUBScTkeETa36c1svXKV1+hvnj22LFjnjhfAuGHGxzhCmdLAKNCGdFYBCQFamA0+Vry/lRTU9Ok9kvWr19fPh6zTrjBUTzKTC7WFEv/DE7Rv8tTk6Il6T/HyjFiAvH6jPnfvn17jYbXJg2D+bKARp5pDoPMuxt14y6haERjeQ1orNuHE9zgaJLvJ4AB6Bvi8AhFIxrrbTngAie4iROBltZhWYCRc5kgROLwCEWzSk3wC7jAyQiwvGyn008AmQZBfsUEIRKHN1ZDoh2Q29dwgAuc4GZwtB7TTwAjt5QITIIQicOzSk7QCzjAxYgqLR1IY5AAhkJfE4FJECJxeAMrTZTfYIcDXISZkNpBYayDBICcClYSfkoEJkGIxOFNFNImTjCDHQ5wgZN5z352FMAocITwUyIwCUKcSO8DsIIZ7EYI7RE7aft1QAEMc/lKY2cVEZgEIdorhvI1WMEMduEkanSQ6Zv4AwpAAVVko6SI8FMiMGVSWWbFUD2DEaxgBrvBISBcayocsIRuaJpshcpeu3btZ2IGQ22qjNnzzw83VDYoARAHEZTeumDpN3YBu1XIlL5X+oLw0+zs7L5z5859EgpDJBjAAiawgRGsduxvug7aAsxGZAW4zSbnBxM2EVgpTc5PZkwROMsaJudHUwNEwBqIwJx8n805CLFaeZ/Ls9Tvw0lCb4g+Gc6Hk3iocdKG/IeTdhHMa3UNfAmEok2eT2dN8gPPEoPdpsVKxADx8TSRGaww2Z/3b1HrzEal+fE0M7h6JTZJPP94Ws+Y3McvZXX8u5wD9joAAAAASUVORK5CYII=",
          },
        ],
      },
      hotTrailer: {
        title: "热门预告片",
        hotTrailerArr: [
          {
            imgSrc:
              "https://p0.pipi.cn/friday/b2ce57fbafd49238fda1b8f458a11c1b.jpg?imageView2/1/w/120/h/68",
            playSrc:
              "data:image/png;base64,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",
            con: "《神秘海域》荷兰弟《神秘海域》嗨爽热映中，萌宠出击惊喜连连",
            count: "24.8万",
          },
          {
            imgSrc:
              "https://p0.pipi.cn/friday/2d00e13b2dc9f97344d2a955fa7e00fc.jpg?imageView2/1/w/120/h/68",
            playSrc:
              "data:image/png;base64,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",
            con: "神秘海域》《神秘海域》高能“解锁宝藏”，3月14日下周一大银幕见",
            count: "66.3万",
          },
          {
            imgSrc:
              "https://p0.meituan.net/moviemachine/710ebb78c7674209b94c6c5a46a46637270970.png@120w_68h_1e_1c",
            playSrc:
              "data:image/png;base64,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",
            con: "《可不可以你也刚好喜欢我》《可不可以你也刚好喜欢我》白色情人节特别版预告",
            count: "10.4万",
          },
          {
            imgSrc:
              "	https://p0.meituan.net/moviemachine/f8289a16ab6c8dafbbafc20bd9a15e29183501.png@120w_68h_1e_1c",
            playSrc:
              "data:image/png;base64,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",
            con: "《新蝙蝠侠》《新蝙蝠侠》“暗夜侠影”预告，蝙蝠侠“我就是阴影本身”",
            count: 68591,
          },
          {
            imgSrc:
              "https://p0.pipi.cn/friday/ff8ff0a5f93e8e0ee7250286c77acd33.jpg?imageView2/1/w/120/h/68",
            playSrc:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAACQRJREFUeAHlm21MFVcexnm7yousCOiSXYQaharUhtrYpVFjjalJJRB8qTGaTdH49mXThE/1ixq/1C+amP1i1EQ2GxOtq+KS3SYaN77Rspq6BkGCYCxIN6wWxEVeFIQ+v9uZyQBz5QIzcJFJTmbumXPOPM9z/2fOOf/zn7CwSX6Ee82/r69vmp6xWClDKd1IiTrHKsUpcbQrdSi1KNUbqVbnO+Hh4S909uzwRACRThXiXKWlul7Q2dkZ8+rVqylKvu7ubl9vb2+EmWAWERHRayafz9c9ZcoU0quYmJhOCVCtImVK/9B1I+XdPFwTQEQjBexTpY0il93W1hbX3t4eK/K+hw8fPquqqmp59OhR24MHD140NDR0Pn/+vKelpaUHMomJiVHTp0+PSktLi8nMzJw2Z86c+KysrMS5c+fOkAjdcXFxHfHx8e0S6a6Kf6N0WWK8pu5oj1ELYBDPE5DCrq6uua2trb8ROV95efl/S0tLH1+6dKlZYowIrEhHrl69OikvL292Tk7O7yRSd0JCwv+jo6Mf6nnFSqWjFWJUAoj8ewKxR8Tf17+Z8Pjx455Tp07VFBcXN46UtNpzPBCjsLAwdcuWLe/Onj07SlbTKiEqVPhriVDpWCmIzBEJYPzrX/b09Pyxubl5RmNjY9jRo0erTp482fj69Yj+7CCg/lokMjIybOvWram7d+/OSk1NDUtKSnoWFRX1V909MhJrGLYAIh+vhx3s6OhY0dTUlHT+/Pm6AwcO1Lj9jw+lCBaxd+/ed9etWzcvJSWlOTY29prqfCUR2oaqa78/LAFE/h1VPqw+nlVfXx9TVFT07ytXrjB0jduxatWqxMOHD/8hPT29U++IKgEpkgg/BgsoaAFE/mOlg0+fPk2rrq7u3r59e3ldXV1nsA/ysty8efNiTpw4kbNgwQLfzJkzGyQAlvB9MM8MSgDIa2j7s0z+tzdu3Ph5x44dP4y1yQ9Fhi5x/PjxD5cvX56sLvE/DZl/CkaEiKEaxuz55yF/5syZ+k2bNt0KNfJwABPYwAhWMIN9KH5vtAA1wAvvL0+ePPlAfb118+bNt4ZqMBTunz59+qOVK1cmzJo16z/C84UsIeCLMaAFiDwzu4O88Ojzu3bt+iEUyAWDgS4KZrDDweDiWDWgACr9JUMdb3teeKFo9o6MlAlWMIMdDnAJVNZRACn2HpMc9aUkhrpQedsHIuGUD2awwwEucHIqN0gAw1z2MMNjkjPe47wT6GDzwA4HuKjOHqeuMEgAFcxjbs/0lhlesA8L1XJwgAuc4DYQZz8BDIUKWdgwt59I/X4gMfM3HOACJ+UVDrSCfgKowKcsaVnVsbAxG5noZ7jACW5wtPMZKMBG1vMsab1e1dlBeH0NFzjBTc/aaH+eJYBMIxVPDs4M1vP2Qm/DNZzgBke4mpwsAZSRq/4ShyfHi75fUVGxRpOT/Nzc3GTz4WN5hpPBDUcs/kr/YRdgKT483FjmTTfPixYt+v38+fNT1H7B2bNnc+TainKz/WDaghscVXapWd4vgEximhLeWx8+PPOmy2f/ukPz8ogNGza8X1tb+7lma5Ypuvwsx+bgBke4wplCpgUsxnWt2dMzL8zfCU1ycnK8lq9rrl69ulJe4GinMm7nwQ0PNVzVNnsVlgCZ+O3v378/5t6dFStWZNy7d2/jvn37Mt0m7NQe7nm46l4G900LSGfTAr+9UyWv8+T3j96/f/8nelHmLlmyhKHKswOOcNUD3uEhpgBp7NiwaUHmeB28KMvKyjZo5pY9derUN/oqRooRjnBV/TTaMAVI1PgYwY7NSBt2q562xqLke/hIQNfl5+fPdKtdsx04wlW/2Z+0BIglUxMF/1aVWXg8z9omSyopKSm4cOHCx2yduYUFjoYADIeWAHFkasEQMgIATkNmeEFBwaKbN29+xm83DjgaAjAhsgRwo23P2pAOnrVtvgPYee1109TcQKzJSt/Fixcrly1b9q0b7dEGHOGqS2ISLAvoIJMtajJD4dDytXnt2rUl6gLfyaPjWteEoyEAARmWAC1ksj8/3uTlv+vRDPFWRkbGef37T93GA0dDAP+kz+wCDURmEJzg9gOH015lZeVPMve/7dy58+7Lly/7hlM32LJwhKvK11PHNPkfCUshMiPYhtwsJ9d116FDh8q12/vAzXad2oIjXHWvnwC1xOQsXLjQPzlwquhV3vXr1+u2bdv2nRYpXV49w94uoTdwVR5BWNY74A4BSdplncEmo72CV9d6sbVpxvetFkP/GivycDPijpjx3oGb/x2gcfaFUjUBScTkeETa36c1svXKV1+hvnj22LFjnjhfAuGHGxzhCmdLAKNCGdFYBCQFamA0+Vry/lRTU9Ok9kvWr19fPh6zTrjBUTzKTC7WFEv/DE7Rv8tTk6Il6T/HyjFiAvH6jPnfvn17jYbXJg2D+bKARp5pDoPMuxt14y6haERjeQ1orNuHE9zgaJLvJ4AB6Bvi8AhFIxrrbTngAie4iROBltZhWYCRc5kgROLwCEWzSk3wC7jAyQiwvGyn008AmQZBfsUEIRKHN1ZDoh2Q29dwgAuc4GZwtB7TTwAjt5QITIIQicOzSk7QCzjAxYgqLR1IY5AAhkJfE4FJECJxeAMrTZTfYIcDXISZkNpBYayDBICcClYSfkoEJkGIxOFNFNImTjCDHQ5wgZN5z352FMAocITwUyIwCUKcSO8DsIIZ7EYI7RE7aft1QAEMc/lKY2cVEZgEIdorhvI1WMEMduEkanSQ6Zv4AwpAAVVko6SI8FMiMGVSWWbFUD2DEaxgBrvBISBcayocsIRuaJpshcpeu3btZ2IGQ22qjNnzzw83VDYoARAHEZTeumDpN3YBu1XIlL5X+oLw0+zs7L5z5859EgpDJBjAAiawgRGsduxvug7aAsxGZAW4zSbnBxM2EVgpTc5PZkwROMsaJudHUwNEwBqIwJx8n805CLFaeZ/Ls9Tvw0lCb4g+Gc6Hk3iocdKG/IeTdhHMa3UNfAmEok2eT2dN8gPPEoPdpsVKxADx8TSRGaww2Z/3b1HrzEal+fE0M7h6JTZJPP94Ws+Y3McvZXX8u5wD9joAAAAASUVORK5CYII=",
            con: "《新蝙蝠侠》《新蝙蝠侠》“终极之问”预告，直击年轻蝙蝠侠内心世界",
            count: 67559,
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align: middle;
  text-decoration: none;
}
/* hotTrailer开始 */
.hotTrailer {
  width: 360px;
}
.hotTrailer > h4 {
  color: #2d98f3;
  font-size: 24px;
  margin-bottom: 20px;
}
.hotTrailer-list {
  display: flex;
  flex-direction: column;
}
.hotTrailer-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 19px;
}
.item-left {
  width: 120px;
  position: relative;
}
.item-left .letImg {
  width: 100%;
  height: 100%;
}
.item-left .left-count {
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #aaa;
  padding-left: 3px;
  width: 15px;
  height: 18px;
  display: inline-block;
  line-height: 20px;
}
.hotTrailer-item:nth-child(1) .item-left .left-count,
.hotTrailer-item:nth-child(2) .item-left .left-count,
.hotTrailer-item:nth-child(3) .item-left .left-count {
  background: #f90;
}
.item-left .imgPlay {
  position: absolute;
  right: 6px;
  bottom: 6px;
  width: 24px;
  height: 24px;
  background-size: 24px;
}
.item-right {
  width: 224px;
}
.right-con {
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  color: #333;
  margin: 14px 0 10px;
}
.right-con:hover {
  color: #ef4238;
  cursor: pointer;
}
.right-control {
  color: #999;
  font-size: 12px;
  opacity: 0.9;
  display: flex;
  align-items: center;
}
.right-control::before {
  content: "";
  display: inline-block;
  margin-right: 5px;
  width: 0;
  height: 0;
  border-width: 5px 0 5px 8px;
  border-style: solid;
  border-color: transparent transparent transparent #d8d8d8;
}
/* hotTrailer结束 */
/* trailer开始 */
.trailer-info {
  width: 730px;
}
.trailer-list {
  width: 100%;
}
.trailer-item {
  width: 230px;
  height: 125px;
  float: left;
  position: relative;
  margin-bottom: 20px;
}
.trailer-item:nth-child(1),
.trailer-item:nth-child(4),
.trailer-item:nth-child(5) {
  margin-right: 20px;
}
.trailer-item .trailerImg {
  width: 100%;
  height: 100%;
}
.item-info {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 40px 10px 0 0;
}
.info-con {
  margin: 0 0 8px 10px;
  color: #fff;
  font-size: 12px;
}
.info-count {
  margin: 0 0 8px 10px;
  color: #fff;
  font-size: 12px;
}
.info-count::before {
  content: "";
  display: inline-block;
  margin-right: 5px;
  width: 0;
  height: 0;
  border-width: 5px 0 5px 8px;
  border-style: solid;
  border-color: transparent transparent transparent #d8d8d8;
}
.imgPlay {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 32px;
}
.trailer-item:nth-child(1) {
  width: 480px;
  height: 270px;
}
.trailer-fast {
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.trailer {
  width: 730px;
}
.trailer-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #2d98f3;
}
.trailer-title .new {
  font-size: 26px;
}
.trailer-title .all {
  font-size: 14px;
}
.trailer-title .all .right-arrow {
  margin-left: 7px;
}

/* trailer结束 */

/* hot */
.hot {
  width: 360px;
}
.hot > h4 {
  font-size: 24px;
  color: #ef4238;
  margin-bottom: 20px;
}
.top-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}
.item-l {
  width: 120px;
  position: relative;
}
.item-l .count {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  background: #ef4238;
  width: 15px;
  height: 18px;
  padding-left: 3px;
  display: inline-block;
  line-height: 20px;
}
.item-r {
  width: 224px;
  color: #333;
  font-size: 14px;
}
.hot-item {
  width: 100%;
  display: flex;
  padding: 9px 0;
}
.hot-item .count {
  width: 23px;
  color: #999;
}
.hot-item:nth-child(2) .count,
.hot-item:nth-child(3) .count {
  color: #ef4238;
}

.hot-con {
  width: 330px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 7px;
  color: #333;
  font-size: 14px;
}
.hot-con:hover,
.item-r:hover {
  color: #ef4238;
  cursor: pointer;
}
/* hot结束 */
.container {
  width: 100%;
}
.container-box {
  width: 1200px;
  margin: 0 auto;
}
.hot-news {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
.news {
  width: 730px;
}
.news-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #ef4238;
}
.news-title .new {
  font-size: 26px;
}
.news-title .all {
  font-size: 14px;
}
.news-title .all .right-arrow {
  margin-left: 7px;
}
.news-info {
  width: 730px;
}
.news-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.news-item {
  width: 230px;
  margin-bottom: 20px;
}
.news-item > img {
  width: 100%;
}
.item-con {
  margin: 12px 0 8px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 20px;
  height: 40px;
}
.item-control {
  display: flex;
  justify-content: space-between;
}
.control-title {
  font-size: 12px;
  color: #999;
}
.control {
  display: flex;
  font-size: 12px;
  color: #aaa;
  align-items: center;
}
.control-img {
  width: 15px;
  height: 12px;
  margin-right: 5px;
}
</style>