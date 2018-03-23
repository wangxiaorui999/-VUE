<template>
  <div>
         <!-- 人气小店部分 -->
          <div class="PartingLine"></div>
          <div class="PopularShop " style="height: 180px">
          <div class="PopularShopicon">
            <img src="https://mall-res.manboker.com/newmall/CN/goodsImg/search/hot.png" alt="" width="110" height="110">
          </div>
          <span class="borderbgc"></span>

          <div class="PopularShopcontent">
           <swiper :options="swiperOption" ref="mySwiper">
 <!-- slides -->
              <swiper-slide v-for="PopularShopitem in PopularhopBanner" class="swiper-no-swiping" >
                <div  v-bind:uid="PopularShopitem.UserId" class="StudioAuthorF"  style="height:180px" @click="PopularShopXQ($event)">
                  <div class="StudioAuthor">
                    <div class="StudioAuthorIcon"><img v-bind:src="PopularShopitem.UserIcon" v-bind:uid="PopularShopitem.UserId" width="86"
                        height="86" style="border-radius:50% "></div>
                    <div class="StudioAuthorWords">
                      <div>
                        <p class="StudioAuthorName">{{PopularShopitem.UserName}}</p><img  v-if="PopularShopitem.IsArtist == true"  src="https://mall-res.manboker.com/newmall/CN/newstudio/myspace_atr.png?x-oss-process=image/format,webp/resize,w_350">
                        <span   v-if="PopularShopitem.IsOfficial== true"  class="isoffocial">官方推荐</span>
                        <img  v-if="PopularShopitem.CertifiedType== 1"  src="https://mall-res.manboker.com/newmall/CN/newstudio/myspace_ordinary.png">
                        <img  v-if="PopularShopitem.CertifiedType== 2"  src="https://mall-res.manboker.com/newmall/CN/newstudio/myspace_Artist.png">
                      </div>
                      <p class="StudioAuthorDetail"  v-if="PopularShopitem.UserSign == ''">魔漫相机，遇见更好的自己</p>
                      <p class="StudioAuthorDetail"  v-else   >{{PopularShopitem.UserSign}}</p>
                    </div>
                  </div>
                  <div class="PopularShopimg">
                    <div class="left" ><img v-bind:src= "PopularShopitem.LatestProducts[0].Poster" alt="" width="126" height="126"></div>
                    <div class="right" ><img v-bind:src= "PopularShopitem.LatestProducts[1].Poster" alt="" width="126" height="126"></div>
                  </div>
                </div>

              </swiper-slide>
        </swiper>
           <!--  <div class="swiper-container4">
              <div class="swiper-wrapper"  >
                <div class="swiper-slide swiper-no-swiping swiper-slide-next"  style="height: 180px"  v-for="PopularShopitem in PopularhopBanner">
                <div  v-bind:uid="PopularShopitem.UserId" >
                  <div class="StudioAuthor">
                    <div class="StudioAuthorIcon"><img v-bind:src="PopularShopitem.UserIcon" v-bind:uid="PopularShopitem.UserId" width="86"
                        height="86" style="border-radius:50% "></div>
                    <div class="StudioAuthorWords">
                      <div>
                        <p class="StudioAuthorName">{{PopularShopitem.UserName}}</p><img  v-if="PopularShopitem.IsArtist == true"  src="https://mall-res.manboker.com/newmall/CN/newstudio/myspace_atr.png?x-oss-process=image/format,webp/resize,w_350">
                        <span   v-if="PopularShopitem.IsOfficial== true"  class="isoffocial">官方推荐</span>
                        <img  v-if="PopularShopitem.CertifiedType== 1"  src="https://mall-res.manboker.com/newmall/CN/newstudio/myspace_ordinary.png">
                        <img  v-if="PopularShopitem.CertifiedType== 2"  src="https://mall-res.manboker.com/newmall/CN/newstudio/myspace_Artist.png">
                      </div>
                      <p class="StudioAuthorDetail"  v-if="PopularShopitem.UserSign == ''">魔漫相机，遇见更好的自己</p>
                      <p class="StudioAuthorDetail"  v-else   >{{PopularShopitem.UserSign}}</p>
                    </div>
                  </div>
                  <div class="PopularShopimg">
                    <div class="left" ><img v-bind:src= "PopularShopitem.LatestProducts[0].Poster" alt="" width="126" height="126"></div>
                    <div class="right" ><img v-bind:src= "PopularShopitem.LatestProducts[1].Poster" alt="" width="126" height="126"></div>
                  </div>
                </div>
              </div>
              </div>
            </div> -->

          </div>
        </div>
          <div class="PartingLine"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import McjsApi from "../commoms/McjsApi";
