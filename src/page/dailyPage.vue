<template>
  <div class="daily-wrapper">
    <footBar></footBar>
    <div class="songList">
      <div class="List" v-for="(list,index) in songlist " :key="index">
        <div class="songtitle">{{list.name}}&nbsp;&nbsp;<p>{{list.album.artists[0].name}}</p></div>
        <img v-lazy="list.album['picUrl']">
        <div :data-id="list.id" :data-src="list.album['picUrl']" @click=" clickDate($event)" class="playbtn"></div>
      </div>
    </div>
    <div class="daily-nav">
      <backTab></backTab>
      <span class="title">热门歌曲</span>
    </div>
  </div>
</template>
<style scoped>
  p {
    font-size: 0.1rem;
  }

  .daily-wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  .title {
    font-size: 16px;
    margin: 0 auto;
  }

  .daily-nav {
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-left: 8px;
  }

  .songtitle {
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size:16px;

  }

  .playbtn {
    height: 0.5rem;
    width: 1rem;
    background: url('../assets/play.png') 100% 100% no-repeat;
    background-size: 25%;
    background-position: 0.5rem 0.15rem;
  }

  .songList {
    background-color: white;
    flex-grow: 1;
    margin-top: 18px;
    height:600px;
    overflow: auto;
    border-top: 1px solid #666666;
  }

  .List {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-self: center;
    padding: 0.06rem;

  }

  img {
    height: 0.5rem;
    width: 0.5rem;
    margin: 0;
    border-radius: 0.1rem;
    padding: 0.02rem;
  }
</style>

<script>
    import footBar from '../components/FooterBuild'
    import axios from 'axios'
    import backTab from '../components/BackPage'

    export default {
        listId: '',
        data() {
            return {
                name: 'DailyPage',
                songlist: [],
                songUrl: '',
            }
        },
        components: {
            footBar, backTab
        },
        methods: {

            getSong() {
                let self = this
                axios.get('api/recommend/songs', {withCredentials: true}).then(function (res) {
                    self.songlist = res.data['recommend']
                }).catch(function (err) {
                    console.log(err)
                })
            },
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
        mounted() {
            this.getSong()
        }
    }

</script>
