<template>
    <div>
        <div id="clound"></div>
        <div class="title">我的音乐</div>
        <div class="buttonList">
            <div class="fbox">
            <div class="buttons" v-for="(bts,index) in buttons" :key="index">
                {{bts.name}}
                <img :src = "bts.src">
            </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="fourList" v-for="(item,index) in list" :key="index">
            <div class="Listbutton">{{item.name}}</div>
            <div class="line"></div>
        </div>
        <div class="createList">
                <div class="arrows" @click="chage">
                <van-icon name="arrow-down" v-if="!show"></van-icon>
                <van-icon name="arrow" v-if='show'></van-icon>
                </div>
                <div id="nameList">
                    <van-icon name="plus"></van-icon>
                </div>

        </div>
        <footBar></footBar>
    </div>
</template>
 <style scoped>
 img{
     width: 0.2rem;
     height: 0.2rem;
 }
 .arrows{
     position: absolute;
     left: 0.2rem;
     top: 0.03rem;
     width: 0.25rem;
     height: 0.25rem;
 }

 #nameList{
     position: absolute;
     width: 0.5rem;
     height: 0.5rem;
     right: 0.2rem;
     top: 0.03rem;
 }
 /* .createListBtn{
     width:0.2rem;
     height: 0.2rem;
     background: url('../assets/btn.jpg') no-repeat 100% 100%;
     background-size: 100%;
 } */
 .createList{
     width: 100%;
     height: 2rem;
     position: relative;
     transform: translateY(1rem);
     font-size: 0.16rem;
 }
 #clound{
     background: url('../assets/cloud.jpg') no-repeat 100% 100%;
     background-size: 50%;
     width: 0.4rem;
     height: 0.4rem;
     position: fixed;
     left: 0;
     transform: translateY(-0.7rem)
 }
 .fbox{
     width:200%;
     height: 0.5rem;
     
 }
.buttons{
    float: left;
    height: 0.5rem;
    width: 0.5rem;
    font-size: 0.1rem;
    padding: 0.1rem;
}
.buttonList{
    height: 0.5rem;
    width: 100%;
    color:black;
    overflow-x: scroll;
    overflow-y: hidden;
    
} 
 .buttonList::-webkit-scrollbar{
    display: none;
}
.fourList{
    padding: 0.1rem;
    margin: 0.1rem;
    font-size: 0.14rem;
    transform: translateY(0.8rem)
}
.line{
    background-color: black;
    height: 1px;
    transform: translateY(10px)
}
.title{
    width: 1.5rem;
    height: 0.5rem;
    position:fixed;
    top: 0.1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.16rem;
} 
</style>

<script>
import footBar from '../components/FooterBuild'
import radio from '../assets/radio.png'
import Icon from 'vant/lib/icon'
import 'vant/lib/icon/style'
import car from '../assets/car.png'
import mic from '../assets/mic.png'
import sati from '../assets/sati.png'
import header1 from '../assets/hear-1.png'
import header2 from '../assets/heart-2.png'
import child from '../assets/child.png'
import piano from '../assets/piano.png'
import run from '../assets/run.png'
import bing from '../assets/bing.png'
import jazz from '../assets/jazz.png'
// console.log(Icon)
export default {
    components:{
        footBar,
        [Icon.name]:Icon,
        name:'',
        show:false
    },
    data() {
        return {
            show:false,
            list:[
                {
                    name:'本地音乐',
                },
                {
                    name:'我的电台',
                },
                {
                    name:'最近播放',
                },
                {
                    name:'我的收藏',
                }
            ],
            buttons:[
                {
                    name:'私人FM',
                    src:radio
                },
                {
                    name:'驾驶模式',
                    src:car
                },
                {
                    name:'最新电音',
                    src:mic
                },
                {
                    name:'Sati空间',
                    src:sati
                },
                {
                    name:'私藏推荐',
                    src:header1
                },
                {
                    name:'因乐交友',
                    src:header2
                },
                {
                    name:'亲子频道',
                    src:child
                },
                {
                    name:'古典专区',
                    src:piano
                },
                {
                    name:'跑步FM',
                    src:run
                },
                {
                    name:'小冰电台',
                    src:bing
                },
                {
                    name:'爵士电台',
                    src:jazz
                }

            ],
        }
    },
    methods: {
        chage:function(){
            // console.log(this.show)
            this.show = !this.show
            // console.log(this.show)
            // console.log(e.target.getAttribute('class'))
            

            
        },
    },
}
</script>
