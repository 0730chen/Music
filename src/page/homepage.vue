<template>
    <div>
        <div class="lunbo" v-for="(url,index) in imgLists" :key="index" v-show="index ==mark">
            <img class="limg" :src="url.picUrl" alt="">
        </div>
        <div>然后有5个按钮</div>
        <middle></middle>
        <span id="recommended">推荐歌单</span>
        <div id="more" @click="loadmore">更多</div>
        <div class="songlists">
            <span class ="songlist" v-for="(songlist,index) in filterAddress" :key="index" >
                <img :src="songlist.picUrl">
                {{songlist.name}}
            </span>
            <!--  -->
        </div>
        <footBar></footBar>
    </div>
</template>
<style scoped>
#more{
    right: 5%;
    position:absolute;
    transform: translateY(10px);
}
#recommended{
    left:5%;
    position: absolute;
    transform: translateY(10px)
}
.limg{
    width: 80%;
    transform: translateX(12%);

}
.songlists{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    transform: translateY(5%);
    justify-content: flex-start;
}
.songlist{
    /* display: flex;
    justify-content: center;
    flex-wrap: wrap; */
    font-size: 8px;
    width: 100px;
    height: 130px;
    padding: 8px;
    flex-shrink: 0;
    margin-top: 8px;
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
            limteAddress:9,
            arr:[]
            
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
        },
        loadmore:function(){
            console.log('加载更多')
            console.log(this.limteAddress)
            let len = this.songlists.length;
            if(this.limteAddress == len){
                this.limteAddress = 9
            } 
            else 
            {
                this.limteAddress = len
            };
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
    computed: {
        filterAddress:function(){
            console.log(this.songlists)
            return this.songlists.slice(0,this.limteAddress)
            // for( var i =0 ;i<arr.length;i++){
            //     console.log(i)
            //     console.log(arr[i].name)
            // }
        }
    },
    
}
</script>