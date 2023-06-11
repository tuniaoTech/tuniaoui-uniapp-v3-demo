<script lang="ts" setup>
import TnEmpty from '@tuniao/tnui-vue3-uniapp/components/empty/src/empty.vue'
import { useTemplate } from './composables'

useTemplate()
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
  <view class="template-page">
    <TnEmpty size="320rpx">
      <template #icon>
        <view class="empty-icon">
          <TnIcon name="clip" />
        </view>
      </template>
      <template #tips>
        <view class="empty-tips"> 模板即将上线 </view>
      </template>
    </TnEmpty>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
