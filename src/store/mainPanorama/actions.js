import * as MutationType from '../MutationType'
const actions = {
    [MutationType.GET_MAIN_PANORAMA_LIST](context) {
        context.commit({
            type: [MutationType.GET_MAIN_PANORAMA_LIST],
            apiUrl: context.rootGetters['Api/' + [MutationType.GET_MAIN_PANORAMA_LIST]],
            udid: context.rootState.udid
        });
    }
}

export default actions;