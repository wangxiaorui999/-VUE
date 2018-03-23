console.log = function () { };
(function () {
    var urlLinks = window.location.search == "" ? "?v=2" : window.location.search;
    function clearCookie() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;)
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
    }

    var categoryList = {
        pSave: {},
        init: function () {
            //商品列表返回分类页面时判断显示类别
            if ($.cookie("className") == null || $.cookie("className") == "") {
                var className = "Home";
            } else {
                var className = $.cookie("className");
            }
            if (!$.cookie("b")) {
                $(".popWindow").fadeIn(function () {
                    $.cookie("b", "b", { expires: 7 });
                });
                $(".w img").on("click", function () {
                    $(".popWindow").fadeOut(function () {
                        $(this).remove();
                    });
                });
            }
            $(".GoodsListLeft li[name=" + className + "]").addClass("active").siblings("li").removeClass("active");
            this.initHeight();
            this.bind();
            if (className == "巧虎") {
                $(".GoodsListLeft li.IngeniousTigerArea").trigger("click");
            } else if (className == "自然共和国") {
                $(".GoodsListLeft li.Reg").trigger("click");
            } else {
                this.getData(className);
            }
        },
        bind: function () {
            //点击分类菜单 弹出相应商品
            $(".GoodsListLeft li").on("click", function () {
                var html = '<li id="425350"> <img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00511005012810.png") + '" alt="" /> </div>' +
                                '<div class="fire"><img src="' + app.appendWebpForImgUrl("https://mall-res.manboker.com/newmall/CN/HOT.png") + '" /> <span>精美包边抱枕</span> </div>' +
                                ' <p class="zi">巧虎全家福</p> <p class="price"></p></li>' +
                                 '<li id="425338"> <img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00511005012850.png") + '" alt="" /></div> <div class="fire"><img src="' + app.appendWebpForImgUrl("https://mall-res.manboker.com/newmall/CN/HOT.png") + '"/>' +
                                '<span>精美包边抱枕</span></div> <p class="zi">巧虎宝宝</p> <p class="price"></p></li>' +
                                  '<li id="424774">    <img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00601005012830.png") + '" alt="" /></div> <div class="fire"> <img src="' + app.appendWebpForImgUrl("https://mall-res.manboker.com/newmall/CN/HOT.png") + '"/>' +
                                  ' <span>吉事本</span> </div> <p class="zi">桃乐比亲子</p> <p class="price"></p></li>' +
                                 '<li id="424771">  <img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00601005012860.png") + '" alt="" /></div><div class="fire"><img src="' + app.appendWebpForImgUrl("https://mall-res.manboker.com/newmall/CN/HOT.png") + '" />' +
                                '<span>吉事本</span></div><p class="zi">巧虎亲子</p><p class="price"></p> </li>' +
                            '<li id="424579"><img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00601005012820.png") + '" alt="Alternate Text" /></div><div class="fire"><img src="' + app.appendWebpForImgUrl("https://mall-res.manboker.com/newmall/CN/HOT.png") + '" />' +
                            '<span>牛奶咖啡杯</span></div><p class="zi">巧虎亲子</p><p class="price"></p></li>' +
                           '<li id="424576"><img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00601005012870.png") + '" alt="Alternate Text" /></div><div class="fire"><img src="' + app.appendWebpForImgUrl("https://mall-res.manboker.com/newmall/CN/HOT.png") + '" />' +
                           '<span>牛奶咖啡杯</span></div> <p class="zi">妙妙亲子</p><p class="price"></p></li>' +
                           '<li id="423814"> <img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00601005012880.png") + '" alt="Alternate Text" /></div><div class="fire"> <img src="' + app.appendWebpForImgUrl("https://mall-res.manboker.com/newmall/CN/HOT.png") + '" />' +
                           '<span>T恤</span></div> <p class="zi">琪琪亲子</p> <p class="price"></p> </li>' +

                           ' <li id="423805"> <img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00601005012840.png") + '" alt="Alternate Text" /></div> <div class="fire"><img src="' + app.appendWebpForImgUrl("https://mall-res.manboker.com/newmall/CN/HOT.png") + '" />' +
                           '<span>T恤</span></div> <p class="zi">巧虎亲子</p><p class="price"></p></li>';
                var RegHtml = '<li id="4946758"> <img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/CN/Activity/Rep/1.png") + '" alt="" /> </div>' +
                                '<div class="fire"><span>限量版移动电源</span> </div>' +
                                ' <p class="zi"></p> <p class="price">¥ 169.00</p></li>' +
                                 '<li id="4946860"> <img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/CN/Activity/Rep/2.png") + '" alt="" /></div> <div class="fire">' +
                                '<span>限量版帆布包</span></div> <p class="zi"></p> <p class="price">¥ 79.00</p></li>' +
                                  '<li id="4946332">    <img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/CN/Activity/Rep/3.jpg") + '" alt="" /></div> <div class="fire">' +
                                  ' <span>限量版保温杯</span> </div> <p class="zi"></p> <p class="price">¥ 386.00</p></li>' +
                                 '<li id="4946950">  <img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/CN/Activity/Rep/4.png") + '" alt="" /></div><div class="fire">' +
                                '<span>限量版北欧简约抱枕</span></div><p class="zi"></p><p class="price">¥ 129.00</p> </li>' +
                            '<li id="4946800"><img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/CN/Activity/Rep/5.png") + '" alt="Alternate Text" /></div><div class="fire">' +
                            '<span>限量版明信片</span></div><p class="zi"></p><p class="price">¥ 58.00</p></li>' +
                           '<li id="4947445"><img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/CN/Activity/Rep/6.jpg") + '" alt="Alternate Text" /></div><div class="fire">' +
                           '<span>限量版彩虹本</span></div> <p class="zi"></p><p class="price">¥ 79.00</p></li>' +
                           '<li id="4947448"> <img src="' + app.appendWebpForImgUrl("//moman-res-ali.manboker.com/newmall/CN/Activity/Rep/7.jpg") + '" alt="Alternate Text" /></div><div class="fire">' +
                           '<span>限量版海报</span></div> <p class="zi"></p> <p class="price">¥ 0.00</p> </li>';
                if ($(this).hasClass("active")) {
                    return;
                } else {
                    $(this).addClass("active").siblings().removeClass("active");
                }
                if ($(this).hasClass("IngeniousTigerArea")) {
                    $.cookie("className", "");
                    $(".IngeniousTigerAreaContent").css("display", "block").siblings("ul,.Rep").css("display", "none");
                    $(".IngeniousTigerAreaContent ul").html(html);
                    $(".IngeniousTigerAreaContent ul li").on("click", function () {
                        var id = $(this).attr("id");
                        var name = $(this).find(".zi").html();
                        Counter("分类页面巧虎分类-" + name + "-商品点击");
                        if (app.config.isMomanApp) {
                            mcAPI.openProductDetail(id);
                        } else {
                            window.location = app.urls.ProductDetailURL + "?productid=" + id;
                        }
                    });
                    return;
                } else if ($(this).hasClass("Reg")) {
                    $.cookie("className", "");
                    $(".Rep").css("display", "block").siblings("ul,.IngeniousTigerAreaContent").css("display", "none");
                    $(".Rep ul").html(RegHtml);
                    $(".Rep ul li").on("click", function () {
                        var id = $(this).attr("id");
                        var name = $(this).find(".zi").html();
                        Counter("分类页面自然共和国分类-" + name + "-商品点击");
                        //if (app.config.isMomanApp) {
                        //    mcAPI.openProductDetail(id);
                        //} else {
                            window.location = app.urls.ProductDetailURL + "?productid=" + id;
                        //}
                    });
                    return;
                } else {
                    $(".IngeniousTigerAreaContent").css("display", "none").siblings("ul").css("display", "block");
                }

                var name = $(this).attr("name");
                $.cookie("className", name);
                categoryList.getData(name);
            });
            //点击分类页面返回按钮
            $(".returnHome").on("click", function () {
                $.cookie("className", "");
                history.go(-1);
            });

        },
        initHeight: function () {
            var minH = $("body").height() - $(".ClassTitle").height();
            $(".GoodsList").css("height", minH - 2 + "px");
        },
        getData: function (name) {
            if (this.pSave[name]) {
                $(".GoodsListRight ul").html(this.pSave[name]);
                return;
            }
            var html = "";
            for (var i = 0; i < Product[name].length; i++) {
                html += '<li name="' + Product[name][i].name + '">' +
					'<img src="' + app.appendWebpForImgUrl(Product[name][i].src) + '" />' +
					'<p>' + Product[name][i].name + '</p>' +
					'</li>';
            }
            this.pSave = html;
            $(".GoodsListRight ul").html(html);
            if (!mcAPI.isIOS) {
                    $("li[name='照片书']").hide();
            }

            $(".GoodsListRight ul li").off("click").on("click", function () {
                var name = $(this).attr("name");
                Counter("分类页面-" + name + "-小图标点击");
                if (name == "中国国家图书馆") {
                    window.location.href = "bannerHtml/Library.html" + urlLinks;
                    return;
                }
                window.location.href = "items.html" + urlLinks + "&name=" + encodeURIComponent(name);
            });
        }
    }
    categoryList.init();
})()
