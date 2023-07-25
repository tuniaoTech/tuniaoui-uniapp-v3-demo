<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnCommentList from 'tnuiv3p-tn-comment-list/index.vue'
import TnInput from '@tuniao/tnui-vue3-uniapp/components/input/src/input.vue'
import TnPopup from '@tuniao/tnui-vue3-uniapp/components/popup/src/popup.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'

import { useCommentList } from './composables'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-comment-list/index',
})
const { isDemoH5Page } = useDemoH5Page()

const {
  commentListRef,
  commentData,
  openReplyPopup,
  replyContent,
  replyCommentNickname,
  showMoreClickHandle,
  replyClickHandle,
  replyDeleteHandle,
  replyCommentClickHandle,
} = useCommentList()
</script>

<template>
  <CustomPage title="评论列表" :is-h5-demo-page="isDemoH5Page" padding="0rpx">
    <view class="tn-comment-list-container">
      <TnCommentList
        ref="commentListRef"
        :data="commentData"
        @show-more="showMoreClickHandle"
        @reply="replyClickHandle"
        @delete="replyDeleteHandle"
      />
    </view>
  </CustomPage>

  <TnPopup v-model="openReplyPopup" open-direction="center" width="90%">
    <view class="reply-container">
      <TnInput
        v-model="replyContent"
        type="textarea"
        :placeholder="`回复${replyCommentNickname}:`"
        height="230"
        :focus="openReplyPopup"
      />
      <view class="tn-flex justify-end tn-mt">
        <TnButton @click="replyCommentClickHandle">回 复</TnButton>
      </view>
    </view>
  </TnPopup>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
