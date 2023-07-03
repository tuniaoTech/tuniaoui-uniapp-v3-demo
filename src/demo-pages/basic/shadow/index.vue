<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/basic/shadow/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="阴影" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="shadow-container">
        <view class="shadow-item tn-shadow-sm">浅色</view>
        <view class="shadow-item tn-shadow">正常</view>
        <view class="shadow-item tn-shadow-md">深色</view>
        <view class="shadow-item tn-shadow-lg">更深</view>
      </view>
    </DemoContainer>
    <DemoContainer title="背景作为阴影">
      <view class="shadow-container tn-flex tn-flex-wrap">
        <view
          class="shadow-item square tn-shadow-blur tn-gradient-bg__cool-5"
        />
        <view
          class="shadow-item square tn-shadow-blur tn-gradient-bg__cool-10"
        />
        <view class="shadow-item square bg-image tn-shadow-blur" />
      </view>
    </DemoContainer>
    <DemoContainer title="修改阴影颜色">
      <view class="shadow-container">
        <view class="shadow-item tn-shadow tn-type-primary_shadow">
          tn-type-primary_shadow
        </view>
        <view class="shadow-item tn-shadow tn-type-success_shadow">
          tn-type-success_shadow
        </view>
        <view class="shadow-item tn-shadow tn-type-warning_shadow">
          tn-type-warning_shadow
        </view>
        <view class="shadow-item tn-shadow tn-type-danger_shadow">
          tn-type-danger_shadow
        </view>
        <view class="shadow-item tn-shadow tn-type-info_shadow">
          tn-type-info_shadow
        </view>
        <view class="shadow-item tn-shadow tn-gray-dark_shadow">
          tn-gray-dark_shadow
        </view>
        <view class="shadow-item tn-shadow tn-gray_shadow">
          tn-gray_shadow
        </view>
        <view class="shadow-item tn-shadow tn-gray-disabled_shadow">
          tn-gray-disabled_shadow
        </view>
        <view class="shadow-item tn-shadow tn-gray-light_shadow">
          tn-gray-light_shadow
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
