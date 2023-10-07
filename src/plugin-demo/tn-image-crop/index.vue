<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnAvatar from '@tuniao/tnui-vue3-uniapp/components/avatar/src/avatar.vue'
import TnPopup from '@tuniao/tnui-vue3-uniapp/components/popup/src/popup.vue'
import TnImageCrop from 'tnuiv3p-tn-image-crop/index.vue'

import type { TnImageCropInstance } from 'tnuiv3p-tn-image-crop'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-image-crop/index/index',
})
const { isDemoH5Page } = useDemoH5Page()

const imageCropRef = ref<TnImageCropInstance>()

// 打开头像裁剪弹框
const showAvatarCropPopup = ref(false)
const avatarUrl = ref('')
const operationImageUrl = ref('')

const openAvatarCropPopup = () => {
  // showAvatarCropPopup.value = true
  uni.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success: (res: UniApp.ChooseImageSuccessCallbackResult) => {
      if (res.tempFilePaths.length === 0) return
      operationImageUrl.value = res.tempFilePaths[0]
      showAvatarCropPopup.value = true
    },
  })
}
const closeAvatarCropPopup = () => {
  showAvatarCropPopup.value = false
}
const getCropAvatar = async () => {
  try {
    const imageData = await imageCropRef.value?.save()
    if (!imageData) return
    avatarUrl.value = imageData
    closeAvatarCropPopup()
    // eslint-disable-next-line unicorn/prefer-optional-catch-binding
  } catch (e) {
    await getCropAvatar()
  }
}
</script>

<template>
  <CustomPage title="图片裁剪" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="tn-image-crop-container">
        <view class="tn-image-crop-item" @tap.stop="openAvatarCropPopup">
          <view class="avatar">
            <TnAvatar :url="avatarUrl" size="xl" />
          </view>
          <view class="tips"> 点击修改头像 </view>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>

  <TnPopup
    v-model="showAvatarCropPopup"
    width="100vw"
    height="100vh"
    :z-index="30000"
    :overlay-closeable="false"
  >
    <view class="avatar-crop-container">
      <view class="avatar-crop-wrapper">
        <TnImageCrop
          v-if="showAvatarCropPopup"
          ref="imageCropRef"
          :src="operationImageUrl"
          :z-index="30000"
          circle
        />
      </view>
      <view class="avatar-crop-operation-bar">
        <view class="cancel-btn" @tap.stop="closeAvatarCropPopup"> 取消 </view>
        <view class="confirm-btn" @tap.stop="getCropAvatar">确认</view>
      </view>
    </view>
  </TnPopup>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
