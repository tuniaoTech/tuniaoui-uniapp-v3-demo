<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnCountTo from '@tuniao/tnui-vue3-uniapp/components/count-to/src/count-to.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/count-to/index',
})
const { isDemoH5Page } = useDemoH5Page()

const startValue = ref('')
const endValue = ref('')
// 随机生成0 - 1000000的数值,并且带两位小数
const randomNumber = () => {
  return (Math.random() * 1000000).toFixed(2)
}
endValue.value = randomNumber()
setInterval(() => {
  startValue.value = endValue.value
  endValue.value = randomNumber()
}, 5000)
</script>

<template>
  <CustomPage title="数字跳转" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="count-to-container tn-flex items-center">
        <view class="count-to-item">
          <TnCountTo start="0" end="6745" />
        </view>
        <view class="count-to-item no-mt">
          <TnCountTo start="10765" end="20" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="带小数显示">
      <view class="count-to-container">
        <view class="count-to-item">
          <TnCountTo start="0" end="6745.89" :decimals="2" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="千分位分割">
      <view class="count-to-container">
        <view class="count-to-item">
          <TnCountTo
            start="0"
            end="1327654.89"
            :decimals="2"
            thousands-separator=","
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改样式">
      <view class="count-to-container">
        <view class="count-to-item">
          <TnCountTo
            start="0"
            end="1327654.89"
            :decimals="2"
            thousands-separator=","
            text-color="tn-blue"
            font-size="46"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="动态数据演示">
      <view class="count-to-container">
        <view class="count-to-item">
          <TnCountTo
            :start="startValue"
            :end="endValue"
            :decimals="2"
            thousands-separator=","
            text-color="tn-blue"
            font-size="46"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
