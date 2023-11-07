<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnSlideShow from 'tnuiv3p-tn-slideshow/index.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-slideshow/index',
})
const { isDemoH5Page } = useDemoH5Page()

const imageData = ref<string[]>([
  'https://resource.tuniaokj.com/images/avatar/xiong/x1.jpg',
  'https://resource.tuniaokj.com/images/avatar/xiong/x2.jpg',
  'https://resource.tuniaokj.com/images/avatar/xiong/x3.jpg',
  'https://resource.tuniaokj.com/images/avatar/xiong/x4.jpg',
  'https://resource.tuniaokj.com/images/avatar/xiong/x5.jpg',
])
</script>

<template>
  <CustomPage
    title="幻灯片"
    padding="0"
    :is-h5-demo-page="isDemoH5Page"
    :navbar-placeholder="false"
    :bottom-more-space="false"
  >
    <view class="slideshow-container">
      <TnSlideShow :data="imageData" />
    </view>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
