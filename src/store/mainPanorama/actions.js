const actions = {
    getMainPanoramaList(context){
        context.commit('getMainPanoramaList', { 
            apiUrl: context.rootGetters['getSetPanoOptionApi'] , 
            udid: context.rootState.udid
        });
    }
}