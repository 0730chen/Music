<template>
  <div class="PlaySong-warpper">
    <FooterBar></FooterBar>
    <div class="playSong">
      <img :src="src" alt="">
      <audio :src="url" controls="controls"></audio>
    </div>
    <div class="PlaySong-Nav">
      <backTab></backTab>
      <span class="Nav-title">播放音乐界面</span>
    </div>
  </div>
</template>

<style scoped>
  .PlaySong-warpper {
    display: flex;
    flex-direction: column-reverse;
    font-size: 16px;
  }

  .PlaySong-Nav {
    display: flex;
    flex-direction: row;
    margin-top: 8px;
  }

  .Nav-title {
    margin: 0 auto;
  }

  .playSong {
    width: 100%;
    height: 600px;
    font-size: 0.16rem;
    flex-grow: 1;
    margin-top: 18px;
  }

  img {
    max-width: 100vw;
  }

</style>

<script>
    import backTab from '../components/BackPage'
    import FooterBar from "../components/FooterBuild";

    export default {
        data() {
            return {
                url: '',
                src: ''
            }
        },
        components: {
            FooterBar,
            backTab
        },
        methods: {
            getDate: function () {
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

