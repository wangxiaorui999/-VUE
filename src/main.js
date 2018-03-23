// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import jquery from 'jquery'
import VueRouter from 'vue-router'
import App from './App'
import router from './router/index'
// import Banner from './components/banner'
Vue.use(VueRouter)
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
