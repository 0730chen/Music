<template>
    <div>
        <div id="clound"></div>
        <div class="title">我的音乐</div>
        <div class="buttonList">
            <div class="fbox">
            <div class="buttons" v-for="(bts,index) in buttons" :key="index">
                {{bts.name}}
            </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="fourList" v-for="(item,index) in list" :key="index">
            <div class="Listbutton">{{item.name}}</div>
            <div class="line"></div>
        </div>
        <footBar></footBar>
    </div>
</template>
 <style scoped>
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
     width: 400px;
     height: 50px;
     
 }
.buttons{
    border: 1px solid chocolate;
    float: left;
    height: 50px;
    width: 32px;
    font-size: 10px;
}
.buttonList{
    height: 50px;
    width: 100%;
    color: aqua;
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
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.16rem;
} 
</style>

<script>
import footBar from '../components/FooterBuild'
export default {
    components:{
        footBar
    },
    data() {
        return {
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
                    name:'私人FM'
                },
                {
                    name:'驾驶模式'
                },
                {
                    name:'最新电音',
                },
                {
                    name:'Sati空间'
                },
                {
                    name:'私藏推荐',
                },
                {
                    name:'因乐交友'
                },
                {
                    name:'亲子频道',
                },
                {
                    name:'古典专区',
                },
                {
                    name:'跑步FM',
                },
                {
                    name:'小冰电台',
                },
                {
                    name:'爵士电台'
                }

            ],
        }
    },
}
</script>
