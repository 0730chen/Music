<template>
    <div>
        <backTab></backTab>
        <div class="imgList">

            <div class="imgurls" v-for="(img,index) in fitterArray()" :key="index">
                <transition name="lunbo">
                <img class="imgs" v-lazy="img.coverImgUrl" v-if="index==mark" :key="index">
                </transition>
            </div>
        </div>

        <div class="container">
        <div class="songList" v-for="(songs,index) in fitterArray2()" :key="index">
            <img v-lazy="songs.coverImgUrl">
             <div class="songName">{{songs.name}}</div>
        </div>
        </div>
        <footBar></footBar>
    </div>
</template>
<style scoped>
.lunbo-enter-active{
    transition: all 3s ease;
}
.lunbo-leave-active{

    transition: all 3s ease;
}
.lunbo-enter, .lunbo-leave-to{

    opacity: 0;

}

.container{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 0.16rem;
    transform: translateY(2rem)
}
.songList{
  flex-grow: 1;
display: flex;
flex-direction: row;
justify-content: start;
padding-top: 10px;
align-items: center;
font-size: 16px;
text-align: end;
}
.songList>img{
    max-height:30%;
    max-width: 30%;
    border: 1px solid black;
    margin-left: 20px;
}
.songName{
    max-height:30%;
    max-width: 30%;
     border: 1px solid black;
     margin-left: 20px;
}
.imgList{
    position: absolute;
    width: 80%;
    height: 2rem;
    left: 0.25rem;
    padding: 0rem;
}
.imgs{
    position: absolute;
    width: 3rem;
    height: 2rem;
    border-radius: 10%
}
.imgurls{
    position: absolute;
    width: 80%;
    height: 2rem;
    border-radius: 10%;
    float: left;
}
img{
    display: block;
    position: relative;
    width: 30%;


}
</style>

<script>
import footBar from '../components/FooterBuild'
import backTab from '../components/BackPage'
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
        fitterArray:function(){
            return this.songlist.slice(0,4)
        },
        fitterArray2:function(){
            return this.songlist.slice(4,this.songlist.length)
        },
        imgList:function(){
            let self = this
            axios.get('api/top/playlist',{withCredentials: true}).then(function(res){
                self.songlist = res.data['playlists']
                self.imgurls.push(res.data['playlists'].slice(0,6))
            })
        },
        lunboimgurl:async function(){
            let a = await this.imgList()
        },

        authplay:function(mark){
            this.mark++
            if(this.mark ==4){
                this.mark =0;
            }

        },
        play:function(){
            setInterval(this.authplay,5000)
        }
    },
    components:{
        footBar,backTab
    },
    mounted() {

    },
    created() {
        this.imgList()
        this.play()
        this.lunboimgurl()
    },
}
</script>
