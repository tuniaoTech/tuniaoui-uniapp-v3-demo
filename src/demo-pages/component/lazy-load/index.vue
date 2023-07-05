<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnLazyLoad from '@tuniao/tnui-vue3-uniapp/components/lazy-load/src/lazy-load.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/lazy-load/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 图片数据
const imageData = [
  'https://resource.tuniaokj.com/images/swiper/ad1.jpg',
  'https://resource.tuniaokj.com/images/swiper/ad2.jpg',
  'https://resource.tuniaokj.com/images/swiper/ad3.jpg',
  'https://resource.tuniaokj.com/images/swiper/ad4.jpg',
  'https://resource.tuniaokj.com/images/swiper/ad5.jpg',
]

// 图片列表
const imageList = ref<string[]>([])

// 生成数据
const generateData = () => {
  for (let i = 0; i < 100; i++) {
    // 随机获取图片数据
    const index = Math.floor(Math.random() * imageData.length)
    // 添加到图片列表
    imageList.value.push(imageData[index])
  }
}
generateData()
</script>

<template>
  <CustomPage title="懒加载" :is-h5-demo-page="isDemoH5Page">
    <view class="lazy-load-container">
      <view
        v-for="(item, index) in imageList"
        :key="index"
        class="lazy-load-item"
      >
        <TnLazyLoad :src="item" />
      </view>
    </view>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
