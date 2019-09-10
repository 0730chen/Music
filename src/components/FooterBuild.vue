<template>
    <div class="footer">
       <div v-for="(item,index) of items" :key="index">
        <router-link :to="{path:item.path}" >{{item.name}}</router-link>
        </div>

    </div>
</template>

<style>
.footer{
    display: flex;
    width: 100%;
    height: 0.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
    flex-direction: row;
    background-color: rgb(247, 249, 252);
    z-index: 99;
    font-size: 0.14rem;
    
}
div{
    flex: 1;
}
</style>
<script>
export default {
    name:"footerBar",
    data() {
        return {
           items:[
                  {
                     name:"发现",
                     path:"/",
                     cls:"find", 
                  },
                  {
                      name:"视频",
                      path:"/video",
                       cls:"video",
                  },
                  {
                      name:"我的",
                      path:"myPage",
                        cls:"mys"
                  },{
                      name:"朋友",
                      path:'friendPage',
                      cls:"friend"

                  },{
                      name:"账号",
                      path:"accountPage",
                      cls:"accouunt",

                  }
              ]
        }
    },
    props:{
        },
                
    methods: {
        clickBar:function(){
            this.$router.push('/'+this.page)
        }
        }
    }


</script>