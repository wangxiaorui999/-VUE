<template>
     <!-- 魔漫图商品专区   -->
             <div class="CommodityZone">
                    <div class="CommodityZoneTitle">
                        魔漫图商品专区
                    </div>

                    <div class="CommodityZoneList" v-for="AreaList in CommodityZoneList" v-if="AreaList.Title == '魔漫专区'">
                      <div class="CommodityZoneGoods hotDetail" v-for="MagicList in AreaList.Products" v-bind:id="MagicList.ProductId" @click="CommodityZoneGoodsXQ($event)">
                                        <div class="CommodityZoneGoodsPic">
                                        <img class="icon" v-lazy="MagicList.AvatarIcon"  style="right:4px">
                                        <div class="goodsBox" v-lazy:background-image="MagicList.ShowImage" style="background-repeat:no-repeat; background-size:cover">
                                        </div>
                                        </div>
                                        <p class="goodsName">{{MagicList.CategoryName}}</p>
                                        <p class="CommodityZoneGoodsTitle">{{MagicList.ProductName}}</p>
                                        <p class="CommodityZoneGoodsPrice">{{MagicList.SalePrice}}</p>
                                    </div>
                                 </div>
                    <!-- 查看全部按钮 -->
                    <div class="CommodityZoneGoodsViewAll">
                        <div class="CommodityZoneGoodsBtn">
                          <router-link :to="{path:'CommodityDetails'}" class="CommodityBtn"> 查看全部</router-link>
                        </div>
                    </div>
                </div>
</template>

<script>
import '../../node_modules/mint-ui/lib/style.css'
import Vue from 'vue'
import axios from 'axios'
import MuseUI from 'muse-ui'
import { Lazyload } from 'mint-ui'
import McjsApi from "../commoms/McjsApi"
import app from "../commoms/config"
Vue.use(MuseUI)
 Vue.use(Lazyload, {
  preLoad: 1.3,
  error: require('../assets/vue-lazyload.jpg'),
  loading: require('../assets/vue-lazyload.jpg'),
  attempt: 1
})
export default {
  //name: 'CommodityZone',
   data() {
     return {
        CommodityZoneList:[]
            }
        },
  mounted() {
     axios.get("//product.manboker.com/api/Mart/GetMartDailyActivityByPlace?countryCode=CN" + "&title=shouye")
        .then(response => {
                console.log(response);
                this.CommodityZoneList = response.data.Response[0].Places ;
                console.log(this.CommodityZoneList)
        })
        .catch(err => {
             console.log(err)
        })
  },
  methods:{
       CommodityZoneGoodsXQ(event){
        var el = event.currentTarget;
        var id = $(el).attr("id");
          if (app.config.isMomanApp) {
                    McjsApi.openProductDetail(pid);
                    return false;
                } else {
                    window.location = app.urls.ProductDetailURL + "?productid=" + id;
                    return false;
                }
          console.log(el.innerHTML);
       }
     }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
*{
  margin:0;
  padding:0;
}
.CommodityZone {
    width: 100%;
    background: url(https://mall-res.manboker.com/newmall/CN/ecommerce_tu.png);
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
    /* display: flex; */
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
    /* flex: 1; */
    padding-top: 24px;
    width: 32.33%;
}
.CommodityZone .CommodityZoneList .CommodityZoneGoods .CommodityZoneGoodsPic .icon {
    width: 110px;
    height: 110px;
    position: absolute;
    right: 4px;
    top: 40px;
    border-radius: 50%;
    z-index: 9999;
}
.CommodityZone .CommodityZoneList .CommodityZoneGoods .CommodityZoneGoodsPic .goodsBox {
    width: 230px;
    height: 230px;
    margin: 35px auto;
}
.CommodityZoneList .goodsName {
    font-size: 42px;
    margin-top: 38px;
    color: #000;
    text-align: center;
    height: 58px;
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
.CommodityBtn{
   text-decoration: none;
   color: #ffffff;
}
</style>
