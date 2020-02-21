<template>
  <div class="radio-wrapper">
    <footBar></footBar>
    <div class="djRaidos">
      <div class="djs" v-for="(dj,index) in djRadios" :key="index">
        <img class="djImg" :src='dj.picUrl' alt="">
        <div>{{dj.name}}</div>
      </div>
    </div>
    <div class="Tabs">
      <div class="radioTab" v-for="(tab,index) in radios" :key="index">
        {{tab.name}}
      </div>
    </div>
    <!--    <div class="radio">-->
    <!--      <div class="picList" v-for="(pic,index) in Pics" :key="index" v-show="mark == index">-->
    <!--        <img :src="pic.picUrl" alt="">-->
    <!--        <div>{{pic.name}}</div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="radio-title">
      <backTab></backTab>
      <span class="title">电台</span>
    </div>
  </div>
</template>
<style scoped>
  .radio-wrapper {
    display: flex;
    flex-direction: column-reverse;
    font-size: 16px;
  }

  .radio-title {
    display: flex;
    flex-direction: row;
    margin-top: 6px;
  }

  .title {
    margin: 0 auto;
  }

  .djs {
    width: 33%
  }

  .djRaidos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    margin-top: 20px;
  }

  .picList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
  }

  .picList > img {
    max-width: 100vw;
  }

  .djImg {
    max-width: 1rem;
    max-height: 1rem;
  }


  .radio {
    font-size: 0.16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }

  img {
    max-width: 100vw;
    border-radius: 5%
  }

  .Tabs {
    display: flex;
    margin: 0.1rem;
  }

  .radioTab {
    font-size: 0.16rem;
    flex: 1;
  }
</style>

<script>
    import footBar from '../components/FooterBuild'
    import backTab from '../components/BackPage'
    import axios from 'axios'

    export default {
        data() {
            return {
                name: "radio",
                Pics: [],//页面轮播图数据
                mark: 0,
                djRadios: [],//推荐单台数据
                radios: [
                    {
                        name: '电台分类',
                    },
                    {
                        name: '电台排行',
                    },
                    {
                        name: '付费精品',
                    },
                    {
                        name: '音乐课堂',
                    }
                ]
            }
        },
        components: {
            footBar, backTab
        },
        methods: {
            getDate: function () {
                axios.get('api/personalized/djprogram', {withCredentials: true}).then(res => {
                    // console.log(res.data.result)
                    this.Pics = res.data.result
                    // console.log(this.Pics)
                })
            },
            djs: function () {
                axios.get('api/dj/recommend', {withCredentials: true}).then(res => {
                    // console.log(res.data)
                    this.djRadios = res.data.djRadios
                })
            },
            authplay(mark) {
                this.mark++;
                if (this.mark == 5) {
                    this.mark = 0
                }
            },
            play: function () {
                // setTimeout(this.authplay,1000)
                setInterval(this.authplay, 1000)
            }
        },
        mounted() {
            this.getDate() //轮播图数据
            this.djs()   //推荐电台数据
            // this.play()
        },

    }
</script>
