import * as Mutation from "../MutationType";

export default {
    [Mutation.SET_ACTIVE_INDEX](state, data){
        state.activeIndex = data;
    }
};