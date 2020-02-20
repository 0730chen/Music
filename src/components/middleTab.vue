<template>
  <div class="middle">

    <div v-for="(item,index) of items" :key="index">
      <router-link :to="{path:item.path}">{{item.name}}</router-link>


    </div>

  </div>
</template>

<style>
  .middle {
    display: flex;
    flex-direction: row;
    font-size: 0.16rem;
    padding-top: 6px;
    padding-left: 16px;
    padding-right: 10px;
  }
  .middle > div {
    flex: 1;
    max-width: 100%;
  }
</style>
<script>
    export default {
        name: "middleTab",
        data() {
            return {
                items: [
                    {
                        name: "每日推荐",
                        path: "/daily",
                        cls: "daily",
                    },
                    {
                        name: "歌单",
                        path: "/songlist",
                        cls: "songlist",
                    },
                    {
                        name: "排行榜",
                        path: "/ranklist",
                        cls: "ranklist"
                    }, {
                        name: "电台",
                        path: '/radio',
                        cls: "radio"

                    }, {
                        name: "评论",
                        path: "/zhibo",
                        cls: "zhibo",

                    }
                ]
            }
        },
        props: {
        },

        methods: {
            clickBar: function () {
                this.$router.push('/' + this.page)
            }
        }
    }


</script>
