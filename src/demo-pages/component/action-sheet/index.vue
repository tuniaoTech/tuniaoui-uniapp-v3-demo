<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnActionSheet from '@tuniao/tnui-vue3-uniapp/components/action-sheet/src/action-sheet.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'

import type { TnActionSheetInstance } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/action-sheet/index',
})
const { isDemoH5Page } = useDemoH5Page()

// actionSheetRef
const actionSheetRef = ref<TnActionSheetInstance>()

// 打开默认菜单
const openNormalActionSheet = () => {
  actionSheetRef.value?.show({
    title: '请选择您使用图鸟UI的原因',
    actions: [
      { text: '太酷炫了', value: '太酷炫了' },
      { text: '因为凶姐', value: '因为凶姐' },
      { text: '以上均为原因', value: '以上均为原因' },
    ],
    cancel: () => {
      uni.showToast({
        title: '您点击了取消按钮',
        icon: 'none',
      })
      return true
    },
    select: (index: number, value?: string | number) => {
      uni.showToast({
        title: `您选中了: ${index} - ${value}`,
        icon: 'none',
      })
      return true
    },
  })
}

// 打开拦截取消事件菜单
const openInterceptCancelActionSheet = () => {
  actionSheetRef.value?.show({
    title: '请选择您使用图鸟UI的原因',
    actions: [
      { text: '太酷炫了', value: '太酷炫了' },
      { text: '因为凶姐', value: '因为凶姐' },
      { text: '以上均为原因', value: '以上均为原因' },
    ],
    cancel: () => {
      uni.showToast({
        title: '暂不允许取消',
        icon: 'none',
      })
      return false
    },
    select: (index: number, value?: string | number) => {
      uni.showToast({
        title: `您选中了: ${index} - ${value}`,
        icon: 'none',
      })
      return true
    },
  })
}

// 打开拦截选项事件菜单
const openInterceptSelectActionSheet = () => {
  actionSheetRef.value?.show({
    title: '请选择您使用图鸟UI的原因',
    actions: [
      { text: '太酷炫了', value: '太酷炫了' },
      { text: '因为凶姐', value: '因为凶姐' },
      { text: '以上均为原因', value: '以上均为原因' },
    ],
    select: (index: number) => {
      let message = '请选择因为凶姐'
      if (index === 1) {
        message = '选择正确'
      }
      uni.showToast({
        title: message,
        icon: 'none',
      })
      return index === 1
    },
  })
}

// 打开带取消按钮的菜单
const openHideCancelActionSheet = () => {
  actionSheetRef.value?.show({
    title: '请选择您使用图鸟UI的原因',
    actions: [
      { text: '太酷炫了', value: '太酷炫了' },
      { text: '因为凶姐', value: '因为凶姐' },
      { text: '以上均为原因', value: '以上均为原因' },
    ],
    cancelText: '',
    select: (index: number, value?: string | number) => {
      uni.showToast({
        title: `您选中了: ${index} - ${value}`,
        icon: 'none',
      })
      return true
    },
  })
}
</script>

<template>
  <CustomPage title="操作菜单" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="action-sheet-container">
        <view class="action-sheet-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openNormalActionSheet"
          >
            打开菜单
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="阻止取消点击事件">
      <view class="action-sheet-container">
        <view class="action-sheet-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openInterceptCancelActionSheet"
          >
            打开菜单
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="阻止选中事件">
      <view class="action-sheet-container">
        <view class="action-sheet-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openInterceptSelectActionSheet"
          >
            打开菜单
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏取消按钮">
      <view class="action-sheet-container">
        <view class="action-sheet-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openHideCancelActionSheet"
          >
            打开菜单
          </TnButton>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>

  <TnActionSheet ref="actionSheetRef" />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
