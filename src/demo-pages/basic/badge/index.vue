<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnBadge from '@tuniao/tnui-vue3-uniapp/components/badge/src/badge.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/basic/badge/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="徽标" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="badge-container">
        <view class="badge-item">
          <view class="item">
            <view class="badge-content">
              <TnBadge value="99" />
              <view>外部使用</view>
            </view>
          </view>
          <view class="item">
            <TnBadge value="99">
              <view class="badge-content">内嵌内容</view>
            </TnBadge>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="角标类型">
      <view class="badge-container">
        <view class="badge-item">
          <view class="item">
            <TnBadge value="99" type="primary">
              <view class="badge-content" />
            </TnBadge>
          </view>
          <view class="item">
            <TnBadge value="99" type="success">
              <view class="badge-content" />
            </TnBadge>
          </view>
          <view class="item">
            <TnBadge value="99" type="warning">
              <view class="badge-content" />
            </TnBadge>
          </view>
          <view class="item">
            <TnBadge value="99" type="danger">
              <view class="badge-content" />
            </TnBadge>
          </view>
          <view class="item">
            <TnBadge value="99" type="info">
              <view class="badge-content" />
            </TnBadge>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="图标角标">
      <view class="badge-container">
        <view class="badge-item">
          <view class="item">
            <TnBadge value="icon-logo-tuniao">
              <view class="badge-content" />
            </TnBadge>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="点角标">
      <view class="badge-container">
        <view class="badge-item">
          <view class="item">
            <TnBadge dot>
              <view class="badge-content" />
            </TnBadge>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="角标尺寸">
      <view class="badge-container">
        <view class="badge-item">
          <view class="item">
            <TnBadge value="99" size="lg">
              <view class="badge-content" />
            </TnBadge>
          </view>
          <view class="item">
            <TnBadge value="99" size="xl">
              <view class="badge-content" />
            </TnBadge>
          </view>
          <view class="item">
            <TnBadge value="99" size="50" font-size="34">
              <view class="badge-content" />
            </TnBadge>
          </view>
          <view class="item">
            <TnBadge value="99" font-size="34">
              <view class="badge-content" />
            </TnBadge>
          </view>
          <view class="item">
            <TnBadge value="icon-logo-tuniao" size="50" font-size="34">
              <view class="badge-content" />
            </TnBadge>
          </view>
          <view class="item">
            <TnBadge dot size="36">
              <view class="badge-content" />
            </TnBadge>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置角标颜色">
      <view class="badge-container">
        <view class="badge-item">
          <view class="item">
            <TnBadge :value="99" bg-color="tn-gray">
              <view class="badge-content" />
            </TnBadge>
          </view>
          <view class="item">
            <TnBadge
              :value="99"
              bg-color="tn-blue-light"
              text-color="tn-aquablue"
            >
              <view class="badge-content" />
            </TnBadge>
          </view>
          <view class="item">
            <TnBadge
              :value="99"
              bg-color="gradient-bg__cool-6"
              text-color="#e83a30"
            >
              <view class="badge-content" />
            </TnBadge>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置最大值">
      <view class="badge-container">
        <view class="badge-item">
          <view class="item">
            <TnBadge :value="99" :max="90">
              <view class="badge-content" />
            </TnBadge>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="关闭绝对定位">
      <view class="badge-container">
        <view class="badge-item">
          <view class="item">
            <view class="badge-content no-center">
              <TnBadge value="99" :absolute="false" />
            </view>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="取消绝对居中定位">
      <view class="badge-container">
        <view class="badge-item">
          <view class="item">
            <TnBadge value="99" :absolute-center="false">
              <view class="badge-content" />
            </TnBadge>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置角标的位置">
      <view class="badge-container">
        <view class="badge-item">
          <view class="item">
            <TnBadge
              value="99"
              :absolute-position="{
                top: 'calc(100% - 16rpx)',
                right: 'calc(100% - 24rpx)',
              }"
            >
              <view class="badge-content" />
            </TnBadge>
          </view>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
