
import { GET_GOODSLIST } from './const';
import { GET_QING } from './const';

const mutations = {
    [GET_GOODSLIST] (state, payload) {
        let res = state.goodslist.goodslist.concat(payload.goodslist);
        payload.goodslist = res;
        state.goodslist = payload
    },
    [GET_QING] (state, payload) {
        state.goodslist = payload
    },
}

export default mutations;