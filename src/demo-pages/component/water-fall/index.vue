<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/water-fall/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 跳转到普通瀑布流页面
const navNormalWaterFallPage = () => {
  tnNavPage('/demo-pages/component/water-fall/normal-waterfall')
}
// 跳转到计算瀑布流页面
const navCalcWaterFallPage = () => {
  tnNavPage('/demo-pages/component/water-fall/calc-waterfall')
}
</script>

<template>
  <CustomPage title="瀑布流" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="普通模式瀑布流">
      <view class="water-fall-container">
        <view class="water-fall-item">
          <view class="tips">
            普通模式下的瀑布流是将数据通过简单的计算，将单数的数据放在左边，双数的数据放在右边
          </view>
          <view class="nav-water-fall-button">
            <TnButton size="lg" @click="navNormalWaterFallPage">
              普通瀑布流
            </TnButton>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="计算模式瀑布流">
      <view class="water-fall-container">
        <view class="water-fall-item">
          <view class="tips">
            计算模式下的瀑布流是将数据一一填入待渲染的左右两个队列中，然后读取左右两列的高度，将下一个数据放到高度较小的一列中
          </view>
          <view class="nav-water-fall-button">
            <TnButton size="lg" @click="navCalcWaterFallPage">
              计算瀑布流
            </TnButton>
          </view>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
