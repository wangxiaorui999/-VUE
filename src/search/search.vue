<template>
  <div id="search">
        <div id="sc_shade">
            <div class="loading">
                <img id="l" src="https://mall-res.manboker.com/newmall/CN/goodsImg/search/spinner.gif">
                <p>正在加载...</p>
            </div>
        </div>
        <div class="navtop">
            <div class="ios_box" style="height:68px;"></div>
            <div class="nav">
                <form action="" class="shopsearch-form">
                    <div class="shopsearch-form-box">
                        <div class="shopsearch-form-action">
                            <img src="https://mall-res.manboker.com/newmall/CN/goodsImg/search/search.png" alt="" width="44"
                                 height="44">
                        </div>
                        <div class="shopsearch">
                            <input type="search" id="search_input" class="shop-search-ipt" placeholder="输入画廊名称或者商品名称">
                        </div>
                        <div class="shopsearch-mistake">
                            <img src="https://mall-res.manboker.com/newmall/CN/goodsImg/search/close.png" alt="" width="42"
                                 height="42">
                        </div>
                    </div>
                </form>
                <div class="shopCancel"><span>取消</span></div>
            </div>
            <div class="tabtitle">
                <div class="titcontent">
                    <em class="diyi  tabhover" style="color: #FA9C14" @click="tablist($event)">画廊</em>
                    <em class="taba   dier" @click="tablist($event)">商品</em>
                </div>

            </div>
        </div>
        <div class="sc_main">
            <div class="body">
                <!--画廊内容-->
                <div class="tabcontent  Gallery" style="display: none">

                    <div class="SearchResult" style="display: none"></div>
                    <!--热门搜索-->
                    <div class="DefaultSearch" style="display: none">
                        <div class="HotSearch">
                            <span>热门搜索</span>
                        </div>
                        <div class="Specificot">
                            <ul></ul>
                        </div>
                    </div>
                    <!--搜索不到内容-->
                    <div class="CannotSearch" style="display: none">
                        <img src="https://mall-res.manboker.com/newmall/CN/goodsImg/search/template_cartoon.png" alt=""
                             width="456" height="456">
                        <p>搜索不到内容</p>
                    </div>
                </div>

                <!--商品部分-->
                <div class="tabcontent  commodity  clearfix" style="display:none">
                    <div class="CommoditySection_box" style="display:none"></div>
                    <!--热门搜索-->
                    <div class="DefaultSearch" style="display: none">
                        <div class="HotSearch">
                            <span>热门搜索</span>
                        </div>
                        <div class="Specificot">
                            <ul></ul>
                        </div>
                    </div>
                    <!--搜索不到内容-->
                    <div class="CannotSearch" style="display: none">
                        <img src="https://mall-res.manboker.com/newmall/CN/goodsImg/search/template_cartoon.png" alt=""
                             width="456" height="456">
                        <p>搜索不到内容</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
var isClick = true;
 var ShopkeeperPageSize = 5;
    var ProductsOageSize = 6;
    var is_actionscroll = false;
    var is_warning = false;
    var isClick = true;
    var gallery_nodedata = 'yes';
    var commodity_nodedata = 'yes';
    var search_shade = $("#search #sc_shade");
     var search_input = function () {
        return $('#search_input').val();
    };
    var search_Shopkeeper_oversearch = function () {
        return $('#search .SearchResult').hasClass('overserch') ? "isoverserch" : "nooverserch";
    }
    var search_Products_oversearch = function () {
        return $('#search .CommoditySection_box').hasClass('overserch') ? "isoverserch" : "nooverserch";
    }
    var recomend_Shopkeeper = function () {
        return $('#search  .Gallery  .DefaultSearch').hasClass('overhas') ? "ishas" : "nohas";
    }
    var recomend_Products = function () {
        return $('#search .commodity .DefaultSearch').hasClass('overhas') ? "ishas" : "nohas";
    }

    var scroll_dom = function () {
        return $('#search .diyi').hasClass('tabhover') ? $('#search .Gallery') : $('#search .commodity');
    };

    var render_dom = function () {
        return $('#search .diyi').hasClass('tabhover') ? $("#search .SearchResult") : $("#search .CommoditySection_box");
    };
    var tab_type = function () {
        return $('#search .diyi').hasClass('tabhover') ? "gallery" : "commodity";
    };
     var search_data = {
        Shopkeeper: {
            NickName: '',
            Marker: 0,
            PageSize: ShopkeeperPageSize,
            IsTruncated: true,
            is_oversearch: false
        },
        Products: {
            Name: '',
            Marker: 0,
            PageSize: ProductsOageSize,
            IsTruncated: true,
            is_oversearch: false
        }
    }
