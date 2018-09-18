import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import home from './home'
import classify from './classify'
import mine from './mine'
import goodslist from './goodslist'
import details from './details'
import cart from './cart'

let store = new Vuex.Store({
    modules: {
        home,
        classify,
        mine,
        goodslist,
        details,
        cart
    }
})

export default store;