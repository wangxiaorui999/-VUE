<template>
    <div class="ClassBox Allproduct" style="display:block;">
        <div class="ClassTitle">
            <div class="headerTop"></div>
            <div class="oTitle">
                分类
                <div class="returnHome"></div>
            </div>
        </div>
        <div class="GoodsList">
            <div class="GoodsListLeft">
                <ul>
                  <li v-for="(items,index) in list" :class="{active:selected==index}"  v-bind:index="index" @click="Xqclick($event,index)"  v-bind:name="items.name"><span></span>{{items.title}}</li>
                    <!-- <li class="active"    v-bind:name="" @click="Xqclick($event)"><span></span></li> -->
                    <!-- <li name="Digital" @click="Xqclick($event)"><span></span>数码3c</li>
                    <li name="Gift" @click="Xqclick($event)"><span></span>文具玩具</li>
                    <li name="Mugs" @click="Xqclick($event)"><span></span>餐饮用具</li>
                    <li name="Cloth" @click="Xqclick($event)"><span></span>服饰箱包</li>
                    <li name="Photo" @click="Xqclick($event)"><span></span>绘本相册</li>
                    <li name="Pendant" @click="Xqclick($event)"><span></span>饰品</li>
                    <li name="Calendar" @click="Xqclick($event)"><span></span>创意新奇特</li>
                    <li name="Brand" @click="Xqclick($event)"><span></span>品牌专区</li> -->
                    <li class="IngeniousTigerArea" name="IngeniousTigerArea" @click="Xqclick($event)"><span></span>巧虎专区</li> -->
                    <li class="Reg" name="Reg"  @click="Xqclick($event)"><span></span>自然共和国</li>
                </ul>
            </div>
            <div class="GoodsListRight">
                <ul  v-for="(items,index) in list" v-bind:name="items.name" :class="{name:true,active1:selected==index}" >
                    <li   v-for="(datacon,key) in items.content"  v-bind:name="datacon.name" @click="productXQ($event)" ><router-link   :to="{path:'Item',params: '{ id: urlLinks ,id2: name}}'}"><img v-lazy="datacon.src" data-pinit="registered" width="145"></router-link>


                    <p>{{datacon.name}}</p></li>
                  <!-- <li name="艺术杯垫" v-for="GoodsListItem in GoodsList" v-bind:id="GoodsListItem.id">
                    <img v-lazy="GoodsListItem.src"  data-pinit="registered">
                    <p>{{GoodsListItem.src}}</p>
                  </li> -->
                  <!-- <li name="艺术杯垫"  v-for="">
                    <img   data-pinit="registered">
                       <p>艺术杯垫</p>
                  </li> -->
                </ul>
                <div class="IngeniousTigerAreaContent" style="display:none">
                    <div class="banner2">
                        <img src="https://mall-res.manboker.com/newmall/GoodsBox/qiaohu/banner2.jpg" alt="Alternate Text" width="780" />
                        <p class="first"> * 此部分商品仅限参与巧虎活动"爱不缺席照相馆"的用户凭优惠码兑换使用，不对外发售</p>
                    </div>
                    <div class="foot">
                        <ul>
                            <li v-for="GoodsListItem in GoodsList" v-bind:id="GoodsListItem.id">
                              <img v-lazy="GoodsListItem.src"  data-pinit="registered">
                            <div class="fire">
                              <img v-lazy="GoodsListItem.src1">
                              <span>{{GoodsListItem.name}}</span>
                               </div>
                                <p class="zi">{{GoodsListItem.name1}}</p>
                                <p class="price"></p>
                            </li>
                             <!-- <li name="艺术杯垫" v-for="GoodsListItem in GoodsList" v-bind:id="GoodsListItem.id">
                    <img v-lazy="GoodsListItem.src"  data-pinit="registered">
                    <p>{{GoodsListItem.src}}</p>
                  </li> -->
                        </ul>
                    </div>

                </div>
                 <div class="Rep" style="display:none">
                    <div class="banner2">
                        <img src="https://mall-res.manboker.com/newmall/CN/Activity/Rep/repbanner2.jpg" alt="Alternate Text" width="780" />
                    </div>
                    <div class="foot">
                        <ul>
                            <li v-for="RegGoodsListItem in RegGoodsList" v-bind:id="RegGoodsListItem.id">
                              <img v-lazy="RegGoodsListItem.src"  data-pinit="registered">
                            <div class="fire">
                              <span>{{RegGoodsListItem.name}}</span>
                               </div>
                                <p class="zi"></p>
                                <p class="price">{{RegGoodsListItem.price}}</p>
                              </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
     <!-- <mcJs-Api src="https://mall-res.manboker.com/lib/mcJsApi.js?v=88"></mcJs-Api> -->
