<template>
  <div class="RankList-wrapper">
    <footBar></footBar>
    <div class="rankList">
      <div v-for="(song,index) in rankList" :key="index" class="songList-wrapper">
        <div class="songList">
          <img class="rankImg" v-bind:src="song.coverImgUrl" alt="排行"><span
          class="updata">{{song.updateFrequency}}</span><span :data-id="song.id" @click="onchange">{{song.name}}</span>
        </div>
      </div>
    </div>
    <div class="RankList-title">
      <backTab></backTab>
      <span class="title">排行榜</span>
    </div>
  </div>
</template>
<style scoped>
  .RankList-wrapper {
    display: flex;
    flex-direction: column-reverse;
    font-size: 16px;
  }

  .RankList-title {
    display: flex;
    flex-direction: row;
    margin-top: 8px;
  }

  .title {
    margin: 0 auto;
  }

  .updata {
    color: aliceblue;
    position: absolute;
    left: 10px;
    top: 75px;
  }

  .songList-wrapper {
    padding: 8px 0;
  }

  .songList {
    height: 1rem;
    width: 3.45rem;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-left: 10px;
    padding: 8px 0px;
    position: relative;
  }

  .rankImg {
    height: 1rem;
    width: 1rem;
    margin-right: 12px;
  }

  span {
  }

  .block {
    display: block;
    width: 100%;
    height: 0.2rem;
    color: aliceblue;
  }

  .rankList {
    margin-top: 20px;
    height: 600px;
    overflow: auto;
  }

  .back {
  }

</style>


<script>
    import axios from 'axios'
    import footBar from '../components/FooterBuild'
    import backTab from '../components/BackPage'

    export default {
        // rankList:'',
        data() {
            return {
                name: "ranklist",
                rankList: [],
                // that:''
            }
        },
        methods: {
            getData() {
                let self = this
                axios.get('api/toplist').then(function (res) {

                    self.rankList = res.data['list']
                }).catch(function (error) {
                    console.log(error)
                })
            },
            onchange(e) {
                let id = e.target.getAttribute('data-id')
                console.log(id)
            }
        },
        created() {
            this.getData()
        },
        components: {
            footBar, backTab
        }
    }
</script>
