import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'Vuex'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import car from './vuex/car'
import cat from './vuex/cat'
// import { mapMutations } from 'vuex'
Vue.config.productionTip = false
Vue.use(VueLazyload)
Vue.use(Vuex)
console.log(cat)
const store = new Vuex.Store({
    modules: {
        car,
        cat
    },
    state: {
        count: 3,
        list: [{ 'link': '1234' }, { 'ssss': 'zzz' }]
    },
<<<<<<< HEAD
    
    mutations: {
        increment(state) {
            state.count++
              
=======
    mutations: {
        increment(state) {
            state.count++
>>>>>>> c8442b5f94f8e193d7c9612563805f1e995725e3
        },
        printinit(state, name) {
            state.count = 10
                // console.log(state.car.count)

        },
        fitter(state, arr) {},

    },
    actions: {
        async incrementAsync({ commit }) {
            let a = await axios.get('api/personalized')
            store.commit('printinit', a)
            store.commit('fitter', a.data.result)
            return a
        }
<<<<<<< HEAD
        
    }
})
store.commit('print', 'jack')
console.log(store.state.count)
    
=======
    }
})
store.commit('printinit', 'jack')
>>>>>>> c8442b5f94f8e193d7c9612563805f1e995725e3
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
    computed: {
        count() {
            return store.state.count
        }
    }
})