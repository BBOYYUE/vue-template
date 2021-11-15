import Vue from 'vue'
import Router from 'vue-router'
import MainPanorama from './pages/MainPanorama';

Vue.use(Router)

/**
 * 重构了 Router 的push方法, 增加了异常捕获
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

/**
 * 获取当前浏览器是否为微信浏览器
 */
const isWeChat = /MicroMessenger/i.test(window.navigator.userAgent)
const routes = [
    /**
     * 主场景 路由
     */
    {
        path: "/main-panorama",
        name: "main-panorama",
        component: MainPanorama,
        props: route => ({ 
            projectId: route.params.projectId,
            pageType: route.params.pageType,
            pageName: route.query.pageName,
        }),
        meta: {
            auth: isWeChat
        }
    },

    
];

/**
 * scrollBehavior 是是设置滚动条位置
 */
const router = new Router({
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



const url = location.href.split("#")[0];

// 微信公众号测试账号
let api = 'http://api.alpha.test/api/v1/socials/wechat/authorizations'
let appid = 'wx42d1036ec3e1b66d';
// 微信公众号正式账号
if (url != 'http://webvr.alpha.test/') {
  api = 'https://api.alphavisual.cn/api/v1/socials/wechat/authorizations'
  appid = 'wxf8a74c3a05b443df'
}

Vue.use(WechatAuth, {
    router, // 路由实例对象
    appid: appid, // 您的微信appid
    responseType: 'code',  // 返回类型，请填写code
    scope: 'snsapi_userinfo', // 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
    getCodeCallback(code, next) {
        axios.post(api, {
            code,
            state: ''
        }).then(response => {
            let data = response.data
            let accessToken = data.data['access_token']
            let user = data.data['user']
            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('user', user)
            localStorage.setItem("isLogin", 1);
            if (accessToken) {
                next(accessToken) // 获取access_toeken成功
            } else {
                next() // 获取access_token失败
            }
        }).catch(() => {
            next() // ajax出现错误
        })
    }
})
export default router

