import { createRouter, createWebHashHistory } from 'vue-router';
import MainPanorama from './pages/MainPanorama';
import PlaneLocation from './pages/PlaneLocation';
import TestWechatOption from "./modules/Test/WechatOption";
import HouseAppreciation from "./pages/HouseAppreciation";
import PageManage from "./pages/PageManage";


/**
 * 获取当前浏览器是否为微信浏览器
 */
const isWeChat = /MicroMessenger/i.test(window.navigator.userAgent)
const routes = [
    /**
     * 主场景 路由
     */
    {
        path: "/main-panorama/:udid(\\d+)?",
        name: "main-panorama",
        component: MainPanorama,
        meta: {
            auth: isWeChat
        }
    },

    /**
     * 二维区位 路由
     */
    {
        path: "/plane-location/:udid(\\d+)?",
        name: "plane-location",
        component: PlaneLocation,
        meta: {
            auth: isWeChat
        }
    },

    /**
    * 户型鉴赏 路由
    */
    {
        path: "/house-appreciation/:udid(\\d+)?",
        name: "house-appreciation",
        component: HouseAppreciation,
        meta: {
            auth: isWeChat
        }
    },
    {
        path: "/page-manage/:udid(\\d+)?",
        name: "page-manage",
        component: PageManage,
        meta: {
            auth: isWeChat
        }
    },
    {
        path: "/test",
        name: "test",
        component: TestWechatOption,
        meta: {
            auth: isWeChat
        }
    }

];

/**
 * scrollBehavior 是是设置滚动条位置
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        to, from, savedPosition
        return { x: 0, y: 0 }
    }
})


router.beforeEach((to, from, next) => {
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //     if (!auth.loggedIn()) {
    //         next({
    //             path: '/login',
    //             query: { redirect: to.fullPath }
    //         })
    //     } else {
    //         next()
    //     }
    // } else {
    //     next()
    // }
    next();
})

router.afterEach((to, from) => {
    to;
    from;
})

/**
 * 重构了 Router 的push方法, 增加了异常捕获
 */
// const originalPush = router.prototype.push
// router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => { console.log('router err', err) })
// }

export default router

