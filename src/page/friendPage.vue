<template>
    <div>
        <div id="buttons">
            <div v-for="(link,index) in item" :key="index" class="button">
                <router-link :to="{path:link.path}">{{link.name}}</router-link>
            </div>
            <!-- <button class="active">动态</button>
            <button class="">附近</button> -->
        </div>
        <div id="spans">
            <span>发布动态</span>
            <span>发布视频</span>
        </div>
        <div id="line"></div>
        <div class="allDate">
        <div v-for="(mov,index) in event" :key="index" class="all">
            <div v-if="mov.pics.length > 3">
            {{mov.user.nickname}}
            <div class="persons">
            <div v-for="(srcs,index) in mov.pics" :key="index">
                <div v-if="mov.pics.length > 3">
                    
               <img :src="srcs.originUrl" alt="暂无图片">
               </div>
                          </div>
                          </div>
                          </div>
            </div>
        </div>
        <footBar></footBar>
    </div>
</template>
<style scoped>
.all{
    text-align: left;
    padding: 10px;
}
img{
    width: 100px;
    height: 100px;
}
.imgs{
    height: 100px;
    width: 100px;
}
.allDate{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.persons{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 300px;
    flex-wrap: wrap;
}
#line{
    height: 1px;
    background-color: black;
    margin: 20px;
}
.button{
    width: 100px;
    border: 1px solid black;
    border-radius: 10px;
}
#spans{
    display: flex;
    flex-direction: row;
}
span{
    flex:1;
}
#buttons{
    width: 100px;
    top: 20px;
    position: absolute;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    border: 1px solid peachpuff;
    border-radius: 10px;
}
button{
    border-radius: 10px;

}
.active{
    background: red;
}
</style>

<script>
import footBar from '../components/FooterBuild'
import near from '../page/nearPage'
import axios from 'axios'
export default {
    components:{
        footBar,near
    },
   data() {
     return {
         event:[],
         imgs:[],
         item:[{
                     name:"动态",
                     path:"/friendPage",
                     cls:"moveing", 
                  },
                  {
                      name:"附近",
                      path:"/near",
                       cls:"near",
                  },]
     }
 },
 methods: {
     getDate:function(){
         axios.get('http://127.0.0.1:3000/event?pagesize=30',{withCredentials: true}).then(res => {
             this.event = res.data.event
             console.log(this.event)
             for(const iterator of res.data.event){
                //  console.log(res.data.event)
                 console.log(iterator.pics.length)
                 if( iterator.pics.length > 3) {
                     console.log(iterator)
                     this.imgs.push([...iterator.pics]);
                     console.log(this.imgs)
                 }
             }
             })
     }
 },
 mounted() {
     this.getDate()
 },
}
</script>
