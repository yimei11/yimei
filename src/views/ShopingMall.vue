<template>
  <div class="shop-wrapper">
    <div class="shop-join">
      <p>商家入驻</p>
    </div>
    <ul class="shop-list">
      <li v-for="item in shopList" :key="item.id">
        <img :src="item.imgsrc" alt />
        <p class="title">{{item.title}}</p>
        <p class="price">
          <strong>{{item.nowPrice}}</strong>
          <del>{{item.oldPirce}}</del>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"ShopingMall",
    data(){
        return {
            shopList:[
                {id:1,imgsrc:"https://p0.meituan.net/movie/d7cdd2528ecdd3093640c47705cf525374904.jpg@348w_348h_2e",title:"iPhone13手机壳草莓熊",oldPirce:"￥69",nowPrice:"￥69"},
                {id:2,imgsrc:"https://p1.meituan.net/movie/118db4718dff478fb35bcdb8b21fbc9e67990.jpg@348w_348h_2e",title:"迪士尼草莓熊TWS无线蓝牙耳机",oldPirce:"￥109",nowPrice:"￥109"},
                {id:3,imgsrc:"https://p0.meituan.net/movie/ba986e738098893f3be5b569ce729df759829.jpg@348w_348h_2e",title:"迪士尼骨传导立体耳机",oldPirce:"￥199",nowPrice:"￥199"},
                {id:4,imgsrc:"https://p0.meituan.net/movie/5e2ada32ffd8be195bfcb603deb8339865694.jpg@348w_348h_2e",title:"迪士尼米奇香薰防蚊手环",oldPirce:"￥69.9",nowPrice:"￥69.9"},
                {id:5,imgsrc:"https://p1.meituan.net/movie/676c8e8793155c2faddca7a014f1de4e88614.jpg@348w_348h_2e",title:"漫威骨传导蓝牙耳机",oldPirce:"￥269",nowPrice:"￥269"},
                {id:6,imgsrc:"https://p0.meituan.net/movie/83325f3f9af6d91d428fe2fe04a905c1120472.jpg@348w_348h_2e",title:"吸管水杯TRITAN材质",oldPirce:"￥59",nowPrice:"￥59"},
                {id:7,imgsrc:"https://p0.meituan.net/movie/7e63ae64eb8c6531dedd1c694bf1dd2470804.jpg@348w_348h_2e",title:"无线蓝牙耳机5.0Tws",oldPirce:"￥119",nowPrice:"￥119"},
                {id:8,imgsrc:"https://p0.meituan.net/movie/b358afb016efce3d199eb034a1ea3d9155333.jpg@348w_348h_2e",title:"TOKIDOKI无线蓝牙耳机",oldPirce:"￥199",nowPrice:"￥199"},
                {id:9,imgsrc:"https://p1.meituan.net/movie/2be01265e115e324d7c4e9ba2ce6737b46182.jpg@348w_348h_2e",title:"TOKIDOKI无线蓝牙耳机",oldPirce:"￥158",nowPrice:"￥158"},
            ]
        }
    }
}
</script>

<style scoped>
.shop-wrapper {
  width: 71.5%;
  margin: 0 auto;
  margin-bottom: 82px;
}
.shop-join {
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.shop-join p {
  width: 60px;
  height: 20px;
  font-size: 15px;
  padding: 10px 15px;
  color: #f03d37;
  border: 1px solid #f03d37;
  border-radius: 22.5px;
  cursor: pointer;
}
.shop-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.shop-list li {
  width: 285px;
  height: 353px;
  margin-bottom: 30px;
  text-align: center;
}
.shop-list li img {
  width: 285px;
  height: 285px;
}
.shop-list li .title {
  padding-top: 20px;
  font-size: 18px;
  color: #333;
}
.shop-list li .price {
  font-size: 18px;
}
.shop-list li .price strong {
  margin-right: 6px;
  color: #f03d37;
}
.shop-list li .price del {
  color: #999;
}
</style>