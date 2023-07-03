<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnSlider from '@tuniao/tnui-vue3-uniapp/components/slider/src/slider.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/slider/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 滑动条的值
const rangeSliderValue1 = ref([0, 0])
const rangeSliderValue2 = ref([0, 0])
const sliderValue1 = ref(0)
const sliderValue2 = ref(20)
const sliderValue3 = ref(0)
const sliderValue4 = ref(0)
const sliderValue5 = ref(0)
</script>

<template>
  <CustomPage
    title="滑动条"
    padding="30rpx 40rpx"
    :is-h5-demo-page="isDemoH5Page"
  >
    <DemoContainer title="基础使用">
      <view class="slider-container">
        <view class="slider-item">
          滑动条的值:
          <text class="tn-gray_text">{{ sliderValue1 }}</text>
        </view>
        <view class="slider-item">
          <TnSlider v-model="sliderValue1" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="选择范围值">
      <view class="slider-container">
        <view class="slider-item">
          滑动条范围值:
          <text class="tn-gray_text">
            [{{ rangeSliderValue1[0] }},{{ rangeSliderValue1[1] }}]
          </text>
        </view>
        <view class="slider-item">
          <TnSlider v-model="rangeSliderValue1" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置滑动条步进值">
      <view class="slider-container">
        <view class="slider-item">
          滑动条的值:
          <text class="tn-gray_text">{{ sliderValue2 }}</text>
        </view>
        <view class="slider-item">
          <TnSlider v-model="sliderValue2" :step="5" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置最小、最大值">
      <view class="slider-container">
        <view class="slider-item">
          滑动条的值:
          <text class="tn-gray_text">{{ sliderValue3 }}</text>
        </view>
        <view class="slider-item">
          <TnSlider v-model="sliderValue3" :min="10" :max="50" />
        </view>
        <view class="slider-item">
          滑动条范围值:
          <text class="tn-gray_text">
            [{{ rangeSliderValue2[0] }},{{ rangeSliderValue2[1] }}]
          </text>
        </view>
        <view class="slider-item">
          <TnSlider v-model="rangeSliderValue2" :min="10" :max="50" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <view class="slider-container">
        <view class="slider-item">
          <TnSlider v-model="sliderValue4" size="sm" />
        </view>
        <view class="slider-item">
          <TnSlider v-model="sliderValue4" size="lg" />
        </view>
        <view class="slider-item">
          <TnSlider
            v-model="sliderValue4"
            slider-height="40"
            slider-bar-size="50"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色样式">
      <view class="slider-container">
        <view class="slider-item">
          <TnSlider
            v-model="sliderValue5"
            inactive-color="tn-red-light"
            active-color="tn-green"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
