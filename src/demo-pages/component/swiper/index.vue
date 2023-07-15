<script lang="ts" setup>
import { ref } from 'vue'
import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/swiper/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 轮播图数据
const swiperData = [
  'https://resource.tuniaokj.com/images/xiongjie/x14.jpg',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-2.jpg',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-new.jpg',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-new1.png',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d.jpg',
]

const currentSwiperIndex = ref(0)
</script>

<template>
  <CustomPage title="轮播图" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="swiper-container">
        <view class="swiper-item">
          当前轮播图索引：
          <text class="tn-color-gray_text">{{ currentSwiperIndex }}</text>
        </view>
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper
              v-model="currentSwiperIndex"
              :data="swiperData"
              loop
              autoplay
            >
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自动切换时间">
      <view class="swiper-container">
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper :data="swiperData" autoplay :interval="10000">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="显示指示器">
      <view class="swiper-container">
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper :data="swiperData" indicator indicator-type="line">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper :data="swiperData" indicator indicator-type="dot">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper :data="swiperData" indicator indicator-type="number">
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改指示器的位置">
      <view class="swiper-container">
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper
              :data="swiperData"
              indicator
              indicator-position="left-top"
            >
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper
              :data="swiperData"
              indicator
              indicator-position="center-top"
            >
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper
              :data="swiperData"
              indicator
              indicator-position="right-top"
            >
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper
              :data="swiperData"
              indicator
              indicator-position="left-bottom"
            >
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper
              :data="swiperData"
              indicator
              indicator-position="center-bottom"
            >
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper
              :data="swiperData"
              indicator
              indicator-position="right-bottom"
            >
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改指示器颜色">
      <view class="swiper-container">
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper
              :data="swiperData"
              indicator
              indicator-bg-color="tn-gray"
              indicator-active-bg-color="tn-gray-light"
            >
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper
              :data="swiperData"
              indicator
              indicator-type="number"
              indicator-position="right-bottom"
              indicator-bg-color="rgba(1, 190, 250, 0.2)"
              indicator-text-color="#01beff"
            >
              <template #default="{ data }">
                <view class="swiper-data">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="使用active参数处理动画">
      <view class="swiper-container">
        <view class="swiper-item">
          <view class="swiper-wrapper">
            <TnSwiper :data="swiperData">
              <template #default="{ data, active }">
                <view class="swiper-data animation" :class="[{ active }]">
                  <image class="image" :src="data" mode="aspectFill" />
                </view>
              </template>
            </TnSwiper>
          </view>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
