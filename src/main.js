// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueResource from 'vue-resource';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(VueRouter);
Vue.use(iView, {
  transfer: true,
  size: 'large'
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* data:{
      message:''
  }, watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    created: function () {
          // `this` 指向 vm 实例
          console.log('flag is: ' + this.flag)
        },
    methods: {
        /* fetchData () {
          if(this.$route.path=='/authRightPage'){
               this.flag=false
            }else{
               this.flag=true
            }
       }*/
  router,
  render: h => h(App)
})
