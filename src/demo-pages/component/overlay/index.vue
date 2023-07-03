<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnOverlay from '@tuniao/tnui-vue3-uniapp/components/overlay/src/overlay.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/overlay/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 显示遮罩层
const showOverlay = ref(false)
// 遮罩透明度
const overlayOpacity = ref(0.5)

// 打开默认遮罩层
const openNormalOverlay = () => {
  overlayOpacity.value = 0.5
  showOverlay.value = true
}

// 打开透明遮罩层
const openTransparentOverlay = () => {
  overlayOpacity.value = 0
  showOverlay.value = true
}
</script>

<template>
  <CustomPage title="遮罩层" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="overlay-container">
        <view class="overlay-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openNormalOverlay"
          >
            打开遮罩
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="透明遮罩">
      <view class="overlay-container">
        <view class="overlay-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openTransparentOverlay"
          >
            打开遮罩
          </TnButton>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>

  <TnOverlay v-model:show="showOverlay" :opacity="overlayOpacity">
    <view class="overlay-content tn-flex-center">遮罩已打开</view>
  </TnOverlay>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
