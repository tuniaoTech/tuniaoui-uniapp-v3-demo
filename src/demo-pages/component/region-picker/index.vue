<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnRegionPicker from '@tuniao/tnui-vue3-uniapp/components/region-picker/src/region-picker.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/region-picker/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 基础地区选择器
const baseRegionPickerValue = ref<string[]>([])
const showBaseRegionPicker = ref(false)
const openBaseRegionPicker = () => {
  showBaseRegionPicker.value = true
}

// code默认值地区选择器
const codeDefaultRegionPickerValue = ref<string[]>(['44', '4401', '440113'])
const showCodeDefaultRegionPicker = ref(false)
const openCodeDefaultRegionPicker = () => {
  showCodeDefaultRegionPicker.value = true
}

// 地区名称默认值选择器
const nameDefaultRegionPickerValue = ref<string[]>([
  '广东省',
  '广州市',
  '番禺区',
])
const showNameDefaultRegionPicker = ref(false)
const openNameDefaultRegionPicker = () => {
  showNameDefaultRegionPicker.value = true
}
</script>

<template>
  <CustomPage title="地区选择器" :is-h5-demo-page="isDemoH5Page">
    <view class="warning-tips tn-type-warning_text">
      <text class="tn-text-xl">提示:</text>
      <view class="tn-mt-sm">
        地区选择器组件依赖于地区数据，需要在项目中引入地区数据，所以会导致小程序的包变大，在小程序中建议使用小程序官方的地区选择器可以减少包大小。
      </view>
    </view>
    <DemoContainer title="基础使用">
      <view class="region-container">
        <view class="region-item">
          选中的地区:
          <text class="tn-gray_text">
            <block v-for="(item, index) in baseRegionPickerValue" :key="index">
              {{ item }}
              {{ index === baseRegionPickerValue.length - 1 ? '' : ' - ' }}
            </block>
          </text>
        </view>
        <view class="region-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openBaseRegionPicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="code默认值">
      <view class="region-container">
        <view class="region-item">
          选中的地区:
          <text class="tn-gray_text">
            <block
              v-for="(item, index) in codeDefaultRegionPickerValue"
              :key="index"
            >
              {{ item }}
              {{
                index === codeDefaultRegionPickerValue.length - 1 ? '' : ' - '
              }}
            </block>
          </text>
        </view>
        <view class="region-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openCodeDefaultRegionPicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="地区名称默认值">
      <view class="region-container">
        <view class="region-item">
          选中的地区:
          <text class="tn-gray_text">
            <block
              v-for="(item, index) in nameDefaultRegionPickerValue"
              :key="index"
            >
              {{ item }}
              {{
                index === nameDefaultRegionPickerValue.length - 1 ? '' : ' - '
              }}
            </block>
          </text>
        </view>
        <view class="region-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openNameDefaultRegionPicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <view class="fit-height" />
  </CustomPage>

  <!-- 基础地区选择器 -->
  <TnRegionPicker
    v-model="baseRegionPickerValue"
    v-model:open="showBaseRegionPicker"
  />

  <!-- code默认值地区选择器 -->
  <TnRegionPicker
    v-model="codeDefaultRegionPickerValue"
    v-model:open="showCodeDefaultRegionPicker"
  />

  <!-- 地区名称默认值选择器 -->
  <TnRegionPicker
    v-model="nameDefaultRegionPickerValue"
    v-model:open="showNameDefaultRegionPicker"
  />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
