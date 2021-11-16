import * as MutationType from '../MutationType'
export default () => ({
    devApiUrl: "http://api.alpha.test/",
    prodApiUrl: "https://api.alphavisual.cn/",
    apiList: {
        [MutationType.GET_MAIN_PANORAMA_LIST]:'getMainPanoramaList',
    }
})