<template>
    <div>
        <backTab></backTab>
        这是直播页面
    
    <footBar></footBar>
    </div>
</template>
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