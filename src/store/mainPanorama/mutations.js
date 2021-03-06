import axios from "axios";
import * as MutationType from '../MutationType'
const mutations = {
    [MutationType.GET_MAIN_PANORAMA_LIST](state, data) {
        let { apiUrl, udid } = data;
        axios.post(apiUrl, { udid }).then((res) => {
            let data = {
                panoramaList: res.data.data.list,
                total: res.data.data.total,
                fetching: false
            }
            console.log(Object.assign(state, data), data, res.data)
            return Object.assign(state, data);
        }).then(() => {
        }).catch((e) => {
            console.log(e);
        })
    }
};

export default mutations;