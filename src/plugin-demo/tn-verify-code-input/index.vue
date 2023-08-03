<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnVerifyCodeInput from 'tnuiv3p-tn-verify-code-input/index.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import SubDemoContainer from '@/components/demo-container/src/sub-demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-verify-code-input/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 验证码的值
const codeValue = ref('')

const verifyCodeCompleteHandle = () => {
  uni.hideKeyboard()
  uni.showToast({
    title: '验证码输入完成',
    icon: 'none',
  })
}
</script>

<template>
  <CustomPage title="验证码输入" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="verify-code-input-container">
        <view class="verify-code-input-item">
          输入验证码的值:
          <text class="tn-gray_text">{{ codeValue }}</text>
        </view>
        <view class="verify-code-input-item tn-flex-center">
          <TnVerifyCodeInput
            v-model="codeValue"
            @complete="verifyCodeCompleteHandle"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置验证码长度">
      <view class="verify-code-input-container">
        <view class="verify-code-input-item tn-flex-center">
          <TnVerifyCodeInput :focus="false" :length="6" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏输入值">
      <view class="verify-code-input-container">
        <view class="verify-code-input-item tn-flex-center">
          <TnVerifyCodeInput :focus="false" password />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置验证码提示框大小">
      <view class="verify-code-input-container">
        <view class="verify-code-input-item tn-flex-center">
          <TnVerifyCodeInput :focus="false" width="120" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置提示框的类型">
      <SubDemoContainer title="边框">
        <view class="verify-code-input-container">
          <view class="verify-code-input-item tn-flex-center">
            <TnVerifyCodeInput :focus="false" input-type="border" />
          </view>
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="边框带竖线">
        <view class="verify-code-input-container">
          <view class="verify-code-input-item tn-flex-center">
            <TnVerifyCodeInput :focus="false" input-type="border-vline" />
          </view>
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="边框带横线">
        <view class="verify-code-input-container">
          <view class="verify-code-input-item tn-flex-center">
            <TnVerifyCodeInput :focus="false" input-type="border-hline" />
          </view>
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="底部横线">
        <view class="verify-code-input-container">
          <view class="verify-code-input-item tn-flex-center">
            <TnVerifyCodeInput :focus="false" input-type="bottom-hline" />
          </view>
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="居中横线">
        <view class="verify-code-input-container">
          <view class="verify-code-input-item tn-flex-center">
            <TnVerifyCodeInput :focus="false" input-type="middle-hline" />
          </view>
        </view>
      </SubDemoContainer>
      <SubDemoContainer title="居中竖线">
        <view class="verify-code-input-container">
          <view class="verify-code-input-item tn-flex-center">
            <TnVerifyCodeInput :focus="false" input-type="middle-vline" />
          </view>
        </view>
      </SubDemoContainer>
    </DemoContainer>
    <DemoContainer title="设置验证码提示框样式">
      <view class="verify-code-input-container">
        <view class="verify-code-input-item tn-flex-center">
          <TnVerifyCodeInput
            :focus="false"
            inactive-color="tn-blue-light"
            active-color="tn-blue"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
