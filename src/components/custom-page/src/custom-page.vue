<script lang="ts" setup>
import { computed, toRef } from 'vue'
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue'
import { useComponentColor } from '@tuniao/tnui-vue3-uniapp/hooks'
import { formatDomSizeValue } from '@tuniao/tnui-vue3-uniapp/utils'

import { customPageProps } from './custom-page'

import type { CSSProperties } from 'vue'

const props = defineProps(customPageProps)

// 解析颜色
const [pageBgClass, pageBgStyle] = useComponentColor(
  toRef(props, 'pageBgColor'),
  'bg'
)

// 页面容器的类
const containerClass = computed<string>(() => {
  const cls: string[] = ['custom-page__container']

  if (pageBgClass.value) cls.push(pageBgClass.value)

  return cls.join(' ')
})
// 页面容器样式
const containerStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {}

  if (props.padding) {
    style.padding = formatDomSizeValue(props.padding)
  }

  if (pageBgStyle.value) style.backgroundColor = pageBgStyle.value

  if (props.contentFullWidth) {
    style.width = '100vw'
    style.overflowX = 'hidden'
  }

  if (props.bottomMoreSpace) {
    style.paddingBottom = '80rpx'
  }

  return style
})

// 导航栏返回按钮
const navBarIcon = {
  back: {
    hide: '',
    show: 'left',
    only: 'left-arrow',
  },
  home: {
    hide: '',
    show: 'home-capsule-fill',
  },
}
const backIcon = computed<string>(() => {
  let icon =
    navBarIcon.back[
      props.isH5DemoPage ? 'hide' : props.onlyBack ? 'only' : 'show'
    ]
  // #ifdef MP-ALIPAY
  icon = ''
  // #endif
  return icon
})
const homeIcon = computed<string>(() => {
  let icon =
    navBarIcon.home[props.isH5DemoPage || props.onlyBack ? 'hide' : 'show']

  // #ifdef MP-ALIPAY
  icon = ''
  // #endif

  return icon
})
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<template>
  <view class="custom-page">
    <TnNavbar
      fixed
      :back-icon="backIcon"
      :home-icon="homeIcon"
      :frosted="navbarFrosted"
      :bottom-shadow="navbarBottomShadow"
      :placeholder="navbarPlaceholder"
      :safe-area-inset-right="!isH5DemoPage"
    >
      <!-- #ifndef MP-ALIPAY -->
      {{ title }}
      <!-- #endif -->
    </TnNavbar>
    <view :class="[containerClass]" :style="containerStyle">
      <slot />
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import '../styles/index.scss';
</style>
