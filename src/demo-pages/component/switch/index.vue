<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnSwitch from '@tuniao/tnui-vue3-uniapp/components/switch/src/switch.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/switch/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 开关的状态
const switchStatus = ref(false)

// 开关状态的值
const switchValue1 = ref<number>(0)
const switchValue2 = ref(false)
const switchValue3 = ref(false)
const switchValue4 = ref(false)
const switchValue5 = ref(false)
const switchValue6 = ref(false)

// 拦截切换开关状态
const interceptSwitchValue = ref(false)
const interceptSwitchLoading = ref(false)
const interceptBeforeSwitch = () => {
  interceptSwitchLoading.value = true
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      uni.showToast({
        title: '权限不足，请联系管理员',
        icon: 'none',
      })
      interceptSwitchLoading.value = false
      reject()
    }, 2000)
  })
}
</script>

<template>
  <CustomPage title="开关" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="switch-container">
        <view class="switch-item">
          开关状态:
          <text class="tn-gray_text">
            {{ switchStatus ? '开' : '关' }}
          </text>
        </view>
        <view class="switch-item tn-flex">
          <view>
            <TnSwitch v-model="switchStatus" />
          </view>
          <view class="tn-ml">
            <TnSwitch v-model="switchStatus" shape="square" />
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改激活和非激活时的值">
      <view class="switch-container">
        <view class="switch-item">
          开关不同状态的值:
          <text class="tn-gray_text">
            {{ switchValue1 }}
          </text>
        </view>
        <view class="switch-item">
          <TnSwitch
            v-model="switchValue1"
            :inactive-value="0"
            active-value="1"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="加载中开关">
      <view class="switch-container">
        <view class="switch-item">
          <TnSwitch v-model="switchValue2" loading />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置激活和非激活时显示的文本">
      <view class="switch-container">
        <view class="switch-item">
          <TnSwitch
            v-model="switchValue3"
            inactive-text="关闭"
            active-text="打开"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置激活和非激活时显示的图标">
      <view class="switch-container">
        <view class="switch-item">
          <TnSwitch
            v-model="switchValue4"
            inactive-icon="lock"
            active-icon="unlock"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改开关尺寸">
      <view class="switch-container">
        <view class="switch-item">
          <TnSwitch v-model="switchValue5" size="sm" />
        </view>
        <view class="switch-item">
          <TnSwitch v-model="switchValue5" size="lg" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改开关颜色样式">
      <view class="switch-container">
        <view class="switch-item">
          <TnSwitch
            v-model="switchValue6"
            active-color="tn-red"
            inactive-color="tn-gray"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="切换拦截">
      <view class="switch-container">
        <view class="switch-item">
          <TnSwitch
            v-model="interceptSwitchValue"
            :loading="interceptSwitchLoading"
            :before-change="interceptBeforeSwitch"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
