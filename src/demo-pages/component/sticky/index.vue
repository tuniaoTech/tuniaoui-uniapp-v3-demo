<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnSticky from '@tuniao/tnui-vue3-uniapp/components/sticky/src/sticky.vue'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/sticky/index',
})
const { isDemoH5Page } = useDemoH5Page()

const { navBarInfo } = useUniAppSystemRectInfo()
</script>

<template>
  <CustomPage title="吸顶" :is-h5-demo-page="isDemoH5Page">
    <view class="sticky-container">
      <TnSticky :offset-top="navBarInfo.height">
        <view
          class="tn-gradient-bg__cool-6 tn-white_text tn-radius tn-p tn-flex-center tn-text-lg"
        >
          图鸟UI-普通吸顶
        </view>
      </TnSticky>
      <view class="sticky-placeholder-block" />
      <TnSticky :offset-top="navBarInfo.height + 80">
        <view
          class="tn-gradient-bg__cool-6 tn-white_text tn-radius tn-p tn-flex-center tn-text-lg"
        >
          图鸟UI-设置吸顶高度
        </view>
      </TnSticky>
      <view class="sticky-placeholder-block" />
      <TnSticky :enabled="false">
        <view
          class="tn-gradient-bg__cool-6 tn-white_text tn-radius tn-p tn-flex-center tn-text-lg"
        >
          图鸟UI-不吸顶
        </view>
      </TnSticky>
    </view>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
