import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
const api = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions:actions
};

export default api;