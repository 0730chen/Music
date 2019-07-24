<template>
    <div>
        <backTab></backTab>
        <div class="container">
        <div class="comments" v-for="(comment,index) in commentsList" :key="index">
            <img :src="comment.sharePicUrl">
            {{comment.title}}
        </div>
        </div>
    
    <footBar></footBar>
    </div>
</template>
<style scoped>
img{
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
}
    .container{
        font-size: 0.16rem;
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