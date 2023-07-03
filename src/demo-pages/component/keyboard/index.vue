<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnKeyboard from '@tuniao/tnui-vue3-uniapp/components/keyboard/src/keyboard.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'

import type { KeyboardMode } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/keyboard/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 打开键盘
const openKeyboard = ref<boolean>(false)
// 键盘模式
const keyboardMode = ref<KeyboardMode>('number')

// 键盘输入的值
const inputValue = ref('')

// 重置输入的值
const resetValue = () => {
  inputValue.value = ''
}

// 键盘关闭事件
const onKeyboardClose = () => {
  resetValue()
}

// 打开数字键盘
const openNumberKeyboard = () => {
  keyboardMode.value = 'number'
  openKeyboard.value = true
}
// 打开带小数点数字键盘
const openDigitKeyboard = () => {
  keyboardMode.value = 'digit'
  openKeyboard.value = true
}
// 打开随机数字键盘
const openRandomKeyboard = () => {
  keyboardMode.value = 'random'
  openKeyboard.value = true
}
// 打开身份证键盘
const openIdcardKeyboard = () => {
  keyboardMode.value = 'idcard'
  openKeyboard.value = true
}
// 打开车牌键盘
const openCarKeyboard = () => {
  keyboardMode.value = 'car'
  openKeyboard.value = true
}
</script>

<template>
  <CustomPage title="软键盘" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="键盘输入的值">
      <view class="keyboard-container">
        <view class="keyboard-item">
          键盘输入的值:
          <text class="tn-gray_text">{{ inputValue }}</text>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="打开数字键盘">
      <view class="keyboard-container">
        <view class="keyboard-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openNumberKeyboard"
          >
            打开数字键盘
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="打开带小数点数字键盘">
      <view class="keyboard-container">
        <view class="keyboard-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openDigitKeyboard"
          >
            打开带小数点数字键盘
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="打开随机数字键盘">
      <view class="keyboard-container">
        <view class="keyboard-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openRandomKeyboard"
          >
            打开随机位置键盘
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="打开身份证键盘">
      <view class="keyboard-container">
        <view class="keyboard-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openIdcardKeyboard"
          >
            打开身份证键盘
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="打开车牌键盘">
      <view class="keyboard-container">
        <view class="keyboard-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openCarKeyboard"
          >
            打开车牌键盘
          </TnButton>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>

  <TnKeyboard
    v-model="inputValue"
    v-model:show="openKeyboard"
    :mode="keyboardMode"
    @close="onKeyboardClose"
  />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
