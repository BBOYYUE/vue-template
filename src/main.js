import App from './App.vue'
import Vuex from 'vuex'
import Store from './store'
import './index.css'
import 'animate.css';
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Clipboard from 'v-clipboard'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import WechatAuth from 'vue-wechat-auth'
import 'swiper/swiper-bundle.css'
import axios from 'axios'

Vue.use(VueAwesomeSwiper)
Vue.use(Clipboard)
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.use(Vuex)
const storeImpl = new Vuex.Store(Store);

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


new Vue({
    render: h => h(App),
    store: storeImpl,
    router
}).$mount('#app')