import app from "../commoms/config";
Vue.use(VueAwesomeSwiper)
export default {
  name: 'PopularShop',
   data() {
     return {
        PopularhopBanner:[],
         swiperOption: {
          direction: 'vertical',
            // loop: true,
            observer: true,
            observeParents: true,
            autoplayDisableOnInteraction: false,
            autoplay: 4000
        }

            }
        },
   components: {
        swiper,
        swiperSlide
        },
  mounted() {
        axios.get("//mystudioapi.manboker.com/api/ShopInfos/Boutiques?showType=1")
        .then(response => {
            console.log(response.data.Data);
             this.PopularhopBanner = response.data.Data;

        })
        .catch(err => {
            console.log(err)
       })
        // this.$nextTick(function() {
            // this.PopularShopXQ(event);
        // })
  },
  methods:{
       PopularShopXQ(event){
        var el = event.currentTarget;
        var uid = $(el).attr("uid");
          if (app.config.isMomanApp) {
                    McjsApi.openSpecificSpacePageById(uid);
                    return false;
                } else {
                    window.location = app.urls.GetPopularhopDetailsURL + uid;
                    return false;
                }
          console.log(el.innerHTML);
       }
     }
}
// if (!/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//      document.getElementsByClassName("return")[0].className += "android";
//  } else {
//    document.getElementsByClassName("return")[0].className += "Indexios";
//  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
*{
  margin:0;
  padding:0;
}
.swipe-div{
   width:1080px;
   height:652px;

}
.mint-swipe-indicator{
   width:13px;
   height:13px;
}

/*//全部商品部分*/
.allCategory {
    width: 100%;
    height: auto;
    padding: 39px 35px;
    box-sizing: border-box;
}
.allCategory .Box {
    width: 1010px;
    overflow-x: scroll;
    overflow-y: hidden;
}
.allCategory .Box .nav {
    width: 2480px;
    overflow: hidden;
}
.allCategory .Box .nav li {
    float: left;
    margin: 15px;
    list-style: none;
    padding: 24px 30px;
    border-radius: 10px;
    font-size: 40px;
}
.allCategory .Box .nav li.orange {
    border: 2px solid #ec9e43;
    color: #ec9e43;
}
.allCategory .Box .nav li.blue {
    border: 2px solid #29d4ff;
    color: #29d4ff;
}
.allCategory .Box .nav li.gray {
    border: 2px solid #d2d2d2;
    color: #666;
}
.allCategory .Box .nav li.red {
    border: 2px solid #ff7891;
    color: #ff7891;
}
/* 人气小店部分  */
 .PartingLine {
    width: 100%;
    height: 30px;
    background: #f2f2f2;
}
.PopularShop {
    height: 180px;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    /* line-height: 180px; */
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.PopularShop .PopularShopicon {
    padding: 0 35px;
    width: 110px;
    height: 110px;
}
.PopularShop .borderbgc {
    display: inline-block;
    width: 1px;
    /* height: 54px; */
    background-color: #4e4e4e;
}
.PopularShop .PopularShopcontent {
    height: 180px;
    overflow: hidden;
    flex: 1;
}
.PopularShop .PopularShopcontent .StudioAuthor {
    height: 170px;
    width: 595px;
    overflow: hidden;
    box-sizing: border-box;
    float: left;
    text-align: left;
}
.PopularShop .PopularShopcontent .StudioAuthor .StudioAuthorIcon {
    display: inline-block;
    vertical-align: middle;
    width: 86px;
    height: 86px;
    margin-right: 30px;
    margin-left: 34px;
    border-radius: 50%;
    /* background-color: pink; */
    border: 1px solid #bfbfbf;
    margin-right: 26px;
}
.PopularShop .PopularShopcontent .StudioAuthor .StudioAuthorWords {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    height: 170px;
}
.PopularShop .PopularShopcontent .StudioAuthor .StudioAuthorWords > div {
    height: 55px;
    margin-top: 32px;
    width: 320px;
}
.PopularShop .PopularShopcontent .StudioAuthor .StudioAuthorWords > div .StudioAuthorName {
    font-size: 40px;
    color: #4e4e4e;
    margin-bottom: 10px;
    display: inline-block;
    max-width: 200px;
    text-overflow: ellipsis;
    float: left;
    white-space: nowrap;
    overflow: hidden;
}
.PopularShop .PopularShopcontent .StudioAuthor .StudioAuthorWords > div img {
    margin-left: 8px;
    float: left;
    /* vertical-align: bottom; */
    width: 40px;
    height: 40px;
    margin-top: 6px;
    object-fit: cover;
}
.PopularShop .PopularShopcontent .StudioAuthor .StudioAuthorWords .StudioAuthorDetail {
    font-size: 32px;
    color: #959595;
    width: 380px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 15px;
    /* text-align: left; */
    position: absolute;
}
.PopularShop .PopularShopcontent .PopularShopimg {
    float: left;
}
.PopularShop .PopularShopcontent .PopularShopimg .left {
    width: 126px;
    height: 126px;
    /* background-color: pink; */
    margin-right: 20px;
    float: left;
    margin-top: 27px;
}
.PopularShop .PopularShopcontent .PopularShopimg .right {
    width: 126px;
    height: 126px;
    /* background-color: pink; */
    margin-right: 20px;
    float: left;
    margin-top: 27px;
}
.borderbgc {
    display: inline-block;
    width: 1px;
    height: 54px;
    background-color: #4e4e4e;
}
.PopularShop .swiper-container{
    height:180px;
}
</style>