export default {
  data() {
    return {};
  },
  methods: {
    tablist(event) {
      var el = event.currentTarget;
      if (!isClick) {
        return false;
      }
      $(el)
        .css("color", "#fa9c14")
        .addClass("tabhover")
        .siblings()
        .css("color", "#000")
        .removeClass("tabhover");
        this.search_befor_action();
    },
    // ajax 请求
    SearchCallAjax(type, url) {
      axios
        .type(url, {
          timeout: 25000,
          cache: "false",
          dataType: "json",
          async: "true"
        })
        .then(response => {
          console.log(response);
          this.getRecommend = response.data.Data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    search_action(type, tab_typeName) {
      isClick = false;
      //发起搜索操作
      if (type == "noRecommend") {
        if (tab_typeName == "gallery") {
          var data = {};
          data.NickName = search_data.Shopkeeper.NickName; //替换成name
          data.Marker = search_data.Shopkeeper.Marker;
          data.PageSize = search_data.Shopkeeper.PageSize;
          this.Search_Ajax(type, app.urls.GetShopkeeper, data, tab_typeName);
        } else {
          var data2 = {};
          data2.Name = search_data.Products.Name; //替换成name
          data2.Marker = search_data.Products.Marker;
          data2.PageSize = search_data.Products.PageSize;
          console.log(data2);
          this.Search_Ajax(type, app.urls.GetUserProducts, data2, tab_typeName);
        }
      } else {
        if (tab_typeName == "gallery") {
          this.Search_Ajax(
            type,
            app.urls.GetKeywordsShopkeeper,
            "",
            tab_typeName
          );
        } else {
          this.Search_Ajax(
            type,
            app.urls.GetKeywordsProducts,
            "",
            tab_typeName
          );
        }
      }
    },
    Search_Ajax(isRecommend, app_url, data, tab_typeName) {
      //search_shade.css('display', 'block');//这里需要加载效果
      if (isRecommend == "recommend") {
        axios
          .get("//es.momentcam.net/api/Key/GetKeywords?category=2", {
            timeout: 25000,
            cache: "false",
            dataType: "json",
            async: "true"
          })
          .then(response => {
            console.log(response);
            this.Render_data(response, isRecommend, tab_typeName);
            this.getRecommend = response.data.Data;
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        axios
          .post("//es.momentcam.net/api/Key/GetKeywords?category=2", {
            timeout: 25000,
            cache: "false",
            dataType: "json",
            async: "true"
          })
          .then(response => {
            this.Render_data(response, isRecommend, tab_typeName);
            console.log(response);
            this.getRecommend = response.data.Data;
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    //渲染传值回来的数据
    Render_data(response, type, tab_typeName) {
      if (type == "recommend") {
        //热门搜索
        var result = res;
        var Keywordhtml = "";
        for (var i = 0; i < result.Response.length; i++) {
          var className = i < 3 ? "SerialNumber" : "hui";
          Keywordhtml +=
            '<li><span class="' +
            className +
            '">' +
            (i + 1) +
            "." +
            "</span><span  >" +
            result.Response[i].Keywords +
            "</span></li>";
        }
        if (tab_typeName == "gallery") {
          $("#search  .Gallery  .DefaultSearch .Specificot ul").html(
            Keywordhtml
          );
          $("#search  .Gallery  .DefaultSearch ").addClass("overhas");
        } else {
          $("#search .commodity .DefaultSearch .Specificot ul").html(
            Keywordhtml
          );
          $("#search .commodity .DefaultSearch ").addClass("overhas");
        }
        this.show_data(type);
      } else {
        //商品信息---渲染的时候往页面上加 overserch 这个class
        if (tab_typeName == "gallery") {
          this.Gallery_add(res, function() {
            this.show_data(type);
          });
        } else {
          this.Products_add(res, function() {
            this.show_data(type);
          });
        }
      }
    },
    search_befor_action(type) {
      if (type == "newcon") {
        search.clear_data();
        $("#search  .commodity .DefaultSearch").addClass("overrecom");
        $("#search  .Gallery .DefaultSearch").addClass("overrecom");
        var searchName = search_input();
        search_data.Shopkeeper.NickName = searchName;
        search_data.Products.Name = searchName;
      }
      var tabType = tab_type();
      var searchName = search_data.Shopkeeper.NickName;
      var ajax_action = {
        recommend_action_gallery() {
          this.search_action("recommend", "gallery"); //加载推荐内容
        },
        recommend_action_commodity() {
          this.search_action("recommend", "commodity"); //加载推荐内容
        },
        noRecommend_action_gallery() {
          this.search_action("noRecommend", "gallery"); //加载内容
        },
        noRecommend_action_commodity() {
          this.search_action("noRecommend", "commodity"); //加载内容
        }
      };
      if (searchName == "") {
        //搜索内容为空，说明是推荐或者已经有推荐
        if (tabType == "gallery") {
          if ($("#search .Gallery .DefaultSearch").hasClass("overhas")) {
            this.show_data(); //直接展示
          } else {
            search_shade.show(0, ajax_action.recommend_action_gallery);
          }
        } else {
          if ($("#search .commodity .DefaultSearch").hasClass("overhas")) {
            this.show_data(); //直接展示
          } else {
            search_shade.show(0, ajax_action.recommend_action_commodity);
          }
        }
      } else {
        if (tabType == "gallery") {
          if ($("#search .Gallery .SearchResult").hasClass("overserch")) {
            this.show_data(); //直接展示
          } else {
            search_shade.show(0, ajax_action.noRecommend_action_gallery);
          }
        } else {
          if (
            $("#search .commodity .CommoditySection_box").hasClass("overserch")
          ) {
            search.show_data(); //直接展示
          } else {
            search_shade.show(0, ajax_action.noRecommend_action_commodity);
          }
        }
      }
    },
    show_data(type) {
      if (type == "recommend") {
        function close_shade() {
          search.bind();
          search_shade.fadeOut(0);
          isClick = true;
          //$('#search .nav .shopsearch-form .shopsearch-form-box .shopsearch .shop-search-ipt').blur();
        }
      } else {
        function close_shade() {
          this.search_scroll();
          this.bind();
          $("div").remove(".sc_waiting");
          is_actionscroll = false;
          search_shade.fadeOut(0);
          isClick = true;
          //$('#search .nav .shopsearch-form .shopsearch-form-box .shopsearch .shop-search-ipt').blur();
        }
      }
      if (tab_type() == "gallery") {
        search.Gallery(close_shade);
      } else {
        search.Commodity(close_shade);
      }
    },
    search_scroll() {
      //监听滑动
      var renderDom = render_dom();
      var tabTypeName = tab_type();
      scroll_dom()
        .unbind("scroll")
        .scroll(event => {
          let el = event.currentTarget;
          var $this = $(el),
            viewH = $(el).height(), //可见高度
            contentH = $(el).get(0).scrollHeight, //内容高度
            scrollTop = $(el).scrollTop(); //滚动高度
          console.log(scrollTop);
          // console.log(contentH - viewH - scrollTop);
          if (contentH - viewH - scrollTop <= 350) {
            //到达底部100px时,加载新内容
            var scrollIsTruncated =
              tab_type() == "gallery"
                ? search_data.Shopkeeper.IsTruncated
                : search_data.Products.IsTruncated;
            //添加 如果没有加载内容就应该为false
            //if (!render_dom().hasClass('overserch')) {
            //    scrollIsTruncated = false;
            //}
            if (scrollIsTruncated === true) {
              //说明还有数据可以加载
              if (is_actionscroll == false) {
                this.go_scroll();
              }
            } else {
              if (tabTypeName == "gallery") {
                if (
                  $("#search .Gallery .SearchResult").css("display") !== "none"
                ) {
                  if (contentH - viewH - scrollTop == 0) {
                    if (gallery_nodedata == "yes") {
                      search.search_warning("没有数据了");
                      gallery_nodedata = "no";
                    }
                  }
                }
              } else {
                if (
                  $("#search  .commodity .CommoditySection_box").css(
                    "display"
                  ) !== "none"
                ) {
                  if (contentH - viewH - scrollTop == 0) {
                    if (commodity_nodedata == "yes") {
                      search.search_warning("没有数据了");
                      commodity_nodedata = "no";
                    }
                  }
                }
              }
            }
          }
        });
    }
  },
  mounted() {}
};
</script>

<style>
#showBody {
  position: relative;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.sc_shade .loading img {
  margin-top: 0px !important;
}
/*============home 页面搜索样式==================*/
#xd_content {
  width: 100%;
  height: 100%;
  background: #fff;
  left: 0;
  top: 0;
  -webkit-user-select: none;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-transform: translateZ(0);
  -webkit-perspective: 1000;
  -webkit-backface-visibility: hidden;
  z-index: 999999999;
}
/*#xd_content {*/
/**/
/*!*padding-top: 210px;*!*/
/*}*/

input[type="search"] {
  -webkit-appearance: none;
}

input[type="search"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
}

input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}

/*.mfxd-content {*/
/*!*margin-top: 213px;*!*/
/*}*/

.moveUp {
  -moz-animation: moveUp ease-in-out 0.4s 1;
  -o-animation: moveUp ease-in-out 0.4s 1;
  -webkit-animation: moveUp ease-in-out 0.4s 1;
  animation: moveUp ease-in-out 0.4s 1;
  animation-fill-mode: both;
}

@-moz-keyframes moveUp {
  from {
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  to {
    -moz-transform: translate3d(0, -250px, 0);
    -ms-transform: translate3d(0, -250px, 0);
    -o-transform: translate3d(0, -250px, 0);
    -webkit-transform: translate3d(0, -250px, 0);
    transform: translate3d(0, -250px, 0);
    opacity: 0;
  }
}

@-webkit-keyframes moveUp {
  from {
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  to {
    -moz-transform: translate3d(0, -250px, 0);
    -ms-transform: translate3d(0, -250px, 0);
    -o-transform: translate3d(0, -250px, 0);
    -webkit-transform: translate3d(0, -250px, 0);
    transform: translate3d(0, -250px, 0);
    opacity: 0;
  }
}

@keyframes moveUp {
  from {
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  to {
    -moz-transform: translate3d(0, -250px, 0);
    -ms-transform: translate3d(0, -250px, 0);
    -o-transform: translate3d(0, -250px, 0);
    -webkit-transform: translate3d(0, -250px, 0);
    transform: translate3d(0, -250px, 0);
    opacity: 0;
  }
}

/*向下的慢效果*/
.moveDown1 {
  -moz-animation: moveDown1 ease-in-out 0.3s 1;
  -o-animation: moveDown1 ease-in-out 0.3s 1;
  -webkit-animation: moveDown1 ease-in-out 0.3s 1;
  animation: moveDown1 ease-in-out 0.3s 1;
  animation-fill-mode: both;
}
@-moz-keyframes moveDown1 {
  from {
    -moz-transform: translate3d(0, -50px, 0);
    -ms-transform: translate3d(0, -50px, 0);
    -o-transform: translate3d(0, -50px, 0);
    -webkit-transform: translate3d(0, -50px, 0);
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }

  to {
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@-webkit-keyframes moveDown1 {
  from {
    -moz-transform: translate3d(0, -250px, 0);
    -ms-transform: translate3d(0, -250px, 0);
    -o-transform: translate3d(0, -250px, 0);
    -webkit-transform: translate3d(0, -250px, 0);
    transform: translate3d(0, -250px, 0);
    opacity: 0;
  }

  to {
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes moveDown1 {
  from {
    -moz-transform: translate3d(0, -250px, 0);
    -ms-transform: translate3d(0, -250px, 0);
    -o-transform: translate3d(0, -250px, 0);
    -webkit-transform: translate3d(0, -250px, 0);
    transform: translate3d(0, -250px, 0);
    opacity: 0;
  }

  to {
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

/*向下效果*/
.moveDown {
  -moz-animation: moveDown ease-in-out 0.4s 1;
  -o-animation: moveDown ease-in-out 0.4s 1;
  -webkit-animation: moveDown ease-in-out 0.4s 1;
  animation: moveDown ease-in-out 0.4s 1;
  animation-fill-mode: both;
}

@-moz-keyframes moveDown {
  from {
    -moz-transform: translate3d(0, -250px, 0);
    -ms-transform: translate3d(0, -250px, 0);
    -o-transform: translate3d(0, -250px, 0);
    -webkit-transform: translate3d(0, -250px, 0);
    transform: translate3d(0, -250px, 0);
    opacity: 0;
  }

  to {
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@-webkit-keyframes moveDown {
  from {
    -moz-transform: translate3d(0, -250px, 0);
    -ms-transform: translate3d(0, -250px, 0);
    -o-transform: translate3d(0, -250px, 0);
    -webkit-transform: translate3d(0, -250px, 0);
    transform: translate3d(0, -250px, 0);
    opacity: 0;
  }

  to {
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes moveDown {
  from {
    -moz-transform: translate3d(0, -250px, 0);
    -ms-transform: translate3d(0, -250px, 0);
    -o-transform: translate3d(0, -250px, 0);
    -webkit-transform: translate3d(0, -250px, 0);
    transform: translate3d(0, -250px, 0);
    opacity: 0;
  }

  to {
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.nav {
  width: 990px;
  height: 96px;
  border-radius: 8px;
  border: none;
  margin: 0 auto;
  padding: 23px 0;
}

.nav .shopsearch-form {
  /*margin-left: 45px;*/
}

.nav .shopsearch-form .shopsearch-form-box {
  width: 990px;
  height: 96px;
  border-radius: 8px;
  position: relative;
  background-color: #f2f2f2;
}

.nav .shopsearch-form .shopsearch-form-box .shopsearch-form-action {
  position: absolute;
  left: 22px;
  top: 26px;
  vertical-align: top;
  width: 44px;
  height: 44px;
}

.nav .shopsearch-form .shopsearch-form-box .shopsearch {
  position: absolute;
  left: 88px;
  top: 0px;
  height: 94px;
  border: none;
}

.nav .shopsearch-form .shopsearch-form-box .shopsearch .shop-search-ipt {
  border: none;
  font-size: 40px;
  color: #5f646e;
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

::-webkit-input-placeholder {
  color: #a3a4a8;
}

.nav .shopsearch-form .shopsearch-form-box .shopsearch-mistake {
  display: none;
  position: absolute;
  right: 28px;
  top: 26px;
  width: 42px;
  height: 42px;
}
.PopularShop {
  height: 180px;
  width: 100%;
  display: -webkit-flex; /* Safari */
  display: flex;
  /*line-height: 180px;*/
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.PopularShop .PopularShopicon {
  padding: 0 35px;
  width: 110px;
  height: 110px;
}

.PopularShop .PopularShopicon img {
  width: 100%;
  height: 100%;
  margin-right: 0;
}

.PopularShop .PopularShopcontent {
  height: 180px;
  overflow: hidden;
  flex: 1;
}

.PopularShop .PopularShopcontent .StudioAuthor {
  height: 170px;
  /*width: 100%;*/
  overflow: hidden;
  /*line-height: 170px;*/
  box-sizing: border-box;
  float: left;
  width: 582px;
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
  /* line-height: 117px; */
}

.PopularShop .PopularShopcontent .StudioAuthor .StudioAuthorWords div {
  height: 55px;
  margin-top: 32px;
  width: 320px;
}

.PopularShop
  .PopularShopcontent
  .StudioAuthor
  .StudioAuthorWords
  div
  .StudioAuthorName {
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

.PopularShop .PopularShopcontent .StudioAuthor .StudioAuthorWords div img {
  margin-left: 7px;
  float: left;
  /* vertical-align: bottom; */
  width: 40px;
  height: 40px;
  margin-top: 10px;
  object-fit: cover;
  vertical-align: top;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-right: 0px;
}

.PopularShop
  .PopularShopcontent
  .StudioAuthor
  .StudioAuthorWords
  div
  .isoffocial {
  margin-left: 7px;
  margin-right: 8px;
  height: 30px;
  line-height: 30px;
  font-size: 30px;
  color: #fa9c14;
  -moz-border-radius: 22px;
  -webkit-border-radius: 22px;
  border-radius: 22px;
  background: #ffebd0;
  padding: 6px 20px;
  display: inline-block;
  text-align: center;
  margin-top: 9px;
}
.PopularShop
  .PopularShopcontent
  .StudioAuthor
  .StudioAuthorWords
  div
  .OfficialRecommendation {
  width: 148px;
  height: 44px;
  margin-top: 66px;
  line-height: 44px;
  background-color: #fa9c14;
  opacity: 0.2;
  border-radius: 22px;
  float: left;
  text-align: center;
  margin-left: 12px;
}

.PopularShop
  .PopularShopcontent
  .StudioAuthor
  .StudioAuthorWords
  div
  .OfficialRecommendation
  p {
  font-size: 30px;
  color: #fa9c14;
  z-index: 2;
}

.PopularShop
  .PopularShopcontent
  .StudioAuthor
  .StudioAuthorWords
  .StudioAuthorDetail {
  font-size: 32px;
  color: #959595;
  width: 380px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* text-align: left; */
  position: absolute;
}

.PopularShop .borderbgc {
  display: inline-block;
  width: 1px;
  height: 54px;
  background-color: #4e4e4e;
}

.PopularShop .PopularShopcontent .PopularShopimg {
  float: left;
  /*margin-left: 74px;*/
}

.PopularShop .PopularShopcontent .PopularShopimg .left,
.PopularShop .PopularShopcontent .PopularShopimg .right {
  width: 126px;
  height: 126px;
  /*background-color: pink;*/
  margin-right: 20px;
  float: left;
  margin-top: 27px;
}

.PopularShopcontent .swiper-container4 {
  width: 100%;
  height: 100%;
}
/*============home 页面搜索样式end==================*/

#search ul {
  padding: 35px 45px 50px;
  margin: 0;
  list-style: none;
}

#search {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  background: #fff;
  z-index: -1;
}

#search img {
  margin-right: 0;
}

#search .clearfix:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}

input,
button,
select,
textarea {
  outline: none;
}

#search .sc_main {
  width: 1080px;
  height: 100%;
  overflow: hidden;
  padding-top: 250px;
  background: #fff;
}

#search .sc_main .body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#search .tabtitle {
  height: 126px;
  width: 100%;
  line-height: 126px;
  text-align: center;
  background-color: #fff;
  z-index: 99;
  /*overflow: hidden;*/
}

#search .navtop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 999;
  border-bottom: 1px solid #a3a4a8;
}

#search .tabtitle .titcontent {
  width: 512px;
  height: 119px;
  margin: 0 auto;
}

#search .tabtitle .titcontent .diyi {
  margin-right: 250px;
}

#search .tabtitle .titcontent em {
  color: #4e4e4e;
  position: relative;
  display: inline-block;
  font-size: 40px;
  height: 100%;
  width: 112px;
  font-style: normal;
}

#search .sc_main .body .DefaultSearch .HotSearch {
  height: 122px;
  background-color: #f2f2f2;
  line-height: 122px;
}

#search .sc_main .body .DefaultSearch .HotSearch span {
  margin-left: 45px;
  font-size: 34px;
  color: #959595;
}

#search .sc_main .body .DefaultSearch .Specificot ul {
  box-sizing: border-box;
}

#search .sc_main .body .DefaultSearch .Specificot ul li {
  height: 40px;
  line-height: 40px;
  padding: 35px 0;
  font-size: 40px;
}

#search .sc_main .body .DefaultSearch .Specificot ul li span {
  font-size: 40px;
  color: #4e4e4e;
  margin-right: 15px;
}

#search .sc_main .body .DefaultSearch .Specificot ul li .SerialNumber {
  color: #fa9c14;
}

#search .sc_main .body .DefaultSearch .Specificot ul li .hui {
  color: #959595;
}

#search .sc_main .body .SearchResult {
  dispaly: none;
}

#search .sc_main .body .SearchResult .StudioAuthor {
  height: 170px;
  width: 100%;
  overflow: hidden;
  line-height: 41px;
  box-sizing: border-box;
  padding-left: 20px;
}

#search .sc_main .body .Gallery .SearchResult .StudioAuthor .StudioAuthorIcon {
  display: inline-block;
  vertical-align: middle;
  width: 118px;
  height: 118px;
  /*margin-right: 20px;*/
  border-radius: 50%;
  /*background-color: pink;*/
  border: 1px solid #bfbfbf;
  margin-right: 26px;
}

#search .sc_main .body .Gallery .SearchResult .StudioAuthor .StudioAuthorWords {
  display: inline-block;
  /*vertical-align: middle;*/
  position: relative;
}

#search
  .sc_main
  .body
  .Gallery
  .SearchResult
  .StudioAuthor
  .StudioAuthorWords
  div {
  height: 55px;
  margin-top: 43px;
}

#search
  .sc_main
  .body
  .Gallery
  .SearchResult
  .StudioAuthor
  .StudioAuthorWords
  div
  .StudioAuthorName {
  font-size: 40px;
  color: #4e4e4e;
  margin-bottom: 10px;
  display: inline-block;
  max-width: 450px;
  text-overflow: ellipsis;
  float: left;
  white-space: nowrap;
  overflow: hidden;
}

#search
  .sc_main
  .body
  .Gallery
  .SearchResult
  .StudioAuthor
  .StudioAuthorWords
  div
  img {
  margin-left: 12px;
  float: left;
  vertical-align: top;
  width: 40px;
  height: 40px;
  margin-top: 3px;
  object-fit: cover;
  margin-right: 0px;
}

#search
  .sc_main
  .body
  .Gallery
  .SearchResult
  .StudioAuthor
  .StudioAuthorWords
  div
  .OfficialRecommendation {
  width: 148px;
  height: 44px;
  /*margin-top:5px;*/
  background-color: #fa9c14;
  opacity: 0.2;
  border-radius: 22px;
  float: left;
  text-align: center;
  margin-left: 12px;
}

#search
  .sc_main
  .body
  .Gallery
  .SearchResult
  .StudioAuthor
  .StudioAuthorWords
  div
  .OfficialRecommendation
  p {
  font-size: 30px;
  color: #fa9c14;
  z-index: 2;
}

#search
  .sc_main
  .body
  .Gallery
  .SearchResult
  .StudioAuthor
  .StudioAuthorWords
  .StudioAuthorDetail {
  font-size: 32px;
  color: #959595;
  max-width: 470px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  height: 41px;
  position: absolute;
}

#search .sc_main .body .Gallery .SearchResult .StudioPicList {
  width: 100%;
  height: 340px;
  box-sizing: border-box;
  padding-left: 20px;
}

#search
  .sc_main
  .body
  .Gallery
  .SearchResult
  .StudioPicList
  .StudioPicListLeft {
  width: 340px;
  height: 340px;
  margin-right: 10px;
  background-color: red;
  float: left;
}

#search .sc_main .body .Gallery .SearchResult .StudioPicList .StudioPicListmid {
  width: 340px;
  height: 340px;
  margin-right: 10px;
  background-color: #985f0d;
  float: left;
}

#search
  .sc_main
  .body
  .Gallery
  .SearchResult
  .StudioPicList
  .StudioPicListright {
  width: 340px;
  height: 340px;
  background-color: #7696de;
  float: left;
}

#search .sc_main .body .Gallery .SearchResult .botomborder {
  width: 100%;
  height: 30px;
  margin-top: 30px;
  background-color: #f2f2f2;
}

#search .sc_main .body .commodity {
  box-sizing: border-box;
  /*background-color: #f2f2f2;*/
}

#search .sc_main .body .commodity .CommoditySection_box:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
}

