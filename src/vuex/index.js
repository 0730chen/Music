import Vue from 'vue'
import Vuex from 'Vuex'
import cat from './cat'
import car from './car'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        car,
        cat
    }
})