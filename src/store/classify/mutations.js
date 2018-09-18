
import GET_DATA from './const';

const mutations = {
    GET_DATA ( state, payload ) {
        state.articles = payload.articles
    }
}

export default mutations;