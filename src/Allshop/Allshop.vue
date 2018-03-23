<template>
         <!-- 全部小店   -->
                <div class="AllShop">
                  <div class="AllShopTitle">
                             全部小店
                   </div>
                    <div class="AllShopTab">
                     <!-- 最新小店   -->
                        <div class="newShop"  @click="greet($event)">
                        <ul class="select">
                            <li class="ck ">
                                <span class="down  active">综合排序</span>
                                <ul class="second  ShopSelectHide">
                                    <li class="active comprehensive _click" data-id="5" @click="SecectLi($event)">综合排序</li>
                                    <li class="NewShop _click" data-id="1" @click="SecectLi($event)">最新小店</li>
                                    <li data-id="2" class="LatestRelease _click" @click="SecectLi($event)">最新发布</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                       <!-- 销量优先   -->
                    <div class="SalesVolume tap _click" data-id="4" @click="Shoptap($event)">销量优先</div>
                      <!-- 获赞数   -->
                      <div class="WonPraise tap _click" data-id="3" @click="Shoptap($event)">获赞数</div>
                    </div>
                     <!--  小店搜索结果   -->
                      <div class="page-infinite-wrapper" ref="wrapper" :style="{ height:  wrapperHeight + 'px' }">
                        <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" infinite-scroll-immediate-check="loading" v-if="AllShopList">
                          <li v-for="ShopInformation in AllShopList" class="page-infinite-listitem">
                        <div class="ShopsearchResult" >
                        <div class="ShopsearchResultBox" >
                         <div class="ShopsearchResultTop" @click="ShopsearchResultTopXQ($event)" v-bind:uid="ShopInformation.UserId">
                            <div class="ShopsearchResultIcon" >
                              <img v-lazy="ShopInformation.UserIcon" alt="">
                           </div>
                            <div class="ShopsearchResultWords" >
                            <div>
                            <p class="ShopsearchResultAuthorName">店主:{{ShopInformation.UserName}}</p>
                            <!--  显示是不是会员图标   -->
                           <img class="CertifiedType" v-if="ShopInformation.CertifiedType == 1" src="https://mall-res.manboker.com/newmall/CN/newstudio/myspace_ordinary.png">
                           <img class="CertifiedType" v-if="ShopInformation.CertifiedType == 2" src="https://mall-res.manboker.com/newmall/CN/newstudio/myspace_Artist.png">
                           <img class="IsArtist" v-if="ShopInformation.IsArtist == true" src="https://mall-res.manboker.com/newmall/CN/newstudio/myspace_atr.png?x-oss-process=image/format,webp/resize,w_350">
                           <span class="ShopsearchResultoffocial" v-if="ShopInformation.BoutiqueType == 0">官方推荐</span>
                          </div>
                          <p class="ShopsearchResultDetail" v-if="ShopInformation.UserSign == ''">魔漫相机，遇见更好的自己</p>
                          <p class="ShopsearchResultDetail" v-else>{{ShopInformation.UserSign}}</p>
                       </div>
                      </div>
                        <!--  当图片为一张的时候  -->
                         <div class="ShopsearchResultPicture onepicture"  v-if="ShopInformation.ProductInfos.length==1" v-lazy:background-image="ShopInformation.ProductInfos[0].Poster" style="background-repeat:no-repeat; background-size:cover" v-bind:uid="ShopInformation.ProductInfos[0].UserId" v-bind:pid="ShopInformation.ProductInfos[0].ProductId" @click="ShopsearchResultPictureXQ($event)">
                         </div>

                         <!--  当图片为两张张的时候  -->
                         <div class="ShopsearchResultPicture twopicture"  v-if="ShopInformation.ProductInfos.length==2" >
                            <div class="twopicture-left  pictureClick " v-lazy:background-image="ShopInformation.ProductInfos[0].Poster" style="background-repeat:no-repeat; background-size:cover" v-bind:uid="ShopInformation.ProductInfos[0].UserId" v-bind:pid="ShopInformation.ProductInfos[0].ProductId" @click="ShopsearchResultPictureXQ($event)"></div>
                           <div class="twopicture-right  pictureClick" v-lazy:background-image="ShopInformation.ProductInfos[1].Poster" style="background-repeat:no-repeat; background-size:cover" v-bind:uid="ShopInformation.ProductInfos[1].UserId" v-bind:pid="ShopInformation.ProductInfos[1].ProductId" @click="ShopsearchResultPictureXQ($event)"></div>
                        </div>
                        <!--  当图片为3张张的时候  -->
                        <div class="ShopsearchResultPicture threePicture"  v-if="ShopInformation.ProductInfos.length==3" >
                            <div class="threePicture-left pictureClick " v-lazy:background-image="ShopInformation.ProductInfos[0].Poster" style="background-repeat:no-repeat; background-size:cover" v-bind:uid="ShopInformation.ProductInfos[0].UserId" v-bind:pid="ShopInformation.ProductInfos[0].ProductId" @click="ShopsearchResultPictureXQ($event)"></div>
                           <div class="threePicture-right pictureClick" >
                               <div class="threePicture-right-top  pictureClick"  v-lazy:background-image="ShopInformation.ProductInfos[1].Poster" style="background-repeat:no-repeat; background-size:cover" v-bind:uid="ShopInformation.ProductInfos[1].UserId" v-bind:pid="ShopInformation.ProductInfos[1].ProductId" @click="ShopsearchResultPictureXQ($event)">
                               </div>
                                 <div class="threePicture-right-bottom  pictureClick"  v-lazy:background-image="ShopInformation.ProductInfos[2].Poster" style="background-repeat:no-repeat; background-size:cover" v-bind:uid="ShopInformation.ProductInfos[2].UserId" v-bind:pid="ShopInformation.ProductInfos[2].ProductId" @click="ShopsearchResultPictureXQ($event)">
                               </div>
                           </div>
                        </div>

                         </div>
                    </div>
                     </li>
                      </ul>
                       <p v-show="loading" class="page-infinite-loading" style="position:relative">
                          <span type="fading-circle"></span>
                           <img src="https://mall-res.manboker.com/newmall/CN/loading.gif" width="32" height="32" style="position:absolute;top:25px;left:425px;"/>
                          加载中......
                      </p>

              </div>

                   <!--这里是弹出框提示-->
                 <div  class="Prompt"   style="display:none">
                     没有更多数据了
                 </div>
                </div>
