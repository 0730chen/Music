<template>
<div>
    <div class="title"> 播放音乐界面</div>
<backTab></backTab>
    <div class="playSong">
        <img :src="src" alt="">
        <audio :src="url" controls="controls"></audio>
    </div>
    </div>
</template>

<style scoped>
.title{
    font-size: 0.16rem;
}
.playSong{
    width: 100%;
    height: 100%;
    font-size: 0.16rem;
}
img{
    width: 2rem;
    height: 2rem;
    border-radius: 50%
}

</style>

<script>
import backTab from '../components/BackPage'
export default {
    data() {
        return {
            url:'',
            src:''
        }
    },
    components:{
        backTab
    },
    methods: {
        getDate:function(){
            this.url = sessionStorage.getItem('url')
            this.src = sessionStorage.getItem('src')
            // this.url = this.$route.params.url
            // this.src = this.$route.params.src
            // sessionStorage.setItem('url',this.url)
            // sessionStorage.setItem('src',this.src)
            // this.url = sessionStorage.getItem('url')
            // this.src = sessionStorage.getItem('src')
            //使用sessionStorage保存数据，加上判断可以保持刷新后依然是这个歌曲
            // if(sessionStorage.getItem('url') == 'undefined'){
            //     sessionStorage.setItem('url',this.url)
            //     sessionStorage.setItem('src',this.src)
            // }else{
            //     this.url = sessionStorage.getItem('url')
            //     this.src = sessionStorage.getItem('src')
            // }
            // sessionStorage.setItem('url',this.url)
            // sessionStorage.setItem('src',this.src)

        },
        // readDate:function(url,src){
        //     console.log('页面刷新')
        //     console.log(sessionStorage)
        //     url = sessionStorage.getItem('url')
        //     src = sessionStorage.getItem('src')
        //     console.log(url)
        //     console.log(src)
        // }
    },
    mounted() {
        this.getDate()
    },
    created() {
        // this.readDate()
    },


}
</script>

