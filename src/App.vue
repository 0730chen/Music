<template>
  <div id="app">
    <!--    <transition :name="fade">-->
    <!--    <router-view></router-view></transition>-->
    <router-view></router-view>
  </div>
</template>

<script>
    import NavBar from './components/FooterBuild.vue'

    export default {
        name: "app",
        msg2: 'hello',
        components: {
            NavBar,

        },
        data() {
            return {
                fade: 'fade-right'
            }
        },
        watch: {
            '$route'(to, from) {
                //判断
                this.fade = 'fade-right'
                if (to.path == '/') {
                    this.fade = 'fade-left'
                }
            }
        },


    }
</script>

<style>
  .fade-left-enter-active {
    animation-name: fade-left-in;
    animation-duration: .3s
  }

  .fade-left-leave-active {
    animation-name: fade-left-out;
    animation-duration: .3s
  }

  @keyframes fade-left-in {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0)
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0)
    }
  }

  @keyframes fade-left-out {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0)
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0)
    }
  }

  .fade-right-enter-active {
    animation-name: fade-right-in;
    animation-duration: .3s;
  }

  .fade-right-leave-active {
    animation-name: fade-right-out;
    animation-duration: .3s
  }

  @keyframes fade-right-in {
    0% {
      width: 100%;
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0)
    }
    100% {
      width: 100%;
      -webkit-transform: translate(-100%, 0);
      transform: translate(-100%, 0)
    }

  }

  @keyframes fade-right-out {
    0% {
      width: 100%;
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0)
    }
    100% {
      width: 100%;
      -webkit-transform: translate(100%, 0);
      transform: translate(100%, 0)
    }
  }

  html {
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
  }

  body {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .container {
    max-width: 100%;
    max-height: 100%;
  }

</style>
