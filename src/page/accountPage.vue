<template>
  <div class="container">
    <div class="msg2">
      <div class="shopping" v-for="(item,index) in items" :key="index">
        {{item.name}}
      </div>
    </div>
    <van-cell-group>
      <van-cell title="口袋铃声" value="">
        <van-icon name="arrow"/>
      </van-cell>
      <van-cell title="我的订单" value="" label="">
        <van-icon name="arrow"/>
      </van-cell>
      <div class="line"></div>
      <van-cell title="设置" value="">
        <van-icon name="arrow"/>
      </van-cell>
      <van-cell title="夜间模式" value="" label="">
        <van-icon name="arrow"/>
      </van-cell>
      <van-cell title="定时关闭" value="">
        <van-icon name="arrow"/>
      </van-cell>
      <van-cell title="音乐闹钟" value="" label="">
        <van-icon name="arrow"/>
      </van-cell>
      <div class="line"></div>
      <van-cell title="在线听歌免流量" value="">
        <van-icon name="arrow"/>
      </van-cell>
      <van-cell title="优惠券" value="" label="">
        <van-icon name="arrow"/>
      </van-cell>
      <div class="line"></div>
      <van-cell title="加入音乐人" value="">
        <van-icon name="arrow"/>
      </van-cell>
      <van-cell title="我要直播" value="" label="">
        <van-icon name="arrow"/>
      </van-cell>
      <van-cell title="分享网易云音乐" value="">
        <van-icon name="arrow"/>
      </van-cell>
      <van-cell title="关于" value="" label="">
        <van-icon name="arrow"/>
      </van-cell>
      <div class="line"></div>
    </van-cell-group>
    <footBar></footBar>
  </div>
</template>
<style scoped>

  .msg2 {
    width: 100%;
    height: 0.5rem;
    padding: 10px 10px;
    display: flex;
    flex-direction: row;
  }

  .shopping {
    flex: 1;
    height: 0.3rem;
    border-right: 1px solid salmon;
  }

  .shopping:last-child {
    border-right: 1px solid white;
  }

  .msg {
    width: 100%;
    display: flex;
    height: 0.5rem;
    flex-direction: row;
  }

  .container {
    font-size: 0.16rem;
    width: 100%;
    height: 100%;
  }

  .line {
    width: 90%;
    height: 0.1rem;
    background-color: ghostwhite;
    left: 0;
    top: 0;
    margin: auto;
  }
</style>

<script>
    import footBar from '../components/FooterBuild'
    import cellGround from 'vant/lib/cell-group'
    import cell from 'vant/lib/cell'
    import 'vant/lib/cell/style'
    import 'vant/lib/cell-group/style'
    import Icon from 'vant/lib/icon'
    import 'vant/lib/icon/style'

    export default {
        components: {
            footBar,
            [cell.name]: cell,
            [cellGround.name]: cellGround,
            [Icon.name]: Icon

        },
        data() {
            return {
                persons: [
                    {
                        name: '动态',
                    },
                    {
                        name: '关注',
                    },
                    {
                        name: '粉丝',
                    },
                    {
                        name: '编辑资料'
                    },
                ],
                items: [
                    {
                        name: '消息'
                    },
                    {
                        name: '商城',
                    },
                    {
                        name: '演出',
                    },
                    {
                        name: '个性换肤'
                    }
                ]
            }
        },
    }
</script>
