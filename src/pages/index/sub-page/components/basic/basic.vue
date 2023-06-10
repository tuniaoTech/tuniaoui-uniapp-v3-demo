<script lang="ts" setup>
import { useBasic } from './composables'

useBasic()
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
  <view class="basic-page tn-blue-light_bg tn-flex-center">Basic</view>
</template>

<style lang="scss" scoped>
@import './basic.scss';
</style>
