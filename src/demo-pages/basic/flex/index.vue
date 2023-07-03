<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import SubDemoContainer from '@/components/demo-container/src/sub-demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/basic/flex/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="排列方式">
      <SubDemoContainer title="flex-row">
        <view class="tn-w-full tn-flex tn-flex-row">
          <view
            class="flex-item tn-flex-1 tn-mr tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            1
          </view>
          <view
            class="flex-item tn-flex-1 tn-mr tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            2
          </view>
          <view
            class="flex-item tn-flex-1 tn-mr tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            3
          </view>
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="flex-row-reverse">
        <view class="tn-w-full tn-flex tn-flex-row-reverse">
          <view
            class="flex-item tn-flex-1 tn-mr tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            1
          </view>
          <view
            class="flex-item tn-flex-1 tn-mr tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            2
          </view>
          <view
            class="flex-item tn-flex-1 tn-mr tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            3
          </view>
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="flex-column">
        <view class="flex-container--fix-height tn-flex tn-flex-column">
          <view
            class="flex-item tn-flex-1 tn-mb tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            1
          </view>
          <view
            class="flex-item tn-flex-1 tn-mb tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            2
          </view>
          <view
            class="flex-item tn-flex-1 tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            3
          </view>
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="flex-row-column-reverse">
        <view class="flex-container--fix-height tn-flex tn-flex-column-reverse">
          <view
            class="flex-item tn-flex-1 tn-mt tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            1
          </view>
          <view
            class="flex-item tn-flex-1 tn-mt tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            2
          </view>
          <view
            class="flex-item tn-flex-1 tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            3
          </view>
        </view>
      </SubDemoContainer>
    </DemoContainer>

    <DemoContainer title="换行">
      <SubDemoContainer title="nowrap">
        <view class="tn-w-full tn-flex tn-flex-row tn-flex-nowrap">
          <view
            class="flex-item tn-w-5-12 tn-mr tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            1
          </view>
          <view
            class="flex-item tn-w-5-12 tn-mr tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            2
          </view>
          <view
            class="flex-item tn-w-5-12 tn-mr tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            3
          </view>
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="wrap">
        <view class="tn-w-full tn-flex tn-flex-row tn-flex-wrap">
          <view
            class="flex-item tn-w-5-12 tn-mr tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            1
          </view>
          <view
            class="flex-item tn-w-5-12 tn-mr tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            2
          </view>
          <view
            class="flex-item tn-w-5-12 tn-mr tn-mt tn-gradient-bg__grey-light tn-shadow-blur tn-animation-fade-in"
          >
            3
          </view>
        </view>
      </SubDemoContainer>
    </DemoContainer>

    <DemoContainer title="比例布局">
      <SubDemoContainer>
        <view class="tn-w-full tn-flex justify-between">
          <view
            class="flex-item tn-w-2-12 tn-mr-sm tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-10-12 tn-gradient-bg__cool-7 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer>
        <view class="tn-w-full tn-flex justify-between">
          <view
            class="flex-item tn-w-3-12 tn-mr-sm tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-9-12 tn-gradient-bg__cool-7 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer>
        <view class="tn-w-full tn-flex justify-between">
          <view
            class="flex-item tn-w-4-12 tn-mr-sm tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-8-12 tn-gradient-bg__cool-7 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer>
        <view class="tn-w-full tn-flex justify-between">
          <view
            class="flex-item tn-w-1-2 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-2 tn-ml-xs tn-gradient-bg__cool-7 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
    </DemoContainer>

    <DemoContainer title="水平对齐">
      <SubDemoContainer title="justify-start">
        <view class="tn-w-full tn-flex justify-start">
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="justify-center">
        <view class="tn-w-full tn-flex justify-center">
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="justify-end">
        <view class="tn-w-full tn-flex justify-end">
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="justify-around">
        <view class="tn-w-full tn-flex justify-around">
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="justify-between">
        <view class="tn-w-full tn-flex justify-between">
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
    </DemoContainer>
    <DemoContainer title="垂直对齐">
      <SubDemoContainer title="items-start">
        <view
          class="flex-container--has-height tn-w-full tn-flex items-start tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="items-center">
        <view
          class="flex-container--has-height tn-w-full tn-flex items-center tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="items-end">
        <view
          class="flex-container--has-height tn-w-full tn-flex items-end tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
    </DemoContainer>
    <DemoContainer title="组合对齐方式">
      <SubDemoContainer title="start-start">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-start-start tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="start-end">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-start-end tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="start-center">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-start-center tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="start-between">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-start-between tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="start-around">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-start-around tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>

      <SubDemoContainer title="center-start">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-center-start tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="center-end">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-center-end tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="center-center">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-center-center tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="center-between">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-center-between tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="center-around">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-center-around tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>

      <SubDemoContainer title="end-start">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-end-start tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="end-end">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-end-end tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="end-center">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-end-center tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="end-between">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-end-between tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="end-around">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-end-around tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>

      <SubDemoContainer title="cetner">
        <view
          class="flex-container--has-height tn-w-full tn-flex tn-flex-center tn-gray-light_bg"
        >
          <view
            class="flex-item tn-w-1-4 tn-mr-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
          <view
            class="flex-item tn-w-1-4 tn-ml-xs tn-gradient-bg__cool-2 tn-shadow-blur tn-animation-fade-in"
          />
        </view>
      </SubDemoContainer>
    </DemoContainer>

    <DemoContainer title="示例">
      <SubDemoContainer>
        <view class="example-1 tn-flex tn-w-full items-center">
          <view
            class="avatar tn-flex-shrink-0 tn-round tn-gradient-bg__indigo"
          />
          <view class="message tn-w-full tn-flex-grow tn-flex-column">
            <view
              class="content tn-w-full tn-flex items-center justify-between"
            >
              <view class="data tn-flex-grow tn-radius tn-gray-disabled_bg" />
              <view class="time tn-radius tn-gray-disabled_bg" />
            </view>
            <view class="brief tn-w-full tn-flex items-center justify-between">
              <view class="data tn-flex-grow tn-radius tn-gray-disabled_bg" />
              <view class="message-count tn-gray-disabled_bg tn-round" />
            </view>
          </view>
        </view>
      </SubDemoContainer>
      <SubDemoContainer>
        <view class="example-2 tn-w-full tn-flex items-center">
          <view
            class="left tn-flex-shrink-0 tn-radius tn-gradient-bg__cool-7"
          />
          <view class="right tn-flex-grow tn-flex-column">
            <view class="top tn-flex-1 tn-radius tn-gradient-bg__cool-7" />
            <view class="bottom tn-flex-1 tn-radius tn-gradient-bg__cool-7" />
          </view>
        </view>
      </SubDemoContainer>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
