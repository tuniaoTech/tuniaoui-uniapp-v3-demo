<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnListItem from '@tuniao/tnui-vue3-uniapp/components/list/src/list-item.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/list/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage
    title="列表"
    page-bg-color="tn-gray-light"
    :is-h5-demo-page="isDemoH5Page"
  >
    <DemoContainer title="基础使用">
      <view class="list-container">
        <view class="list-item">
          <TnListItem>关于图鸟</TnListItem>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="圆角列表">
      <view class="list-container">
        <view class="list-item">
          <TnListItem radius>关于图鸟</TnListItem>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置右边图标">
      <view class="list-container">
        <view class="list-item">
          <TnListItem right-icon="right">关于图鸟</TnListItem>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置底部分割线">
      <view class="list-container">
        <view class="list-item">
          <TnListItem bottom-border>关于图鸟</TnListItem>
          <TnListItem bottom-border>关于图鸟</TnListItem>
          <TnListItem>关于图鸟</TnListItem>
        </view>
        <view class="list-item">
          <TnListItem bottom-border bottom-border-indent>关于图鸟</TnListItem>
          <TnListItem bottom-border bottom-border-indent>关于图鸟</TnListItem>
          <TnListItem>关于图鸟</TnListItem>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置尺寸">
      <view class="list-container">
        <view class="list-item">
          <TnListItem font-size="32rpx">关于图鸟</TnListItem>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="list-container">
        <view class="list-item">
          <TnListItem
            bg-color="tn-grey-light"
            text-color="tn-gray"
            right-icon="right"
            right-icon-color="tn-blue"
          >
            关于图鸟
          </TnListItem>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="案例演示">
      <view class="list-container">
        <view class="list-item">
          <TnListItem
            bottom-border
            bottom-border-indent
            right-icon="right"
            custom-class="list-first-item"
          >
            <view class="list-content">
              <view class="icon tn-gradient-bg__indigo tn-white_text">
                <TnIcon name="logo-tuniao" />
              </view>
              <view class="text">关于图鸟</view>
            </view>
          </TnListItem>
          <TnListItem bottom-border bottom-border-indent right-icon="right">
            <view class="list-content">
              <view class="icon tn-gradient-bg__indigo tn-white_text">
                <TnIcon name="logo-tuniao" />
              </view>
              <view class="text">关于图鸟</view>
            </view>
          </TnListItem>
          <TnListItem right-icon="right" custom-class="list-last-item">
            <view class="list-content">
              <view class="icon tn-gradient-bg__indigo tn-white_text">
                <TnIcon name="logo-tuniao" />
              </view>
              <view class="text">关于图鸟</view>
            </view>
          </TnListItem>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>

<style lang="scss">
.list-first-item {
  border-radius: 15rpx 15rpx 0rpx 0rpx;
}
.list-last-item {
  border-radius: 0rpx 0rpx 15rpx 15rpx;
}
</style>
