<template>
  <div class="friendPage">
    <div id="spans">
      <span>发布动态</span>
      <span>发布视频</span>
    </div>
    <div id="buttons">
      <div v-for="(link,index) in item" :key="index" class="button">
        <router-link :to="{path:link.path}">{{link.name}}</router-link>
      </div>
    </div>
    <div id="line"></div>
    <div class="allDate">
      <div v-for="(mov,index) in imgs" :key="index" class="all">
        <div>
          <img class="icon" :src="mov.user.backgroundUrl">
          <span class="nickname">{{mov.user.nickname}}</span>
        </div>
      </div>
    </div>
    <footBar></footBar>
  </div>
</template>
<style scoped>
  .friendPage {
    display: flex;
    flex-direction: column;
  }

  .nickname {
    position: relative;
    top: -0.1rem;
    font-size: 0.16rem
  }

  .icon {
    width: 0.35rem;
    height: 0.35rem;
  }

  .all {
    text-align: left;
    padding: 0.1rem;
  }

  img {
    width: 1rem;
    height: 1rem;
    border-radius: 0.1rem;
  }

  .allDate {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 16px;
    height: 550px;
    overflow: auto;
  }


  #line {
    height: 0.01rem;
    background-color: black;
    margin: 0.2rem;
  }

  .button {
    width: 1rem;
    border: 1px solid black;
    border-radius: 0.1;
    font-size: 0.16rem;
  }

  #spans {
    display: flex;
    flex-direction: row;
    font-size: 0.16rem
  }

  span {
    flex: 1;
  }

  #buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;

  }

  button {
    border-radius: 0.1rem;

  }

  .active {
    background: red;
  }
</style>

<script>
    import footBar from '../components/FooterBuild'
    import near from '../page/nearPage'
    import axios from 'axios'

    export default {
        components: {
            footBar, near
        },
        data() {
            return {
                event: [],
                item: [{
                    name: "动态",
                    path: "/friendPage",
                    cls: "moveing",
                },
                    {
                        name: "附近",
                        path: "/near",
                        cls: "near",
                    },]
            }
        },
        computed: {
            imgs() {
                return this.event.filter(t => t.pics.length !== 0)
            }
        },
        methods: {
            getDate: function () {
                axios.get('api/event?pagesize=30', {withCredentials: true}).then(res => {
                    this.event = res.data.event
                })
            }
        },
        mounted() {
            this.getDate()
        },
    }
</script>
