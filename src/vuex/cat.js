//初始化仓库属性
const state = {
        cat: {
            items: [],
            count: 1,
            name: 'cat',
        }

    }
    //计算属性
const getters = {
        printcat(state) {
            console.log(state.cat.count)
        }
    }
    //同步
const mutations = {
        muprint() {
            console.log(state.count)
        }
    }
    //异步
const actions = {
    printAsync({ commit }) {
        setTimeout(() => {
            commit('muprint')
        }, 5000);
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}