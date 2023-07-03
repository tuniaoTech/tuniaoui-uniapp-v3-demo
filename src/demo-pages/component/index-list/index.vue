<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/index-list/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 跳转到默认的索引列表页面
const navBaseIndexListPage = () => {
  tnNavPage('/demo-pages/component/index-list/base-index-list')
}

// 跳转到固定高度的索引列表
const navFixHeightListPage = () => {
  tnNavPage('/demo-pages/component/index-list/fix-height-index-list')
}

// 跳转到隐藏索引的索引列表
const navHideKeysListPage = () => {
  tnNavPage('/demo-pages/component/index-list/hidden-keys-index-list')
}
</script>

<template>
  <CustomPage title="索引列表" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="默认索引列表">
      <view class="index-list-container">
        <view class="index-list-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="navBaseIndexListPage"
          >
            查看默认索引列表
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="固定高度索引列表">
      <view class="index-list-container">
        <view class="index-list-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="navFixHeightListPage"
          >
            查看固定高度索引列表
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏索引的索引列表">
      <view class="index-list-container">
        <view class="index-list-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="navHideKeysListPage"
          >
            查看隐藏右边索引索引列表
          </TnButton>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
