<template>
    <div>
        <div class="title">这是视频页面</div>
        <div class="title">有可以滑动的选项框</div>

        <div class="videos" v-for="(video,index) in allList" :key="index">
            <div class="title">{{video.title}}
            </div>
            <img :src="video.coverUrl" alt="123">
            <iframe :src="video.url" frameborder="0"></iframe>
            </div>
            <!-- <div class="videoList" v-for="(videolist,index) in urls" :key="index+1">
                <iframe :src="videolist" frameborder="0"></iframe>
            </div> -->
        
        
        <footBar></footBar>
    </div>
</template>
<style scoped>
.title{
    font-size: 0.16rem;

}
.videos{
    padding: 0.1rem;
}
img{
    width: 2.5rem;
    height: 1.5rem;
}
video{
    width: 2rem;
    height: 1rem;
}
</style>

<script>
import footBar from '../components/FooterBuild'
import axios from 'axios'
import backTab from '../components/backPage'
export default {
    components:{
        footBar,
        backTab
    },
    data() {
        return {
            Lists:[],
            videos:[],
            allList:[]
        }
    },
    methods: {
        videoLists:function(){
            var that = this
            axios.get('http://127.0.0.1:3000/video/group?id=4101',{withCredentials: true}).then(
                res => {
                    // console.log(res.data.datas)
                 this.videos = res.data.datas
                 console.log(this.Lists)
                 for(let i =0;i<this.videos.length; i++){
                     console.log(i)
                    //  console.log(this.videos[i].data.vid)
                     
                     axios.get('http://127.0.0.1:3000/video/url?id='+this.videos[i].data.vid).then( res =>{
                         
                         console.log(res.data['urls'][0].url)
                        //  that.urls = res.data['urls'][0].url
                    //    that.urls = {'urls':res.data['urls'][0].url}
                        that.videos[i].data.url = res.data['urls'][0].url
                        console.log(that.videos[i].data)

                        that.allList.push(that.videos[i].data)
                        console.log(that.allList)
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
                 console.log(this.Lists)

                //  for(let i = 0; i<this.videos.length; i++){
                //      console.log(videos[i])
                //  }
                 
                //  this.videos = res.data.datas.vid
                //  console.log(this.videos)
                }
                
            ).catch( err =>{
                console.log(err)
            })
        }
    },
    mounted() {
        this.videoLists()
    },
    
}
</script>