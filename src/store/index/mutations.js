import {SET_ACTIVE_PAGE, SET_PROJECT_UDID} from "../MutationType";
export default {
    [SET_ACTIVE_PAGE](state, pageName){
        state.pageName = pageName
    },
    [SET_PROJECT_UDID](state, udid){
        state.udid = udid
    }
}