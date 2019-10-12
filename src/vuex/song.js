import axios from 'axios'
const state = {
    song: {
        result: [],
        playCount: [],
        id: []
    }
};
const getters = {
    add: function() {}
};
//同步方法
const mutations = {
    setDate(state) {
        // console.log(state.song)
    }
};
//异步请求
const actions = {
    contextTest(context) {
        console.log(context)
    },
    async getDate(state) {
        let res = await axios.get('api/personalized')
            // console.log(res['data']['result'])
        let data = res['data']['result']
        data.forEach(e => {
            // console.log(e)
            // console.log(this.state.song.song.result)
            // console.log(this.state.song.song)
            state.state.song.result.push(e)
            state.state.song.id.push(e.id)
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};