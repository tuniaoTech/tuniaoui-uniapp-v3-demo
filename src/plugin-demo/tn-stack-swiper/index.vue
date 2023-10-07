<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnStackSwiper from 'tnuiv3p-tn-stack-swiper/index.vue'
import TnStackSwiperItem from 'tnuiv3p-tn-stack-swiper/item.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-stack-swiper/index',
})
const { isDemoH5Page } = useDemoH5Page()

const swiperData: string[] = [
  'https://resource.tuniaokj.com/images/album/xiong1.jpg',
  'https://resource.tuniaokj.com/images/album/xiong2.jpg',
  'https://resource.tuniaokj.com/images/album/xiong3.jpg',
  'https://resource.tuniaokj.com/images/album/xiong4.jpg',
]
</script>

<template>
  <CustomPage title="堆叠轮播" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="垂直切换">
      <view class="stack-swiper-container">
        <view class="stack-swiper-item vertical">
          <TnStackSwiper slide-direction="vertical">
            <TnStackSwiperItem v-for="(item, index) in swiperData" :key="index">
              <view class="swiper-item">
                <image class="tn-image" :src="item" mode="aspectFill" />
              </view>
            </TnStackSwiperItem>
          </TnStackSwiper>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="基础使用">
      <view class="stack-swiper-container">
        <view class="stack-swiper-item">
          <TnStackSwiper>
            <TnStackSwiperItem v-for="(item, index) in swiperData" :key="index">
              <view class="swiper-item">
                <image class="tn-image" :src="item" mode="aspectFill" />
              </view>
            </TnStackSwiperItem>
          </TnStackSwiper>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自动播放">
      <view class="stack-swiper-container">
        <view class="stack-swiper-item">
          <TnStackSwiper autoplay>
            <TnStackSwiperItem v-for="(item, index) in swiperData" :key="index">
              <view class="swiper-item">
                <image class="tn-image" :src="item" mode="aspectFill" />
              </view>
            </TnStackSwiperItem>
          </TnStackSwiper>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
