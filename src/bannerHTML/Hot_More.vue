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
          <div id="541" class="pic" v-for="Hot_Morezi in HotMoreList">
             <a href="javascript:void(0);">
                <img class="tip" v-lazy="Hot_Morezi.src" data-pinit="registered" style="">
                <img class="phone" v-lazy="Hot_Morezi.src1"  data-pinit="registered" style="">
              </a>
              <a href="javascript:void(0);">{{Hot_Morezi.name}}</a>
              <a href="javascript:void(0);">{{Hot_Morezi.price}}</a>
          </div>
       </div>
    </div>
 </div>
</template>

<script>
export default {
   data(){
     return{
        HotMoreList:[]
     }

   },
   mounted() {
       this.HotMores();
       this.Isios();
   },
     methods: {
       HotMores(){
         this.HotMoreList=[
             {
            id: "541",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/31qinglv.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0040100490558071.png",
            name: "熊猫宝宝",
            price: "¥ 169.00"

        }, {
            id: "511",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/09hezhao.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0061100490211071.png",
            name: "匆匆那年",
            price: "¥ 169.00"

        }, {
            id: "30955",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/17qinglv.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0060110020015071.jpg",
            name: "居家",
            price: "¥ 129.00"
        }, {
            id: "30952",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/09hezhao.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0060110020014071.jpg",
            name: "陪你",
            price: "¥ 129.00"
        }, {
            id: "688",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0052100490125071.jpg",
            name: "妙龄女郎",
            price: "¥ 169.00"
        }, {
            id: "637",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/03Daye.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/00521005009587.jpg",
            name: "橘猫暖暖",
            price: "¥ 169.00"
        }, {
            id: "43930",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/18quanjiafu.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0060110020026071.jpg",
            name: "幸福之家",
            price: "¥ 169.00"
        }, {
            id: "43927",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/43qinglv.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0060110020025071.jpg",
            name: "巴黎铁塔",
            price: "¥ 169.00"
        }, {
            id: "750",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/27qinglv.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0060100470529021.jpg",
            name: "结婚啦",
            price: "¥ 159.00"
        }, {
            id: "751",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/27qinglv.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0060100470008021.jpg",
            name: "在一起",
            price: "¥ 159.00"
        }, {
            id: "40930",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0052100470109001.png",
            name: "闻香",
            price: "¥ 129.00"
        }, {
            id: "40927",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/53nv.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0052100470108001.png",
            name: "爱的信箱",
            price: "¥ 129.00"
        }, {
            id: "44341",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/09hezhao.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0060110020029071.jpg",
            name: "粉刷浪漫",
            price: "¥ 129.00"
        }, {
            id: "44329",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/18quanjiafu.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0060110020028071.jpg",
            name: "阳光和爱",
            price: "¥ 129.00"
        }, {
            id: "5695",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/02feilipu.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/00511005009310.png",
            name: "暖男",
            price: "¥ 269.00"
        }, {
            id: "5698",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/05yaochunying.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/00521005009330.png",
            name: "卖萌",
            price: "¥ 269.00"
        }, {
            id: "22162",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/41amy.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0052000501211001.jpg",
            name: "青春正当时",
            price: "¥ 129.00"
        }, {
            id: "22159",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/48asia2.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0052000501210001.jpg",
            name: "桃花朵朵开",
            price: "¥ 129.00"
        }, {
            id: "11119",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0052100501037001.png",
            name: "女神礼物",
            price: "¥ 99.00"
        }, {
            id: "11122",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/39mark.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0011000501026001.png",
            name: "男神礼物",
            price: "¥ 99.00"
        }, {
            id: "65884",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0052110010184054.jpg",
            name: "拥抱春天",
            price: "¥ 229.00"
        }, {
            id: "65878",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0052110010183054.jpg",
            name: "拥抱星空",
            price: "¥ 229.00"
        }, {
            id: "41818",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/23yijiasankou.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0060110020021071.jpg",
            name: "春风和煦",
            price: "¥ 69.00"
        }, {
            id: "41806",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/58yijiasankou.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0060110020020071.jpg",
            name: "春游",
            price: "¥ 69.00"
        }, {
            id: "41143",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/17qinglv.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0060110010125001.png",
            name: "依偎",
            price: "¥ 188.00"
        }, {
            id: "41140",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/49couple1.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/Hot/0060110010124001.png",
            name: "浪漫舞蹈",
            price: "¥ 188.00"
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
