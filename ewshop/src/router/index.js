import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/home/Home')
const Categroy = () => import('../views/categroy/Categroy')
const Detail = () => import('../views/detail/Detail')
const Profile = () => import('../views/profile/Profile')
const ShopCart = () => import('../views/shopcart/ShopCart')


const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    meta: {
      title: '图书商城'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '图书商城'
    }
  },
  {
    path: '/categroy',
    name: 'Categroy',
    component: Categroy,
    meta: {
      title: '图书商城-图书分类'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '图书商城-商品详情'
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title: '图书商城-购物车'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
    title: '图书商城-个人中心'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) =>{
  // 如果没有登录，从这里跳转到login
  next();
  document.title = to.meta.title;
})
export default router
