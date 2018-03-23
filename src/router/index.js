import Vue from 'vue'
import Router from 'vue-router'
import Silder from '@/silder/silder'
import CommodityDetails from '@/CommodityZone/CommodityDetails'
import Allproduct from '@/Allproduct/Allproduct'
import Library from "../bannerHTML/Library"
import Item from "../item/item";
import HotMore from "../bannerHTML/Hot_More";
import NewMore from "../bannerHTML/New_More";
import LikeMore from "../bannerHTML/Like_More";
import Search from "../search/search";
// import Silder from '@silder/sisilder'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Silder
    },
     // 魔漫图专区详情页
        {
            path: '/CommodityDetails',
            name: 'CommodityDetails',
            component: CommodityDetails
        },
     //点击查看全部商品
          {
             path: '/Allproduct',
             name: 'Allproduct',
             component: Allproduct
        },

        //点击国图
          {
             path: '/Library',
             name: 'Library',
             component: Library
        },
         //点击国图
          {
             path: "/Item",
             name: 'Item',
             component: Item
        },
          //人气热卖更多
          {
             path: "/HotMore",
             name: 'HotMore',
             component: HotMore
        },
        // 新品推荐
          {
             path: "/NewMore",
             name: "NewMore",
             component: NewMore
        },
        // 你喜欢
          {
             path: "/LikeMore",
             name: "LikeMore",
             component: LikeMore
        },
         // 搜索的页面
          {
             path: "/Search",
             name: "Search",
             component: Search
        },
         // 搜索的页面
          {
             path: "/Item",
             name: "Item",
             component: Item
           }





  ]
})