#search .sc_main .body .commodity .CommoditySection:nth-child(odd) {
  margin-right: 16px;
  margin-left: 28px;
}

#search .sc_main .body .commodity .CommoditySection {
  background-color: #fff;
  float: left;
}

#search .sc_main .body .commodity .CommoditySection .topphoto {
  width: 512px;
  height: 512px;
  /*background-color: pink;*/
}

#search .sc_main .body .commodity .CommoditySection .describe {
  width: 512px;
  margin-top: 38px;
  padding-left: 16px;
  box-sizing: border-box;
  padding-right: 16px;
}
#search .sc_main .body .commodity .CommoditySection .describe .DetailName {
  height: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

#search .sc_main .body .commodity .CommoditySection .describe .DetailName span {
  font-size: 36px;
  color: #4e4e4e;
}

#search
  .sc_main
  .body
  .commodity
  .CommoditySection
  .describe
  .DetailName
  .line {
  display: inline-block;
  width: 2px;
  height: 22px;
  background-color: #4e4e4e;
  margin-left: 14px;
  margin-right: 14px;
}

#search .tabhover::after {
  content: "";
  background-color: #fa9c14;
  display: block;
  width: 112px;
  height: 6px;
  margin-top: -15px;
}

#search .nav {
  width: 100%;
  height: 94px;
  padding: 23px 0;
  background-color: #fff;
  z-index: 99;
  border-bottom: 1px solid #a3a4a8;
}

