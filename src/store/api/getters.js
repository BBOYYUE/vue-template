import * as MutationType from '../MutationType'
export default {
    apiUrl(state) {
        const url = location.href.split("#")[0];
        if (url != 'http://webvr.alpha.test/'|| url !='http://location/') {
            return state.prodApiUrl
        }
        return state.devApiUrl
    },
    [MutationType.GET_MAIN_PANORAMA_LIST](state, getters){
        return getters.apiUrl(state).state.appList[MutationType.GET_MAIN_PANORAMA_LIST];
    }
}