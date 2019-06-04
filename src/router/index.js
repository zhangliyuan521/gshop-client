// 路由器对象模块

import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // 配置所有路由
  routes: [
    {
      path: '/',
      redirect: '/msite',
      meta:{isShowFoot : true}
    },
    {
      path: '/msite',
      component: Msite,
      meta:{isShowFoot : true}
    },
    {
      path: '/search',
      component: Search,
      meta:{isShowFoot : true}
    },
    {
      path: '/order',
      component: Order,
      meta:{isShowFoot : true}
    },
    {
      path: '/profile',
      component: Profile,
      meta:{isShowFoot : true}
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
