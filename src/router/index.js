/* eslint-disable indent */
/* eslint-disable eol-last */
import Vue from 'vue'
import Router from 'vue-router'

// import footBar from '../components/FooterBuild.vue'
import homePage from '../page/homepage.vue'
import videoPage from '../page/videoPage.vue'
import myPage from '../page/myPage.vue'
import friendPage from '../page/friendPage.vue'
import accountPage from '../page/accountPage.vue'
import daily from '../page/dailyPage.vue'
import songlist from '../page/songList.vue'
import ranklist from '../page/rankList.vue'
import radio from '../page/radio.vue'
import zhibo from '../page/zhibo.vue'
import near from '../page/nearPage.vue'
import playSong from '../page/playSong.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: homePage
    }, {
        path: '/video',
        name: 'video',
        component: videoPage
    }, {
        path: '/myPage',
        name: 'myPage',
        component: myPage
    }, {
        path: '/friendPage',
        name: 'friendPage',
        component: friendPage
    }, {
        path: '/accountPage',
        name: 'accountPage',
        component: accountPage
    }, {
        path: '/daily',
        name: 'daily',
        component: daily
    }, {
        path: '/songlist',
        name: 'songlist',
        component: songlist
    }, {
        path: '/ranklist',
        name: 'ranklist',
        component: ranklist
    }, {
        path: '/radio',
        name: 'radio',
        component: radio
    }, {
        path: '/zhibo',
        name: 'zhibo',
        component: zhibo
    }, {
        path: '/near',
        name: 'near',
        component: near
    }, {
        path: '/playSong',
        name: 'play',
        component: playSong
    }]
})