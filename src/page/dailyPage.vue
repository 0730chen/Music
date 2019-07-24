<template>
    <div>
        <div class="songList">
            <backTab></backTab>
            <span>每日推荐的歌曲列表</span>
            <div class="List" v-for="(list,index) in songlist " :key="index">
                <img :src="list.album['picUrl']">
                <!-- <div>播放</div> -->
                <div>{{index}}&nbsp;{{list.name}}</div>
                    <div :data-id="list.id" :data-src="list.album['picUrl']" @click=" clickDate($event)">播放</div>
                

            </div>
            <!-- <div class="play">
                <img src="" alt="">
                <audio :src="songUrl"></audio>
            </div> -->
            <footBar></footBar>
        </div>

    </div>
</template>
<style scoped>
.songList{
    font-size: 0.16rem;
}
.List{
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    padding: 20px;
    
}
img{
    height: 50%;
    width: 50%;
    margin: 0;
    border-radius: 0.1rem;
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
            axios.get('http://127.0.0.1:3000/recommend/songs',{withCredentials: true}).then(function(res){
                self.songlist = res.data['recommend']
                console.log(self.songlist)
            }).catch(function(err){
                console.log(err)
            })
        },
        clickDate(e){
            // console.log(e.target.getAttribute('data-id'))

            this.listSrc = e.target.getAttribute('data-src')
            this.listId = e.target.getAttribute('data-id')
            console.log(this.listId)
            console.log(this.listSrc)
            let self = this
            
            axios.get('http://127.0.0.1:3000/song/url?id='+this.listId).then(function(res){
                console.log(res.data.data[0])
                
                self.songUrl = res.data.data[0]['url']
                sessionStorage.setItem('url',self.songUrl)
                sessionStorage.setItem('src',self.listSrc)
                self.$router.push({
                    name:'play'
                })
                // 页面跳转并播放
                // self.$router.push({
                //     name: 'play',
                //     params:{
                //         url: self.songUrl,
                //         src: self.listSrc,
                //     }
                // })
                // window.location.href = '/playSong'
                // this.$router.push({path:res.data.data[0].url})
            }).catch(function(err){
                console.log(err)
            })
            // axios.get('http://127.0.0.1:3000/song/url?id='+list.id)
        }
        // getlogin(){
        //     axios.get('http://127.0.0.1:3000/recommend/resource').then(function(res){
        //         console.log(res.data)
        //     }).catch(function(err){
        //         console.log(err)
        //     })
        // // getSong(){
        // //     axios.get('http://127.0.0.1:3000/recommend/resource').then(function(res){
        // //         console.log(res.data)
        // //     }).catch(function(err){
        // //         console.log(err)
        // //     })
        // // }


    },
    mounted() {
        this.getSong()
        }
    }
        
</script>