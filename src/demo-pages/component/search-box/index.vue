<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnSearchBox from '@tuniao/tnui-vue3-uniapp/components/search-box/src/search-box.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/search-box/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 搜索框输入的值
const searchValue = ref<string>('')
// 没有节流输入的值
const searchValueNoThrottle = ref<string>('')

// 点击搜索按钮
const searchEvent = (value: string) => {
  uni.showToast({
    title: `点击搜索按钮${value}`,
    icon: 'none',
  })
}
</script>

<template>
  <CustomPage title="搜索框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="search-box-container">
        <view class="search-box-item">
          输入的内容:
          <text class="tn-gray_text">
            {{ searchValue }}
          </text>
        </view>
        <view class="search-box-item">
          <TnSearchBox v-model="searchValue" @search="searchEvent" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="圆角搜索框">
      <view class="search-box-container">
        <view class="search-box-item">
          <TnSearchBox shape="round" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自动聚焦">
      <view class="search-box-container">
        <view class="search-box-item">
          <TnSearchBox focus />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁用搜索框">
      <view class="search-box-container">
        <view class="search-box-item">
          <TnSearchBox disabled />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="搜索框尺寸">
      <view class="search-box-container">
        <view class="search-box-item">
          <TnSearchBox size="sm" />
        </view>
        <view class="search-box-item">
          <TnSearchBox size="lg" />
        </view>
        <view class="search-box-item">
          <TnSearchBox size="xl" />
        </view>
        <view class="search-box-item">
          <TnSearchBox size="sm" shape="round" />
        </view>
        <view class="search-box-item">
          <TnSearchBox size="lg" shape="round" />
        </view>
        <view class="search-box-item">
          <TnSearchBox size="xl" shape="round" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="对齐方式">
      <view class="search-box-container">
        <view class="search-box-item">
          <TnSearchBox text-align="center" />
        </view>
        <view class="search-box-item">
          <TnSearchBox text-align="right" />
        </view>
        <view class="search-box-item">
          <TnSearchBox shape="round" text-align="center" />
        </view>
        <view class="search-box-item">
          <TnSearchBox shape="round" text-align="right" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏搜索按钮">
      <view class="search-box-container">
        <view class="search-box-item">
          <TnSearchBox text-align="center" :search-button="false" />
        </view>
        <view class="search-box-item">
          <TnSearchBox
            shape="round"
            text-align="center"
            :search-button="false"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏清除内容按钮">
      <view class="search-box-container">
        <view class="search-box-item">
          <TnSearchBox :clearable="false" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="关闭搜索节流">
      <view class="search-box-container">
        <view class="search-box-item">
          输入的内容:
          <text class="tn-gray_text">
            {{ searchValueNoThrottle }}
          </text>
        </view>
        <view class="search-box-item">
          <TnSearchBox v-model="searchValueNoThrottle" :throllte="false" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改输入框颜色">
      <view class="search-box-container">
        <view class="search-box-item">
          <TnSearchBox
            shape="round"
            text-color="tn-grey"
            placeholder-color="tn-gray-disabled"
            border-color="tn-gray-disabled"
            search-button-bg-color="tn-gray"
            search-button-text="图鸟一下"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="案例">
      <view class="search-box-container">
        <view class="search-box-item custom-search-box">
          <TnSearchBox
            :border="false"
            :search-button="false"
            text-align="center"
            placeholder-icon="text-hot"
            placeholder="在这里你能找到关于图鸟的一切"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
