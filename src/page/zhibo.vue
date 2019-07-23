<template>
    <div>
        <backTab></backTab>
        <div class="container">
        这是直播页面
        </div>
    
    <footBar></footBar>
    </div>
</template>
<style scoped>
    .container{
        font-size: 0.16rem;
    }
</style>

<script>
import backTab from '../components/backPage'
import footBar from '../components/FooterBuild'
export default {
    data() {
        return {
            
        }
    },
    components:{
        footBar,backTab
    }
}
</script>