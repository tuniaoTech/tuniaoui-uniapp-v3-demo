<script lang="ts" setup>
import TnSticky from '@tuniao/tnui-vue3-uniapp/components/sticky/src/sticky.vue'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'
import CustomPage from '@/components/custom-page/src/custom-page.vue'

const { navBarInfo } = useUniAppSystemRectInfo()
</script>

<template>
  <CustomPage title="吸顶">
    <view class="sticky-container">
      <TnSticky :offset-top="navBarInfo.height">
        <view
          class="tn-gradient-bg__cool-6 tn-white_text tn-radius tn-p tn-flex-center tn-text-lg"
        >
          图鸟UI-普通吸顶
        </view>
      </TnSticky>
      <view class="sticky-placeholder-block" />
      <TnSticky :offset-top="navBarInfo.height + 80">
        <view
          class="tn-gradient-bg__cool-6 tn-white_text tn-radius tn-p tn-flex-center tn-text-lg"
        >
          图鸟UI-设置吸顶高度
        </view>
      </TnSticky>
      <view class="sticky-placeholder-block" />
      <TnSticky :enabled="false">
        <view
          class="tn-gradient-bg__cool-6 tn-white_text tn-radius tn-p tn-flex-center tn-text-lg"
        >
          图鸟UI-不吸顶
        </view>
      </TnSticky>
    </view>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
