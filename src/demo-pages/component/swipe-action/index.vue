<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnSwipeAction from '@tuniao/tnui-vue3-uniapp/components/swipe-action/src/swipe-action.vue'
import TnSwipeActionItem from '@tuniao/tnui-vue3-uniapp/components/swipe-action/src/swipe-action-item.vue'

import SwipeContentItem from './components/swipe-content-item.vue'

import type { SwipeActionItemOption } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/swipe-action/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 菜单选项
const swipeActionItemOption: SwipeActionItemOption = [
  { text: '标记已读', bgColor: 'tn-type-primary' },
  { text: '置顶', bgColor: 'tn-orange' },
  { text: '删除', bgColor: 'tn-red' },
]

// 圆形图标菜单选项
const swipeActionItemCircleIconOption: SwipeActionItemOption = [
  { icon: 'open', bgColor: 'tn-type-primary', round: true },
  { icon: 'totop-simple', bgColor: 'tn-orange', round: true },
  { icon: 'delete', bgColor: 'tn-red', round: true },
]

// 菜单选中事件
const swipeActionOptionSelectEvent = (
  index: string | number,
  optionIndex: number
) => {
  uni.showToast({
    title: `选中了第${index}个滑动菜单的第${optionIndex}个选项`,
    icon: 'none',
  })
}
</script>

<template>
  <CustomPage title="滑动菜单" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="swipe-action-container">
        <view class="swipe-action-item">
          <TnSwipeAction @select="swipeActionOptionSelectEvent">
            <TnSwipeActionItem
              v-for="i in 3"
              :key="i"
              :options="swipeActionItemOption"
            >
              <SwipeContentItem />
            </TnSwipeActionItem>
          </TnSwipeAction>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁止第一项打开选项菜单">
      <view class="swipe-action-container">
        <view class="swipe-action-item">
          <TnSwipeAction>
            <TnSwipeActionItem
              v-for="i in 3"
              :key="i"
              :options="swipeActionItemOption"
              :disabled="i === 1"
            >
              <SwipeContentItem />
            </TnSwipeActionItem>
          </TnSwipeAction>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="允许划出多个菜单">
      <view class="swipe-action-container">
        <view class="swipe-action-item">
          <TnSwipeAction :exclusive="false">
            <TnSwipeActionItem
              v-for="i in 3"
              :key="i"
              :options="swipeActionItemOption"
            >
              <SwipeContentItem />
            </TnSwipeActionItem>
          </TnSwipeAction>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="圆形图标菜单">
      <view class="swipe-action-container">
        <view class="swipe-action-item">
          <TnSwipeAction>
            <TnSwipeActionItem
              v-for="i in 3"
              :key="i"
              :options="swipeActionItemCircleIconOption"
            >
              <SwipeContentItem />
            </TnSwipeActionItem>
          </TnSwipeAction>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
