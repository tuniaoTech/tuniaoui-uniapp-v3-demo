<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnNotify from '@tuniao/tnui-vue3-uniapp/components/notify/src/notify.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'

import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'

import type { NotifyOptions, TnNotifyInstance } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/notify/index',
})
const { isDemoH5Page } = useDemoH5Page()

const { navBarInfo } = useUniAppSystemRectInfo()

// notifyRef对象
const notifyRef = ref<TnNotifyInstance>()

// 打开默认的消息通知
const openNormalNotify = () => {
  notifyRef.value?.show({
    msg: '图鸟UI发来通知',
  })
}

// 打开指定类型的消息通知
const openTypeNotify = (type: NotifyOptions['type']) => {
  notifyRef.value?.show({
    msg: '图鸟UI发来通知',
    type,
  })
}

// 修改颜色的消息通知
const openCustomColorNotify = () => {
  notifyRef.value?.show({
    msg: '图鸟UI发来通知',
    bgColor: 'tn-gray-disabled',
    textColor: 'tn-grey',
  })
}

// 修改消息的位置
const openPositionNotify = (position: NotifyOptions['position']) => {
  notifyRef.value?.show({
    msg: '图鸟UI发来通知',
    position,
  })
}
</script>

<template>
  <CustomPage
    title="消息通知"
    :navbar-frosted="false"
    :is-h5-demo-page="isDemoH5Page"
  >
    <DemoContainer title="基础使用">
      <view class="notify-container">
        <view class="notify-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openNormalNotify"
          >
            默认消息通知
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改通知类型">
      <view class="notify-container tn-flex-wrap">
        <view class="notify-item line">
          <TnButton
            size="lg"
            bg-color="tn-type-primary"
            text-color="tn-white"
            @click="openTypeNotify('primary')"
          >
            primary类型
          </TnButton>
        </view>
        <view class="notify-item line">
          <TnButton
            size="lg"
            bg-color="tn-type-success"
            text-color="tn-white"
            @click="openTypeNotify('success')"
          >
            success类型
          </TnButton>
        </view>
        <view class="notify-item line">
          <TnButton
            size="lg"
            bg-color="tn-type-warning"
            text-color="tn-white"
            @click="openTypeNotify('warning')"
          >
            warning类型
          </TnButton>
        </view>
        <view class="notify-item line">
          <TnButton
            size="lg"
            bg-color="tn-type-danger"
            text-color="tn-white"
            @click="openTypeNotify('danger')"
          >
            danger类型
          </TnButton>
        </view>
        <view class="notify-item line">
          <TnButton
            size="lg"
            bg-color="tn-type-info"
            text-color="tn-white"
            @click="openTypeNotify('info')"
          >
            info类型
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义消息通知颜色">
      <view class="notify-container">
        <view class="notify-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openCustomColorNotify"
          >
            弹出消息通知
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改通知类型">
      <view class="notify-container tn-flex-wrap">
        <view class="notify-item line">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openPositionNotify('top')"
          >
            顶部弹出
          </TnButton>
        </view>
        <view class="notify-item line">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openPositionNotify('center')"
          >
            中间弹出
          </TnButton>
        </view>
        <view class="notify-item line">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openPositionNotify('bottom')"
          >
            底部弹出
          </TnButton>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>

  <TnNotify ref="notifyRef" :offset-top="navBarInfo.height" />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
