<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/basic/border/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="边框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="border-container">
        <view class="border-item tn-border">默认</view>
        <view class="border-item tn-border-bold">加粗边框</view>
        <view class="border-item tn-border-dashed">虚线边框</view>
        <view class="border-item tn-border-dashed tn-border-bold">
          加粗虚线边框
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置圆角">
      <view class="border-container">
        <view class="border-item tn-border tn-radius">圆角</view>
        <view class="border-item tn-border tn-round">大圆角</view>
        <view class="border-item square tn-border tn-round">圆形</view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏指定方向边框">
      <view class="border-container">
        <view class="border-item tn-border-none-top">隐藏上边框</view>
        <view class="border-item tn-border-none-right"> 隐藏右边框 </view>
        <view class="border-item tn-border-none-bottom"> 隐藏下边框 </view>
        <view class="border-item tn-border-none-left"> 隐藏左边框 </view>
      </view>
    </DemoContainer>
    <DemoContainer title="只显示指定方向边框">
      <view class="border-container">
        <view class="border-item tn-border-top">显示上边框</view>
        <view class="border-item tn-border-right"> 显示右边框 </view>
        <view class="border-item tn-border-bottom"> 显示下边框 </view>
        <view class="border-item tn-border-left"> 显示左边框 </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置边框颜色">
      <view class="border-container">
        <view class="border-item tn-border tn-type-primary_border">
          tn-type-primary_border
        </view>
        <view class="border-item tn-border tn-type-success_border">
          tn-type-success_border
        </view>
        <view class="border-item tn-border tn-type-warning_border">
          tn-type-warning_border
        </view>
        <view class="border-item tn-border tn-type-danger_border">
          tn-type-danger_border
        </view>
        <view class="border-item tn-border tn-type-info_border">
          tn-type-info_border
        </view>
        <view class="border-item tn-border tn-gray-dark_border">
          tn-gray-dark_border
        </view>
        <view class="border-item tn-border tn-gray_border">
          tn-gray_border
        </view>
        <view class="border-item tn-border tn-gray-disabled_border">
          tn-gray-disabled_border
        </view>
        <view class="border-item tn-border tn-gray-light_border">
          tn-gray-light_border
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
