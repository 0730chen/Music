<template>
    <div>
        <div class="rankList">
            <backTab></backTab>
            <div v-for="(song,index) in rankList" :key="index">
                <div class="songList">
                    <img class="rankImg" v-bind:src="song.coverImgUrl" alt="排行"><span class="updata">{{song.updateFrequency}}</span><span :data-id = "song.id" @click="onchange">{{song.name}}</span>
                </div>
                <div class="block"></div>
            </div>
        </div>
        <footBar></footBar>
    </div>
</template>
<style scoped>
.updata{
    position: absolute;
    width: 1rem;
    height: 0.5rem;
    z-index: 10;
    left: 0;
    color:aliceblue;
    text-align: center;
    transform: translateY(0.5rem)
}
.songList{
    height: 1rem;
    width: 3.45rem;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-left: 10px;
}
.rankImg {
    height: 1rem;
    width: 1rem;
}
span{
    position: absolute;
    widows: 1.7rem;
    height: 0.5rem;
    text-align: center;
    left: 30%;
    transform: translateY(0.5rem);
    font-size: 0.16rem
}
.block{
    display: block;
    width: 100%;
    height: 0.2rem;
    color: aliceblue;
}
.rankList{
    top: 0;
    transform: translateY(-10px)
}
.back{
    top:-0.31rem !important;
    left:-0.07rem !important;
}

</style>


<script>
import axios from 'axios'
import footBar from '../components/FooterBuild'
import backTab from '../components/BackPage'
export default {
    // rankList:'',
    data() {
        return {
        name:"ranklist",
        rankList:[],
        // that:''
        }
    },
    methods: {
        getData(){
            let self = this
            axios.get('api/toplist').then(function(res){

                // console.log(res.data)
                self.rankList = res.data['list']
                // self.rankList = res.data.playlist['tracks']
                // console.log(rankList)
                //  this.rankList.append(res.data.playlist['tracks'])
                //  console.log(this.rankList)
                // this.rankList = res.data.playlist['tracks']
                // console.log(this.rankList)
            }).catch(function(error){
                console.log(error)
            })
        },
        onchange(e){
            // console.log(e.target.dataset.id)
            let id = e.target.getAttribute('data-id')
            console.log(id)
            // axios.get('http://127.0.0.1:3000/toplist')
        }
    },
    created() {
        this.getData()
    },
    components:{
        footBar,backTab
    }
}
</script>
