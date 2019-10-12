import axios from 'axios'
const state = {
    playList: {
        song: [],
        url: [],
        id: '',
        result: [],
    }
}
const getters = {
    // setId: function(state, id) {
    //     console.log(state, id)
    // }
}
const mutations = {
    getId: function(context, value) {
        // console.log(context, value)
        context.playList.id = value
    }
}
const actions = {
    getUrl: function(context) {
        axios.get('api/playlist/detail?id=' + context.state.playList.id).then((res) => {
            // console.log(res.data.playlist.tracks)
            let data = res.data.playlist.tracks
            data.forEach((item) => {
                context.state.playList.result.push(item)
            })
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}