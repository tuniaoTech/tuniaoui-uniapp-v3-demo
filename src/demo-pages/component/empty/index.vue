<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnEmpty from '@tuniao/tnui-vue3-uniapp/components/empty/src/empty.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/empty/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="空白页" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="empty-container">
        <view class="empty-item">
          <TnEmpty mode="data" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="cart" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="page" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="search" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="address" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="network" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="order" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="coupon" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="favor" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="permission" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="history" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="message" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="list" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="comment" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏文案">
      <view class="empty-container">
        <view class="empty-item">
          <TnEmpty mode="data" :show-tips="false" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义文案">
      <view class="empty-container">
        <view class="empty-item">
          <TnEmpty mode="data">
            <template #icon>
              <image
                class="custom-empty-icon"
                src="https://resource.tuniaokj.com/images/empty/alien/12.png"
                mode="aspectFit"
              />
            </template>
            <template #tips>
              <view class="custom-empty-tips">
                网络出现了问题，请稍后重试
              </view>
            </template>
          </TnEmpty>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <view class="empty-container">
        <view class="empty-item">
          <TnEmpty mode="data" size="sm" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="data" size="lg" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="data" size="xl" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="data" size="200" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="empty-container">
        <view class="empty-item">
          <TnEmpty mode="data" color="tn-gray" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="data" color="#e6e6e6" />
        </view>
        <view class="empty-item">
          <TnEmpty mode="data" color="tn-type-primary" />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
