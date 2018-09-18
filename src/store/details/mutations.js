
import { GET_DETAILS } from './const'


const mutations = {
    [GET_DETAILS] (state, payload) {
        state.goods = payload.goods
    }
}

export default mutations;