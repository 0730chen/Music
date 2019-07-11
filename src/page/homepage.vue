<template>
    <div>
        <div class="lunbo" v-for="(url,index) in imgLists" :key="index" v-show="index ==mark">
            <img class="limg" :src="url.picUrl" alt="">
        </div>
        <div>然后有5个按钮</div>
        <middle></middle>
        <div class="songlists">
            <span class ="songlist" v-for="(songlist,index) in songlists" :key="index">{{songlist.name}}
                <img :src="songlist.picUrl">
            </span>
        </div>
        <footBar></footBar>
    </div>
</template>
<style scoped>
.limg{
    width: 80%;
    transform: translateX(12%);

}
.songlists{
    display: flex;
    flex-direction: column;
    transform: translateY(1%)
}
.songlist{
    flex:1;
    padding: 10px;
}
img{
    display: block;
    width: 100px;
    height: 100px;
}
</style>

<script>
import footBar from '../components/FooterBuild'
import middle from '../components/middleTab'
import axios from 'axios'
console.log(middle)
export default {
    components:{
        footBar,
        middle
    },
    data() {
        return {
            mark:0,
            songlists:[],
            imgLists:[],
        }
    },
    methods: {
        login:function(){
            axios.get('http://127.0.0.1:3000/login/cellphone?phone=17691103482&password=970214').then(function(res){
                // console.log(res)
            }).catch(function(err){
                console.log(err)
            })
        },
        songlist:function(){
            let self = this
            console.log(this)
            axios.get('http://127.0.0.1:3000/personalized').then(function(res){
                // console.log(this)
                // console.log(self)
                // console.log(res.data)
                self.songlists = res.data['result']
                console.log(self.songlists)
            }).catch(function(err){
                console.log(err)
            })
        },
        imglists:function(){
            axios.get('http://127.0.0.1:3000/personalized/privatecontent').then(res =>{console.log(this)
            // console.log(res.data)
            this.imgLists = res.data['result']
            console.log(this.imgLists)
            }).catch(function(err){
                console.log(err)
            })
        },
        authplay:function(mark){
            this.mark++;
            if(this.mark >=3){
                this.mark = 0
            }
            // console.log(this.mark)
        },
        play:function(){
            setInterval(this.authplay,1000)
        }
    },
    mounted() {
        this.login()
        this.songlist()
        this.imglists()
    },
    created() {
        // this.play();
    },
    
}
</script>