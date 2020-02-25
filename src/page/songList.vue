<template>
  <div class="Song-wrapper">
    <footBar></footBar>
    <div class="container">
      <div class="songList" v-for="(songs,index) in fitterArray2()" :key="index">
        <img v-lazy="songs.coverImgUrl">
        <div class="songName">{{songs.name}}</div>
      </div>
    </div>
    <div class="songList-title">
      <backTab></backTab>
      <span class="title">歌单广场</span>
    </div>
  </div>
</template>
<style scoped>
  .lunbo-enter-active {
    transition: all 3s ease;
  }

  .lunbo-leave-active {

    transition: all 3s ease;
  }

  .lunbo-enter, .lunbo-leave-to {

    opacity: 0;

  }

  .Song-wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  .songList-title {
    display: flex;
    flex-direction: row;
    font-size: 16px;
  }

  .title {
    margin: 0 auto;
  }

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 28px;
    justify-content: space-between;
    align-items: center;
    height: 600px;
    overflow: auto;
    font-size: 16px;
  }

  .songList {
    max-width: 32%;
  }

  .songList > img {
    max-width: 100px;
  }

  .songName {
  }
</style>

<script>
    import footBar from '../components/FooterBuild'
    import backTab from '../components/BackPage'
    import axios from 'axios';

    export default {
        data() {
            return {
                mark: 0,
                name: "songList",
                songlist: [],
                imgurls: [],
            }
        },
        methods: {
            fitterArray: function () {
                return this.songlist.slice(0, 4)
            },
            fitterArray2: function () {
                return this.songlist.slice(4, this.songlist.length)
            },
            imgList: function () {
                let self = this
                axios.get('api/top/playlist', {withCredentials: true}).then(function (res) {
                    self.songlist = res.data['playlists']
                    self.imgurls.push(res.data['playlists'].slice(0, 6))
                })
            },
            lunboimgurl: async function () {
                let a = await this.imgList()
            },

            authplay: function (mark) {
                this.mark++
                if (this.mark == 4) {
                    this.mark = 0;
                }

            },
            play: function () {
                setInterval(this.authplay, 5000)
            }
        },
        components: {
            footBar, backTab
        },
        mounted() {

        },
        created() {
            this.imgList()
            this.play()
            this.lunboimgurl()
        },
    }
</script>
