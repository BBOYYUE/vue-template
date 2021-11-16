import { createStore } from "vuex";

import getters from "./store/index/getters";
import actions from "./store/index/actions";
import mutations from "./store/index/mutations";
import state from "./store/index/state";
import modules from "./store/index/modules";
const store = createStore({
    getters,
    actions,
    mutations,
    state,
    modules
});
export default store;