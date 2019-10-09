import axios from 'axios'
const state = {
    song: {
        result: [],
        playCount: [],
    }
};
const getters = {
    add: function() {
        console.log("a");
    }
};
const mutations = {
    setDate(state) {
        // console.log(state.song)
    }
};
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
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};