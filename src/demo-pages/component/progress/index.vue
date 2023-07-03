<script lang="ts" setup>
import { onUnmounted, ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnLineProgress from '@tuniao/tnui-vue3-uniapp/components/line-progress/src/line-progress.vue'
import TnCircleProgress from '@tuniao/tnui-vue3-uniapp/components/circle-progress/src/circle-progress.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/progress/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 进度值
const percent = ref(0)

const percentIntervalTimer = setInterval(() => {
  percent.value += 10
  if (percent.value > 100) {
    percent.value = 0
  }
}, 3000)

onUnmounted(() => {
  clearInterval(percentIntervalTimer)
})
</script>

<template>
  <CustomPage title="进度条" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="progress-container">
        <view class="progress-item">
          <TnLineProgress :percent="percent" />
        </view>
        <view class="progress-item tn-flex-center">
          <TnCircleProgress :percent="percent" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="显示进度">
      <view class="progress-container">
        <view class="progress-item">
          <TnLineProgress :percent="50" show-percent />
        </view>
        <view class="progress-item tn-flex-center">
          <TnCircleProgress :percent="50" show-percent />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="横向进度条显示条纹">
      <view class="progress-container">
        <view class="progress-item">
          <TnLineProgress :percent="50" stripe />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <view class="progress-container">
        <view class="progress-item">
          <TnLineProgress :percent="50" height="30" />
        </view>
        <view class="progress-item tn-flex-center">
          <TnCircleProgress :percent="50" :radius="80" :ring-width="12" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="progress-container">
        <view class="progress-item">
          <TnLineProgress
            :percent="50"
            inactive-color="tn-grey-disabled"
            active-color="tn-green"
          />
        </view>
        <view class="progress-item tn-flex-center">
          <TnCircleProgress
            :percent="50"
            inactive-color="#f8f7f8"
            active-color="#fbbd12"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
