<template>
  <div class="NewArrivals">
          <h3>新品推荐</h3>
          <div class="NewArrivalsBox">
            <div class="NewArrivalsList" >
            <div class="NewModel"   v-for="getRecommendItem in getRecommend" v-bind:uid="getRecommendItem.UserId"  v-lazy:background-image="getRecommendItem.Poster" @click="NewArrivalsXQ($event)" style="background-repeat:no-repeat; background-size:cover">
              <div class="_clickNewModel" ></div>
              <div class="DetailWords">
                <div class="Detail">
                  <div class="DetailName"  >
                    <span class="GoodsType  CommodityCategory" >{{getRecommendItem.CategoryName}}</span>
                    <span class="line"></span>
                    <span class="GoodsName">{{getRecommendItem.Name}}</span>
                  </div>
                  <div class="DetailPrice">
                    <span>¥</span><span>{{getRecommendItem.Price}}</span>
                  </div>
                </div>
                <div class="Author">
                  <img class="AuthorIcon"   v-lazy="getRecommendItem.UserIcon"><div>
                  <span>店主:  {{getRecommendItem.UserName}}  </span>
                  <!-- <img alt="Alternate Text" src=""> -->
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
import { Base64 } from 'js-base64'
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
  name: 'NewArrivals',
   data() {
     return {
        //   新品推荐
      getRecommend:[]
            }
        },
  mounted() {
     //    新品推荐部分
    axios.get("//mystudioapi.manboker.com/Api/ProductInfos/Recommends")
    .then(response => {
        // console.log(response.data.Data);
         this.getRecommend = response.data.Data;
    })
    .catch(err => {
        console.log(err)
   })
  },
   methods:{
       NewArrivalsXQ(event){
        var el = event.currentTarget;
        var uid = $(el).attr("uid");
          if (app.config.isMomanApp) {
                    McjsApi.openSpecificSpacePageById(uid);
                    return false;
                } else {
                    window.location = app.urls.StudioRecommendsDetailsURL + uid
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
.NewArrivals {
    width: 100%;
    overflow: hidden;
    padding-left: 22px;
    box-sizing: border-box;
    margin-bottom: 50px;
}
.NewArrivals h3 {
    font-size: 48px;
    color: #181818;
    margin: 48px 0;
    text-align: left;
}
.NewArrivals .NewArrivalsBox {
    width: 100%;
    height: 673px;
    overflow-x: scroll;
    overflow-y: hidden;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList {
    width: 4140px;
    height: 100%;
    /* overflow: hidden; */
    font-size: 0;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel {
    display: inline-block;
    vertical-align: top;
    width: 668px;
    height: 662px;
    overflow: hidden;
    position: relative;
    /* background: red; */
    margin-right: 20px;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #bfbfbf;
    line-height: 68px;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel ._clickNewModel {
    width: 670px;
    height: 450px;
    position: relative;
    z-index: 9999999;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel .DetailWords {
    width: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 30px 18px 22px 18px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.85);
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel .DetailWords .Detail {
    width: 100%;
    overflow: hidden;
    margin-bottom: 18px;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel .DetailWords .Detail .DetailName {
    width: 450px;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 20px;
    float: left;
    font-size: 0;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel .DetailWords .Detail .DetailName .CommodityCategory {
    display: inline-block;
    vertical-align: middle;
    font-size: 48px;
    color: #181818;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel .DetailWords .Detail .DetailName .line {
    width: 2px;
    height: 22px;
    background: #4e4e4e;
    margin: 0 14px;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel .DetailWords .Detail .DetailName span {
    display: inline-block;
    vertical-align: middle;
    font-size: 48px;
    color: #181818;
    max-width: 191px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel .DetailWords .Detail .DetailPrice {
    float: right;
    height: 66px;
    line-height: 66px;
    font-size: 0;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel .DetailWords .Detail .DetailPrice span {
    display: inline-block;
    vertical-align: middle;
    font-size: 40px;
    color: #4e4e4e;
    max-width: 350px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel .DetailWords .Author {
    width: 100%;
    height: 68px;
    overflow: hidden;
    font-size: 0;
    line-height: 68px;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel .DetailWords .Author img {
    display: inline-block;
    vertical-align: middle;
    width: 68px;
    height: 68px;
    margin-right: 18px;
    float: left;
    margin-left: 20px;
    border-radius: 68px;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel .DetailWords .Author div {
    display: inline-block;
    width: 500px;
}
.NewArrivals .NewArrivalsBox .NewArrivalsList .NewModel .DetailWords .Author div span {
    display: inline-block;
    vertical-align: middle;
    font-size: 34px;
    color: #4e4e4e;
    max-width: 350px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>
