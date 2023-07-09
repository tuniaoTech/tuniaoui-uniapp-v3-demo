<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import TnSignBoard from 'tnuiv3p-tn-sign-board/index.vue'

import type { TnSignBoardInstance } from 'tnuiv3p-tn-sign-board'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/tn-sign-board/index',
})
const { isDemoH5Page } = useDemoH5Page()

const signBoardRef = ref<TnSignBoardInstance>()

// 签名图片地址
const signImgUrl = ref('')

// 签名的颜色
const signColor = ref('#080808')

// 保存签名
const saveSign = (isRotate = false) => {
  signBoardRef.value
    ?.save(isRotate)
    .then((res) => {
      signImgUrl.value = res
    })
    .catch((err) => {
      console.error('保存签名失败', err)
      uni.showToast({
        title: '保存签名失败',
        icon: 'none',
      })
    })
}

// 重新签名
const reSign = () => {
  signBoardRef.value?.clear()
  signImgUrl.value = ''
  signColor.value = '#080808'
}

// 更新签名颜色
const updateSignColor = (color: string) => {
  signColor.value = color
}
</script>

<template>
  <CustomPage title="签名板" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="您的签名 - 保存后结果">
      <view class="tn-sign-board-container">
        <view class="tn-sign-board-item">
          <view class="preview-sign">
            <image class="image" :src="signImgUrl" mode="aspectFit" />
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="基础使用 - 签名框">
      <view class="tn-sign-board-container">
        <view class="tn-sign-board-item">
          <view class="sign-board-wrapper">
            <TnSignBoard ref="signBoardRef" :text-color="signColor" />
          </view>

          <view class="sign-board-operation">
            <view class="btn">
              <TnButton size="lg" @click="saveSign">保存</TnButton>
            </view>
            <view class="btn">
              <TnButton size="lg" @click="saveSign(true)">旋转并保存</TnButton>
            </view>
            <view class="btn">
              <TnButton type="danger" size="lg" @click="reSign">
                重新签名
              </TnButton>
            </view>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改签名颜色">
      <view class="tn-sign-board-container">
        <view class="tn-sign-board-item">
          <view class="sign-board-operation no-center">
            <view class="btn">
              <TnButton size="lg" @click="updateSignColor('#080808')">
                默认颜色
              </TnButton>
            </view>
            <view class="btn">
              <TnButton size="lg" @click="updateSignColor('#01beff')">
                修改颜色为#01beff
              </TnButton>
            </view>
            <view class="btn">
              <TnButton size="lg" @click="updateSignColor('rgb(255, 68, 79)')">
                修改颜色为rgb(255, 68, 79)
              </TnButton>
            </view>
          </view>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
