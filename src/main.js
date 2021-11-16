import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import WechatAuth from 'vue-wechat-auth'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import 'animate.css';
// import Clipboard from 'v-clipboard'
// import axios from 'axios'
// Vue.use(Clipboard)
// Vue.use(ElementUI);
// Vue.config.productionTip = false

// Vue.use(Vuex)
// const storeImpl = new Vuex.Store(Store);


/**
 * 重写了 localStorage 的 setItem 
 * setItem 时会触犯 setItemEvent 事件
 */
let originalSetItem = localStorage.setItem;
localStorage.setItem = function (key, newValue) {
    let event = new Event('setItemEvent');
    event.key = key;
    event.newValue = newValue;
    window.dispatchEvent(event);
    originalSetItem.apply(this, arguments);
}

const url = location.href.split("#")[0];


// 微信公众号测试账号
let api = 'http://api.alpha.test/api/v1/socials/wechat/authorizations'
let appid = 'wx42d1036ec3e1b66d';
// 微信公众号正式账号
if (url != 'http://webvr.alpha.test/') {
    api = 'https://api.alphavisual.cn/api/v1/socials/wechat/authorizations'
    appid = 'wxf8a74c3a05b443df'
}



const app = createApp(App);
app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(WechatAuth, {
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
app.mount('#app')
