<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnRate from '@tuniao/tnui-vue3-uniapp/components/rate/src/rate.vue'

import type { RateCustomDataMap } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/rate/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 评分的值
const baseRateValue = ref(3)
const halfRateValue = ref(3.5)
const minMaxRateValue = ref(3)

const sizeRateValue = ref(0)

const customColorIconRateValue = ref(0)

// 自定义图标数据
const customDataRateValue = ref(0)
const customRateData: RateCustomDataMap = {
  0: {
    inactiveIcon: 'dice-one',
    activeIcon: 'dice-one',
    activeColor: 'tn-red',
  },
  1: {
    inactiveIcon: 'dice-two',
    activeIcon: 'dice-two',
    activeColor: 'tn-purplered',
  },
  2: {
    inactiveIcon: 'dice-three',
    activeIcon: 'dice-three',
    activeColor: 'tn-aquablue',
  },
  3: {
    inactiveIcon: 'dice-four',
    activeIcon: 'dice-four',
    activeColor: 'tn-indigo',
  },
  4: {
    inactiveIcon: 'dice-five',
    activeIcon: 'dice-five',
    activeColor: 'tn-cyan',
  },
  5: {
    inactiveIcon: 'dice-six',
    activeIcon: 'dice-six',
    activeColor: 'tn-teal',
  },
}
</script>

<template>
  <CustomPage title="评分" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="rate-container">
        <view class="rate-item">
          <TnRate v-model="baseRateValue" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="评分展示，不允许操作">
      <view class="rate-container">
        <view class="rate-item">
          <TnRate v-model="baseRateValue" readonly />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="选择半星">
      <view class="rate-container">
        <view class="rate-item">
          <TnRate v-model="halfRateValue" allow-half size="xl" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置最小最大值">
      <view class="rate-container">
        <view class="rate-item">
          <TnRate v-model="minMaxRateValue" :min="2" :max="8" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <view class="rate-container">
        <view class="rate-item">
          <TnRate v-model="sizeRateValue" size="sm" />
        </view>
        <view class="rate-item">
          <TnRate v-model="sizeRateValue" size="lg" />
        </view>
        <view class="rate-item">
          <TnRate v-model="sizeRateValue" size="xl" />
        </view>
        <view class="rate-item">
          <TnRate v-model="sizeRateValue" size="80" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="rate-container">
        <view class="rate-item">
          <TnRate
            v-model="customColorIconRateValue"
            inactive-color="tn-grey-light"
            active-color="tn-orangeyellow"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改图标">
      <view class="rate-container">
        <view class="rate-item">
          <TnRate
            v-model="customColorIconRateValue"
            inactive-icon="like-break"
            active-icon="like-fill"
            active-color="tn-red"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义数据">
      <view class="rate-container">
        <view class="rate-item">
          <TnRate
            v-model="customDataRateValue"
            :custom-data="customRateData"
            :max="6"
            size="xl"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
