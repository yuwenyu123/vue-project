
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/pages/Home/home'
import Special from '../components/pages/Special/special'
import Classify from '../components/pages/Classify/classify'
import Shopping from '../components/pages/Shopping/shopping'
import Mine from '../components/pages/Mine/mine'
import Login from '../components/pages/Login/login'
import Register from '../components/pages/Register/register'
import Client from '../components/pages/Client/client'
import Goodslist from '../components/pages/Goodslist/goodslist'
import Details from '../components/pages/Details/details'
import NotFound from '../components/pages/NotFound/NotFound'

// 路由 表
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/special', name: 'special', component: Special },
    { path: '/classify', name: 'classify', component: Classify },
    { path: '/shopping', name: 'shopping', component: Shopping },
    { path: '/mine', name: 'mine', component: Mine },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/client', name: 'client', component: Client },
    { path: '/goodslist/:goods_id/', name: 'goodslist', component: Goodslist },
    { path: '/details/:list_id/', name: 'details', component: Details },
    { path: '/not-found', name: 'not-found', component: NotFound },
    { path: '**', redirect: { name: 'not-found' } }
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router