<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnSwitchTab from '@tuniao/tnui-vue3-uniapp/components/switch-tab/src/switch-tab.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/switch-tabs/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 当前激活的选项卡
const currentActiveTab = ref<number>(0)

// 选项列表
const tabsData: string[] = ['选项卡一', '选项卡二']
</script>

<template>
  <CustomPage
    title="选项卡切换"
    page-bg-color="tn-gray-light"
    :is-h5-demo-page="isDemoH5Page"
  >
    <DemoContainer title="基础使用">
      <view class="switch-tab-container">
        <view class="switch-tab-item">
          <TnSwitchTab v-model="currentActiveTab" :tabs="tabsData">
            <view v-if="currentActiveTab === 0" class="switch-tab-content">
              选项卡一
            </view>
            <view v-if="currentActiveTab === 1" class="switch-tab-content">
              选项卡二
            </view>
          </TnSwitchTab>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁止点击">
      <view class="switch-tab-container">
        <view class="switch-tab-item">
          <TnSwitchTab v-model="currentActiveTab" :tabs="tabsData" disabled>
            <view v-if="currentActiveTab === 0" class="switch-tab-content">
              选项卡一
            </view>
            <view v-if="currentActiveTab === 1" class="switch-tab-content">
              选项卡二
            </view>
          </TnSwitchTab>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改主题色">
      <view class="switch-tab-container">
        <view class="switch-tab-item">
          <TnSwitchTab
            v-model="currentActiveTab"
            :tabs="tabsData"
            inactive-bg-color="tn-orange-disabled"
            inactive-text-color="tn-white"
            active-bg-color="tn-orange"
          >
            <view v-if="currentActiveTab === 0" class="switch-tab-content">
              选项卡一
            </view>
            <view v-if="currentActiveTab === 1" class="switch-tab-content">
              选项卡二
            </view>
          </TnSwitchTab>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
