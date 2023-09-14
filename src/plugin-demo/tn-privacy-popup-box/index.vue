<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import TnPrivacyPopupBox from 'tnuiv3p-tn-privacy-popup-box/index.vue'

import type { PrivacyPopupBoxOpenDirection } from 'tnuiv3p-tn-privacy-popup-box'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-privacy-popup-box/index',
})
const { isDemoH5Page } = useDemoH5Page()

const showPrivacyPopup = ref(false)
const privacyOpenDirection = ref<PrivacyPopupBoxOpenDirection>('center')

const openCenterPrivacyPopup = () => {
  privacyOpenDirection.value = 'center'
  setTimeout(() => {
    nextTick(() => {
      showPrivacyPopup.value = true
    })
  }, 50)
}

const openBottomPrivacyPopup = () => {
  privacyOpenDirection.value = 'bottom'
  setTimeout(() => {
    nextTick(() => {
      showPrivacyPopup.value = true
    })
  }, 50)
}
</script>

<template>
  <CustomPage title="隐私弹框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="居中隐私弹框">
      <view class="privacy-popup-box-container">
        <view class="privacy-popup-box-item">
          <TnButton type="primary" @click="openCenterPrivacyPopup">
            打开隐私弹框
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="底部隐私弹框">
      <view class="privacy-popup-box-container">
        <view class="privacy-popup-box-item">
          <TnButton type="primary" @click="openBottomPrivacyPopup">
            打开隐私弹框
          </TnButton>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>

  <TnPrivacyPopupBox
    v-model="showPrivacyPopup"
    :open-direction="privacyOpenDirection"
  />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
