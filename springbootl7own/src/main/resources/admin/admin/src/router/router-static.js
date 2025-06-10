import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import zhekoujiaju from '@/views/modules/zhekoujiaju/list'
    import dingdanpingjia from '@/views/modules/dingdanpingjia/list'
    import discussrexiaojiaju from '@/views/modules/discussrexiaojiaju/list'
    import jiajufenlei from '@/views/modules/jiajufenlei/list'
    import storeup from '@/views/modules/storeup/list'
    import users from '@/views/modules/users/list'
    import discusszhekoujiaju from '@/views/modules/discusszhekoujiaju/list'
    import rexiaojiaju from '@/views/modules/rexiaojiaju/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chat from '@/views/modules/chat/list'
    import orders from '@/views/modules/orders/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/news',
        name: '公告资讯',
        component: news
      }
          ,{
	path: '/zhekoujiaju',
        name: '折扣家具',
        component: zhekoujiaju
      }
          ,{
	path: '/dingdanpingjia',
        name: '订单评价',
        component: dingdanpingjia
      }
          ,{
	path: '/discussrexiaojiaju',
        name: '热销家具评论',
        component: discussrexiaojiaju
      }
          ,{
	path: '/jiajufenlei',
        name: '家具分类',
        component: jiajufenlei
      }
          ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
          ,{
	path: '/users',
        name: '管理员',
        component: users
      }
          ,{
	path: '/discusszhekoujiaju',
        name: '折扣家具评论',
        component: discusszhekoujiaju
      }
          ,{
	path: '/rexiaojiaju',
        name: '热销家具',
        component: rexiaojiaju
      }
          ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
          ,{
	path: '/chat',
        name: '客服管理',
        component: chat
      }
          ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
