<template>
    <div>
        <backTab></backTab>
        <div class="containe">
        <div class="comments" v-for="(comment,index) in commentsList" :key="index">
            <img :src="comment.user.avatarUrl" alt="">
            <!-- <img :src="comment.sharePicUrl"> -->
            <div class="title">{{comment.user.nickname}}</div>
            <div class="context">{{comment.content}}</div>
        </div>
    
    <footBar></footBar>
    </div>
    </div>
</template>
<style scoped>
.context{
    position:absolute;
    width:100%;
    height:1rem;
    font-size:0.12rem;
    left:-0.05rem ;
    bottom: 0.05rem;
    text-align: center;
    }

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
    position: relative;
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
            commentsList:[],
            commtext:[],
        }
    },
    components:{
        footBar,backTab
    },
    methods: {
        getDate:function(){
            axios.get('http://127.0.0.1:3000/comment/hot?id=186016&type=0',{withCredentials:true}).then(res => {
                console.log(res.data.hotComments)
                let list = res.data.hotComments
                this.commentsList = res.data.hotComments
                // this.commentsList = res.data.hot
                for(const iter of list){
                    console.log(iter)
                    // if(iter.text.length != 0){
                    //     // this.commentsList.push(iter)
                        
                    //     console.log(iter.text[0])
                    // }else{
                    //     console.log('没有留言')
                    // }
                    // console.log(typeof(iter.text))
                }
            })
        }
    },
    mounted() {
        this.getDate()
    },
}
</script>