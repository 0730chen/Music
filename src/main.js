// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'Vuex'
// import $ from 'jquery'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(VueLazyload)
Vue.use(Vuex)
console.log(Vuex)
const store = new Vuex.Store({
    state: {
        count: 3,
        list: [{ 'link': '1234' }, { 'ssss': 'zzz' }]
    },
    
    mutations: {
        increment(state) {
            state.count++
              
        },
        print(state, name) {
            state.count = 10
            console.log(name)

        },
        fitter(state, arr) {}
    },
    actions: {
        async incrementAsync({ commit }) {
            let a = await axios.get('api/personalized')
            store.commit('print', a)
            store.commit('fitter', a.data.result)
            return a
        }
        
    }
})
store.commit('print', 'jack')
console.log(store.state.count)
    
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