#search .nav .shopsearch-form {
  margin-left: 45px;
}

#search .nav .shopsearch-form .shopsearch-form-box {
  width: 883px;
  height: 94px;
  border-radius: 8px;
  position: relative;
  background-color: #f2f2f2;
}

#search .nav .shopsearch-form .shopsearch-form-box .shopsearch-form-action {
  position: absolute;
  left: 22px;
  top: 26px;
  vertical-align: top;
  width: 44px;
  height: 44px;
}

.shopsearch-form-action img {
  margin-right: 0;
}

#search .nav .shopsearch-form .shopsearch-form-box .shopsearch {
  position: absolute;
  top: 22px;
  left: 88px;
  height: 50px;
}

#search
  .nav
  .shopsearch-form
  .shopsearch-form-box
  .shopsearch
  .shop-search-ipt {
  border: none;
  font-size: 40px;
  color: #5f646e;
  width: 730px;
  background-color: #f2f2f2;
  outline: none;
  height: 50px;
  line-height: 50px;
}

#search .nav .shopsearch-form .shopsearch-form-box .shopsearch-mistake {
  position: absolute;
  right: 28px;
  top: 26px;
  width: 42px;
  height: 42px;
}

#search .nav .shopsearch-form .shopsearch-form-box .shopsearch-mistake > img {
  display: none;
}

