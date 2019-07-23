<template>
    <!--<div class="Footer">
         <div id="find">
             <span>发现</span>
             </div>
         <div id="video">
             <span>视频</span>
             </div>
         <div id="mys">
             <span>我的
             </span>
             </div>
         <div id="friend">
             <span>朋友
             </span>
             </div>
         <div id="account">
             <span>账号
             </span>
             </div>
        
    </div>-->
    <div class="middle">
        
       <div v-for="(item,index) of items" :key="index">
        <!-- <span @click="clickBar">{{item.name}}</span> -->
        <!-- 可以使用对象里面的参数去跳转页面 -->
        <router-link :to="{path:item.path}" >{{item.name}}</router-link>
        
        
        </div>

    </div>
</template>

<style>
.middle{
    display: flex;
    width: 3.65rem;
    /* position: fixed; */
    flex-direction: row;
    transform: translate(0.1rem,-0.15rem);
    font-size: 0.16rem
    
}
div{
    flex: 1;
}
</style>
<script>
export default {
    name:"middleTab",
    data() {
        return {
           items:[
                  {
                     name:"每日推荐",
                     path:"/daily",
                     cls:"daily", 
                  },
                  {
                      name:"歌单",
                      path:"/songlist",
                       cls:"songlist",
                  },
                  {
                      name:"排行榜",
                      path:"/ranklist",
                        cls:"ranklist"
                  },{
                      name:"电台",
                      path:'/radio',
                      cls:"radio"

                  },{
                      name:"直播",
                      path:"/zhibo",
                      cls:"zhibo",

                  }
              ]
        }
    },
    props:{
        // items:{
        //     type:Array,
        //     defalut:function(){
        //     //   items:[
        //     //       {
        //     //          name:"发现",
        //     //          cls:"find", 
        //     //       },
        //     //       {
        //     //           name:"我的",
        //     //            cls:"mys"
        //     //       },
        //     //       {
        //     //           name:"点赞",
        //     //             cls:"good"
        //     //       }
        //     //   ]
        //     }
        },
                
                

    // items:[{
    //     name:"发现",
    //     cls:"find",
        
    // },{
    //     name:"我的",
    //     cls:"mys",
    // },{
    //     name:"点赞",
    //     cls:"good",
    // }],
    methods: {
        clickBar:function(){
            this.$router.push('/'+this.page)
        }
        }
    }


</script>