
<template>
<div>
    <div class="TitleBar">
        <div class="oTitle">
            <span class="DetailTitle">人气热卖</span>
            <div class="return" @click="returnGo()">
            </div>
        </div>
    </div>
    <div class="box">
        <div class="contain" style="padding-bottom:30px" >
          <div id="541" class="pic" v-for="Like_Morezi in LikeMoreList">
             <a href="javascript:void(0);">
                <img class="tip" v-lazy="Like_Morezi.src" data-pinit="registered" style="">
                <img class="phone" v-lazy="Like_Morezi.src1"  data-pinit="registered" style="">
              </a>
              <a href="javascript:void(0);">{{Like_Morezi.name}}</a>
              <a href="javascript:void(0);">{{Like_Morezi.price}}</a>
          </div>
       </div>
    </div>
 </div>
</template>

<script>
export default {
   data(){
     return{
        LikeMoreList:[]
     }

   },
   mounted() {
       this.LikeMores();
       this.Isios();
   },
     methods: {
       LikeMores(){
         this.LikeMoreList=[
             {
              id: "23728",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/17qinglv.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0060110020001071.jpg",
              name: "爱情见证",
              price: "¥ 169.00"
          }, {
              id: "23686",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/03Daye.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0052110020020071.jpg",
              name: "治疗好心情",
              price: "¥ 169.00"
          }, {
              id: "11104",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0012100501032001.png",
              name: "女神礼物",
              price: "¥ 99.00"
          }, {
              id: "11107",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/13mote.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0052100501033001.png",
              name: "女神礼物",
              price: "¥ 99.00"
          }, {
              id: "41782",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/43qinglv.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0060110020018071.jpg",
              name: "惬意生活",
              price: "¥ 69.00"
          }, {
              id: "41770",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/09hezhao.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0060110020017071.jpg",
              name: "放飞祝福",
              price: "¥ 69.00"
          }, {
              id: "41362",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/27qinglv.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0060110010128001.png",
              name: "海洋馆和你",
              price: "¥ 169.00"
          }, {
              id: "41590",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/14liqi.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0052110010137001.png",
              name: "超萌狗狗",
              price: "¥ 169.00"
          }, {
              id: "21883",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/17qinglv.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/00601005011830.png",
              name: "我们结婚了",
              price: "¥ 229.00"
          }, {
              id: "21880",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/17qinglv.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/00601005011820.png",
              name: "浪漫舞蹈",
              price: "¥ 229.00"
          }, {
              id: "44449",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0052110010173001.jpg",
              name: "初雨",
              price: "¥ 338.00"
          }, {
              id: "44446",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/32Louis.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0051110010172001.jpg",
              name: "对饮江山",
              price: "¥ 338.00"
          }, {
              id: "753",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/19yijiasankou.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0060100470039021.jpg",
              name: "海滩",
              price: "¥ 159.00"
          }, {
              id: "754",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/21yijiasankou.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0060100470063021.jpg",
              name: "音乐快乐",
              price: "¥ 159.00"
          }, {
              id: "534",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/09hezhao.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0040100490536071.png",
              name: "情侣装",
              price: "¥ 169.00"
          }, {
              id: "490",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/02feilipu.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0011100090031071.png",
              name: "火力全开",
              price: "¥ 169.00"
          }, {
              id: "7828",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/30nvsheng.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0052100500955543.jpg",
              name: "天秤座",
              price: "¥ 129.00"
          }, {
              id: "7831",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/13mote.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0052100500955643.jpg",
              name: "天蝎座",
              price: "¥ 129.00"
          }, {
              id: "43861",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0011210020004071.jpg",
              name: "天生丽质",
              price: "¥ 169.00"
          }, {
              id: "43858",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0011210020003071.jpg",
              name: "优雅",
              price: "¥ 169.00"
          }, {
              id: "65842",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/52nv.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0050110010186054.jpg",
              name: "拥抱枫叶",
              price: "¥ 229.00"
          }, {
              id: "65830",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/02feilipu.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0050110010185054.jpg",
              name: "拥抱白雪",
              price: "¥ 229.00"
          }, {
              id: "22105",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/18quanjiafu.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0060100501189001.jpg",
              name: "阳光和爱",
              price: "¥ 129.00"
          }, {
              id: "22132",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/37boy1.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0050000501198001.jpg",
              name: "捉鱼",
              price: "¥ 129.00"
          }, {
              id: "44293",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/54nvtong.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0052210020007071.jpg",
              name: "小狐狸",
              price: "¥ 129.00"
          }, {
              id: "44281",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/54nvtong.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0052210020006071.jpg",
              name: "甜心",
              price: "¥ 129.00"
          }, {
              id: "41125",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/40ann.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0052110010119001.png",
              name: "大提琴",
              price: "¥ 188.00"
          }, {
              id: "41122",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/57mixi.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0052110010118001.png",
              name: "悠闲时光",
              price: "¥ 188.00"
          }, {
              id: "42547",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/09hezhao.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0060110010150001.jpg",
              name: "打雪仗",
              price: "¥ 198.00"
          }, {
              id: "42544",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/61lovers10.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0060110010149001.jpg",
              name: "粉刷浪漫",
              price: "¥ 198.00"
          }, {
              id: "43237",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/38jack.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0051110010153001.jpg",
              name: "绅士",
              price: "¥ 1688.00"
          }, {
              id: "43234",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/02feilipu.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0051110010152001.jpg",
              name: "将军",
              price: "¥ 1688.00"
          }, {
              id: "44707",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/32Louis.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0051100501267071.jpg",
              name: "面包",
              price: "¥ 169.00"
          }, {
              id: "44689",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/14liqi.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0051000501265071.jpg",
              name: "奶牛男孩",
              price: "¥ 169.00"
          }, {
              id: "40735",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/13mote.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0052100130602001.png",
              name: "优雅公主",
              price: "¥ 229.00"
          }, {
              id: "40732",
              src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/02feilipu.png",
              src1: "https://mall-res.manboker.com/newmall/CN/Activity/Like/0051100470157001.png",
              name: "绅士",
              price: "¥ 229.00"
          }
       ]
       },
       Isios(){
          if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            $(".box").css("margin-top","213px")
              // document.getElementsByClassName("return")[0].style.display = "block";
            document.getElementsByClassName("return")[0].className += " ios";

        } else {
           $(".box").css("margin-top","168px")
            document.getElementsByClassName("return")[0].className += " android";
        }
       },
       returnGo(){
          window.history.go(-1)
       }

     }
}
</script>

