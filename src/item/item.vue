<template>
<div>
    <div class="TitleBar">
        <div class="oTitle">
            <span class="DetailTitle"></span>
            <div class="return" @click="Returnclick">
            </div>
        </div>
    </div>
    <div class="box">
        <div class="contain">
        </div>
    </div>
 </div>
</template>
<script>
  import { getQueryString } from "../commoms/config";
  import {  jquery } from "../assets/jquery/jquery";
  import axios from "axios";
   var coupon = getQueryString("coupon") || "";
   var placeTitle = decodeURIComponent(getQueryString("name"));
   var Id = decodeURIComponent(getQueryString("id"));
   var isSplash = getQueryString("isSplash") || "Long";
   var isClient = false;
      var initHeaderTitle = function (title) {
        document.title = title;
        $(".TitleBar span").html(title);
    };
    console.log(this.$route);
  export default {
     data () {
      return {
        msg: ''
      }
    },
     methods: {
        Items(){
            this.getData(function (result) {
                console.log(result);
                var html = '';
                var products = result.Response[0].Places[0].Products;
                var name = result.Response[0].Places[0].Title;

                if (Id > 0) {
                    $(result.Response[0].Places).each(function (i,item) {
                        if (item.Id == Id) {
                            products = item.Products;
                            name = item.Title;
                            return;
                        }
                    });
                }
                initHeaderTitle(name);
                if (products.length < 2) {
                    $(".box").css("text-align", "left");
                }
                if (name == "TOMIC" || name == "tomic经典款玻璃杯") {
                    html += '<div style="width:100%;overflow:hidden;"><img style="display:block;width:100%;" src="https://mall-res.manboker.com/newmall/CN/Headbanner/TomicBanner.jpg" /></div>'
                }
                if (name == "国礼瓷") {
                    html += '<div style="width:100%;overflow:hidden;"><img style="display:block;width:100%;" src="https://mall-res.manboker.com/newmall/CN/goodsImg/topci.jpg" /></div>'
                }
                if (name == "自然共和国") {
                    html += '<div style="width:100%;overflow:hidden;"><img style="display:block;width:100%;" src="https://mall-res.manboker.com/newmall/CN/Activity/Rep/repbanner2.jpg" /></div>'
                    var flag = true;
                }
                if (name == "诗婢家") {
                    var flag = true;
                    html += '<div style="width:100%;overflow:hidden;"><img style="display:block;width:100%;" src="https://mall-res.manboker.com/newmall/CN/Activity/Poem/poemTop.jpg" /></div>'
                }
                if (name == "唐妞") {
                    html += '<div style="width:100%;overflow:hidden;margin-bottom:20px;"><img style="display:block;width:100%;" src="https://mall-res.manboker.com/newmall/CN/Activity/Tangniu/tangniu.jpg" /></div>'
                }
                if (name == "阿唐奇遇") {
                    var flag = true;
                }
                var Defaultdiagram = app.getOptimizedImgUrl("https://mall-res.manboker.com/newmall/DefaultPicture/Defaultdiagram.jpg", 100);
                var photoframe = app.appendWebpForImgUrl("https://mall-res.manboker.com/newmall/DefaultPicture/Online-retailers_loading_photoframe.jpg");
                for (var i = 0; i < products.length; i++) {
                    var productThumb = app.appendWebpForImgUrl(products[i].ShowImage).replace("http://", "https://");
                    var headThumb = app.appendWebpForImgUrl(products[i].AvatarIcon).replace("http://", "https://");
                    html += '<div id="' + products[i].ProductId + '" class="pic">' +
                                '<a href="javascript:void(0);">' +
                                    '<img class="tip ' + (flag ? '' : 'lazy') + '" style="display:' + (flag ? 'none' : 'block') + '" src="' + Defaultdiagram + '"  data-original="' + headThumb + '" />' +
                                    '<img class="phone lazy" src="' + photoframe + '" data-original="' + productThumb + '">' +
                                '</a>' +
                                '<a href="javascript:void(0);">' + products[i].ProductName + '</a>' +
                                '<a href="javascript:void(0);">¥ ' + products[i].SalePrice + '.00</a>' +
                            '</div>';
                }
                $(".contain").html(html);
                setTimeout(function () {
                    $("img.lazy").lazyload({
                        placeholder: "https://mall-res.manboker.com/newmall/DefaultPicture/Defaultdiagram.jpg",
                        effect: "fadeIn",
                        threshold: 700,
                        container: $(".box"),
                    });
                    $(window).resize();
                }, 100);
                $(".pic").last().css("margin-bottom", "30px");
                $(".pic").last().prev().css("margin-bottom", "30px");
                $(".pic").on("click", function () {
                    Counter("商品列表页面" + name + "-" + $(this).find("a").eq(1).html() + "-商品点击");
                    var id = $(this).attr("id");
                    if (name == "照片书") {
                        var obj = {
                            "303094": "00511100102130",
                            "2493730": "00521100102140",
                            "2493733": "00521100102150",
                            "2493736": "00601100102160",
                            "2493976": "00601100102170",
                            "2493979": "00601100102180",
                        }
                        window.location = "../TianYi/Page/index.html?productid=" + id + "&cartooncodes=" + obj[id];
                        return;
                    }
                    if (name == "阿唐奇遇" || name == "诗婢家" || name == "自然共和国") {
                        window.location = "//artist.momentcam.net/page/DetailsPage.html"  + "?productid=" + id;
                        return;
                    }
                    if (app.config.isMomanApp) {
                        mcAPI.openProductDetail(id);
                    } else {
                       // if (name == "移动电源") {
                            window.location = "//artist.momentcam.net/page/DetailsPage.html" + "?productid=" + id;
                       // }
                    }
                });
            });
        },
        // 获取url 的参数
        getParams () {
        // 取到路由带过来的参数
        let routerParams = this.$route.params.id1
        let routerParams2 = this.$route.params.id2
        // 将数据放在当前组件的数据内
        this.msg = routerParams
        alert()
        console.log(routerParams);
      },
        Returnclick(){
              if (isSplash == "Long") {
                window.history.go(-1);
                return;
            } else {
                ClientReturn();
            }
        },
        getData(callback){
             axios.get("//product.manboker.com/api/Mart/GetMartDailyActivityByPlace?countryCode=CN" + '&title=' + placeTitle)
                 .then(response => {
                     console.log(response);
                      this.ShopBanner = response.data.Response[0].Places;
                   })
                .catch(err => {
                  console.log(err)
                 })
        }
     },
     watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'getParams'
    },
      mounted() {
           this.$nextTick(function() {
            this.Items();
        })
      }
  }


</script>

<style>

</style>
