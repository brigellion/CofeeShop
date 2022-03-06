import Vue from 'vue'
import Vuex from 'vuex'

import links from '@/store/links'
import bestSellers from '@/store/bestSellers'
import coffee from '@/store/coffee'
import goods from '@/store/goods'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        links,
        bestSellers,
        coffee,
        goods
    }
})

export default store;