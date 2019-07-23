<template>
<div>
<backTab></backTab>
    <div class="playSong">
        播放音乐界面
        <audio :src="url" controls="controls"></audio>
    </div>
    </div>
</template>

<style scoped>
.playSong{
    width: 100%;
    height: 100%;
    font-size: 0.16rem;
}
</style>

<script>
import backTab from '../components/backPage'
export default {
    data() {
        return {
            url:''
        }
    },
    components:{
        backTab
    },
    methods: {
        getDate:function(){
            this.url = this.$route.query.url
            console.log(this.url)
        }
    },
    mounted() {
        this.getDate()
    },
    
    
}
</script>

