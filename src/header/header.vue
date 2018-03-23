<template>
  <div>
      <!--顶部的搜索框    -->
     <div class="Shop-nav-top" style="width: 100%">
      <div class="Shop_ios_box" style="height: 68px; width: 100%;display: none"></div>
      <div class="Shop-nav" @click="SearchXQ()">
         <router-link :to="{path:'Search'}">
        <div class="return Indexios">
        </div>
        <div class="ShopSearch">
          <form action="" class="shopsearch-form">
            <div class="shopsearch-form-box">
              <div class="shopsearch-form-action">
                <img src="https://mall-res.manboker.com/newmall/CN/goodsImg/search/search.png" alt="" width="44" height="44">
              </div>
              <div class="shopsearch">
                <input type="search" class="shop-search-ipt" placeholder="输入画廊名字或商品名称">
              </div>
              <div class="shopsearch-mistake">
                <img src="https://mall-res.manboker.com/newmall/CN/goodsImg/search/close.png" alt="" width="42" height="42">
              </div>
            </div>
          </form>
        </div>
         </router-link>
      </div>

    </div>
    </div>
</template>
<script>
 export default {
   mounted() {
     this.Isios()
   },
  methods:{
     Isios(){
          if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            $(".Shop-nav-top").css("top","68x")
              // document.getElementsByClassName("return")[0].style.display = "block";

        } else {
           $(".Shop-nav-top").css("top","0px")
        }
       },
        //进入搜索界面
       SearchXQ(){
                $('.Shop-nav-top .shopsearch input').blur();
                $(".AllShop_fix").hide();
                $('.Shop-nav-top').removeClass('moveDown');
                $('.xd_content').removeClass('moveDown');
                $('.Shop-nav-top').addClass("moveUp");
                $('.xd_content').addClass("moveUp");
                $('.shopsearch-form .shopsearch-form-box .shopsearch .shop-search-ipt').focus();
                $('.ShopIndex').css('opacity', '0').css('opacity', '1');
                setTimeout(function () {
                    $(".ShopIndex").css("z-index", "999");
                    $(".xd_content").hide();
                    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                        document.getElementsByClassName("ios_box")[0].style.display = "block";
                        // $("#search .commodity, #search .Gallery").css("top", "336px");
                        // $("#sc_shade").css("top", "336px");
                        $(".ShopIndex .sc_main").css("padding-top", "336px");
                    } else {
                        document.getElementsByClassName("ios_box")[0].style.display = "none";
                        // $("#search .commodity, #search .Gallery").css("top", "268px");
                        // $("#sc_shade").css("top", "268px");
                        $("#search .sc_main").css("padding-top", "268px");
                    }
                    // search.search_befor_action();
                }, 400);
       }
      }
//   name: 'Header',
// }
// if (!/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//      document.getElementsByClassName("return")[0].className += "android";
//  } else {
//    document.getElementsByClassName("return")[0].className += "Indexios";
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
*{
  margin:0;
  padding:0;
}
a {
    display: block;
}
.moveUp {
    -moz-animation: moveUp ease-in-out .4s 1;
    -o-animation: moveUp ease-in-out .4s 1;
    -webkit-animation: moveUp ease-in-out .4s 1;
    animation: moveUp ease-in-out .4s 1;
    animation-fill-mode: both;
}

@-moz-keyframes moveUp {
    from {
        -moz-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        -o-transform: translate3d(0,0,0);
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1;
    }

    to {
        -moz-transform: translate3d(0,-250px,0);
        -ms-transform: translate3d(0,-250px,0);
        -o-transform: translate3d(0,-250px,0);
        -webkit-transform: translate3d(0,-250px,0);
        transform: translate3d(0,-250px,0);
        opacity: 0;
    }
}

@-webkit-keyframes moveUp {
    from {
        -moz-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        -o-transform: translate3d(0,0,0);
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1;
    }

    to {
        -moz-transform: translate3d(0,-250px,0);
        -ms-transform: translate3d(0,-250px,0);
        -o-transform: translate3d(0,-250px,0);
        -webkit-transform: translate3d(0,-250px,0);
        transform: translate3d(0,-250px,0);
        opacity: 0;
    }
}

@keyframes moveUp {
    from {
        -moz-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        -o-transform: translate3d(0,0,0);
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1;
    }

    to {
        -moz-transform: translate3d(0,-250px,0);
        -ms-transform: translate3d(0,-250px,0);
        -o-transform: translate3d(0,-250px,0);
        -webkit-transform: translate3d(0,-250px,0);
        transform: translate3d(0,-250px,0);
        opacity: 0;
    }
}

.Shop-nav-top {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999;
}
.Shop-nav-top .Shop-nav {
    overflow: hidden;
    z-index: 999;
    width: 100%;
    height: 96px;
    border-radius: 8px;
    border: none;
    margin: 0 auto;
    padding: 23px 0;
    background-color: #fff;
    position: relative;
}
.Shop-nav-top .Shop-nav .return {
    width: 120px;
    height: 120px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    left: 12px;
    top: 10px;
}
.Shop-nav-top .Shop-nav .ShopSearch {
    margin-left: 143px;
    margin-right: 45px;
}
.Shop-nav-top .Shop-nav .ShopSearch .shopsearch-form-box {
    height: 96px;
    border-radius: 8px;
    position: relative;
    background-color: #f2f2f2;
}
.Shop-nav-top .Shop-nav .ShopSearch .shopsearch-form-box .shopsearch-form-action {
    position: absolute;
    left: 22px;
    top: 26px;
    vertical-align: top;
    width: 44px;
    height: 44px;
}
.Shop-nav-top .Shop-nav .ShopSearch .shopsearch-form-box .shopsearch {
    position: absolute;
    left: 88px;
    top: 0px;
    height: 94px;
    border: none;
}
.Shop-nav-top .Shop-nav .ShopSearch .shopsearch-form-box .shopsearch .shop-search-ipt {
    font-size: 40px;
    color: #5F646E;
    width: 787px;
    border: none;
    background-color: #f2f2f2;
    outline: none;
    height: 94px;
    line-height: 94px;
    text-overflow: ellipsis;
    white-space: nowrap;
    resize: none;
}
.Shop-nav-top .Shop-nav .ShopSearch .shopsearch-form-box .shopsearch-mistake {
    display: none;
    position: absolute;
    right: 28px;
    top: 26px;
    width: 42px;
    height: 42px;
}
.Indexios {
    background-image: url(//mall-res.manboker.com/newmall/CN/Onlineretailers_back.png);
}
.android {
    background-image: url(//mall-res.manboker.com/newmall/CN/returnA.png);
}

</style>
