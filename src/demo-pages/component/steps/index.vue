<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnSteps from '@tuniao/tnui-vue3-uniapp/components/steps/src/steps.vue'
import TnStepsItem from '@tuniao/tnui-vue3-uniapp/components/steps/src/steps-item.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'

import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/steps/index',
})
const { isDemoH5Page } = useDemoH5Page()

const { navBarInfo } = useUniAppSystemRectInfo()

// 当前选中的标签索引
const currentStepIndex = ref(0)

// 步骤条数据
const stepsData = [
  {
    title: '步骤一',
    icon: 'circle',
    activeIcon: 'circle-fill',
  },
  {
    title: '步骤二',
    icon: 'square',
    activeIcon: 'square-fill',
    color: 'tn-bluepurple-light',
    activeColor: 'tn-bluepurple',
  },
  {
    title: '步骤三',
    icon: 'trusty',
    activeIcon: 'trusty-fill',
    color: 'tn-indigo-light',
    activeColor: 'tn-indigo',
  },
  {
    title: '步骤四',
    icon: 'safe',
    activeIcon: 'safe-fill',
    color: 'tn-orange-light',
    activeColor: 'tn-orange',
  },
]

// 上一步
const prevStep = () => {
  if (currentStepIndex.value < 0) {
    currentStepIndex.value = 3
    return
  }
  currentStepIndex.value--
}
// 下一步
const nextStep = () => {
  currentStepIndex.value++
  if (currentStepIndex.value > 3) {
    currentStepIndex.value = -1
    return
  }
}
</script>

<template>
  <CustomPage title="步骤条" :is-h5-demo-page="isDemoH5Page">
    <view
      class="steps-operation"
      :style="{ top: `${navBarInfo.height + 20}px` }"
    >
      <view class="prev">
        <TnButton size="lg" @click="prevStep">上一步</TnButton>
      </view>
      <view class="prev">
        <TnButton size="lg" @click="nextStep">下一步</TnButton>
      </view>
    </view>
    <view class="placeholder-top" />
    <DemoContainer title="基础使用">
      <view class="steps-container">
        <view class="steps-item">
          当前所在步骤: <text class="tn-gray_text">{{ currentStepIndex }}</text>
        </view>
        <view class="steps-item">
          <TnSteps v-model="currentStepIndex">
            <TnStepsItem
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
            />
          </TnSteps>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁止点击选中步骤">
      <view class="steps-container">
        <view class="steps-item">
          <TnSteps v-model="currentStepIndex" disabled>
            <TnStepsItem
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
            />
          </TnSteps>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="steps-container">
        <view class="steps-item">
          <TnSteps
            v-model="currentStepIndex"
            color="tn-teal-light"
            active-color="tn-teal"
          >
            <TnStepsItem
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
              :color="item?.color || ''"
              :active-color="item?.activeColor || ''"
            />
          </TnSteps>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="数值模式">
      <view class="steps-container">
        <view class="steps-item">
          <TnSteps v-model="currentStepIndex" mode="number">
            <TnStepsItem
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
            />
          </TnSteps>
        </view>
        <view class="steps-item">
          <TnSteps
            v-model="currentStepIndex"
            mode="number"
            color="tn-teal-light"
            active-color="tn-teal"
          >
            <TnStepsItem
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
              :color="item?.color || ''"
              :active-color="item?.activeColor || ''"
            />
          </TnSteps>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="点图标模式">
      <view class="steps-container">
        <view class="steps-item">
          <TnSteps v-model="currentStepIndex" mode="dotIcon">
            <TnStepsItem
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </TnSteps>
        </view>
        <view class="steps-item">
          <TnSteps
            v-model="currentStepIndex"
            mode="dotIcon"
            color="tn-teal-light"
            active-color="tn-teal"
          >
            <TnStepsItem
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
              :color="item?.color || ''"
              :active-color="item?.activeColor || ''"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </TnSteps>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="图标模式">
      <view class="steps-container">
        <view class="steps-item">
          <TnSteps v-model="currentStepIndex" mode="icon">
            <TnStepsItem
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </TnSteps>
        </view>
        <view class="steps-item">
          <TnSteps
            v-model="currentStepIndex"
            mode="icon"
            color="tn-teal-light"
            active-color="tn-teal"
          >
            <TnStepsItem
              v-for="(item, index) in stepsData"
              :key="index"
              :title="item.title"
              :color="item?.color || ''"
              :active-color="item?.activeColor || ''"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </TnSteps>
        </view>
        <view class="steps-item">
          <TnSteps
            v-model="currentStepIndex"
            mode="icon"
            color="tn-teal-light"
            active-color="tn-teal"
          >
            <TnStepsItem
              v-for="(item, index) in stepsData"
              :key="index"
              :color="item?.color || ''"
              :active-color="item?.activeColor || ''"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </TnSteps>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
