<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnNoticeBar from '@tuniao/tnui-vue3-uniapp/components/notice-bar/src/notice-bar.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/notice-bar/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 通知内容
const noticeData: string[] = [
  'tuniaoUI vue3 uniapp 版本现已上线，欢迎大家使用',
  '新版本提供了cli的方式进行初始化项目',
  '图鸟UI专注于酷炫模板的开发',
  '图鸟科技专注于酷炫UI设计到开发一条龙服务，高产似母猪',
]
</script>

<template>
  <CustomPage title="通知栏" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="notice-bar-container">
        <view class="notice-bar-item">
          <TnNoticeBar :data="noticeData" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="横向通知 - 不连续">
      <view class="notice-bar-container">
        <view class="notice-bar-item">
          <TnNoticeBar :data="noticeData" :loop="false" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="垂直通知">
      <view class="notice-bar-container">
        <view class="notice-bar-item">
          <TnNoticeBar :data="noticeData" direction="vertical" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改通知速度">
      <view class="notice-bar-container">
        <view class="notice-bar-item">
          <TnNoticeBar :data="noticeData" :speed="10" />
        </view>
        <view class="notice-bar-item">
          <TnNoticeBar :data="noticeData" direction="vertical" :speed="10000" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置左右图标">
      <view class="notice-bar-container">
        <view class="notice-bar-item">
          <TnNoticeBar
            :data="noticeData"
            left-icon="sound"
            right-icon="right"
          />
        </view>
        <view class="notice-bar-item">
          <TnNoticeBar
            :data="noticeData"
            direction="vertical"
            left-icon="sound"
            right-icon="close"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置通知尺寸">
      <view class="notice-bar-container">
        <view class="notice-bar-item">
          <TnNoticeBar
            :data="noticeData"
            left-icon="sound"
            right-icon="right"
            font-size="36"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义样式">
      <view class="notice-bar-container">
        <view class="notice-bar-item">
          <TnNoticeBar
            :data="noticeData"
            left-icon="sound"
            right-icon="right"
            bg-color="tn-orangeyellow"
            left-icon-color="tn-red"
            right-icon-color="tn-gray"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
