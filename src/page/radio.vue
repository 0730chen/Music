<template>
    <div>
        <backTab></backTab>
        <div class="radio">
            <div class="picList" v-for="(pic,index) in Pics" :key="index" v-show="mark == index">
                <img :src="pic.picUrl" alt="">
                <div>{{pic.name}}</div>
            </div>
        </div>
        <div class="Tabs">
        <div class="radioTab" v-for="(tab,index) in radios" :key="index">
            {{tab.name}}
        </div>
        </div>
        <div class="line"></div>
        <div class="djRaidos">
            <div class="djs" v-for="(dj,index) in djRadios" :key="index">
                <img  class="djImg" :src='dj.picUrl' alt="">
                <div>{{dj.name}}</div>
            </div>
            </div>
        <footBar></footBar>
    </div>
</template>
<style scoped>
.djs{
    font-size: 0.14rem;
    width: 1rem;
    height: 1.5rem;
    margin: 10px;
    border: 1px solid black;
}
.djRaidos{
    display: flex;
    flex-wrap: wrap;
    padding: 0.1rem;
    justify-content: center;
    align-items: center;
}
.picList{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.picList>img{
    margin:0 auto;
}
.djImg{
    max-width: 1rem;
    max-height: 1rem;
}
.line{
    width: 90%;
    height: 1px;
    background: cornflowerblue;
    margin: 0 auto;

}
.radio{
    font-size: 0.16rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    width: 80%;
    border-radius: 5%
}
.Tabs{
    display: flex;
    margin: 0.1rem;
}
.radioTab{
    font-size: 0.16rem;
    flex:1;
}
</style>

<script>
import footBar from '../components/FooterBuild'
import backTab from '../components/BackPage'
import axios from 'axios'
export default {
    data(){
        return{
            name:"radio",
            Pics:[],//页面轮播图数据
            mark :0,
            djRadios:[],//推荐单台数据
            radios:[
                {
                    name:'电台分类',
                },
                {
                    name:'电台排行',
                },
                {
                    name:'付费精品',
                },
                {
                    name:'音乐课堂',
                }
            ]
        }
    },
    components:{
        footBar,backTab
    },
    methods: {
        getDate:function(){
            axios.get('api/personalized/djprogram',{withCredentials:true}).then(res => {
                // console.log(res.data.result)
                this.Pics = res.data.result
                // console.log(this.Pics)
            })
        },
        djs:function(){
            axios.get('api/dj/recommend',{withCredentials:true}).then(res => {
                // console.log(res.data)
                this.djRadios = res.data.djRadios
            })
        },
        authplay(mark){
            this.mark++;
            if(this.mark == 5){
                this.mark =0
            }
        },
        play:function(){
            // setTimeout(this.authplay,1000)
            setInterval(this.authplay,1000)
        }
    },
    mounted() {
        this.getDate() //轮播图数据
        this.djs()   //推荐电台数据
        // this.play()
    },

}
</script>
