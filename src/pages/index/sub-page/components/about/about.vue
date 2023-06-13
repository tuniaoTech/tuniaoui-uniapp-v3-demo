<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import TnScrollList from '@tuniao/tnui-vue3-uniapp/components/scroll-list/src/scroll-list.vue'

import { useAbout } from './composables'

import type { CSSProperties } from 'vue'

import { formatNumberWithQuantityUnit, navMiniProgram } from '@/utils'

const { navBarInfo } = useUniAppSystemRectInfo()

useAbout()

// 自定义按钮样式
const customButtonStyle: CSSProperties = {
  padding: '0rpx',
}

const userInfo = reactive({
  nickName: '图鸟小伙伴',
  avatarUrl: '',
})

const frameVersion = ref('1.0.0')

const githubData = reactive({
  view: 1290,
  star: 0,
  fork: 168,
})

const friendLinkData = ref([
  {
    id: 1,
    name: 'uCharts',
    image:
      'https://oos.tuniaokj.com/tuniao-admin/atlas/e50f22f557747fb6d7b095968e7f0715.jpg',
    mini_app_id: 'wx37a9ee6a7398dec0',
    mini_app_path: 'demo/home',
    url: '',
  },
  {
    id: 2,
    name: '芊云全景',
    image:
      'https://oos.tuniaokj.com/tuniao-admin/atlas/11baab1d3d0fba0c85d93389e4e1c11f.jpg',
    mini_app_id: 'wx9f77d65eb4eff65b',
    mini_app_path: 'pages/index/index',
    url: '',
  },
  {
    id: 3,
    name: '前端铺子',
    image:
      'https://oos.tuniaokj.com/tuniao-admin/atlas/830b51e3a706abc0d4772e193de1021d.jpg',
    mini_app_id: 'wx201efd3f86fa2ba7',
    mini_app_path: 'pages/index/tabbar',
    url: '',
  },
  {
    id: 4,
    name: 'DIY神器',
    image:
      'https://oos.tuniaokj.com/tuniao-admin/atlas/6698093f5dfbec1205b9e2586a36935a.png',
    mini_app_id: 'wxda438798441f31f1',
    mini_app_path: 'pages/index',
    url: '',
  },
  {
    id: 5,
    name: 'nPro',
    image:
      'https://oos.tuniaokj.com/tuniao-admin/atlas/af0ab744e345d8314e08be38bbe59437.jpg',
    mini_app_id: 'wx4f16bef982e13464',
    mini_app_path: 'pages/tabs/component',
    url: '',
  },
])
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<template>
  <view class="about-page">
    <!-- 顶部容器 -->
    <view class="about-page__top">
      <!-- 背景毛玻璃 -->
      <view class="bg-frosted-glass" />

      <!-- 信息容器 -->
      <view
        class="info-container tn-flex-center-between"
        :style="{ top: `${navBarInfo.height}px` }"
      >
        <view class="left">
          <view class="user-nickname">{{ userInfo.nickName }}</view>
          <view class="frame-version tn-gray-dark_text">
            uniapp-v3 version: {{ frameVersion }}
          </view>
        </view>
        <view class="right">
          <view class="user-avatar tn-type-primary_bg tn-flex-center">
            <TnIcon name="logo-tuniao" />
          </view>
        </view>
      </view>

      <!-- 图鸟组件数据 -->
      <view
        class="tuniao-github-data tn-flex"
        :style="{ top: `${navBarInfo.height}px` }"
      >
        <view
          v-for="(value, key, index) in githubData"
          :key="index"
          class="item tn-flex tn-flex-column"
        >
          <view class="value">{{ formatNumberWithQuantityUnit(value) }}</view>
          <view class="key tn-text-capitalize">
            {{ key }}
          </view>
        </view>
      </view>

      <!-- vip信息介绍 -->
      <view class="tuniao-vip tn-flex-center-between">
        <view class="vip-info">
          <view class="icon">
            <TnIcon
              transparent
              transparent-bg="gradient__about-page-vip-icon"
              name="vip-text"
            />
          </view>
          <view class="join-text tn-gray_text">加入图鸟会员</view>
        </view>
        <view
          class="operation-btn"
          hover-class="tn-u-btn-hover"
          :hover-stay-time="150"
        >
          立即加入
        </view>
      </view>
    </view>
    <view class="about-page__top--placeholder" />

    <!-- 图鸟信息 -->
    <view class="tuniao-info tn-flex-center tn-white_bg">
      <view class="item" @tap.stop="navMiniProgram('wxf3d81a452b88ff4b')">
        <view class="icon tn-bg-image tn-gradient-bg__cool-5">
          <TnIcon name="logo-tuniao" />
        </view>
        <view class="text">图鸟UI-V2</view>
      </view>
      <view class="item">
        <view class="icon tn-bg-image tn-gradient-bg__cool-7">
          <TnIcon name="code" />
        </view>
        <view class="text">图鸟模板</view>
      </view>
      <view class="item">
        <view class="icon tn-bg-image tn-gradient-bg__cool-6">
          <TnIcon name="safe-fill" />
        </view>
        <view class="text">会员协议</view>
      </view>
      <view class="item button">
        <TnButton
          shape="text"
          hover-class=""
          open-type="share"
          :custom-style="customButtonStyle"
        >
          <view class="item">
            <view class="icon tn-bg-image tn-gradient-bg__cool-8">
              <TnIcon name="share-triangle" />
            </view>
            <view class="text">分享好友</view>
          </view>
        </TnButton>
      </view>
    </view>

    <!-- 项目信息 -->
    <view class="project-info tn-white_bg">
      <view class="item-container">
        <view class="item">
          <view class="left">
            <view class="left-icon tn-gradient-bg__cool-2">
              <TnIcon name="set-fill" />
            </view>
            <view class="left-text">更新日志</view>
          </view>
          <view class="right tn-gray_text">懒</view>
        </view>
      </view>
      <view class="item-container">
        <view class="item">
          <view class="left">
            <view class="left-icon github tn-gradient-bg__cool-1">
              <TnIcon name="github" />
            </view>
            <view class="left-text">开源地址</view>
          </view>
          <view class="right tn-blue_text">
            <TnIcon name="copy-fill" />
          </view>
        </view>
      </view>
      <view class="item-container">
        <TnButton
          width="100%"
          shape="text"
          hover-class=""
          open-type="contact"
          :custom-style="customButtonStyle"
        >
          <view class="item">
            <view class="left">
              <view class="left-icon wechat tn-gradient-bg__cool-12">
                <TnIcon name="wechat-fill" />
              </view>
              <view class="left-text">合作勾搭</view>
            </view>
            <view class="right">
              <TnIcon name="right" />
            </view>
          </view>
        </TnButton>
      </view>
      <view class="item-container">
        <TnButton
          width="100%"
          shape="text"
          hover-class=""
          open-type="feedback"
          :custom-style="customButtonStyle"
        >
          <view class="item">
            <view class="left">
              <view class="left-icon tn-gradient-bg__cool-16">
                <TnIcon name="reply-fill" />
              </view>
              <view class="left-text">问题反馈</view>
            </view>
            <view class="right">
              <TnIcon name="right" />
            </view>
          </view>
        </TnButton>
      </view>
    </view>

    <!-- 友情链接 -->
    <view class="friend-link">
      <view class="title-container tn-flex-center-between">
        <view class="title">友情链接</view>
        <view class="operation">
          <text>全部</text>
          <TnIcon name="right" />
        </view>
      </view>
      <view class="list-container tn-white_bg">
        <TnScrollList :indicator="false">
          <view class="list-content tn-flex-nowrap">
            <view
              v-for="(item, index) in friendLinkData"
              :key="index"
              class="list-item tn-flex tn-flex-column items-center"
              @tap.stop="navMiniProgram(item.mini_app_id, item.mini_app_path)"
            >
              <view class="logo">
                <image class="image" :src="item.image" mode="aspectFill" />
              </view>
              <view class="name">{{ item.name }}</view>
            </view>
          </view>
        </TnScrollList>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './about.scss';
</style>