#search .AvatarName {
  height: 50px;
  margin-top: 18px;
}

#search .AvatarName .Avatar {
  width: 50px;
  height: 50px;
  border: 1px solid #bfbfbf;
  border-radius: 50%;
  margin-right: 20px;
  float: left;
}

#search .AvatarName .ShopName {
  float: left;
}

#search .AvatarName .ShopName p {
  font-size: 32px;
  color: #959595;
}

#search .describe .price {
}

#search .describe .price p {
  font-size: 40px;
  color: #ff2a00;
  margin-top: 18px;
  margin-bottom: 38px;
}

#search .nav .shopCancel {
  float: right;
  width: 152px;
  height: 86px;
  line-height: 86px;
  text-align: center;
  margin-top: 0;
  position: relative;
  top: -86px;
}

#search .nav .shopCancel span {
  font-size: 40px;
  color: #5f646e;
}

#search .commodity,
#search .Gallery {
  position: fixed;
  top: 250px;
  bottom: 0;
  left: 0;
  width: 100%;
  over-flow-x: hidden;
  overflow-y: scroll;
  /*background-color: #f2f2f2;*/
}

#search .CannotSearch {
  width: 456px;
  text-align: center;
  height: 566px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

#search .CannotSearch p {
  font-size: 40px;
  color: #5f646e;
  margin-top: 54px;
}

#sc_shade {
  position: fixed;
  top: 250px;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  z-index: 99999;
  border-top: 1px solid #cccccc;
  display: none;
}

#sc_shade .loading {
  width: 420px;
  height: 420px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
  margin: 460px auto;
  display: block;
  background: rgba(0, 0, 0, 0.6);
}

#sc_shade #l {
  width: 50%;
  height: 64%;
  padding: 55px 25% 0;
}
#sc_shade .loading p {
  text-align: center;
  color: #fff;
  font-size: 36px;
  height: 47px;
}

/*加载*/
#search .sc_waiting {
  width: 100%;
  overflow: hidden;
}

#search .sc_waiting img {
  display: block;
  width: 60px;
  margin: 0 auto;
  padding: 100px 0;
}

.warning_msg {
  width: 700px;
  height: 130px;
  background-color: #000000;
  opacity: 0.65;
  font-size: 46px;
  color: #ffffff;
  border-radius: 12px;
  line-height: 130px;
  text-align: center;
  position: fixed;
  top: 45%;
  left: 18%;
}
</style>