</template>
<script>
import Vue from "vue";
import axios from "axios";
import jquery from "../assets/jquery/jquery";
import { getCookie, delCookie, setCookie } from "../commoms/cookies";
import { app, getQueryString } from "../commoms/config";
import { mcJsApi } from "../commoms/mcJsApi";
import { item } from "../item/item";
var urlLinks = window.location.search == "" ? "?v=2": window.location.search;
export default {
  name: "Allproduct",
  data() {
     return {
        selected: 0, //当前位置
        list:[],
        GoodsList:[],
        RegGoodsList:[],
        urlLinks : window.location.search == "" ? "?v=2": window.location.search,
        name:encodeURIComponent(name)
            }
    },
    watch: {
       '$route': function (route) {

       }
    },
  methods: {
      AllList(){
        this.list = [
        {
          title: "家居",
          name: "Home",
          indexsy:0,
          content: [
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Coaster.png",
              url: "bannerHTML/Curtain.html",
              name: "艺术杯垫"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/SkinCarpet.jpg",
              url: "bannerHTML/Curtain.html",
              name: "亲肤毯"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/PillowBlankets.jpg",
              url: "bannerHTML/Curtain.html",
              name: "法兰绒舒适抱枕毯"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/apron.jpg",
              url: "bannerHTML/Curtain.html",
              name: "个性围裙"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Washcloth.jpg",
              url: "bannerHTML/Curtain.html",
              name: "浴巾"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/smallCurtain.jpg",
              url: "bannerHTML/Curtain.html",
              name: "浴帘"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/jimeibaozhen.jpg",
              url: "bannerHTML/Pillow.html",
              name: "精美包边抱枕"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/jianyuebaozhen.jpg",
              url: "bannerHTML/SimplePillow.html",
              name: "北欧简约抱枕"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Upillow.jpg",
              url: "bannerHTML/Upillow.html",
              name: "U型枕"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/CarPillow.jpg",
              url: "bannerHTML/CarPillow.html",
              name: "汽车枕头"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/piaochuangtan.jpg",
              url: "bannerHTML/WindowBlanket.html",
              name: "地毯"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/qingyushan.jpg",
              url: "bannerHTML/Umbrella.html",
              name: "晴雨伞"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/Classification/ReverseUmbrella.jpg",
              url: "bannerHTML/ReverseUmbrella.html",
              name: "反向伞"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/dabaikuang.png",
              url: "bannerHTML/Frames.html",
              name: "肖像画"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/Classification/DoorCurtain.jpg",
              url: "bannerHTML/Frames.html",
              name: "北欧简约帆布门帘		"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/Classification/DoorCurtain1.jpg",
              url: "bannerHTML/Frames.html",
              name: "创意分片门帘	"
            }
          ]
        },
        {
          title: "数码3c",
          name: "Digital",
          indexsy:1,
          content: [
            {
              src:"https://mall-res.manboker.com/newmall/CN/Classification/SoftPhone.png",
              url: "bannerHTML/Curtain.html",
              name: "软薄高透手机壳"
            },
            //{
            //    src: "https://mall-res.manboker.com/newmall/CN/Classification/balance.png",
            //    url: "bannerHTML/Curtain.html",
            //    name: "体重秤"
            //},
            {
              src:"https://mall-res.manboker.com/newmall/CN/Classification/OrderPhone.jpg",
              url: "bannerHTML/Curtain.html",
              name: "全版印花手机壳"
            },
            {
              src:"https://mall-res.manboker.com/newmall/CN/Classification/Pocket.png",
              url: "bannerHTML/whiteList.html",
              name: "惠普口袋机"
            },
            {
              src: "https://mall-res.manboker.com/newmall/CN/Classification/xiaobaishoujike.png",
              url: "bannerHTML/whiteList.html",
              name: "小白手机壳"
            },
            {
              src:"https://mall-res.manboker.com/newmall/CN/Classification/toumingshoujike.jpg",
              url: "bannerHTML/TransparentPhoneShell.html",
              name: "透明手机壳"
            },
            {
              src: "https://mall-res.manboker.com/newmall/CN/Classification/shubiaodian.jpg",
              url: "bannerHTML/MousePad.html",
              name: "鼠标垫"
            },
            {
              src:"https://mall-res.manboker.com/newmall/CN/Classification/yidongdianyuan.jpg",
              url: "bannerHTML/Power.html",
              name: "移动电源"
            },
            {
              src:"https://mall-res.manboker.com/newmall/CN/Classification/zhezhideng.jpg",
              url: "bannerHTML/Light.html",
              name: "折纸灯"
            },
            {
              src:"https://mall-res.manboker.com/newmall/CN/Classification/LEDxiangkuangdeng.jpg",
              url: "bannerHTML/Led.html",
              name: "LED相框灯"
            },
            {
              src:"https://mall-res.manboker.com/newmall/CN/Classification/yinyuebi.jpg",
              url: "bannerHTML/WallSpeak.html",
              name: "音乐壁"
            }
          ]
        },
        {
          title: "文具玩具",
          name: "Gift",
          indexsy:2,
          content: [
            {
              src:"https://mall-res.manboker.com/newmall/CN/Classification/PhotoDeskCalendar.png",
              url: "bannerHTML/GreetingCard.html",
              name: "精品相框台历"
            },
            {
              src:"https://mall-res.manboker.com/newmall/CN/Classification/taili2018.jpg",
              url: "bannerHTML/GreetingCard.html",
              name: "2018台历"
            },
            {
              src:"https://mall-res.manboker.com/newmall/CN/Classification/Rainbow.jpg",
              url: "bannerHTML/GreetingCard.html",
              name: "彩虹本"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Scholar.jpg",
              url: "bannerHTML/GreetingCard.html",
              name: "智能书法"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/GreetingCard.jpg",
              url: "bannerHTML/GreetingCard.html",
              name: "贺卡套装"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/guali2018.jpg",
              url: "bannerHTML/CalendarWall.html",
              name: "2018挂历"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/bi.JPG",
              url: "bannerHTML/notebook.html",
              name: "本笔套装"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/smallCrystalPuzzle.jpg",
              url: "bannerHTML/CrystalPuzzle.html",
              name: "亚克力水晶拼图"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/pingtu.jpg",
              url: "bannerHTML/Puzzle.html",
              name: "拼图简版"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Puzzle1000.jpg",
              url: "bannerHTML/Puzzle1000.html",
              name: "拼图高定版"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/hunqing.jpg",
              url: "bannerHTML/Wedding.html",
              name: "婚庆套装"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Skate.jpg",
              url: "bannerHTML/Wedding.html",
              name: "滑板"
            }
          ]
        },
        {
          title: "餐饮用具",
          name: "Mugs",
          indexsy:3,
          content: [
            {
              src:
                "https://mall-res.manboker.com/newmall/Classification/DoubleCup.png",
              url: "bannerHTML/Glass.html",
              name: "双层换图杯"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/Classification/ClassicGlass.png",
              url: "bannerHTML/Glass.html",
              name: "tomic经典款玻璃杯"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/Classification/TeaStrainer.png",
              url: "bannerHTML/Glass.html",
              name: "TOMIC茶漏款玻璃杯"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/JuiceCup.jpg",
              url: "bannerHTML/Glass.html",
              name: "榨汁杯"
            },
            //{
            //    src: "https://mall-res.manboker.com/newmall/CN/Classification/smallGlass.jpg?v=10",
            //    url: "bannerHTML/Glass.html",
            //    name: "星座印花玻璃杯"
            //},
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/xingzuobei.jpg",
              url: "bannerHTML/Cup.html",
              name: "星座杯"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/makebei.jpg",
              url: "bannerHTML/joinCupList.html",
              name: "在一起杯"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/baowenbei.png",
              url: "bannerHTML/VacuumCup.html",
              name: "保温杯"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/niunaikafeibei.jpg",
              url: "bannerHTML/MilkCup.html",
              name: "牛奶咖啡杯"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/milkcup.jpg",
              url: "bannerHTML/Milk.html",
              name: "牛奶罐"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/kafeibeitaocan.jpg",
              url: "bannerHTML/CoffeeCup.html",
              name: "咖啡杯套装"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/xicangucipan.jpg",
              url: "bannerHTML/Plate.html",
              name: "骨瓷西餐盘"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/CupandPot.jpg",
              url: "bannerHTML/Glass.html",
              name: "一杯一壶"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/dafang.jpg",
              url: "bannerHTML/Glass.html",
              name: "骨瓷大方杯"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/AfternoonCup.jpg",
              url: "bannerHTML/Glass.html",
              name: "骨瓷杯碟"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/GenerousDish.jpg",
              url: "bannerHTML/Glass.html",
              name: "骨瓷大方盘"
            }
          ]
        },
        {
          title: "服饰箱包",
          name: "Cloth",
          indexsy:4,
          content: [
            //{
            //src: "https://mall-res.manboker.com/newmall/CN/Classification/Hoodie.png",
            //url: "bannerHTML/Curtain.html",
            //name: "帽衫"
            //},
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/longScarf.jpg",
              url: "bannerHTML/Curtain.html",
              name: "长款丝巾"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/smallShoes.jpg",
              url: "bannerHTML/Shoes.html",
              name: "帆布鞋"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/txu.png",
              url: "bannerHTML/Clothing.html",
              name: "T恤"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/SilkScarf.jpg",
              url: "bannerHTML/SilkScarf.html",
              name: "丝巾"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/Classification/ComputerPackage.jpg",
              url: "bannerHTML/Polo.html",
              name: "手绘立体电脑包"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Polo.png",
              url: "bannerHTML/Polo.html",
              name: "全棉徽章polo衫"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/Classification/suitcase.jpg",
              url: "bannerHTML/Frames.html",
              name: "拉杆箱"
            },
            //{
            //    src: "https://mall-res.manboker.com/newmall/Classification/ProtectingJacket.png",
            //    url: "bannerHTML/Frames.html",
            //    name: "旅行箱保护套"
            //},
            {
              src:
                "https://mall-res.manboker.com/newmall/Classification/Backpack.jpg",
              url: "bannerHTML/Frames.html",
              name: "儿童双肩包"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/Classification/CanvasBag.jpg",
              url: "bannerHTML/Frames.html",
              name: "帆布直筒包"
            }
          ]
        },
        {
          title: "绘本相册",
          name: "Photo",
          indexsy:5,
          content: [
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/jiehunjiniance.jpg",
              url: "bannerHTML/WeddingAlbum.html",
              name: "结婚纪念册"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/tonghuahuiben.jpg",
              url: "bannerHTML/Story.html",
              name: "童话绘本"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/photo.png",
              url: "bannerHTML/PhotoWall.html?V=2",
              name: "照片书"
            }
          ]
        },
        {
          title: "饰品",
          name: "Pendant",
          indexsy:6,
          content: [
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/maoyilian.jpg",
              url: "bannerHTML/maoyilian.html",
              name: "小鸡毛衣链"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/xingzuoguashi.png",
              url: "bannerHTML/Pendant.html",
              name: "星座挂饰"
            }
          ]
        },
        {
          title: "品牌专区",
          name: "Brand",
          indexsy:7,
          content: [
            {
              src:
                "https://mall-res.manboker.com/newmall/Classification/cloud.jpg",
              url: "bannerHTML/whiteList.html",
              name: "海上牧云记"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Tiger.jpg",
              url: "bannerHTML/whiteList.html",
              name: "Tiger"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/atanga.jpg",
              url: "bannerHTML/whiteList.html",
              name: "阿唐奇遇"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Pocket.png",
              url: "bannerHTML/whiteList.html",
              name: "惠普口袋机"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Glass.png?v=4",
              url: "bannerHTML/Glass.html",
              name: "富光水具"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Library.jpg",
              url: "bannerHTML/Library.html",
              name: "中国国家图书馆"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Tomic.jpg",
              url: "bannerHTML/Library.html",
              name: "TOMIC"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Porcelain.jpg",
              url: "bannerHTML/Library.html",
              name: "国礼瓷"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Tangniu.jpg",
              url: "bannerHTML/Library.html",
              name: "唐妞"
            },
            {
              src:
                "https://mall-res.manboker.com/newmall/CN/Classification/Poem.jpg",
              url: "bannerHTML/Library.html",
              name: "诗婢家"
            }
          ]
        },

      ];
  },
    GoodsListFS() {
      this.GoodsList = [
        {
          id: "425350",
          src:
            "https://moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00511005012810.png",
          src1: "https://mall-res.manboker.com/newmall/CN/HOT.png",
          name: "精美包边抱枕",
          name1: "巧虎全家福"
        },
        {
          id: "425338",
          src:
            "https://moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00511005012850.png",
          src1: "https://mall-res.manboker.com/newmall/CN/HOT.png",
          name: "精美包边抱枕",
          name1: "巧虎宝宝"
        },
        {
          id: "424774",
          src:
            "https://moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00601005012860.png",
          src1: "https://mall-res.manboker.com/newmall/CN/HOT.png",
          name: "吉事本",
          name1: "桃乐比亲子"
        },
        {
          id: "424771",
          src:
            "https://moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00511005012810.png",
          src1: "https://mall-res.manboker.com/newmall/CN/HOT.png",
          name: "吉事本",
          name1: "巧虎亲子"
        },
        {
          id: "424579",
          src:
            "https://moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00601005012820.png",
          src1: "https://mall-res.manboker.com/newmall/CN/HOT.png",
          name: "牛奶咖啡杯",
          name1: "巧虎亲子"
        },
        {
          id: "424576",
          src:
            "https://moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00601005012870.png",
          src1: "https://mall-res.manboker.com/newmall/CN/HOT.png",
          name: "牛奶咖啡杯",
          name1: "妙妙亲子"
        },
        {
          id: "423814",
          src:
            "https://moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00601005012880.png",
          src1: "https://mall-res.manboker.com/newmall/CN/HOT.png",
          name: "T恤",
          name1: "琪琪亲子"
        },
        {
          id: "423805",
          src:
            "https://moman-res-ali.manboker.com/newmall/GoodsBox/qiaohu/00601005012840.png",
          src1: "https://mall-res.manboker.com/newmall/CN/HOT.png",
          name: "T恤",
          name1: "巧虎亲子"
        }
      ];
    },
    RegGoodsListFS() {
      this.RegGoodsList = [
        {
          id: "4946758",
          src:
            "https://moman-res-ali.manboker.com/newmall/CN/Activity/Rep/1.png",
          name: "限量版移动电源",
          price: "¥ 169.00"
        },
        {
          id: "4946860",
          src:
            "https://moman-res-ali.manboker.com/newmall/CN/Activity/Rep/2.png",
          name: "限量版帆布包",
          price: "¥ 79.00"
        },
        {
          id: "4946332",
          src:
            "https://moman-res-ali.manboker.com/newmall/CN/Activity/Rep/3.jpg",
          name: "限量版保温杯",
          price: "¥ 386.00"
        },
        {
          id: "4946950",
          src:
            "https://moman-res-ali.manboker.com/newmall/CN/Activity/Rep/4.png",
          name: "限量版北欧简约抱枕",
          price: "¥ 129.00"
        },
        {
          id: "4946800",
          src:
            "https://moman-res-ali.manboker.com/newmall/CN/Activity/Rep/5.png",
          name: "限量版明信片",
          price: "¥ 58.00"
        },
        {
          id: "4947445",
          src:
            "https://moman-res-ali.manboker.com/newmall/CN/Activity/Rep/6.jpg",
          name: "限量版彩虹本",
          price: "¥ 79.00"
        },
        {
          id: "4947448",
          src:
            "https://moman-res-ali.manboker.com/newmall/CN/Activity/Rep/7.jpg",
          name: "限量版海报",
          price: "¥ 0.00"
        }
      ];
      },
    Xqclick(event,index) {
      var el = event.currentTarget;
       this.selected = index;

      if ($(el).hasClass("active")) {
        return;
      } else {
        $(el)
          .addClass("active")
          .siblings('li')
          .removeClass("active");
      }
      if ($(el).hasClass("IngeniousTigerArea")) {
        setCookie("className", "");
        $(".IngeniousTigerAreaContent")
          .css("display", "block")
          .siblings("ul,.Rep")
          .css("display", "none");
        this.GoodsListFS();
        $(".IngeniousTigerAreaContent ul li").on("click", function() {
          var id = $(el).attr("id");
          var name = $(el)
            .find(".zi")
            .html();
          Counter("分类页面巧虎分类-" + name + "-商品点击");
          if (app.config.isMomanApp) {
            mcAPI.openProductDetail(id);
          } else {
            window.location = app.urls.ProductDetailURL + "?productid=" + id;
          }
        });
        return;
      } else if ($(el).hasClass("Reg")) {
        setCookie("className", "");
        $(".Rep")
          .css("display", "block")
          .siblings("ul,.IngeniousTigerAreaContent")
          .css("display", "none");
        this.RegGoodsListFS();
        $(".Rep ul li").on("click", function() {
          var id = $(el).attr("id");
          var name = $(el)
            .find(".zi")
            .html();
          Counter("分类页面自然共和国分类-" + name + "-商品点击");
          //if (app.config.isMomanApp) {
          //    mcAPI.openProductDetail(id);
          //} else {
          window.location = app.urls.ProductDetailURL + "?productid=" + id;
          //}
        });
        return;
      }
      else {
        $(".IngeniousTigerAreaContent,.Rep")
          .css("display", "none")
          .siblings("ul").eq(index)
          // .css("display", " ");
          .css("display", "block").siblings("ul").css("display", "none");
      }
      var name = $(el).attr("name");
      setCookie("className", name);
      // this.getData(name);
    },
    // 调用方法 路由传参
    RouterClick(){

    },
    productXQ(event){
       var el = event.currentTarget;
       var name1 = $(el).attr("name");
      var urlLinks = window.location.search == "" ? "?v=2": window.location.search;
      console.log(this);
       this.$router.push({ path: 'Item',params: { id1: urlLinks ,id2: name1}});
       console.log(this.$router);
        // if (name == "中国国家图书馆") {
        //             window.location.href = "bannerHtml/Library.html" + urlLinks;
        //             return;
        //         }
      // window.location.href = "items.vue" + urlLinks + "&name=" + encodeURIComponent(name);
    },
    getData(name1) {
      if (this.pSave[name]) {
        $(".GoodsListRight ul").html(this.pSave[name]);
        return;
      }
      var html = "";
      for (var i = 0; i < Product[name].length; i++) {
        html +=
          '<li name="' +
          Product[name][i].name +
          '">' +
          '<img src="' +
          app.appendWebpForImgUrl(Product[name][i].src) +
          '" />' +
          "<p>" +
          Product[name][i].name +
          "</p>" +
          "</li>";
      }
      this.pSave = html;
      $(".GoodsListRight ul").html(html);
      if (!mcAPI.isIOS) {
        $("li[name='照片书']").hide();
      }
      $(".GoodsListRight ul li")
        .off("click")
        .on("click", function() {
          var name = $(this).attr("name");
          Counter("分类页面-" + name + "-小图标点击");
          if (name == "中国国家图书馆") {
            window.location.href = "bannerHtml/Library.html" + urlLinks;
            return;
          }
          window.location.href =
            "items.html" + urlLinks + "&name=" + encodeURIComponent(name);
        });
    }
  },
   mounted() {
       this.AllList();
       this.GoodsListFS();
       this.RegGoodsListFS()
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
* {
  margin: 0;
  padding: 0;
}
a {
    display: inline-block;
}
.Allproduct{
  overflow: hidden;
}
.GoodsListRight .items {
    display: none;
}
.GoodsListRight .active1{
   display: block;
}
/*分类样式*/
.ClassBox {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  background: #fff;
  display: none;
  padding-top: 211px;
}

.GoodsList {
  width: 100%;
  overflow: hidden;
}

.GoodsList .GoodsListLeft {
  float: left;
  width: 300px;
  height: 100%;
  background: #f2f2f2;
}

.GoodsList .GoodsListLeft ul {
  width: 100%;
  overflow: hidden;
}

.GoodsList .GoodsListLeft ul li {
  list-style: none;
  width: 100%;
  height: 130px;
  position: relative;
  font-size: 48px;
  color: #000;
  text-align: center;
  line-height: 130px;
}

.GoodsList .GoodsListLeft ul li.active {
  background: #fff;
}

.GoodsList .GoodsListLeft ul li.active span {
  display: none;
}

.GoodsList .GoodsListLeft ul li span {
  width: 12px;
  height: 60px;
  background: #fa9c14;
  position: absolute;
  left: 0;
  top: 35px;
  display: none;
}

.GoodsList .GoodsListRight {
  float: left;
  width: 780px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.GoodsList .GoodsListRight ul {
  width: 100%;
  padding: 0 30px;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 0;
}

.GoodsList .GoodsListRight ul li {
  width: 240px;
  overflow: hidden;
  margin-top: 38px;
  display: inline-block;
  vertical-align: top;
}

.GoodsList .GoodsListRight ul li img {
  display: block;
  margin: 0 auto;
}

.GoodsList .GoodsListRight ul li p {
  text-align: center;
  font-size: 34px;
  color: #5f646e;
  margin: 36px 0;
}

.allGoodsLine {
  width: 100%;
  height: 20px;
  background: #f2f2f2;
}
.allGoods {
  width: 100%;
  height: auto;
  padding: 39px 35px;
  box-sizing: border-box;
}
.allGoodsBox {
  width: 1010px;
  overflow-x: scroll;
  overflow-y: hidden;
}
.allGoods .goodsChoose {
  width: 2480px;
  overflow: hidden;
}
.allGoods .goodsChoose li {
  float: left;
  margin: 15px;
  list-style: none;
  padding: 24px 30px;
  border-radius: 10px;
  font-size: 40px;
}
.allGoods .goodsChoose li.orange {
  border: 2px solid #ec9e43;
  color: #ec9e43;
}
.allGoods .goodsChoose li.gray {
  border: 2px solid #d2d2d2;
  color: #666;
}
.allGoods .goodsChoose li.red {
  border: 2px solid #ff7891;
  color: #ff7891;
}
.allGoods .goodsChoose li.blue {
  border: 2px solid #29d4ff;
  color: #29d4ff;
}

.tabhover::after {
  content: "";
  background-color: #fa9f13;
  display: block;
  width: 208px;
  height: 6px;
  margin-top: -34px;
}
.sousuo {
  float: right;
  margin-left: 203px;
  width: 47px;
  height: 48px;
  position: relative;
  right: -235px;
  top: -174px;
}
.banner2 {
  margin-bottom: 62px;
}
.banner2 .first {
  margin-top: 23px;
}
.GoodsList .GoodsListRight .foot ul li {
  width: 50%;
  height: 100%;
  margin-top: 0;
  margin-bottom: 60px;
}
.GoodsList .GoodsListRight ul li {
  /* width: 240px; */
  overflow: hidden;
  /* margin-top: 38px; */
  display: inline-block;
  vertical-align: top;
}
.fire {
  /* width: 100%; */
  text-align: center;
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 8px;
  font-size: 0;
}
.GoodsList .GoodsListRight .foot ul li .fire img {
  width: 46px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 16px;
  position: relative;
  margin-top: -10px;
}
.fire span {
  display: inline-block;
  vertical-align: middle;
  font-size: 37px;
  font-weight: 700;
}
.GoodsList .GoodsListRight .foot ul li p:nth-of-type(1) {
  font-size: 26px;
}
.GoodsList .GoodsListRight .foot ul li p {
  width: 100%;
}
.GoodsList .GoodsListRight ul li p {
  text-align: center;
  /* font-size: 34px; */
  color: #5f646e;
  margin: 36px 0;
}
.GoodsList .GoodsListRight .foot ul li img {
  width: 100%;
}
.GoodsList .GoodsListLeft {
  float: left;
  width: 300px;
  height: 100%;
  background: #f2f2f2;
  overflow: hidden;
}

.GoodsList .GoodsListLeft ul {
  width: 100%;
  overflow: hidden;
}
.GoodsList .GoodsListLeft ul li {
  list-style: none;
  width: 100%;
  height: 130px;
  position: relative;
  font-size: 48px;
  color: #000;
  text-align: center;
  line-height: 130px;
}
.GoodsList {
  width: 100%;
  overflow: hidden;
}
.GoodsList .GoodsListLeft ul li span {
  width: 12px;
  height: 60px;
  background: #fa9c14;
  position: absolute;
  left: 0;
  top: 35px;
  display: none;
}
.GoodsList .GoodsListRight .foot ul li {
  width: 50%;
  height: 100%;
  margin-top: 0;
  margin-bottom: 60px;
}
</style>
