<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnCountScroll from '@tuniao/tnui-vue3-uniapp/components/count-scroll/src/count-scroll.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/count-scroll/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 当前的值
const currentValue = ref('')
// 随机生成0 - 1000000的数值,并且带两位小数
const randomNumber = () => {
  return (Math.random() * 1000000).toFixed(2)
}
currentValue.value = randomNumber()
setInterval(() => {
  currentValue.value = randomNumber()
}, 5000)
</script>

<template>
  <CustomPage title="数字滚动" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="count-scroll-container">
        <view class="count-scroll-item">
          <TnCountScroll value="7548" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="带小数和千分位">
      <view class="count-scroll-container">
        <view class="count-scroll-item">
          <TnCountScroll value="123,765,7548.90" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改样式">
      <view class="count-scroll-container">
        <view class="count-scroll-item">
          <TnCountScroll
            value="123,765,7548.90"
            text-color="tn-blue"
            font-size="50"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="动态修改数值">
      <view class="count-scroll-container">
        <view class="count-scroll-item">
          <TnCountScroll
            :value="currentValue"
            text-color="tn-blue"
            font-size="50"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
