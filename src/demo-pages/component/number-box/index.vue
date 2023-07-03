<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnNumberBox from '@tuniao/tnui-vue3-uniapp/components/number-box/src/number-box.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/number-box/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 当前的步进值
const numberBoxValue = ref(0)
</script>

<template>
  <CustomPage title="步进器" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="number-box-container">
        <view class="number-box-item">
          当前步进器的值:
          <text class="tn-gray_text">{{ numberBoxValue }}</text>
        </view>
        <view class="number-box-item">
          <TnNumberBox v-model="numberBoxValue" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁止输入框输入">
      <view class="number-box-container">
        <view class="number-box-item">
          <TnNumberBox input-disabled />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置步进值">
      <view class="number-box-container">
        <view class="number-box-item">
          <TnNumberBox :step="0.1" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置最小最大值">
      <view class="number-box-container">
        <view class="number-box-item">
          <TnNumberBox :min="10" :max="20" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置尺寸">
      <view class="number-box-container">
        <view class="number-box-item">
          <TnNumberBox size="sm" />
        </view>
        <view class="number-box-item">
          <TnNumberBox size="lg" />
        </view>
        <view class="number-box-item">
          <TnNumberBox width="260" height="70" font-size="40" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改步进器颜色">
      <view class="number-box-container">
        <view class="number-box-item">
          <TnNumberBox bg-color="tn-grey-light" text-color="tn-grey" />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
