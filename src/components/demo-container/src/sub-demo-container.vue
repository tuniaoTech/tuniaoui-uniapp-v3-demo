<script lang="ts" setup>
import TnTitle from '@tuniao/tnui-vue3-uniapp/components/title/src/title.vue'

import { subDemoContainerProps } from './sub-demo-container'

defineProps(subDemoContainerProps)
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
  <view class="sub-demo-container">
    <view v-if="title" class="sub-demo-container__title tn-flex-center">
      <TnTitle
        mode="transparent"
        color="gradient__cool-6"
        size="lg"
        align="center"
      >
        {{ title }}
      </TnTitle>
    </view>
    <view class="sub-demo-container__content">
      <slot />
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import '../styles/sub-demo-container.scss';
</style>
