<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import TnUpdateUserInfoPopup from 'tnuiv3p-tn-update-user-info-popup/index.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'
import { UPLOAD_URL, uploadHeaders } from '@/config'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-update-user-info-popup/index',
})
const { isDemoH5Page } = useDemoH5Page()

const showPopup = ref<boolean>(false)
const nickname = ref<string>('')
const avatar = ref<string>('')

// 头像选择事件
const avatarChooseHandle = (url: string) => {
  // 换成自己的上传接口
  uni.uploadFile({
    url: UPLOAD_URL,
    header: uploadHeaders,
    fileType: 'image',
    filePath: url,
    name: 'file',
    success: (res) => {
      const data = JSON.parse(res.data)
      avatar.value = data.data.url
    },
  })
}

// 打开用户信息弹框
const openUserInfoPopup = () => {
  showPopup.value = true
}
</script>

<template>
  <CustomPage title="更新用户信息弹框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="用户信息">
      <view class="update-user-info-container">
        <view class="update-user-info-item">
          <view class="user-info">
            <view class="avatar">
              <image class="tn-image" :src="avatar" mode="aspectFill" />
            </view>
            <view class="nickname">{{ nickname }}</view>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="基础使用">
      <view class="update-user-info-container">
        <view class="update-user-info-item">
          <TnButton @click="openUserInfoPopup">修改用户信息</TnButton>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
  <TnUpdateUserInfoPopup
    v-model:show="showPopup"
    v-model:nickname="nickname"
    v-model:avatar="avatar"
    @choose-avatar="avatarChooseHandle"
  />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