<style>
.box {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-right: 17px;
}
 .contain {
            overflow: hidden;
        }

            .contain .pic {
                box-sizing: border-box;
                width:50%;
                float:left;
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
                }
                .contain >div a:nth-child(1) {
    float: left;
    width: 100%;
    /* height: 278px; */
    margin-top: 20px;
    position: relative;
    display: block;

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
.contain .pic a:nth-child(1) .phone {
    width: 90%;
    margin: 0 auto;
}
.contain .pic a:nth-child(1) .phone {
    display: block;
    width: 90%;
    height: auto;
    margin: 0 auto;
    min-height: 250px;
}
.contain .pic a:nth-child(2) {
    margin: 10px auto 10px;
}
.contain .pic a:nth-child(2) {
    float: left;
    width: 100%;
    text-align: center;
    font-size: 36px;
    /* margin: 20px auto 5px; */
}
.contain .pic a:nth-child(3) {
    float: left;
    width: 100%;
    text-align: center;
    font-size: 36px;
    margin-bottom: 10px;
}
.contain .pic a:nth-child(3) {
    overflow: hidden;
    /* font-size: 0; */
}
a {
    text-decoration: none;
    color: #555;
}
                .TitleBar {
    width: 100%;
    height: 211px;
    font-size: 46px;
    text-align: center;
    line-height: 120px;
    position: fixed;
    z-index: 999;
    top: 0;
    /* display: none; */
    border-bottom: 2px solid #ccc;
    background: #fff;
}
.oTitle {
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
.TitleBar span {
    display: block;
    width: 100%;
    height: 168px;
    line-height: 168px;
    background-color: #fff;
}
.return.ios {
    background-image: url(//mall-res.manboker.com/newmall/CN/goodsImg/Onlineretailers_back.png);
}
.return.android {
    background-image: url(//mall-res.manboker.com/newmall/CN/returnA.png);
}
.return {
    position: absolute;
    left: 12px;
    top: 30px;
    z-index: 1000;
    width: 120px;
    height: 120px;
}
.contain .pic {
    display: inline-block;
    vertical-align: top;
    width: 43%;
    background: #fff;
    overflow: hidden;
    margin-left: 62px;
}
</style>
