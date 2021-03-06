/* eslint-disable indent */
/* eslint-disable eol-last */
import Vue from 'vue'
import Router from 'vue-router'
// import homePage from '../page/Homepage.vue'
import videoPage from '../page/VideoPage.vue'
import myPage from '../page/Mypage.vue'
import friendPage from '../page/FriendPage.vue'
import accountPage from '../page/AccountPage.vue'
import daily from '../page/DailyPage.vue'
import songlist from '../page/SongList.vue'
import ranklist from '../page/RankList.vue'
import radio from '../page/Radio.vue'
import zhibo from '../page/Zhibo.vue'
import near from '../page/nearPage.vue'
import playSong from '../page/PlaySong.vue'
import playList from '../page/PlayList.vue'

// import footBar from '../components/FooterBuild.vue'
const homepage = () =>
    import ('../page/Homepage.vue') //路由懒加载
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: homepage
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
    }, {
        path: '/playList',
        name: 'playList',
        component: playList
    }]
})
