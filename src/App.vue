<template>
  <div id="app">
    <div class="container">
    <transition :name="fade">
    
    <router-view></router-view></transition>
    </div>
    <!-- <img src="./assets/bg.jpg"> -->
    <!-- <first></first> -->
    <!-- <NavBar></NavBar> -->
    <!-- <div id="app-in"> -->
      
      <!-- <first></first> -->
    <!-- </div> -->
    <!-- <v-navbar></v-navbar>
    <router-link to="cpt">跳转到蔡</router-link> -->
    <!-- <router-view></router-view> -->
    
    
    <!-- <div class="box">
     <NavBar></NavBar>
      <router-view>
      <v-navbar :items="items" :showIconOrSrc="showIconOrSrc"></v-navbar></router-view> -->
    <!-- </div> -->
    
  </div>
  
</template>


<script>
import first from './components/first.vue'
import cpt from './components/cpt.vue'
import NavBar from './components/FooterBuild.vue'
import hello from './components/HelloWorld.vue'
// console.log(NavBar)
// export default {
//   name: 'App',
//   msg2:'hello',
//   components:{
//     first,cpt,FooterPubli
//   }
// }
 export default{
  name:"app",
  msg2:'hello',
  components:{
   NavBar,
   
  },
  data(){
    return {
      fade:'fade-right'
    }
  },
  watch: {
    '$route'(to,from){
      //判断
      this.fade = 'fade-right'
      if(to.path =='/'){
        console.log('回到首页')
        this.fade = 'fade-left'
      }
      // console.log(to)
      // console.log(from)
     
    }
  },
  

}
</script>

<style>
.fade-left-enter-active{
  animation-name:fade-left-in;
  animation-duration: .3s
}
.fade-left-leave-active{
  animation-name:fade-left-out;
  animation-duration: .3s
}
@keyframes fade-left-in{
  0%{
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0)
  }
  100%{
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0)
  }
}
@keyframes fade-left-out{
  0%{
    -webkit-transform: translate3d(0,0,0);
    transform:translate3d(0,0,0)
  }
  100%{
    -webkit-transform: translate3d(-100%,0,0);
    transform:translate3d(-100%,0,0)
  }
}
.fade-right-enter-active{
  animation-name:fade-right-in;
  animation-duration: .3s;
}
.fade-right-leave-active{
  animation-name: fade-right-out;
  animation-duration: .3s
}
@keyframes fade-right-in{
  0%{
    width: 100%;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0)
  }
  100%{
    width:100%;
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0)
  }

}
@keyframes fade-right-out{
  0%{
    width:100%;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0)
  }
  100%{
    width: 100%;
    -webkit-transform: translate3d(100%,0,0);
    transform:translate3d(100%,0,0)
  }
}
html{
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 26.67vw;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  width: 100%
}

</style>
