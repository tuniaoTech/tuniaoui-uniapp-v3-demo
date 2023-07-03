<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnCountDown from '@tuniao/tnui-vue3-uniapp/components/count-down/src/count-down.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'

import type { TnCountDownInstance } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/count-down/index',
})
const { isDemoH5Page } = useDemoH5Page()

const countDownRef = ref<TnCountDownInstance>()

// 开始倒计时
const startCountDown = () => {
  countDownRef.value?.start()
}

// 停止倒计时
const stopCountDown = () => {
  countDownRef.value?.stop()
}

// 重置倒计时
const resetCountDown = () => {
  countDownRef.value?.reset()
}
</script>

<template>
  <CustomPage title="倒计时" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="count-down-container">
        <view class="count-down-item">
          <TnCountDown :time="300" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="手动控制">
      <view class="count-down-container">
        <view class="count-down-item tn-flex-center">
          <TnCountDown ref="countDownRef" :time="300" :auto-start="false" />
        </view>
        <view class="count-down-item tn-flex-center">
          <view class="operation-btn">
            <TnButton size="lg" @click="startCountDown">开始</TnButton>
          </view>
          <view class="operation-btn">
            <TnButton type="warning" size="lg" @click="stopCountDown">
              停止
            </TnButton>
          </view>
          <view class="operation-btn">
            <TnButton type="danger" size="lg" @click="resetCountDown">
              重置
            </TnButton>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="显示天、时、分、秒">
      <view class="count-down-container">
        <view class="count-down-item">
          <TnCountDown :time="86410" show-day />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="显示天、时、分、秒(不自动隐藏天)">
      <view class="count-down-container">
        <view class="count-down-item">
          <TnCountDown :time="86410" show-day :auto-hide-day="false" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="显示分、秒">
      <view class="count-down-container">
        <view class="count-down-item">
          <TnCountDown :time="300" :show-hour="false" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="中文分割符">
      <view class="count-down-container">
        <view class="count-down-item">
          <TnCountDown :time="86410" show-day separator-mode="cn" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="显示边框">
      <view class="count-down-container">
        <view class="count-down-item">
          <TnCountDown :time="300" border />
        </view>
        <view class="count-down-item">
          <TnCountDown :time="300" border separator-mode="cn" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <view class="count-down-container">
        <view class="count-down-item">
          <TnCountDown :time="300" size="sm" />
        </view>
        <view class="count-down-item">
          <TnCountDown :time="300" size="lg" />
        </view>
        <view class="count-down-item">
          <TnCountDown :time="300" size="xl" />
        </view>
        <view class="count-down-item">
          <TnCountDown :time="300" size="40" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="count-down-container">
        <view class="count-down-item">
          <TnCountDown
            :time="300"
            text-color="tn-type-warning"
            separator-color="tn-type-warning"
          />
        </view>
        <view class="count-down-item">
          <TnCountDown
            :time="300"
            text-color="tn-indigo"
            separator-color="tn-blue"
          />
        </view>
        <view class="count-down-item">
          <TnCountDown
            :time="300"
            border
            separator-mode="cn"
            text-color="tn-gray"
            separator-color="tn-grey-disabled"
            border-color="tn-gray"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
