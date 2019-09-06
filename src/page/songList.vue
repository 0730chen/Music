<template>
    <div>
        <backTab></backTab>
        <div class="imgList">
            <div class="imgurls" v-for="(img,index) in imgurls" :key="index">
                <img class="imgs" :src="img" v-show="index==mark">
            </div>
        </div>
        <div class="container">
        <div class="songList" v-for="(songs,index) in songlist" :key="index">
            {{songs.name}}
            <img v-lazy="songs.coverImgUrl">
        </div>
        </div>
        <!-- <div class="play">
            <img src="" alt="">
        </div> -->
        <footBar></footBar>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 0.16rem;
}
.songList{
  flex-grow: 1;

}
.imgList{
    padding: 0.2rem;
}
.imgs{
    width: 90%;
    height: 2rem;
}
.imgurls{
    display: flex;
    justify-content: center;
}
img{
    display: block;
    position: relative;
    width: 30%;

}
</style>

<script>
import footBar from '../components/FooterBuild'
import backTab from '../components/backPage'
import axios from 'axios';
export default {
    data() {
        return {
            mark:0,
            name:"songList",
            songlist:[],
            imgurls:[],
        }
    },
    methods: {
        imgList:function(){
            let self = this
            axios.get('api/top/playlist',{withCredentials: true}).then(function(res){
                // console.log(res.data['playlists'])
                self.songlist = res.data['playlists']
                console.log(Date.now())
                console.log('我是then')
                
                
                // for(let i= 0; i<5; i++){
                //     // console.log(self.songlist[i]['coverImgUrl'])
                //     self.imgurls.push(self.songlist[i]['coverImgUrl'])
                // }
                self.imgurls.push(res.data['playlists'].slice(0,6))
            })
        },
        lunboimgurl:async function(){
            console.log(typeof(this.imgList()))
            // let a = await axios.get('api/top/playlist',{withCredentials: true})
            let a = await this.imgList()
            console.log(a)
            // console.log(a)
            


            // console.log(a)
            // const a = await this.imgList()
            // // console.log('获取到A')
            // console.log(Date.now())
            // console.log('我是轮播图')
            // console.log(a)
            // console.log(this)
            // console.log(this.songlist)
            // console.log(a)
            // console.log(this.imgurls)
            // let imgurlS = JSON.parse(JSON.stringify(this.imgurls))
            // console.log(imgurlS)
            // for(let i = 0; i<4;i++){
            //     console.log(this.imgurls[i])
            // }
            // console.log(this.imgurls)
            // let self = this
            // console.log(self.songlist)
            // return songlist.slice(0,6)
            // axios.get('api/top/playlist/highquality?before=1503639064232&limit=5').then(function(res){
            //     console.log(res.data)
            //     self.imgurls = res.data['playlists']
            //     // console.log(self.imgurls)
            // }).catch(function(err){
            //     console.log(err)
            // })
        },

        authplay:function(mark){
            this.mark++
            if(this.mark ==4){
                this.mark =0;
            }
            // if(this.mark >=5){
            //     this.mark = 0;
            // }
            // console.log(this.mark)
 
        },
        play:function(){
            setInterval(this.authplay,1000)
        }
    },
    components:{
        footBar,backTab
    },
    mounted() {
         
        // this.lunboimgurl()
    },
    created() {
        this.imgList()
        this.play()
        this.lunboimgurl()
    },
}
</script>
