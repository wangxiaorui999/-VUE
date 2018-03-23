<template>
<div>
   <!-- <div class="GoTop goUp" style="display: block;">
     <img src="https://mall-res.manboker.com/newmall/CN/top.png">
     <span>顶部</span>
  </div> -->
<div id="CommodityZoneBox">
    <div class="CommodityZoneBox"  style="padding-bottom:30px;"   name="CommodityZoneBox">
        <div id="box" style="width:100%;overflow:hidden;">
            <div class="hot part1">
                <div class="headHot">
                    <h3>人气热卖</h3>
                    <div class="MoreBtn" url="../bannerHTML/Hot_More.vue"  LookMore="人气热卖查看更多">
                     <router-link :to="{path:'HotMore'}" > <span>查看更多</span></router-link>

                        <img class="MoreArrow" src="https://mall-res.manboker.com/newmall/CN/more_btn.png" />
                    </div>
                </div>
                <div class="hotList">
                    <div class="hotList" v-for="(AreaList,index) in CommodityDetailsList" v-if="AreaList.Title == '人气热卖'">
                        <div class="hotDetail" countname="+ AreaList.Title + (index + 1) +" v-for="MagicList in AreaList.Products" v-bind:id="MagicList.ProductId" @click="CommodityZoneXQ($event)">
                            <div class="hotPic">
                                <img class="icon" v-lazy="MagicList.AvatarIcon">

                                <div class="goodsBox"  v-lazy:background-image="MagicList.ShowImage" style="background-repeat:no-repeat; background-size:cover">
                                </div>
                            </div>
                            <p class="goodsName">
                                <img src="https://mall-res.manboker.com/newmall/CN/HOT.png?x-oss-process=image/format,webp/resize,w_350">
                                   {{MagicList.CategoryName}}</p>
                                   <p class="goodsNameDetail">{{MagicList.ProductName}}</p>
                                   <p class="Price">{{MagicList.SalePrice}}</p>
                               </div>
                          </div>
                </div>
            </div>

        </div>
        <div class="hot part3">
            <div class="headHot">
                <h3>新品首发</h3>
                <div class="MoreBtn" url="bannerHTML/New_More.html"    LookMore="新品首发查看更多">
                     <router-link :to="{path:'NewMore'}" > <span>查看更多</span></router-link>
                    <img class="MoreArrow" src="https://mall-res.manboker.com/newmall/CN/more_btn.png" />
                </div>
            </div>
            <div class="hotList">
                <div class="hotList" v-for="(AreaList,index) in CommodityDetailsList" v-if="AreaList.Title == '新品首发'">
                        <div class="hotDetail" countname="+ AreaList.Title + (index + 1) +" v-for="MagicList in AreaList.Products" v-bind:id="MagicList.ProductId" @click="CommodityZoneXQ($event)">
                            <div class="hotPic">
                                <img class="icon" v-lazy="MagicList.AvatarIcon">
                                <div class="goodsBox" v-lazy:background-image="MagicList.ShowImage" style="background-repeat:no-repeat; background-size:cover">
                                </div>
                            </div>
                            <p class="goodsName">
                                <img src="https://mall-res.manboker.com/newmall/CN/HOT.png?x-oss-process=image/format,webp/resize,w_350">
                                   {{MagicList.CategoryName}}</p>
                                   <p class="goodsNameDetail">{{MagicList.ProductName}}</p>
                                   <p class="Price">{{MagicList.SalePrice}}</p>
                               </div>
                          </div>
            </div>
        </div>
        <div style="width:100%;height:20px;background:#f2f2f2;"></div>
       <!--  <div class="swiper-container swiper-container2">
            <div class="swiper-wrapper">
            </div>
            <div class="swiper-pagination swiper-pagination2"></div>
        </div> -->
        <div class="swipe-div" >
            <mt-swipe :auto="4000" class="swipe">
                <mt-swipe-item v-for="item in slides">
                 <router-link :to="{path:'product'}">
                      <img v-bind:src="item.url" width="1080" height="490">
                </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div style="width:100%;height:20px;background:#f2f2f2;"></div>
        <div class="hot part4">
            <div class="headHot">
                <h3>猜你喜欢</h3>
                <div class="MoreBtn" url="bannerHTML/Like_More.html"   LookMore="猜你喜欢查看更多">
                      <router-link :to="{path:'LikeMore'}" > <span>查看更多</span></router-link>
                    <img class="MoreArrow" src="https://mall-res.manboker.com/newmall/CN/more_btn.png" />
                </div>
            </div>
            <div class="hotList">
                <div class="hotList" v-for="(AreaList,index) in CommodityDetailsList" v-if="AreaList.Title == '猜你喜欢'">
                        <div class="hotDetail" countname=" + AreaList.Title + (index + 1) +" v-for="MagicList in AreaList.Products" v-bind:id="MagicList.ProductId" @click="CommodityZoneXQ($event)">
                            <div class="hotPic">
                                <img class="icon" v-lazy="MagicList.AvatarIcon">
                                <div class="goodsBox" v-lazy:background-image="MagicList.ShowImage" style="background-repeat:no-repeat; background-size:cover">
                                </div>
                            </div>
                            <p class="goodsName">
                                <img src="https://mall-res.manboker.com/newmall/CN/HOT.png?x-oss-process=image/format,webp/resize,w_350">
                                   {{MagicList.CategoryName}}</p>
                                   <p class="goodsNameDetail">{{MagicList.ProductName}}</p>
                                   <p class="Price">{{MagicList.SalePrice}}</p>
                               </div>
                          </div>
            </div>
        </div>

    </div>
