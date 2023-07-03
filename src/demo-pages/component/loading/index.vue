<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnLoading from '@tuniao/tnui-vue3-uniapp/components/loading/src/loading.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/loading/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="加载图标" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="loading-container">
        <view class="loading-item tn-flex">
          <view class="">
            <TnLoading show animation />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="flower" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="semicircle" />
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改主题色">
      <view class="loading-container">
        <view class="loading-item tn-flex">
          <view class="">
            <TnLoading show animation type="primary" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation type="success" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation type="warning" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation type="danger" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation type="info" />
          </view>
        </view>
        <view class="loading-item tn-flex">
          <view class="">
            <TnLoading show animation mode="flower" type="primary" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="flower" type="success" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="flower" type="warning" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="flower" type="danger" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="flower" type="info" />
          </view>
        </view>
        <view class="loading-item tn-flex">
          <view class="">
            <TnLoading show animation mode="semicircle" type="primary" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="semicircle" type="success" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="semicircle" type="warning" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="semicircle" type="danger" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="semicircle" type="info" />
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义颜色">
      <view class="loading-container">
        <view class="loading-item tn-flex">
          <view class="">
            <TnLoading show animation color="tn-blue" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="flower" color="tn-gray-disabled" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="semicircle" color="#e4e9ec" />
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置尺寸">
      <view class="loading-container">
        <view class="loading-item tn-flex items-center">
          <view class="">
            <TnLoading show animation size="sm" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation size="lg" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation size="xl" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation size="60" />
          </view>
        </view>
        <view class="loading-item tn-flex items-center">
          <view class="">
            <TnLoading show animation mode="flower" size="sm" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="flower" size="lg" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="flower" size="xl" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="flower" size="60" />
          </view>
        </view>
        <view class="loading-item tn-flex items-center">
          <view class="">
            <TnLoading show animation mode="semicircle" size="sm" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="semicircle" size="lg" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="semicircle" size="xl" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation mode="semicircle" size="60" />
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置动画和时间">
      <view class="loading-container">
        <view class="loading-item tn-flex">
          <view class="">
            <TnLoading show animation size="lg" duration="2" />
          </view>
          <view class="tn-ml">
            <TnLoading show animation size="lg" time-function="ease-in-out" />
          </view>
        </view>
        <view class="loading-item tn-flex">
          <view class="">
            <TnLoading
              show
              animation
              size="lg"
              mode="semicircle"
              duration="2"
            />
          </view>
          <view class="tn-ml">
            <TnLoading
              show
              animation
              size="lg"
              mode="semicircle"
              time-function="ease-in-out"
            />
          </view>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
