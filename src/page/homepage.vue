<template>
  <div class="HomePage">
    <footBar></footBar>
    <div class="HomePage-wrapper">
    <div class="HomePage-title">
      <van-icon name="audio" class="Icon"></van-icon>
      <input class="HomePage-title-search" type="search" placeholder="搜索歌曲"/>
      <van-icon class="Icon" name="bar-chart-o"></van-icon>
    </div>
    <div class="slide">
      <div class="lunbo" v-for="(url,index) in imgLists" :key="index">
        <transition name="Slideshow">
          <img class="limg" :src="url.picUrl" alt v-show="index ==mark"/>
        </transition>
      </div>
    </div>
    <middle></middle>
    <div id="line"></div>
      <div class="select-Button">
    <span id="recommended">推荐歌单</span>
    <div id="more" @click="loadmore">更多歌单</div>
    </div>
    <div class="songlists">
      <div class="songlist" v-for="(songlist,index) in filterAddress" :key="index">
        <img v-lazy="songlist.picUrl"/>
        <router-link :to="{path:'./playlist',query:{id:songlist.id}}">{{songlist.name}}</router-link>
      </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
  .Slideshow-enter-active {
    transition: all 3s ease;
  }

  .Slideshow-leave-active {
    transition: all 3s ease;
  }

  .Slideshow-enter,
  .Slideshow-leave-to {
    opacity: 0;
  }
  .HomePage{
    display: flex;
    flex-direction: column-reverse;
  }
  .HomePage-wrapper{
    flex-grow: 1;
  }
  .HomePage-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:0 10px ;
  }
  input{
    font-size: 30px;
    width: 268px;
    background: url("../assets/search.jpg") no-repeat right 15px top 5px;
    background-size: 10%;
  }
  .van-icon{
    font-size: 30px;
  }
  #line {
    background-color: rgb(149, 151, 153);
    height: 1px;
   margin-top: 16px;
  }
.select-Button{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 10px;
}
  #more {
    font-size: 16px;
    font-weight: 1000;
  }
  #recommended {
    font-weight: 1000;
    font-size: 16px;
  }

  .songlists {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: center;
  }

  .songlist {
    font-size: 8px;
    max-width: 32%;
    padding: 5px;
    flex-shrink: 0;
    margin-top: 6px;
  }

  img {
    display: block;
    width: 100%;
    border-radius: 10px;
  }

  .lunbo {
    position: absolute;
    padding: 6px;
  }

  .lunbo > img {
    max-width: 100%;
  }

  .slide {
    height: 150px;
    width:100vw;
    position: relative;
    margin-top: 16px;
  }
</style>

<script>
    import footBar from "../components/FooterBuild";
    import middle from "../components/middleTab";
    import axios from "axios";
    import Icon from "vant/lib/icon";
    import "vant/lib/icon/style";
    import {mapState, mapMutations, mapGetters, mapActions} from "Vuex";

    export default {
        components: {
            footBar,
            middle,
            [Icon.name]: Icon
        },
        data() {
            return {
                mark: 0,
                songlists: [],
                imgLists: [],
                limteAddress: 9,
                arr: []
            };
        },
        methods: {
            login: function () {
                axios
                    .get("api/login/cellphone?phone=17691103482&password=970214")
                    .then(function (res) {
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
            songlist: function () {
                let self = this;
                axios
                    .get("api/personalized")
                    .then(function (res) {
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
            imglists: function () {
                axios
                    .get("api/personalized/privatecontent")
                    .then(res => {
                        this.imgLists = res.data["result"];
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
            authplay: function (mark) {
                this.mark++;
                if (this.mark >= 3) {
                    this.mark = 0;
                }
            },
            play: function () {
                setInterval(this.authplay, 5000);
            },
            loadmore: function () {
                // let len = this.songlists.length;
                let len = this.song.song.result.length
                console.log(len)
                if (this.limteAddress == len) {
                    this.limteAddress = 9;
                } else {
                    this.limteAddress = len;
                }
            },
            con() {
                console.log(this.count);
            }
        },
        mounted() {
            this.login();
            this.songlist();
            this.imglists();
        },
        created() {
            this.getDate;
            this.play();
            this.con();
            console.log(this)
            this.contextTest
            this.songList
            this.add
        },
        computed: {
            filterAddress: function () {
                // this.songlists = this.song.song.result;
                // this.songlists = this.song
                return this.song.song.result.slice(0, this.limteAddress);
            },
            ...mapState(["count", 'cat', 'car',]),

            ...mapActions(["getDate", "contextTest"]),
            // ...mapMutations(["setDate"]),
            ...mapState(["song", "playList"]),
        }
    };
</script>