</div>
</div>
</template>
<script>
import '../../node_modules/mint-ui/lib/style.css'
import Vue from 'vue'
import axios from 'axios'
import MuseUI from 'muse-ui'
import { Swipe, SwipeItem } from 'mint-ui'
import { Lazyload } from 'mint-ui'
import McjsApi from "../commoms/McjsApi"
import app from "../commoms/config"
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
 Vue.use(MuseUI)
 Vue.use(Lazyload, {
  preLoad: 1.3,
  error: require('../assets/vue-lazyload.jpg'),
  loading: require('../assets/vue-lazyload.jpg'),
  attempt: 1
})
const urlLinks = window.location.search == "" ? "?v=1" : window.location.search;
export default {
  name: 'CommodityDetails',
   data() {
     return {
        CommodityDetailsList:[],
        slides:[]
            }
        },
  mounted() {
     axios.get("//product.manboker.com/api/Mart/GetMartDailyActivityByPlace?countryCode=CN" + "&title=shouye")
        .then(response => {
                console.log(response);
                this.CommodityDetailsList = response.data.Response[0].Places ;
                console.log(this.CommodityZoneList)
        })
        .catch(err => {
             console.log(err)
        }),
        this.$nextTick(function() {
            this.CommodityDetailsBanner();
        })
  },
     methods: {
         CommodityDetailsBanner () {
            this.slides = [
             { url: require('../assets/CrystalPuzzle.jpg') },
             { url: require('../assets/T-topic.png') },
             { url: require('../assets/huiben.jpg') },
             { url: require('../assets/P-topic.jpg') },
             { url: require('../assets/Power.jpg') },
             { url: require('../assets/Puzzle1000.jpg') },
             { url: require('../assets/sijin.jpg') }
            ]
        },
         CommodityZoneXQ(event){
          var el = event.currentTarget;
          var id = $(el).attr("id");
            if (app.config.isMomanApp) {
                    McjsApi.openProductDetail(id);
                    return false;
                 } else {
                    window.location = app.urls.ProductDetailURL + "?productid=" + id;
                  }
            console.log(el.innerHTML);
       }
      //  MoreXQ(event){
      //     var el = event.currentTarget;
      //   var url = $(el).attr("url");
      //     window.location.href = url + urlLinks;
      //  }
     }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
*{
  margin:0;
  padding:0;
}
body{
    width: 1080px;
}

.swipe-div{
    width:1080px;
    height:490px;
}
  .CommodityZoneList  .goodsName{
         font-size: 42px;
    margin-top: 38px;
    color: #000;
    text-align: center;
    height: 58px;
        }
#CommodityZoneBox{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-right: 17px;
    box-sizing: border-box;
}
.CommodityZoneBox{
    width: 100%;
    padding: 0px 0 30px;
    background: #fff;
    font-size: 0;
    /*overflow-y: scroll;*/
    /*padding-top: 211px;*/
}
.headHot{
    box-sizing: border-box;
}
.ios {
    background-image: url(//mall-res.manboker.com/newmall/CN/goodsImg/Onlineretailers_back.png);
}
.CommodityZoneTitleBar {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    border-bottom: 2px solid #ccc;
    height: 213px;
    background-color: #fff;
}
.CommodityZoneoTitle {
    width: 100%;
    height: 168px;
    line-height: 168px;
    position: absolute;
    left: 0;
    top: 43px;
    text-align: center;
    font-size: 54px;
    color: #444;
    background: #fff;
}
.CommodityZoneReturn {
    position: absolute;
    left: 12px;
    top: 30px;
    z-index: 1000;
    width: 120px;
    height: 120px;
}


.CommodityZone {
    width: 100%;
    background: url("https://mall-res.manboker.com/newmall/CN/ecommerce_tu.png") ;
}

.CommodityZone .CommodityZoneTitle {
    width: 100%;
    height: 166px;
    font-size: 46px;
    color: #4e4e4e;
    line-height: 166px;
    text-align: center;
    font-weight: 700;
    letter-spacing: 10px;
}

.CommodityZone .CommodityZoneList {
    width: 1040px;
    height: 100%;
    margin: 0 auto;
    /*display: flex;*/
    padding-left: 25px;
    padding-right: 25px;
    box-sizing: border-box;
    background-color: #fff;
}

.CommodityZone .CommodityZoneList .CommodityZoneGoods {
   display: inline-block;
    /* vertical-align: top; */
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    /*flex: 1;*/
    padding-top: 24px;
    width:32.33%
}

.CommodityZone .CommodityZoneList .CommodityZoneGoods .CommodityZoneGoodsPic .goodsBox {
    width: 230px;
    height: 230px;
    margin: 35px auto;


}

.CommodityZone .CommodityZoneList .CommodityZoneGoods .CommodityZoneGoodsPic .icon {
       width: 110px;
    height: 110px;
    position: absolute;
    right: -57px;
    top: 40px;
    border-radius: 50%;
        z-index: 9999;
}

.CommodityZone .CommodityZoneList .CommodityZoneGoods .CommodityZoneGoodsTitle {
    font-size: 36px;
    margin-top: 6px;
    color: #999;
    text-align: center;
}

.CommodityZone .CommodityZoneList .CommodityZoneGoods .CommodityZoneGoodsPrice {
  font-size: 42px;
    color: #ff452c;
    text-align: center;
    margin: 6px 0 25px;
}

.main .MagicShopContent .CommodityZone .CommodityZoneList .twoCommodityZoneGoods {
    margin-left: 90px;
    margin-right: 90px;
    text-align: center;
}

.CommodityZone .CommodityZoneGoodsViewAll {
    width: 100%;
    height: 166px;
    padding-top: 44px;
    box-sizing: border-box;
}

.CommodityZone .CommodityZoneGoodsViewAll .CommodityZoneGoodsBtn {
    width: 470px;
    height: 80px;
    border-radius: 40px;
    background-color: #4e4e4e;
    color: #ffffff;
    font-size: 38px;
    line-height: 80px;
    text-align: center;
    margin: 0px auto;
}
.hot, .hot .headHot {
    width: 100%;
    overflow: hidden;
    position: relative;
}
.hot .headHot h3 {
    margin: 32px 0 30px;
    font-size: 45px;
    color: #000;
    text-indent: 50px;
    padding-bottom: 30px;
    border-bottom: 1px solid #dfdfdf;
        text-align: left;
}
.hot .headHot .MoreBtn {
    height: 100%;
    width: auto;
    position: absolute;
    right: -32px;
    top: 33px;
    margin-right: 50px;
    font-size: 0;
    overflow: hidden;
}
.hot .headHot .MoreBtn span {
    display: inline-block;
    vertical-align: middle;
    font-size: 42px;
    color: #999;
    margin-right: 12px;
}
.hot .headHot .MoreBtn img {
    display: none;
    vertical-align: middle;
}
.hot .hotList {
    width: 100%;
    min-height: 200px;
    overflow: hidden;
}
.hot .hotList .hotDetail:nth-child(2n+1) {
    border-right: 1px solid #dfdfdf;
}
.hot .hotList .hotDetail {
    display: inline-block;
    vertical-align: top;
    width: 50%;
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: 1px solid #dfdfdf;
    position: relative;
}
.hot .hotList .hotDetail .hotPic {
    width: 440px;
    margin: 0 auto;
}
.hot .hotList .hotDetail .hotPic img.icon {
    width: 135px;
    height: 135px;
    position: absolute;
    right: 33px;
    top: 57px;
    border-radius: 50%;
    z-index: 999;
}
.goodsBox {
    width: 375px;
    height: 375px;
    margin: 0 auto;
    margin-top: 80px;
}
.hot .hotList .hotDetail .goodsName {
    font-size: 42px;
    margin-top: 38px;
    color: #000;
    text-align: center;
}
.hot .hotList .hotDetail .goodsName img {
    position: relative;
    left: -16px;
    vertical-align: middle;
    margin-right: 0px;
}
.hot .hotList .hotDetail .goodsNameDetail {
    font-size: 36px;
    margin-top: 14px;
    color: #999;
    text-align: center;
}
.hot .hotList .hotDetail .Price {
    font-size: 42px;
    color: #ff452c;
    text-align: center;
    margin: 14px 0 25px;
}
</style>
