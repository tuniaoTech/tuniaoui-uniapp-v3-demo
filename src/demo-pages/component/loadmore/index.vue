<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnLoadmore from '@tuniao/tnui-vue3-uniapp/components/loadmore/src/loadmore.vue'

import type { LoadmoreText } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/loadmore/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 自定义加载文案
const customLoadmoreText: LoadmoreText = {
  loadmore: '往下滑试试',
  loading: '等等，数据正在赶来路上',
  nomore: '没有啦，不要滑啦',
  empty: '已经被掏空了',
}
</script>

<template>
  <CustomPage title="加载更多" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="loadmore-container">
        <view class="loadmore-item">
          <TnLoadmore />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="loading" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="nomore" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="empty" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义文案">
      <view class="loadmore-container">
        <view class="loadmore-item">
          <TnLoadmore :text="customLoadmoreText" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="loading" :text="customLoadmoreText" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="nomore" :text="customLoadmoreText" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="empty" :text="customLoadmoreText" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置加载中加载图标">
      <view class="loadmore-container">
        <view class="loadmore-item">
          <TnLoadmore status="loading" loading-icon-mode="circle" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="loading" loading-icon-mode="flower" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="loading" loading-icon-mode="semicircle" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏文案">
      <view class="loadmore-container">
        <view class="loadmore-item">
          <TnLoadmore :loading-text="false" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore
            status="loading"
            :loading-text="false"
            :loading-icon="false"
          />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="nomore" :loading-text="false" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="empty" :loading-text="false" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <view class="loadmore-container">
        <view class="loadmore-item">
          <TnLoadmore size="sm" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore :loading-text="false" size="sm" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="loading" size="lg" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="nomore" size="xl" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="empty" size="40" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="loadmore-container">
        <view class="loadmore-item">
          <TnLoadmore color="tn-gray" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore status="loading" color="tn-gray-disabled" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore :loading-text="false" color="tn-gray" />
        </view>
        <view class="loadmore-item">
          <TnLoadmore color="#e4e9ec" />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
