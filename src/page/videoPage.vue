<template>
  <div class="Video-wrapper">
    <footBar></footBar>
    <div class="videos-container">
      <div class="videos" v-for="(video,index) in allList" :key="index">
        <div class="title">{{video.title}}
        </div>
        <!--        <img :src="video.coverUrl" alt="123">-->
        <iframe :src="video.url" frameborder="0"></iframe>
      </div>
    </div>
    <div class="video-title">
      <BackTab></BackTab>
      <span class="title">视频播放界面</span>
    </div>
  </div>
</template>
<style scoped>
  .title {
    font-size: 0.16rem;
    margin: 0 auto;
    background: transparent;
  }

  .Video-wrapper {
    display: flex;
    flex-direction: column-reverse;
    font-size: 16px;
  }

  .video-title {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
  }

  .videos {
    display: flex;
    flex-direction: column-reverse;
    padding: 0 20px;
    margin-top: 20px;
  }

  .videos-container {
    height: 568px;
    max-width: 100vw;
    overflow: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }

  img {
    width: 2.5rem;
    height: 1.5rem;
  }

  video {
    width: 2rem;
    height: 1rem;
  }
</style>

<script>
    import footBar from '../components/FooterBuild'
    import axios from 'axios'
    import BackTab from '../components/BackPage'

    export default {
        components: {
            footBar,
            BackTab
        },
        data() {
            return {
                Lists: [],
                videos: [],
                allList: []
            }
        },
        methods: {
            videoLists: function () {
                var that = this
                axios.get('api/video/group?id=4101', {withCredentials: true}).then(
                    res => {
                        // console.log(res.data.datas)
                        this.videos = res.data.datas
                        //  console.log(this.Lists)
                        for (let i = 0; i < this.videos.length; i++) {
                            console.log(i)
                            //  console.log(this.videos[i].data.vid)

                            axios.get('api/video/url?id=' + this.videos[i].data.vid).then(res => {

                                //  console.log(res.data['urls'][0].url)
                                //  that.urls = res.data['urls'][0].url
                                //    that.urls = {'urls':res.data['urls'][0].url}
                                that.videos[i].data.url = res.data['urls'][0].url
                                // console.log(that.videos[i].data)

                                that.allList.push(that.videos[i].data)
                                // console.log(that.allList)
                                // that.Lists = that.videos[i].data
                                // console.log(that.Lists)
                                //    console.log(that.Lists)
                                //    console.log(this.videos[i].data) 图片数据的对象
                                // that.Lists.push(res.data['urls'][0].url)
                                // console.log(that.Lists)
                                //将urls中添加数据
                                // that.urls.push(res.data['urls'][0].url)
                                //  console.log(that.urls)
                                //  that.urls.append(res.data['urls'][0].url)
                            }).catch(err => {
                                console.log(err)
                            })
                        }
                        //  console.log(this.Lists)

                        //  for(let i = 0; i<this.videos.length; i++){
                        //      console.log(videos[i])
                        //  }

                        //  this.videos = res.data.datas.vid
                        //  console.log(this.videos)
                    }
                ).catch(err => {
                    console.log(err)
                })
            }
        },
        mounted() {
            this.videoLists()
        },

    }
</script>
