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
    //同步代码定义，使用commit('方法'，参数)调用并传参
    mutations: {
        increment(state) {
            state.count++
                // console.log(state.count)
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
        // incrementAsync({ commit }) {
        //     setTimeout(() => {
        //         store.commit('increment')
        //         console.log(store.state.count)
        //             // console.log(store.count)
        //     }, 5000);
        // }
    }
})
store.commit('print', 'jack')
console.log(store.state.count)
    // store.commit('increment')
    // console.log(store.state.list[0].link)
    /* eslint-disable no-new */
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