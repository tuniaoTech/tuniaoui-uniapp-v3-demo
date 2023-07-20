<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnBubbleBox from '@tuniao/tnui-vue3-uniapp/components/bubble-box/src/bubble-box.vue'

import type { BubbleBoxOption } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/bubble-box/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 气泡弹框数据
const bubbleBoxOptions: BubbleBoxOption = [{ text: '收藏' }, { text: '分享' }]

// 带图标的气泡弹框数据
const bubbleBoxOptionsWithIcon: BubbleBoxOption = [
  { text: '收藏', icon: 'star' },
  { text: '分享', icon: 'share' },
]

// 带禁止选项的气泡弹框数据
const bubbleBoxOptionsWithDisabled: BubbleBoxOption = [
  { text: '收藏', icon: 'star' },
  { text: '分享', icon: 'share' },
  { text: '删除', icon: 'delete', disabled: true },
]

// 案例演示数据
const menu1BubbleOptions: BubbleBoxOption = [
  { text: '图鸟UI-VUE3' },
  { text: '图鸟UI' },
  { text: '图鸟博客' },
  { text: '图鸟圈子' },
  { text: '凶姐壁纸' },
]
const menu2BubbleOptions: BubbleBoxOption = [
  { text: 'vue3使用文档' },
  { text: 'vue2使用文档' },
  { text: 'github' },
  { text: '使用视频' },
  { text: '图鸟素材' },
]
const menu3BubbleOptions: BubbleBoxOption = [
  { text: 'vue3使用文档' },
  { text: 'vue2使用文档' },
]

// 选项点击事件
const onBubbleOptionClickEvent = (index: number) => {
  uni.showToast({
    title: `您选择了 ${bubbleBoxOptions[index].text}`,
    icon: 'none',
  })
}
</script>

<template>
  <CustomPage
    title="气泡弹框"
    :is-h5-demo-page="isDemoH5Page"
    content-full-width
  >
    <DemoContainer title="基础使用">
      <view class="bubble-box-container">
        <view class="bubble-box-item top-empty fit-content">
          <TnBubbleBox
            :options="bubbleBoxOptions"
            @click="onBubbleOptionClickEvent"
          >
            点击弹出气泡框
          </TnBubbleBox>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="带图标选项">
      <view class="bubble-box-container">
        <view class="bubble-box-item top-empty fit-content">
          <TnBubbleBox :options="bubbleBoxOptionsWithIcon">
            点击弹出气泡框
          </TnBubbleBox>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="带禁止选项">
      <view class="bubble-box-container">
        <view class="bubble-box-item top-empty fit-content">
          <TnBubbleBox :options="bubbleBoxOptionsWithDisabled">
            点击弹出气泡框
          </TnBubbleBox>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改气泡弹出位置">
      <view class="bubble-box-container">
        <view class="bubble-box-position-demo">
          <view class="left">
            <view class="item">
              <TnBubbleBox position="right" :options="bubbleBoxOptions">
                右边气泡
              </TnBubbleBox>
            </view>
          </view>
          <view class="center">
            <view class="item">
              <TnBubbleBox position="bottom" :options="bubbleBoxOptions">
                底部气泡
              </TnBubbleBox>
            </view>
            <view class="item">
              <TnBubbleBox position="top" :options="bubbleBoxOptions">
                顶部气泡
              </TnBubbleBox>
            </view>
          </view>
          <view class="right">
            <view class="item">
              <TnBubbleBox position="left" :options="bubbleBoxOptions">
                左边气泡
              </TnBubbleBox>
            </view>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="bubble-box-container">
        <view class="bubble-box-item top-empty fit-content">
          <TnBubbleBox
            bg-color="tn-gray-light"
            text-color="tn-gray"
            :options="bubbleBoxOptionsWithIcon"
          >
            点击弹出气泡框
          </TnBubbleBox>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="案例">
      <view class="bubble-box-demo1">
        <view class="menu-item">
          <TnBubbleBox
            :options="menu1BubbleOptions"
            option-item-padding="30rpx"
          >
            <view class="content">🥰 图鸟</view>
          </TnBubbleBox>
        </view>
        <view class="menu-item">
          <TnBubbleBox
            :options="menu2BubbleOptions"
            option-item-padding="30rpx"
          >
            <view class="content">😍 文档</view>
          </TnBubbleBox>
        </view>
        <view class="menu-item">
          <TnBubbleBox
            :options="menu3BubbleOptions"
            width="300"
            option-item-padding="30rpx"
          >
            <view class="content">好文推荐</view>
          </TnBubbleBox>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