</template>
<script>
import '../css/common.css'
import '../../node_modules/mint-ui/lib/style.css'
import  '../../node_modules/mint-ui/src/assets/font/iconfont.css'
import jquery from '../assets/jquery/jquery.js'
import Vue from 'vue'
import axios from 'axios'
import MuseUI from 'muse-ui'
import { InfiniteScroll } from 'mint-ui';
import { Lazyload } from 'mint-ui'
import McjsApi from "../commoms/McjsApi";
import app from "../commoms/config";
Vue.use(InfiniteScroll);
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: require('../assets/vue-lazyload.jpg'),
  loading: require('../assets/vue-lazyload.jpg'),
  attempt: 1
})
var AllshopTop = ''
var lastShopID = 0
//var AllShopList = []
export default {
  name: 'AllShop',
  data() {
      return {
        AllShopList:[],
        loading: false,
        allLoaded: false,
        wrapperHeight: 0,
        searchBarFixed:false
      }
   },
    methods:{
         handleScroll () {
           var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
           var offsetTop = document.querySelector('.AllShop').offsetTop
            if (scrollTop > offsetTop) {
               this.searchBarFixed = true
             } else {
               this.searchBarFixed = false
             }
          },
         loadMore() {
              // 防止多次加载
         if (this.loading) {
           return false
         }

           this.loading = true;
        setTimeout(() => {
            // 这里进行发送ajax请求
            console.log(this.AllShopList);
            axios.get("//mystudioapi.manboker.com/api/ShopInfos?pageSize=5"+"&sortType=" + $('._click.active').attr("data-id") + "&lastShopId=" + lastShopID)
            .then(response => {
              if(response.data.Data.length){
                   for (let i = 0; i <response.data.Data.length; i++) {
                    this.AllShopList.push(response.data.Data[i]);
                  }
              }else{
                  $(".Prompt").css("display", "block")
            setTimeout(function () {
                $(".Prompt").css("display","none")
             },1500)
              }

               lastShopID = this.AllShopList[this.AllShopList.length-1].Id
            })
            .catch(err => {
                console.log(err)
           })
          this.loading = false;
     }, 2500);
         },
         // 点击销量和获赞数
        Shoptap(){
      var getBoundingClientRect = this.$refs.wrapper.getBoundingClientRect().top;
      var clientHeight = document.documentElement.clientHeight
      this.wrapperHeight = Math.abs(getBoundingClientRect - clientHeight);
      $(".page-infinite-wrapper").css("height",this.wrapperHeight)
      console.log(this.wrapperHeight);
          //  $(".page-infinite-wrapper").html("");
           $(event.target).addClass("active").siblings().removeClass("active")
            if($(".newShop .select .second").hasClass("ShopSelectShow")){
                $(".newShop .select .second").removeClass("ShopSelectShow").addClass("ShopSelectHide")
            }
            if($(".AllShop .AllShopTab .newShop .select span").hasClass("active")){
                $(".AllShop .AllShopTab .newShop .select span").removeClass("active").removeClass('down').addClass('up').siblings('ul').children('li').removeClass('active')
        }
          if($(".AllShop .AllShopTab .newShop .select span").hasClass("down1")){
            $(".AllShop .AllShopTab .newShop .select span").removeClass("down1").addClass('up')
          }
           this.wrapperHeight = this.$refs.wrapper.getBoundingClientRect() - document.documentElement.clientHeight.top;
          lastShopID = 0
          this.AllShopList = []
              this.loadMore()
          },
         // 点击下拉框进行显示隐藏
       greet() {
           if($(".newShop .select .second").hasClass("ShopSelectHide")){
            $(".newShop .select .second").removeClass("ShopSelectHide").addClass("ShopSelectShow").siblings('span').removeClass('down').addClass('stopClick')
             if( $(".AllShop .AllShopTab .newShop .select span ").hasClass('up')){
                $(".AllShop .AllShopTab .newShop .select span").removeClass('up').addClass('down1');
             }else if($(".AllShop .AllShopTab .newShop .select span ").hasClass('down1')){
                $(".AllShop .AllShopTab .newShop .select span ").removeClass('down1').addClass('stopClick')
             }
           }else{
            $(".newShop .select .second").removeClass("ShopSelectShow").addClass("ShopSelectHide").siblings('span').removeClass('stopClick').addClass('down')
           }
        },
        // 点击下拉框的每一条
        SecectLi(){
    var getBoundingClientRect = this.$refs.wrapper.getBoundingClientRect().top;
      var clientHeight = document.documentElement.clientHeight
      this.wrapperHeight = Math.abs(getBoundingClientRect - clientHeight);
      $(".page-infinite-wrapper").css("height",this.wrapperHeight)
      console.log(this.wrapperHeight);
            this.wrapperHeight = this.$refs.wrapper.getBoundingClientRect() - document.documentElement.clientHeight.top;
            console.log($(event.target));
             $(event.target).addClass("active").siblings('li').removeClass("active").parent().siblings('span').text($(event.target).text()).addClass('active').parent().parent().parent().siblings('div').removeClass('active');
             lastShopID = 0
             this.AllShopList = []
              this.loadMore()
        },
        // 点击跳转到店主详情页
        ShopsearchResultTopXQ(event){
            let el = event.currentTarget;
            let uid = $(el).attr("uid");
            if (app.config.isMomanApp) {
                mcAPI.openSpecificSpacePageById(uid);
            } else {
                window.location = "https://artist.momentcam.net/page/MySpace.html?language=zh&appversion=87&fromtype=html%3A1.0%3Ah5&userid=" + uid;
            }
        },
        ShopsearchResultPictureXQ(event){
            let el = event.currentTarget;
            let pid = $(el).attr("pid");
            let trace = encodeURIComponent("fuid:" + $(el).attr('uid'));
            window.location = app.urls.ProductDetailURL + "?productid=" + pid;
            return false;
        }

    },
    mounted(){
         var getBoundingClientRect = this.$refs.wrapper.getBoundingClientRect().top;
      var clientHeight = document.documentElement.clientHeight
      this.wrapperHeight = getBoundingClientRect - clientHeight
      window.addEventListener('scroll', this.handleScroll)
      // this.wrapperHeight = this.$refs.wrapper.getBoundingClientRect() - document.documentElement.clientHeight.top;
      //this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      axios.get("//mystudioapi.manboker.com/api/ShopInfos?pageSize=5" + "&sortType=" + 5 + "&lastShopId=" + 0)
           .then(response => {
              console.log(response.data.Data);
               // for (let i = 1; i <= response.data.Data; i++) {
               //       this.AllShopList.push(i);
               //    }
               this.AllShopList = response.data.Data
                lastShopID = this.AllShopList[this.AllShopList.length-1].Id
           })
           .catch(err => {
           console.log(err)
        })
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
.page-infinite-loading{
   font-size:30px;
   height:80px;
   line-height:80px;

}
.page-infinite-listitem{
   display:inline-block;
   height:100%;
}
.ShopSelectHide{
    display: none
}
.ShopSelectShow{
   display: block
}
.active {
    color: #fa9c14
}
/*// 黄色箭头向上*/
.stopClick {
    background: url(//mall-res.manboker.com/newmall/CN/Activity/Studio/down_click1.png) no-repeat 80% 50%;

}
/*// 黑色箭头向下*/
.up {
    background: url(//mall-res.manboker.com/newmall/CN/Activity/Studio/down.png) no-repeat 80% 50%;
}
.down1 {
    background: url(//mall-res.manboker.com/newmall/CN/Activity/Studio/down1.png) no-repeat 80% 50%;
}

.AllShop {
    height: 100%;
}
.active {
    color: #fa9c14 !important;
}
.AllShop .AllShopTitle {
    height: 168px;
    line-height: 168px;
    font-size: 54px;
    margin-left: 20px;
    text-align: left;
}
.AllShop .AllShopTab {
    width: 100%;
    height: 145px;
    background-color: #fff;
    border: 2px solid #e5e5e5;
    border-right: none;
    border-left: none;
    margin-top: -1px;
    height: 145px;
    line-height: 145px;
    z-index: 99988;
    position: relative;
    display: flex;
}
.AllShop .AllShopTab .newShop {
    font-size: 40px;
    flex: 1;
    text-align: center;
}
.AllShop .AllShopTab .SalesVolume {
    text-align: center;
    font-size: 40px;
    flex: 1;
}
.AllShop .AllShopTab .WonPraise {
    text-align: center;
    font-size: 40px;
    flex: 1;
}
.AllShop .AllShopTab .newShop .select {
    background-color: #FFF;
}
.AllShop .AllShopTab .newShop .select .down {
    background: url(//mall-res.manboker.com/newmall/CN/Activity/Studio/down_click.png) no-repeat 80% 50%;
}
.AllShop .AllShopTab .newShop .select span {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
}
.AllShop .AllShopTab .newShop .select .second {
    width: 100%;
    position: absolute;
    top: 147px;
    left: 0;
    background-color: #fff;
    z-index: 99;
}
.AllShop .AllShopTab .newShop .select .second li {
    height: 125px;
    line-height: 125px;
    padding-left: 92px;
    text-align: center;
    text-align: left;
    box-sizing: border-box;
    border-bottom: 1px solid #b7b7b7;
}
.AllShop .AllShopTab .SalesVolume {
    text-align: center;
    font-size: 40px;
    flex: 1;
}
.AllShop .AllShopTab .WonPraise {
    text-align: center;
    font-size: 40px;
    flex: 1;
}
/*小店搜索结果展示*/
.AllShop .ShopsearchResult {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    float: left;
}
.AllShop .ShopsearchResult .ShopsearchResultIcon {
    display: inline-block;
    vertical-align: middle;
    margin-left: 34px;
    border-radius: 50%;
    border: 1px solid #bfbfbf;
    margin-right: 26px;
}
.AllShop .ShopsearchResult .ShopsearchResultIcon img {
    object-fit: cover;
    border: 0;
    width: 118px;
    height: 118px;
    border-radius: 50%;
}
.AllShop .ShopsearchResult .ShopsearchResultWords {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    height: 170px;
}
.AllShop .ShopsearchResult .ShopsearchResultWords div {
    height: 55px;
    margin-top: 32px;
    display: flex;
    -webkit-align-items: center;
    vertical-align: middle;
    margin-bottom: 7px;
}
.AllShop .ShopsearchResult .ShopsearchResultWords div .ShopsearchResultAuthorName {
    font-size: 40px;
    color: #4e4e4e;
    display: inline-block;
    max-width: 450px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 55px;
    line-height: 55px;
}
.AllShop .ShopsearchResult .ShopsearchResultWords div img {
    margin-left: 4px;
    margin-top: 0px;
    margin-right: 4px;
    width: 40px;
    height: 40px;
    align-items: center;
    -webkit-align-items: center;
    vertical-align: middle;
}
.AllShop .ShopsearchResult .ShopsearchResultWords div .ShopsearchResultoffocial {
    margin-left: 4px;
    margin-right: 8px;
    height: 30px;
    line-height: 30px;
    font-size: 30px;
    color: #fa9c14;
    -moz-border-radius: 22px;
    -webkit-border-radius: 22px;
    border-radius: 22px;
    background: #FFEBD0;
    padding: 6px 20px;
    display: inline-block;
    text-align: center;
}
.AllShop .ShopsearchResult .ShopsearchResultWords .ShopsearchResultDetail {
    font-size: 32px;
    color: #959595;
    width: 540px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* text-align: left; */
    position: absolute;
}
.AllShop .ShopsearchResult .threePicture {
    display: flex;
    height: 678px;
    margin-bottom: 84px;
}
.AllShop .ShopsearchResult .threePicture .threePicture-left {
    width: 678px;
    height: 678px;
    margin-right: 8px;
}
.AllShop .threePicture .threePicture-left {
    flex: 1;
    margin-right: 8px;
}
.AllShop .ShopsearchResult .threePicture .threePicture-right {
    height: 678px;
    width: 336px;
}
.AllShop .ShopsearchResult .threePicture .threePicture-right .threePicture-right-top {
    width: 336px;
    height: 336px;
    margin-bottom: 8px;
}
.AllShop .ShopsearchResult .threePicture .threePicture-right .threePicture-right-bottom {
    width: 336px;
    height: 336px;
}
.AllShop .ShopsearchResult .twopicture {
    display: flex;
    height: 502px;
    margin-bottom: 84px;
}
.AllShop .ShopsearchResult .twopicture .twopicture-left {
    flex: 1;
    margin-right: 8px;
}
.AllShop .ShopsearchResult .twopicture .twopicture-right {
    flex: 1;
}
.AllShop .ShopsearchResult .onepicture {
    margin-bottom: 84px;
}
.ShopsearchResultTop{
   text-align:left;
}
 .AllShop .ShopsearchResult .ShopsearchResultPicture {
    width: 1022px;
    text-align: center;
    margin: 0 auto;
}
.AllShop .ShopsearchResult .onepicture{
   width: 1022px;
    height: 1022px;
    text-align: center;
    margin: 0 auto;
}
</style>
