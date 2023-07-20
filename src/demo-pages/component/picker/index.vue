<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnPicker from '@tuniao/tnui-vue3-uniapp/components/picker/src/picker.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'

import {
  linkageData,
  multiPickerData,
  multiPickerObjectData,
  singlePickerData,
  singlePickerObjectData,
} from './composables'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/picker/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 单值数组数据选择器
const singlePickerValue = ref()
const showSinglePicker = ref(false)
const openSinglePicker = () => {
  showSinglePicker.value = true
}

// 单值对象数组数据选择器
const singlePickerObjectValue = ref()
const showSingleObjectPicker = ref(false)
const openSingleObjectPicker = () => {
  showSingleObjectPicker.value = true
}

// 多值数组数据选择器
const multiPickerValue = ref()
const showMultiPicker = ref(false)
const openMultiPicker = () => {
  showMultiPicker.value = true
}

// 多值对象数组数据选择器
const multiPickerObjectValue = ref()
const showMultiObjectPicker = ref(false)
const openMultiObjectPicker = () => {
  showMultiObjectPicker.value = true
}

// 联动选择器
const linkagePickerValue = ref()
const showLinkagePicker = ref(false)
const openLinkagePicker = () => {
  showLinkagePicker.value = true
}
</script>

<template>
  <CustomPage title="Picker选择器" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="单列选择器-单值数组数据">
      <view class="picker-container">
        <view class="picker-item">
          当前选中的值:
          <text class="tn-gray_text">{{ singlePickerValue }}</text>
        </view>
        <view class="picker-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openSinglePicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="单列选择器-单值对象数组数据">
      <view class="picker-container">
        <view class="picker-item">
          当前选中的值:
          <text class="tn-gray_text">{{ singlePickerObjectValue }}</text>
        </view>
        <view class="picker-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openSingleObjectPicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="多列选择器-多值数组数据">
      <view class="picker-container">
        <view class="picker-item">
          当前选中的值:
          <text class="tn-gray_text">
            {{ multiPickerValue?.[0] || '' }} -
            {{ multiPickerValue?.[1] || '' }} -
            {{ multiPickerValue?.[2] || '' }} -
            {{ multiPickerValue?.[3] || '' }}
          </text>
        </view>
        <view class="picker-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openMultiPicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="多列选择器-多值对象数组数据">
      <view class="picker-container">
        <view class="picker-item">
          当前选中的值:
          <text class="tn-gray_text">
            {{ multiPickerObjectValue?.[0] || '' }} -
            {{ multiPickerObjectValue?.[1] || '' }} -
            {{ multiPickerObjectValue?.[2] || '' }} -
            {{ multiPickerObjectValue?.[3] || '' }}
          </text>
        </view>
        <view class="picker-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openMultiObjectPicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="联动选择器">
      <view class="picker-container">
        <view class="picker-item">
          当前选中的值:
          <text class="tn-gray_text">
            {{ linkagePickerValue?.[0] || '' }} -
            {{ linkagePickerValue?.[1] || '' }} -
            {{ linkagePickerValue?.[2] || '' }} -
            {{ linkagePickerValue?.[3] || '' }}
          </text>
        </view>
        <view class="picker-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openLinkagePicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <view class="fit-bottom" />
  </CustomPage>

  <!-- 单值数组 -->
  <TnPicker
    v-model="singlePickerValue"
    v-model:open="showSinglePicker"
    :data="singlePickerData"
  />

  <!-- 单值对象数组 -->
  <TnPicker
    v-model="singlePickerObjectValue"
    v-model:open="showSingleObjectPicker"
    :data="singlePickerObjectData"
  />

  <!-- 多值数组 -->
  <TnPicker
    v-model="multiPickerValue"
    v-model:open="showMultiPicker"
    :data="multiPickerData"
  />

  <!-- 多值对象数组 -->
  <TnPicker
    v-model="multiPickerObjectValue"
    v-model:open="showMultiObjectPicker"
    :data="multiPickerObjectData"
    :show-cancel="false"
  />

  <!-- 联动选择器 -->
  <TnPicker
    v-model="linkagePickerValue"
    v-model:open="showLinkagePicker"
    :data="linkageData"
    confirm-text="选择班级"
    confirm-color="tn-type-success"
  />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
