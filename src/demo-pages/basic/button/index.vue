<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/basic/button/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 测试按钮点击防抖
let debounceCount = 0
const testButtonDebounce = () => {
  debounceCount++
  uni.showToast({
    title: `点击了按钮${debounceCount}`,
    icon: 'none',
  })
  if (debounceCount > 100) {
    debounceCount = 0
  }
}
</script>

<template>
  <CustomPage title="按钮" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础">
      <view class="button-container">
        <view class="button-item">
          <view class="item"><TnButton>默认按钮</TnButton></view>
          <view class="item"><TnButton text>文本按钮</TnButton></view>
          <view class="item"><TnButton plain>朴素按钮</TnButton></view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="按钮类型">
      <view class="button-container">
        <view class="button-item">
          <view class="item"><TnButton type="primary">按钮</TnButton></view>
          <view class="item"><TnButton type="success">按钮</TnButton></view>
          <view class="item"><TnButton type="danger">按钮</TnButton></view>
          <view class="item"><TnButton type="warning">按钮</TnButton></view>
          <view class="item"><TnButton type="info">按钮</TnButton></view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="按钮尺寸">
      <view class="button-container">
        <view class="button-item">
          <view class="item">
            <TnButton size="sm">按钮</TnButton>
          </view>
          <view class="item">
            <TnButton size="lg">按钮</TnButton>
          </view>
          <view class="item">
            <TnButton size="xl">按钮</TnButton>
          </view>
          <view class="item">
            <TnButton
              font-size="50rpx"
              :custom-style="{ padding: '16rpx 30rpx' }"
            >
              按钮
            </TnButton>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="按钮形状">
      <view class="button-container">
        <view class="button-item">
          <view class="item">
            <TnButton shape="round">按钮</TnButton>
          </view>
          <view class="item">
            <TnButton shape="circle" icon="logo-tuniao" />
          </view>
          <view class="item">
            <TnButton
              width="80"
              shape="circle"
              icon="logo-tuniao"
              font-size="56"
            />
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="点击防抖">
      <view class="button-container">
        <view class="button-item">
          <view class="item">
            <TnButton debounce @click="testButtonDebounce">开启防抖</TnButton>
          </view>
          <view class="item">
            <TnButton @click="testButtonDebounce"> 关闭防抖(默认值) </TnButton>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="加载中按钮">
      <view class="button-container">
        <view class="button-item">
          <view class="item">
            <TnButton loading>加载中</TnButton>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁用按钮">
      <view class="button-container">
        <view class="button-item">
          <view class="item">
            <TnButton disabled>禁止点击</TnButton>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置阴影">
      <view class="button-container">
        <view class="button-item">
          <view class="item">
            <TnButton shadow shadow-color="tn-type-primary">按钮</TnButton>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="button-container">
        <view class="button-item">
          <view class="item">
            <TnButton bg-color="tn-cyan">按钮</TnButton>
          </view>
          <view class="item">
            <TnButton bg-color="tn-cyan-disabled" text-color="#24ba97">
              按钮
            </TnButton>
          </view>
          <view class="item">
            <TnButton
              bg-color="rgba(1, 190, 255, 0.2)"
              text-color="tn-type-primary"
            >
              按钮
            </TnButton>
          </view>
          <view class="item">
            <TnButton bg-color="tn-grey-light" text-color="tn-gray">
              按钮
            </TnButton>
          </view>
          <view class="item">
            <TnButton
              width="80"
              bg-color="gradient-bg__cool-6"
              text-color="tn-white"
              shape="circle"
              icon="logo-tuniao"
              font-size="56"
            />
          </view>
        </view>
        <view class="button-item">
          <view class="item">
            <TnButton text type="">文本按钮</TnButton>
          </view>
          <view class="item">
            <TnButton text type="danger">文本按钮</TnButton>
          </view>
          <view class="item">
            <TnButton text text-color="tn-aquablue-disabled">文本按钮</TnButton>
          </view>
          <view class="item">
            <TnButton text text-color="rgba(1, 190, 255, 0.3)">
              文本按钮
            </TnButton>
          </view>
        </view>
        <view class="button-item">
          <view class="item">
            <TnButton plain type="">朴素按钮</TnButton>
          </view>
          <view class="item">
            <TnButton plain type="danger" text-color="tn-type-danger">
              朴素按钮
            </TnButton>
          </view>
          <view class="item">
            <TnButton plain border-color="tn-aquablue">朴素按钮</TnButton>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义样式">
      <view class="button-container">
        <view class="button-item">
          <view class="item">
            <TnButton
              bg-color="tn-gray-disabled"
              :custom-style="{
                borderRadius: '15rpx 15rpx 0rpx 15rpx',
                padding: '14rpx 34rpx',
              }"
            >
              按钮
            </TnButton>
          </view>
          <view class="item">
            <TnButton custom-class="custom-button-class"> 按钮 </TnButton>
          </view>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './style/index.scss';
</style>

<style lang="scss">
.custom-button-class {
  background-color: var(--tn-color-gray-light);
  color: var(--tn-text-color-primary);
  border-radius: 15rpx 15rpx 0rpx 15rpx !important;
  padding: 14rpx 34rpx !important;
}
</style>
