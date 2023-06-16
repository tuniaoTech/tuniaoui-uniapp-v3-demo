<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import TnPopup from '@tuniao/tnui-vue3-uniapp/components/popup/src/popup.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'

import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'

import type {
  PopupCloseBtnPosition,
  PopupOpenDirection,
} from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

const { navBarInfo } = useUniAppSystemRectInfo()

// 弹出弹出框
const showPopup = ref<boolean>(false)
const openPopup = ref<boolean>(false)
const showCustomPopup = ref<boolean>(false)

// 弹框背景颜色
const popupBgColor = ref<string>('#fff')
// 弹框弹出位置
const popupDirection = ref<PopupOpenDirection>('center')
// 弹出框距离顶部的距离
const popupTop = ref<number>(navBarInfo.height)
// 显示关闭按钮
const showCloseBtn = ref<boolean>(false)
// 关闭按钮方向
const closeBtnPosition = ref<PopupCloseBtnPosition>('right-top')
// 显示遮罩
const showOverlay = ref<boolean>(true)
// 点击遮罩是否可以关闭
const closeOnClickOverlay = ref<boolean>(true)
// 遮罩透明度
const overlayOpacity = ref<number>(0.5)

// 弹出弹框，先设置好参数在打开
const _openPopup = () => {
  showPopup.value = true
  nextTick(() => {
    setTimeout(() => {
      openPopup.value = true
    }, 50)
  })
}

// 重置参数
const resetPopupParams = () => {
  popupBgColor.value = '#fff'
  popupDirection.value = 'center'
  popupTop.value = navBarInfo.height
  showCloseBtn.value = false
  closeBtnPosition.value = 'right-top'
  showOverlay.value = true
  closeOnClickOverlay.value = true
  overlayOpacity.value = 0.5
}

// 弹框关闭事件
const popupCloseEvent = () => {
  nextTick(() => {
    setTimeout(() => {
      resetPopupParams()
      showPopup.value = false
    }, 350)
  })
}

// 关闭弹框
const closeCustomPopup = () => {
  showCustomPopup.value = false
}

// 普通弹框
const openNormalPopup = () => {
  _openPopup()
}

// 弹出设置弹出方向弹框
const openSetDirectionPopup = (direction: PopupOpenDirection) => {
  popupDirection.value = direction
  _openPopup()
}

// 显示关闭按钮
const showCloseBtnPopup = () => {
  showCloseBtn.value = true
  _openPopup()
}
// 设置关闭按钮位置
const setCloseBtnPosition = (position: PopupCloseBtnPosition) => {
  showCloseBtn.value = true
  closeBtnPosition.value = position
  _openPopup()
}

// 隐藏遮罩
const hideOverlay = () => {
  popupBgColor.value = 'tn-gray-light'
  showCloseBtn.value = true
  showOverlay.value = false
  _openPopup()
}
// 关闭点击遮罩关闭
const closeOnClickOverlayPopup = () => {
  showCloseBtn.value = true
  closeOnClickOverlay.value = false
  _openPopup()
}
// 设置遮罩透明度
const setOverlayOpacity = (opacity: number) => {
  popupBgColor.value = 'tn-gray-light'
  overlayOpacity.value = opacity
  _openPopup()
}

// 自定义弹框
const openCustomPopup = () => {
  showCustomPopup.value = true
}
</script>

<template>
  <CustomPage title="弹出框">
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
            @click="openSetDirectionPopup('top')"
          >
            在上方弹出弹出框
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openSetDirectionPopup('right')"
          >
            在右方弹出弹出框
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openSetDirectionPopup('bottom')"
          >
            在下方弹出弹出框
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openSetDirectionPopup('left')"
          >
            在左方弹出弹出框
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openSetDirectionPopup('center')"
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
            @click="showCloseBtnPopup"
          >
            显示关闭按钮
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="setCloseBtnPosition('left-top')"
          >
            显示左上角关闭按钮
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="setCloseBtnPosition('right-top')"
          >
            显示右上角关闭按钮
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="setCloseBtnPosition('left-bottom')"
          >
            显示左下角关闭按钮
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="setCloseBtnPosition('right-bottom')"
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
            @click="hideOverlay"
          >
            不显示遮罩
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="setOverlayOpacity(0)"
          >
            设置透明遮罩
          </TnButton>
        </view>
        <view class="popup-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="closeOnClickOverlayPopup"
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

  <TnPopup
    v-if="showPopup"
    v-model="openPopup"
    :bg-color="popupBgColor"
    :open-direction="popupDirection"
    :top="popupTop"
    :close-btn="showCloseBtn"
    :close-btn-position="closeBtnPosition"
    :overlay="showOverlay"
    :overlay-closeable="closeOnClickOverlay"
    :overlay-opacity="overlayOpacity"
    @close="popupCloseEvent"
  >
    <view class="popup-content" :class="[popupDirection]"> 图鸟UI </view>
  </TnPopup>
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
          src="https://resource.tnkjapp.com/images/landscape/2022-new-year.png"
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
