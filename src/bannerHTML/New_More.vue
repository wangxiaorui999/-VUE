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
          <div id="541" class="pic" v-for="New_Morezi in NewMoreList">
             <a href="javascript:void(0);">
                <img class="tip" v-lazy="New_Morezi.src" data-pinit="registered" style="">
                <img class="phone" v-lazy="New_Morezi.src1"  data-pinit="registered" style="">
              </a>
              <a href="javascript:void(0);">{{New_Morezi.name}}</a>
              <a href="javascript:void(0);">{{New_Morezi.price}}</a>
          </div>
       </div>
    </div>
 </div>
</template>

<script>
export default {
   data(){
     return{
        NewMoreList:[]
     }

   },
   mounted() {
       this.NewMores();
       this.Isios();
   },
     methods: {
       NewMores(){
         this.NewMoreList=[
              {
             id: "141880",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/09hezhao.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0060110030420001.jpg",
             name: "春意盎然",
             price: "¥ 99.00"
         }, {
             id: "141877",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/13mote.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052110030419001.jpg",
             name: "暗夜爱丽丝",
             price: "¥ 99.00"
         }, {
             id: "141823",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/40ann.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052110030418001.jpg",
             name: "梦幻紫罗兰",
             price: "¥ 99.00"
         }, {
             id: "141817",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052110030417001.jpg",
             name: "异域海蓝",
             price: "¥ 99.00"
         }, {
             id: "138463",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/58yijiasankou.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0060110020037071.jpg",
             name: "月亮船",
             price: "¥ 129.00"
         }, {
             id: "138457",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/27qinglv.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0060110020036071.jpg",
             name: "开心时刻",
             price: "¥ 129.00"
         }, {
             id: "112972",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/09hezhao.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0060110020034071.jpg",
             name: "爱情",
             price: "¥ 129.00"
         }, {
             id: "112969",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/27qinglv.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052110020065071.jpg",
             name: "爱心纸船",
             price: "¥ 129.00"
         }, {
             id: "135565",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/09hezhao.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0060100501284071.png",
             name: "牵手一生",
             price: "¥ 229.00"
         }, {
             id: "135562",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/11gril.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052200501283071.png",
             name: "月亮姑娘",
             price: "¥ 229.00"
         }, {
             id: "135559",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052100501282071.png",
             name: "画中仙子",
             price: "¥ 229.00"
         }, {
             id: "135556",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/40ann.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052100501281071.png",
             name: "旋转木马",
             price: "¥ 229.00"
         }, {
             id: "65884",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052110010184054.jpg",
             name: "拥抱春天",
             price: "¥ 229.00"
         }, {
             id: "65878",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052110010183054.jpg",
             name: "拥抱星空",
             price: "¥ 229.00"
         }, {
             id: "44305",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/40ann.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052210020009071.jpg",
             name: "梦幻鲸鱼",
             price: "¥ 129.00"
         }, {
             id: "44293",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/54nvtong.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052210020007071.jpg",
             name: "小狐狸",
             price: "¥ 129.00"
         }, {
             id: "44770",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/09hezhao.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0060100501274071.jpg",
             name: "居家",
             price: "¥ 169.00"
         }, {
             id: "44752",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/03Daye.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052100501272071.jpg",
             name: "橘猫暖暖",
             price: "¥ 169.00"
         }, {
             id: "44458",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/13mote.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052110010176001.jpg",
             name: "暗香幽浮",
             price: "¥ 338.00"
         }, {
             id: "44455",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/13mote.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052110010175001.jpg",
             name: "踏雪寻梅",
             price: "¥ 338.00"
         }, {
             id: "43897",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052100501217071.jpg",
             name: "红酒美人",
             price: "¥ 169.00"
         }, {
             id: "43894",
             src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/02feilipu.png",
             src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0051110020017071.jpg",
             name: "奔跑",
             price: "¥ 169.00"
         },
        {
            id: "42526",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/52nv.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052110010142001.jpg",
            name: "田野",
            price: "¥ 198.00"
        }, {
            id: "42523",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/14liqi.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052110010139001.jpg",
            name: "超萌狗狗",
            price: "¥ 198.00"
        }, {
            id: "41734",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/03Daye.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052110020029071.jpg",
            name: "油菜花",
            price: "¥ 69.00"
        }, {
            id: "41722",
            src: "https://mall-res.manboker.com/newmall/CN/goodsImg/header/01renzong.png",
            src1: "https://mall-res.manboker.com/newmall/CN/Activity/New/0052110020028071.jpg",
            name: "舍夫沙万的清晨",
            price: "¥ 69.00"
        },
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
