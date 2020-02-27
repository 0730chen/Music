<template>
  <div class="container">
    <div class="playlist-nav">
      <Back></Back>
      <h3>歌单详情页面</h3>
    </div>
    <div class="songlist-wrapper">
      <div class="songList" v-for="(item,index) of playlist" :key="index">
        <img v-lazy="item.al.picUrl" alt="未加载">
        <div class="songName">{{item.name}}</div>
        <div :data-id="item.al.id" :data-src="item.al.picUrl" @click=" clickDate($event)" class="playbtn"></div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<style scoped>
  .playbtn {
    height: 0.5rem;
    width: 1rem;
    background: url('../assets/play.png') 100% 100% no-repeat;
    background-size: 15%;
    background-position: 0.5rem 0.15rem;
  }

  .container {
    font-size: 0.16rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .playlist-nav{
    margin-top: 8px;
  }

  .songlist-wrapper {
    margin: 50px 10px;
    height: 500px;
    overflow: auto;
  }

  .songList {
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-bottom: 25px;
  }

  .songList > img {
    width: 50px;
    height: 50px;
    border: 1px solid black;

  }

  .songName {
    padding-left: 20px;
    width: 2rem;
  }
</style>
<script>
    import axios from 'axios'
    import Back from '../components/BackPage'
    import {mapState, mapGetters, mapMutations, mapActions} from 'Vuex'
    import foot from '../components/FooterBuild'

    export default {
        data() {
            return {
                playlist: []
            }
        },
        components: {
            Back: Back,
            foot: foot
        },
        methods: {
            // list:function(){
            // 	return this.playList().playList.result
            // },
            //辅助函数传递过来后都需要调用才能使用Vuex中的数据
            ...mapGetters(['setId']),
            ...mapState(['playList', 'song']),
            ...mapMutations(['setState', 'log', 'getId']),
            ...mapActions(['getUrl']),
            //使用sessionStorage储存数据
            clickDate(e) {
                this.listSrc = e.target.getAttribute('data-src')
                this.listId = e.target.getAttribute('data-id')
                let self = this
                axios.get('api/song/url?id=' + this.listId).then(function (res) {
                    self.songUrl = res.data.data[0]['url']
                    sessionStorage.setItem('url', self.songUrl)
                    sessionStorage.setItem('src', self.listSrc)
                    self.$router.push({
                        name: 'play'
                    })

                }).catch(function (err) {
                    console.log(err)
                })
            }
        },
        created() {
            console.log(this.$route.query.id) //使用router-link对象传参
            let id = this.$route.query.id
            // this.getId(id)
            // this.getUrl()
            // this.setId(id)
            // let id = this.$route.query.id
            // this.setId('',id)
            //playlist/detail?id=歌单详情API
            axios.get('api/playlist/detail?id=' + id).then((res) => {
                // console.log(res.data.playlist.tracks)
                let data = res.data.playlist.tracks
                data.forEach((item) => {
                    this.playlist.push(item)
                    console.log(item)
                })

            })
            ///song/url?id=33894312获取引音乐API注 : 部分用户反馈获取的 url 会 403,hwaphon找到的 解决方案是当获取到音乐的 id 后，将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放
        },
        mounted() {
            //写在mounted中Vuex可以更新数据

            /*   使用VueX的方式console.log(this.$route.query.id)//使用router-link对象传参
            let id = this.$route.query.id
            this.getId(id)
            this.playList()
            this.getUrl()*/
            // this.playlist = this.getUrl()
            // 	this.setState
            // 	this.log
            // },
        },
        computed: {}
    }
</script>
