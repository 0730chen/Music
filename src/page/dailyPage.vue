<template>
    <div>
        <div class="dailybg"></div>
        <backTab></backTab>
        <div class="songList">
            <div class="play"></div>
            <div class="List" v-for="(list,index) in songlist " :key="index">
                <!-- <div>播放</div> -->
                    <div :data-id="list.id" :data-src="list.album['picUrl']" @click=" clickDate($event)" class="playbtn"></div>
                    <div class="songtitle">{{list.name}}&nbsp;&nbsp;<p>{{list.album.artists[0].name}}</p></div>
                    <img v-lazy="list.album['picUrl']">
            </div>
            <div class="play"></div>
            </div>
            <footBar></footBar>
        </div>
</template>
<style scoped>
p{
    font-size: 0.1rem;
}
.songtitle{
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    font-size: 0.14rem;
    
}
.playbtn{
    background: url('../assets/play.png') 100% 100% no-repeat;
    background-size: 15%;
    background-position: 0.5rem 0.15rem
}
.play{
    position: relative;
    width: 100%;
    height: 0.5rem;
}
.dailybg{
    position: absolute;
    height: 2rem;
    width: 100%;
    background: url('../assets/dailybg.jpg') no-repeat;
    background-size:100%;
    left:0;
    top:0;
}
.songList{
    font-size: 0.16rem;
    z-index: 99;
    position: relative;
    border-radius: 0.15rem 0.15rem;
    background-color: white
    /* transform: translateY(1rem) */

}
.List{
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-self: center;
    width: 95%;
    height: 0.5rem;
    padding: 0.06rem;
    
}
img{
    height: 0.5rem;
    width: 0.5rem;
    margin: 0;
    border-radius: 0.1rem;
    padding: 0.02rem;
}
</style>

<script>
import footBar from '../components/FooterBuild'
import axios from 'axios'
import backTab from '../components/backPage'
export default {
    listId:'',
    data() {
        return {
            name:'DailyPage',
            songlist:[],
            songUrl:'',
        }
    },
    components:{
        footBar,backTab
    },
    methods: {
        
        getSong(){
            let self = this
            axios.get('api/recommend/songs',{withCredentials: true}).then(function(res){
                self.songlist = res.data['recommend']
            }).catch(function(err){
                console.log(err)
            })
        },
        clickDate(e){
            this.listSrc = e.target.getAttribute('data-src')
            this.listId = e.target.getAttribute('data-id')
            let self = this
            
            axios.get('api/song/url?id='+this.listId).then(function(res){
                self.songUrl = res.data.data[0]['url']
                sessionStorage.setItem('url',self.songUrl)
                sessionStorage.setItem('src',self.listSrc)
                self.$router.push({
                    name:'play'
                })
                
            }).catch(function(err){
                console.log(err)
            })
        }
    },
    mounted() {
        this.getSong()
        }
    }
        
</script>