<template>
    <div>
   <div class="TitleBar">
        <div class="oTitle">
            <span class="DetailTitle">中国国家图书馆</span>
            <div class="return">
            </div>
        </div>
    </div> 
   <div class="box">
        <div class="contain">
            <img style="display:block;width:100%;" v-for="LibraryBannerItem in LibraryBanner" v-lazy="LibraryBannerItem.src">
            <div  class="pic a" v-for="LibraryListitem in LibraryList" v-bind:id="LibraryListitem.id">
                <a href="javascript:void(0);">
                    <img class="tip" v-lazy="LibraryListitem.src" />
                    <img class="phone" v-lazy="LibraryListitem.src1">
                </a>
                <a href="javascript:void(0);">{{LibraryListitem.name}}</a>
                <a href="javascript:void(0);">{{LibraryListitem.price}}</a>
            </div>
              <div  class="pic a" v-for="LibraryListitem in LibraryListTwo" v-bind:id="LibraryListitem.id">
                 <a href="javascript:void(0);">
                    <img class="phone" v-lazy="LibraryListitem.src">
                </a>
                <a href="javascript:void(0);">{{LibraryListitem.name}}</a>
                <a href="javascript:void(0);">{{LibraryListitem.price}}</a>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import '../css/common.css'
import '../../node_modules/mint-ui/lib/style.css'
import Vue from 'vue'
import axios from 'axios'
import MuseUI from 'muse-ui'
import { Lazyload } from 'mint-ui'
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: require('../assets/vue-lazyload.jpg'),
  loading: require('../assets/vue-lazyload.jpg'),
  attempt: 1
})
export default {
  name: 'Library',
  data() {
      return {
         LibraryList:[],
         LibraryListTwo:[],
          LibraryBanner:[]
      }
   },
   methods: {
      LoadList(){
         this.LibraryList = [
            { 
            id: "414013",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
            src1: "https://mall-res.manboker.com/newmall/GoodsBox/Library/1.jpg",
            name: "智能书法",
            price: "¥ 198.00"
           },
           {
            id: "414010",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/02feilipu.png",
            src1: "https://mall-res.manboker.com/newmall/GoodsBox/Library/2.jpg",
            name: "智能书法",
            price: "¥ 198.00"
           }
         ],
         this.LibraryListTwo = [
             {
               id: "425170",
               src: "https://mall-res.manboker.com/newmall/GoodsBox/Library/11.jpg",
               name: "音乐壁",
               price: "¥ 1688.00"
                 },
                 {
            id: "425122",
            src: "https://mall-res.manboker.com/newmall/GoodsBox/Library/22.jpg",
            name: "T恤",
            price: "¥ 169.00"
          }, {
              id: "424072",
              src: "https://mall-res.manboker.com/newmall/GoodsBox/Library/33.jpg",
              name: "移动电源",
              price: "¥ 169.00"
          }, 
          {
              id: "424045",
              src: "https://mall-res.manboker.com/newmall/GoodsBox/Library/66.jpg",
              name: "抱枕",
              price: "¥ 129.00"
          },
            {
                id: "579382",
                src: "https://mall-res.manboker.com/newmall/GoodsBox/Library/baowen.jpg",
                name: "保温杯",
                price: "¥ 269.00"
            },
             {
                id: "579109",
                src: "https://mall-res.manboker.com/newmall/GoodsBox/Library/notebook.jpg",
                name: "吉事本",
                price: "¥ 99.00"
        }
        ],
           this.LibraryBanner = [
      {
          src: "https://mall-res.manboker.com/newmall/GoodsBox/Library/bb.jpg"
      }

    ]

      }
   
  },
    mounted() {
        this.$nextTick(function() {
            this.LoadList();
        })
    },
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
    color:#555;
}
.contain {
            overflow: hidden;
            width: 100%;
    padding: 120px 0 30px;
    background: #fff;
    font-size: 0;
        }

            .contain .pic {
                box-sizing: border-box;
                display: inline-block;
                vertical-align: top;
                width: 43%;
                background: #fff;
                overflow: hidden;
                margin-left: 62px;
            }
            .contain >div a:nth-child(1) {
    float: left;
    width: 100%;
    /* height: 278px; */
    margin-top: 20px;
    position: relative;
}
                .contain .pic a:nth-child(2) {
                    margin: 10px auto 10px;
                }

                .contain .pic a:nth-child(3) {
                    overflow: hidden;
                    /*font-size: 0;*/
                }

                    .contain .pic a:nth-child(3) img {
                        height: 18px;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 8px;
                    }

                    .contain .pic a:nth-child(3) span {
                        display: inline-block;
                        vertical-align: middle;
                        font-size: 20px;
                    }

                .contain .pic a:nth-child(1) .phone {
                    width: 90%;
                    margin: 0 auto;
                    display: block;

    height: auto;

    min-height: 250px;
                }
                .contain .pic a:nth-child(2) {
    float: left;
    width: 100%;
    text-align: center;
    font-size: 36px;
    margin: 20px auto 5px;
}
.contain .pic a:nth-child(3) {
    float: left;
    width: 100%;
    text-align: center;
    font-size: 36px;
    margin-bottom: 10px;
}
             .contain .pic a:nth-child(1) .tip {
    position: absolute;
    bottom: 5px;
    right: 42px;
    display: block;
    width: 130px;
    z-index: 2;
    font-size: 20px;
    border-radius: 50%;
}
</style>
