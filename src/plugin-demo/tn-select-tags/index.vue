<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnSelectTags from 'tnuiv3p-tn-select-tags/index.vue'

import type { SelectTagsItem } from 'tnuiv3p-tn-select-tags'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-select-tags/index',
})
const { isDemoH5Page } = useDemoH5Page()

const tagItems: SelectTagsItem[] = [
  {
    value: 1,
    label: '# 标签一',
    activeBgColor: 'tn-blue-light',
  },
  {
    value: 2,
    label: '# 标签二',
    activeBgColor: 'tn-red-light',
  },
  {
    value: 3,
    label: '# 标签三',
    activeBgColor: 'tn-orange-light',
  },
  {
    value: 4,
    label: '# 标签四',
    activeBgColor: 'tn-orangered-light',
  },
  {
    value: 5,
    label: '# 标签五',
    activeBgColor: 'tn-orangeyellow-light',
  },
  {
    value: 6,
    label: '# 标签六',
    activeBgColor: 'tn-green-light',
  },
  {
    value: 7,
    label: '# 标签七',
    activeBgColor: 'tn-cyan-light',
  },
]

const selectTags = ref<number[]>([])
</script>

<template>
  <CustomPage title="多标签选择" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="select-tags-container">
        <view class="select-tags-item">
          <text class="tn-gray_text">当前选中的标签的值:</text>
          <text>{{ selectTags.join(',') }}</text>
        </view>
        <view class="select-tags-item">
          <TnSelectTags v-model="selectTags" :items="tagItems" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="只能选择一个标签">
      <view class="select-tags-container">
        <view class="select-tags-item">
          <TnSelectTags :items="tagItems" :multiple="false" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="只能选择一个标签且不能取消选择">
      <view class="select-tags-container">
        <view class="select-tags-item">
          <TnSelectTags
            :items="tagItems"
            :multiple="false"
            :cancelable="false"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
