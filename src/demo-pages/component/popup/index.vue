<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnPopup from '@tuniao/tnui-vue3-uniapp/components/popup/src/popup.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'

import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'

import type {
  PopupCloseBtnPosition,
  PopupOpenDirection,
} from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/popup/index',
})
const { isDemoH5Page } = useDemoH5Page()

const { navBarInfo } = useUniAppSystemRectInfo()

const showNormalPopup = ref(false)
const openNormalPopup = () => {
  showNormalPopup.value = true
}

// 弹出设置弹出方向弹框
const showTopDirectionPopup = ref(false)
const showRightDirectionPopup = ref(false)
const showBottomDirectionPopup = ref(false)
const showLeftDirectionPopup = ref(false)
const showCenterDirectionPopup = ref(false)
const openDirectionPopup = (direction: PopupOpenDirection) => {
  switch (direction) {
    case 'top':
      showTopDirectionPopup.value = true
      break
    case 'right':
      showRightDirectionPopup.value = true
      break
    case 'bottom':
      showBottomDirectionPopup.value = true
      break
    case 'left':
      showLeftDirectionPopup.value = true
      break
    case 'center':
      showCenterDirectionPopup.value = true
      break
  }
}

// 显示关闭按钮
const showLeftTopCloseBtnPopup = ref(false)
const showRightTopCloseBtnPopup = ref(false)
const showLeftBottomCloseBtnPopup = ref(false)
const showRightBottomCloseBtnPopup = ref(false)
const openCloseBtnPopup = (position: PopupCloseBtnPosition) => {
  switch (position) {
    case 'left-top':
      showLeftTopCloseBtnPopup.value = true
      break
    case 'right-top':
      showRightTopCloseBtnPopup.value = true
      break
    case 'left-bottom':
      showLeftBottomCloseBtnPopup.value = true
      break
    case 'right-bottom':
      showRightBottomCloseBtnPopup.value = true
      break
  }
}

// 隐藏遮罩
const showHideOverlayPopup = ref(false)
const openHideOverlayPopup = () => {
  showHideOverlayPopup.value = true
}

// 关闭点击遮罩关闭
const showNoOverlayClosePopup = ref(false)
const openNoOverlayClosePopup = () => {
  showNoOverlayClosePopup.value = true
}

// 设置遮罩透明度
const showTransparentOverlayPopup = ref(false)
const openTransparentOverlayPopup = () => {
  showTransparentOverlayPopup.value = true
}

// 自定义弹框
const showCustomPopup = ref(false)
const openCustomPopup = () => {
  showCustomPopup.value = true
}
const closeCustomPopup = () => {
  showCustomPopup.value = false
}
</script>

<template>
  <CustomPage title="弹出框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="popup-container">
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openNormalPopup"
          >
            弹出默认弹出框
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置弹出方向">
      <view class="popup-container">
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openDirectionPopup('top')"
          >
            在上方弹出弹出框
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openDirectionPopup('right')"
          >
            在右方弹出弹出框
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openDirectionPopup('bottom')"
          >
            在下方弹出弹出框
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openDirectionPopup('left')"
          >
            在左方弹出弹出框
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openDirectionPopup('center')"
          >
            在中间弹出弹出框
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="关闭按钮设置">
      <view class="popup-container">
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openCloseBtnPopup('left-top')"
          >
            显示左上角关闭按钮
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openCloseBtnPopup('right-top')"
          >
            显示右上角关闭按钮
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openCloseBtnPopup('left-bottom')"
          >
            显示左下角关闭按钮
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openCloseBtnPopup('right-bottom')"
          >
            显示右下角关闭按钮
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="遮罩设置">
      <view class="popup-container">
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openHideOverlayPopup"
          >
            不显示遮罩
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openTransparentOverlayPopup"
          >
            设置透明遮罩
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openNoOverlayClosePopup"
          >
            禁用点击遮罩关闭弹框
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="案例">
      <view class="popup-container">
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openCustomPopup"
          >
            弹出自定义弹出框
          </TnButton>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>

  <!-- 基础弹框 -->
  <TnPopup v-model="showNormalPopup">
    <view class="popup-content center"> 图鸟UI </view>
  </TnPopup>

  <!-- 上方弹框 -->
  <TnPopup
    v-model="showTopDirectionPopup"
    open-direction="top"
    :top="navBarInfo.height"
  >
    <view class="popup-content top"> 图鸟UI </view>
  </TnPopup>

  <!-- 右方弹框 -->
  <TnPopup v-model="showRightDirectionPopup" open-direction="right">
    <view class="popup-content right"> 图鸟UI </view>
  </TnPopup>

  <!-- 下方弹框 -->
  <TnPopup v-model="showBottomDirectionPopup" open-direction="bottom">
    <view class="popup-content bottom"> 图鸟UI </view>
  </TnPopup>

  <!-- 左方弹框 -->
  <TnPopup v-model="showLeftDirectionPopup" open-direction="left">
    <view class="popup-content left"> 图鸟UI </view>
  </TnPopup>

  <!-- 中间弹框 -->
  <TnPopup v-model="showCenterDirectionPopup" open-direction="center">
    <view class="popup-content center"> 图鸟UI </view>
  </TnPopup>

  <!-- 显示左上方关闭按钮弹框 -->
  <TnPopup
    v-model="showLeftTopCloseBtnPopup"
    close-btn
    close-btn-position="left-top"
  >
    <view class="popup-content center"> 图鸟UI </view>
  </TnPopup>

  <!-- 显示右上方关闭按钮弹框 -->
  <TnPopup
    v-model="showRightTopCloseBtnPopup"
    close-btn
    close-btn-position="right-top"
  >
    <view class="popup-content center"> 图鸟UI </view>
  </TnPopup>

  <!-- 显示左下方关闭按钮弹框 -->
  <TnPopup
    v-model="showLeftBottomCloseBtnPopup"
    close-btn
    close-btn-position="left-bottom"
  >
    <view class="popup-content center"> 图鸟UI </view>
  </TnPopup>

  <!-- 显示右下方关闭按钮弹框 -->
  <TnPopup
    v-model="showRightBottomCloseBtnPopup"
    close-btn
    close-btn-position="right-bottom"
  >
    <view class="popup-content center"> 图鸟UI </view>
  </TnPopup>

  <!-- 不显示遮罩 -->
  <TnPopup v-model="showHideOverlayPopup" :overlay="false" close-btn>
    <view class="popup-content center"> 图鸟UI </view>
  </TnPopup>

  <!-- 设置透明遮罩 -->
  <TnPopup v-model="showTransparentOverlayPopup" :overlay-opacity="0">
    <view class="popup-content center"> 图鸟UI </view>
  </TnPopup>

  <!-- 禁用点击遮罩关闭弹框 -->
  <TnPopup
    v-model="showNoOverlayClosePopup"
    :overlay-closeable="false"
    close-btn
  >
    <view class="popup-content center"> 图鸟UI </view>
  </TnPopup>

  <!-- 弹框演示 -->
  <TnPopup
    v-model="showCustomPopup"
    bg-color="transparent"
    open-direction="center"
    :overlay-opacity="0"
  >
    <view class="custom-popup-content">
      <view class="content">
        <image
          class="content-image"
          src="https://resource.tuniaokj.com/images/landscape/2022-new-year.png"
          mode="widthFix"
        />
      </view>
      <view class="close-btn" @tap.stop="closeCustomPopup">
        <TnIcon name="close-circle" />
      </view>
    </view>
  </TnPopup>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
