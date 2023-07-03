<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnTitle from '@tuniao/tnui-vue3-uniapp/components/title/src/title.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/basic/title/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="标题" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础用法">
      <view class="title-container">
        <view class="title-item">
          <TnTitle title="图鸟UI" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改标题尺寸">
      <view class="title-container">
        <view class="title-item">
          <TnTitle title="图鸟UI" size="sm" />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" size="lg" />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" size="xl" />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" size="60" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置子元素">
      <view class="title-container">
        <view class="title-item">
          <TnTitle title="图鸟UI" mode="dot" />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" mode="vLine" />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" mode="hLine" />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" sub-title="vue3-uniapp" mode="subTitle" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改字体颜色">
      <view class="title-container">
        <view class="title-item">
          <TnTitle title="图鸟UI" color="#01beff" />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" color="rgba(1, 190, 255, 0.6)" />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" color="tn-type-primary" />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" color="tn-type-danger" />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" color="tn-blue" />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" color="tn-blue-light" />
        </view>
        <view class="title-item">
          <TnTitle
            title="图鸟UI"
            size="xl"
            color="gradient-bg__cool-5"
            mode="transparent"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改子元素颜色">
      <view class="title-container">
        <view class="title-item">
          <TnTitle title="图鸟UI" mode="vLine" assist-color="#31c9e8" />
        </view>
        <view class="title-item">
          <TnTitle
            title="图鸟UI"
            mode="vLine"
            assist-color="rgba(1, 190, 255, 0.4)"
          />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" mode="vLine" assist-color="tn-type-danger" />
        </view>
        <view class="title-item">
          <TnTitle title="图鸟UI" mode="vLine" assist-color="tn-blue" />
        </view>
        <view class="title-item">
          <TnTitle
            title="图鸟UI"
            mode="vLine"
            assist-color="gradient-bg__cool-2"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
