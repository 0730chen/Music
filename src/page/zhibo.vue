<template>
  <div class="comment-wrapper">
    <footBar></footBar>
    <div class="containe">
      <div class="comments" v-for="(comment,index) in commentsList" :key="index">
        <div class="user-message">
          <img :src="comment.user.avatarUrl" alt="">
          <!-- <img :src="comment.sharePicUrl"> -->
          <div class="title">{{comment.user.nickname}}</div>
        </div>
        <div class="context">{{comment.content}}</div>
      </div>
    </div>
    <div class="comment-title">
      <backTab></backTab>
      <span class="comment-title-span">评论</span>
    </div>
  </div>
</template>
<style scoped>
  .comment-wrapper {
    display: flex;
    flex-direction: column-reverse;
    font-size: 16px;

  }

  .comment-title {
    display: flex;
    margin-top: 10px;
  }

  .comment-title-span {
    margin: 0 auto;
  }

  .user-message {
    display: flex;
    flex-direction: row;
  }

  .context {
    padding: 8px 10px;
    text-indent: 32px;
  }

  .title {
    margin-left: 10px;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 10px;
  }

  .comments {
    height: 250px;
    display: flex;
    flex-direction: column;
    padding: 8px 0;
  }

  .containe {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    height: 600px;
    overflow: auto;
  }
</style>

<script>
    import backTab from '../components/BackPage'
    import footBar from '../components/FooterBuild'
    import axios from 'axios'

    export default {
        data() {
            return {
                commentsList: [],
                commtext: [],
            }
        },
        components: {
            footBar, backTab
        },
        methods: {
            getDate: function () {
                axios.get('api/comment/hot?id=186016&type=0', {withCredentials: true}).then(res => {
                    // console.log(res.data.hotComments)
                    let list = res.data.hotComments
                    this.commentsList = res.data.hotComments
                    // this.commentsList = res.data.hot
                    for (const iter of list) {
                        // console.log(iter)
                        // if(iter.text.length != 0){
                        //     // this.commentsList.push(iter)

                        //     console.log(iter.text[0])
                        // }else{
                        //     console.log('没有留言')
                        // }
                        // console.log(typeof(iter.text))
                    }
                })
            }
        },
        mounted() {
            this.getDate()
        },
    }
</script>
