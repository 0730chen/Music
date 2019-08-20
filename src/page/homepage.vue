<template>
    <div>
        <div id="header">
        <!-- <span id="micphone">
            <van-icon name="audio"></van-icon>
        </span> -->
        <van-icon name="audio"></van-icon>
            <input id="select" type="search" placeholder="歌曲">
            <div id="search">
                <van-icon class="chart" name ="bar-chart-o"></van-icon>
            </div>
        </div>
        <div class="lunbo" v-for="(url,index) in imgLists" :key="index" v-show="index ==mark">
            <img class="limg" :src="url.picUrl" alt="">
        </div>
        <middle></middle>
        <div id="line"></div>
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
.chart{
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    font-size: 0.3rem;
    transform: translate(1.2rem,-0.2rem)
}
i{
    position: absolute;
    font-size: 0.3rem;
    left: 0.1rem;
    top: 0.15rem;
}
.container{
    position: absolute;
    width: 100%;
    height: 100%;
}
#header{
    position: absolute;
    width: 100%;
    height: 0.5rem;
    background: #d43c33;
    top: 0;
}
#micphone{
    position:absolute;
    width: 50px;
    height: 50px;
    /* background: url('../assets/micphone.jpg') no-repeat left; */
    background-size: 40%;
    top:0.05rem;
    z-index: 99;
    left: 0.26rem;
}
#line{
    background-color: rgb(149, 151, 153);
    height: 1px;
    transform: translateY(10px)
}
#search{
    width: 100px;
    height: 30px;
    position: absolute;
    top: 20px;
    left: 50%;
    background: url('../assets/search.jpg') no-repeat right 15px top 5px;
    background-size: 15%;
    z-index: 99;
}
#select{
    width: 60%;
    z-index: 1;
    position: absolute;
    transform: translateX(-50%);
    top: 20px;
    left: 50%;
    border-radius: 10px;
    font-size: 0.16rem;

}
#more{
    right: 5%;
    position:absolute;
    transform: translateY(15px);
    font-size:0.16rem;
}
#recommended{
    left:5%;
    position: absolute;
    transform: translateY(15px);
    font-size: 0.16rem;
}
.limg{
    width: 90%;
    height: 74%;
    transform: translateX(5%);

}
.songlists{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    transform: translateY(30px);
    justify-content: center;
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
    margin-top: 6px;
}
img{
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 10px;
}
.lunbo{
    height: 200px;
}
</style>

<script>
import footBar from '../components/FooterBuild'
import middle from '../components/middleTab'
import axios from 'axios'
import Icon from 'vant/lib/icon'
import 'vant/lib/icon/style'
// (middle)console.log
export default {
    components:{
        footBar,
        middle,
        [Icon.name]:Icon
    },
    data() {
        return {
            mark:0,
            songlists:[],
            imgLists:[],
            limteAddress:9,
            arr:[],
            
        }
    },
    methods: {
        login:function(){
            axios.get('api/login/cellphone?phone=17691103482&password=970214').then(function(res){
                // console.log(res.data)
            }).catch(function(err){
                console.log(err)
            })
        },
        songlist:function(){
            let self = this
            // console.log(this)
            axios.get('api/personalized').then(function(res){
                // console.log(this)
                // console.log(self)
                // console.log(res.data)
                self.songlists = res.data['result']
                // console.log(self.songlists)
            }).catch(function(err){
                console.log(err)
            })
        },
        imglists:function(){
            axios.get('api/personalized/privatecontent').then(res =>{
                // console.log(this)
            // console.log(res.data)
            this.imgLists = res.data['result']
            // console.log(this.imgLists)
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
            // console.log('加载更多')
            // console.log(this.limteAddress)
            let len = this.songlists.length;//实际数组的长度
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
            // console.log(this.songlists)
            //返回需要显示的数组数据给页面中
            return this.songlists.slice(0,this.limteAddress)
            // for( var i =0 ;i<arr.length;i++){
            //     console.log(i)
            //     console.log(arr[i].name)
            // }
        }
    },
    
}
</script>