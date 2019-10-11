<template>
  <div class="con">
    <div id="header">
      <van-icon name="audio"></van-icon>
      <input id="select" type="search" placeholder="歌曲" />
      <div id="search">
        <van-icon class="chart" name="bar-chart-o"></van-icon>
      </div>
    </div>
    <div class="slide">
      <div class="lunbo" v-for="(url,index) in imgLists" :key="index">
        <transition name="Slideshow">
          <img class="limg" :src="url.picUrl" alt v-show="index ==mark" />
        </transition>
      </div>
    </div>
    <middle></middle>
    <div id="line"></div>
    <span id="recommended">推荐歌单</span>
    <div id="more" @click="loadmore">更多</div>
    <div class="songlists">
      <div class="songlist" v-for="(songlist,index) in filterAddress" :key="index">
        <img v-lazy="songlist.picUrl" />
        <router-link :to="{path:'./playlist',query:{id:songlist.id}}" >{{songlist.name}}</router-link>
        <!-- <router-link :to="{path:'/playList',query:{songlist.id}}">{{songlist.name}}</router-link> -->
        <!-- <router-link :to="{path:'./playList',query:{id:songlist.id}></router-link> -->
      </div>
    </div>
    <footBar></footBar>
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
.chart {
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  font-size: 0.3rem;
  transform: translate(1.2rem, -0.2rem);
}
i {
  position: absolute;
  font-size: 0.3rem;
  left: 0.1rem;
  top: 0.15rem;
}
.container {
  max-width: 100%;
}
#header {
  position: absolute;
  width: 100%;
  height: 0.5rem;
  background: #d43c33;
  top: 0;
}
#micphone {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: 40%;
  top: 0.05rem;
  z-index: 99;
  left: 0.26rem;
}
#line {
  background-color: rgb(149, 151, 153);
  height: 1px;
  transform: translateY(10px);
}
#search {
  width: 100px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 50%;
  background: url("../assets/search.jpg") no-repeat right 15px top 5px;
  background-size: 15%;
  z-index: 99;
}
#select {
  width: 60%;
  z-index: 1;
  position: absolute;
  transform: translateX(-50%);
  top: 20px;
  left: 50%;
  border-radius: 10px;
  font-size: 0.16rem;
}
#more {
  right: 5%;
  position: absolute;
  transform: translateY(0.15rem);
  font-size: 0.16rem;
}
#recommended {
  left: 5%;
  position: absolute;
  transform: translateY(15px);
  font-size: 0.16rem;
}
.songlists {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  transform: translateY(0.25rem);
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
}
.lunbo > img {
  max-width: 100%;
}
.slide {
  position: relative;
  height: 2rem;
  padding: 20px;
  margin-right: 20px;
}
</style>

<script>
import footBar from "../components/FooterBuild";
import middle from "../components/middleTab";
import axios from "axios";
import Icon from "vant/lib/icon";
import "vant/lib/icon/style";
import { mapState, mapMutations, mapGetters, mapActions } from "Vuex";
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
    //使用VueX管理数据
    login: function() {
      axios
        .get("api/login/cellphone?phone=17691103482&password=970214")
        .then(function(res) {
          // console.log(res.data)
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    songlist: function() {
      let self = this;
      axios
        .get("api/personalized")
        .then(function(res) {
          //   self.songlists = res.data["result"];
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    imglists: function() {
      axios
        .get("api/personalized/privatecontent")
        .then(res => {
          this.imgLists = res.data["result"];
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    authplay: function(mark) {
      this.mark++;
      if (this.mark >= 3) {
        this.mark = 0;
      }
    },
    play: function() {
      setInterval(this.authplay, 5000);
    },
    loadmore: function() {
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
    this.contextTest
  },
  computed: {
    filterAddress: function() {
      // this.songlists = this.song.song.result;
      // this.songlists = this.song
      return this.song.song.result.slice(0, this.limteAddress);
    },
    ...mapState(["count",'cat','car']),

    ...mapActions(["getDate","contextTest"]),
    // ...mapMutations(["setDate"]),
    ...mapState(["song"])
  }
};
</script>