<script lang="ts" setup>
import TnLazyLoad from '@tuniao/tnui-vue3-uniapp/components/lazy-load/src/lazy-load.vue'
defineProps({
  /**
   * @description 图片地址
   */
  url: String,
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
  <view class="water-fall-item">
    <TnLazyLoad :src="url" mode="widthFix" />
  </view>
</template>

<style lang="scss" scoped>
.water-fall-item {
  width: calc(100% - 20rpx);
  margin: 10rpx;
  border-top: solid transparent;
}
</style>
