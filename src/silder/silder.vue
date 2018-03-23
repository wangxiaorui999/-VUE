<template>
  <div class="ShopIndex">
     <page-header></page-header>
      <div class="xd_content">
      <!--顶部的搜索框    -->
        <div class="swipe-div">
            <mt-swipe :auto="4000"  class="swipe">
                <mt-swipe-item v-for="item in ShopBanner">
                      <img v-lazy="item.PlaceImgUrl" width="1080" height="652">
                </mt-swipe-item>
            </mt-swipe>
        </div>
       <!-- 全部商品部分 -->
         <div class="allCategory">
          <div class="Box">
            <ul class="nav">
              <li class="orange" @click="onclick($event)"><router-link :to="{path:'Allproduct'}" class="orange"> 全部商品</router-link></li>
              <li class="blue" name="中国国家图书馆" @click="onclick($event)"><router-link :to="{path:'Library'}" class="blue"> 中国国家图书馆</router-link></li>
              <li class="gray" name="移动电源" @click="onclick($event)"><router-link :to="{path:'Item'}" class="gray"> 移动电源</router-link></li>
              <li class="gray" name="精美包边抱枕" >精美包边抱枕</li>
              <li class="red" name="小白手机壳" >小白手机壳</li>
              <li class="gray" name="T恤" >T恤</li>
              <li class="red" name="牛奶咖啡杯" >牛奶咖啡杯</li>
              <li class="gray" name="晴雨伞">晴雨伞</li>
              <li class="gray" name="结婚纪念册" >结婚纪念册</li>
              <li class="red" name="巧虎" >巧虎</li>
              <li class="gray" name="U型枕" >U型枕</li>
              <li class="gray" name="保温杯" >保温杯</li>
              <li class="gray" name="鼠标垫" >鼠标垫</li>
              <li class="blue" name="北欧简约抱枕">北欧简约抱枕</li>
              <li class="gray" name="拼图简版">拼图简版</li>
              <li class="gray" name="星座挂饰">星座挂饰</li>
              <li class="gray" name="牛奶罐">牛奶罐</li>
              <li class="blue" name="LED相框灯">LED相框灯</li>
              <li class="red" name="在一起杯">在一起杯</li>
            </ul>
          </div>
        </div>
         <popular-shop></popular-shop>
         <New-Arrivals></New-Arrivals>
         <Commodity-Zone></Commodity-Zone>
         <All-Shop></All-Shop>
         </div>
    </div>
</template>

<script>
import '../../node_modules/mint-ui/lib/style.css'
import Vue from 'vue'
import axios from 'axios'
import MuseUI from 'muse-ui'
//import  $ from ' jquery'
// 头部
import PageHeader from '../header/header'
// 人气小店部分
import PopularShop from '../PopularShop/PopularShop'
// 新品推荐部分
import NewArrivals from '../NewArrivals/NewArrivals'
// 魔漫图专区
import CommodityZone from '../CommodityZone/CommodityZone'
// 全部小店部分
import AllShop from '../AllShop/AllShop'
import { Swipe, SwipeItem } from 'mint-ui'
import { Lazyload } from 'mint-ui'
import Search from "../search/search";
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(MuseUI)
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: require('../assets/vue-lazyload.jpg'),
  loading: require('../assets/vue-lazyload.jpg'),
  attempt: 1
})
export default {
  name: 'Silder',
  components: {
        PageHeader,
        PopularShop,
        NewArrivals,
        CommodityZone,
        AllShop
    },
   data() {
     return {
        ShopBanner:[]
            }
        },
  mounted() {
     axios.get("//product.manboker.com/api/Mart/GetMartDailyActivityByPlace?countryCode=CN" + "&title=banner")
        .then(response => {
             this.ShopBanner = response.data.Response[0].Places;
        })
        .catch(err => {
             console.log(err)
        })
        this.Isios();
  },
     methods:{
       onclick(event){
        var el = event.currentTarget;
          console.log(el.innerHTML);
       },
        Isios(){
          if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            $(".swipe-div").css("margin-top","213px")
              // document.getElementsByClassName("return")[0].style.display = "block";
            document.getElementsByClassName("return")[0].className += " ios";
        } else {
           $(".swipe-div").css("margin-top","168px")
            document.getElementsByClassName("return")[0].className += " android";
        }
       },
            //进入搜索界面
       SearchXQ(){
            $('.Shop-nav-top .ShopSearch').on('click', function () {
                $('.Shop-nav-top .shopsearch input').blur();
                $(".AllShop_fix").hide();
                $('.Shop-nav-top').removeClass('moveDown');
                $('#xd_content .Shop-banxin').removeClass('moveDown');
                $('.Shop-nav-top').addClass("moveUp");
                $('#xd_content .Shop-banxin').addClass("moveUp");
                $('#search .nav .shopsearch-form .shopsearch-form-box .shopsearch .shop-search-ipt').focus();
                $('#search').css('opacity', '0').css('opacity', '1');
                setTimeout(function () {
                    $("#search").css("z-index", "999");
                    $("#xd_content").hide();
                    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                        document.getElementsByClassName("ios_box")[0].style.display = "block";
                        $("#search .commodity, #search .Gallery").css("top", "336px");
                        $("#sc_shade").css("top", "336px");
                        $("#search .sc_main").css("padding-top", "336px");
                    } else {
                        document.getElementsByClassName("ios_box")[0].style.display = "none";
                        $("#search .commodity, #search .Gallery").css("top", "268px");
                        $("#sc_shade").css("top", "268px");
                        $("#search .sc_main").css("padding-top", "268px");
                    }
                    search.search_befor_action();
                }, 400);
            });
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
a{
   text-decoration:none
}
a.orange{
  color: #ec9e43;
}
a.blue{
  color: #29d4ff;
}
a.red{
  color: #ff7891;
}
a.gray{
   color: #666;
}
.android {
    background-image: url(//mall-res.manboker.com/newmall/CN/returnA.png);
}
.ios {
    background-image: url(//mall-res.manboker.com/newmall/CN/Onlineretailers_back.png);
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
.orange{
  text
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
</style>
