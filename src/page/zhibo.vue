<template>
    <div>
        <backTab></backTab>
        <div class="containe">
        <div class="comments" v-for="(comment,index) in commentsList" :key="index">
            <img :src="comment.sharePicUrl">
            <div class="title">{{comment.title}}</div>
        </div>
        </div>
    
    <footBar></footBar>
    </div>
</template>
<style scoped>
.title{
    position: absolute;
    left: 0.5rem;
    font-size: 0.1rem;
}
img{
    position: absolute;
    left: 0.13rem;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    
    
}
.comments{
    width: 100%;
    height: 2rem;
}
.containe{
        
        font-size: 0.16rem;
        justify-content: start;
    }
</style>

<script>
import backTab from '../components/backPage'
import footBar from '../components/FooterBuild'
import axios from 'axios'
export default {
    data() {
        return {
            commentsList:[]
        }
    },
    components:{
        footBar,backTab
    },
    methods: {
        getDate:function(){
            axios.get('http://127.0.0.1:3000/hot/topic?limit=30&offset=30',{withCredentials:true}).then(res => {
                console.log(res.data.hot)
                let list = res.data.hot
                this.commentsList = res.data.hot
                for(const iter of list){
                    console.log(iter)
                }
            })
        }
    },
    mounted() {
        this.getDate()
    },
}
</script>