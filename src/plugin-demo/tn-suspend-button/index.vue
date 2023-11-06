<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnSuspendButton from 'tnuiv3p-tn-suspend-button/index.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-suspend-button/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="悬浮按钮" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="suspend-button-container">
        <view class="suspend-button-item">
          <TnSuspendButton :fixed="false" icon="logo-tuniao" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改样式">
      <view class="suspend-button-container">
        <view class="suspend-button-item">
          <TnSuspendButton
            :fixed="false"
            bg-color="tn-gradient__cool-1"
            text-color="#fff"
            icon="logo-tuniao"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改位置和尺寸">
      <view class="suspend-button-container">
        <view class="suspend-button-item">
          <TnSuspendButton
            :fixed="false"
            icon="logo-tuniao"
            size="sm"
            top="60"
            right="90%"
          />
          <TnSuspendButton
            :fixed="false"
            icon="logo-tuniao"
            size="lg"
            top="40"
            right="70%"
          />
          <TnSuspendButton
            :fixed="false"
            icon="logo-tuniao"
            size="xl"
            top="30"
            right="46%"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="关闭浮动动画">
      <view class="suspend-button-container">
        <view class="suspend-button-item">
          <TnSuspendButton :fixed="false" :float="false" icon="logo-tuniao" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义显示的内容">
      <view class="suspend-button-container">
        <view class="suspend-button-item">
          <TnSuspendButton :fixed="false" icon="logo-tuniao">
            <view class="custom-text">图</view>
          </TnSuspendButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="相对于页面固定">
      <view class="suspend-button-container">
        <view class="suspend-button-item">
          <TnSuspendButton icon="logo-tuniao" />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
