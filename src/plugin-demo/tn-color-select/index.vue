<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnColorSelect from 'tnuiv3p-tn-color-select/index.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-color-select/index',
})
const { isDemoH5Page } = useDemoH5Page()

const color = ref('')
const defaultValueColor = ref('#01beff')
</script>

<template>
  <CustomPage title="颜色选择器" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="tn-color-select-container">
        <view class="tn-color-select-item">
          当前选中的颜色: <text :style="{ color }">{{ color }}</text>
        </view>
        <view class="tn-color-select-item">
          <TnColorSelect v-model="color" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="带默认值">
      <view class="tn-color-select-container">
        <view class="tn-color-select-item">
          <TnColorSelect v-model="defaultValueColor" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁止操作">
      <view class="tn-color-select-container">
        <view class="tn-color-select-item">
          <TnColorSelect v-model="defaultValueColor" disabled />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <view class="tn-color-select-container">
        <view class="tn-color-select-item multi">
          <view class="select">
            <TnColorSelect v-model="color" size="sm" />
          </view>
          <view class="select">
            <TnColorSelect v-model="color" />
          </view>
          <view class="select">
            <TnColorSelect v-model="color" size="lg" />
          </view>
          <view class="select">
            <TnColorSelect v-model="color" size="xl" />
          </view>
          <view class="select">
            <TnColorSelect v-model="color" size="120" />
          </view>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
