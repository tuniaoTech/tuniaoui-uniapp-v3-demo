<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnRadio from '@tuniao/tnui-vue3-uniapp/components/radio/src/radio.vue'
import TnRadioGroup from '@tuniao/tnui-vue3-uniapp/components/radio/src/radio-group.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/radio/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 当前的选中状态
const radioSelectStatus = ref(false)
// 用户选中的值
const userSelectValue = ref('男')

// 单选值
const radioValue1 = ref('')
const radioValue2 = ref('')
const radioValue3 = ref('')
const radioValue4 = ref('')
const radioValue5 = ref('')
</script>

<template>
  <CustomPage title="单选框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="radio-container">
        <view class="radio-item">
          单选框选中状态:
          <text class="tn-gray_text">
            {{ radioSelectStatus ? '已选中' : '未选中' }}
          </text>
        </view>
        <view class="radio-item">
          <TnRadio v-model="radioSelectStatus" :label="true">
            满300减50
          </TnRadio>
        </view>
        <view class="radio-item">
          当前选中的值:
          <text class="tn-gray_text">
            {{ userSelectValue || '未选择' }}
          </text>
        </view>
        <view class="radio-item">
          <TnRadioGroup v-model="userSelectValue">
            <TnRadio label="男"> 男 </TnRadio>
            <TnRadio label="女"> 女 </TnRadio>
            <TnRadio label="保密"> 保密 </TnRadio>
          </TnRadioGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁止点击标签选择">
      <view class="radio-container">
        <view class="radio-item">
          <TnRadioGroup v-model="radioValue1" label-disabled>
            <TnRadio label="男"> 男 </TnRadio>
            <TnRadio label="女"> 女 </TnRadio>
            <TnRadio label="保密"> 保密 </TnRadio>
          </TnRadioGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="显示边框">
      <view class="radio-container">
        <view class="radio-item">
          <TnRadioGroup v-model="radioValue2" border>
            <TnRadio label="男"> 男 </TnRadio>
            <TnRadio label="女"> 女 </TnRadio>
            <TnRadio label="保密"> 保密 </TnRadio>
          </TnRadioGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置尺寸">
      <view class="radio-container">
        <view class="radio-item">
          <TnRadioGroup v-model="radioValue3" size="sm">
            <TnRadio label="男"> 男 </TnRadio>
            <TnRadio label="女"> 女 </TnRadio>
            <TnRadio label="保密"> 保密 </TnRadio>
          </TnRadioGroup>
        </view>
        <view class="radio-item">
          <TnRadioGroup v-model="radioValue3" size="sm" border>
            <TnRadio label="男"> 男 </TnRadio>
            <TnRadio label="女"> 女 </TnRadio>
            <TnRadio label="保密"> 保密 </TnRadio>
          </TnRadioGroup>
        </view>
        <view class="radio-item">
          <TnRadioGroup v-model="radioValue3" size="lg">
            <TnRadio label="男"> 男 </TnRadio>
            <TnRadio label="女"> 女 </TnRadio>
            <TnRadio label="保密"> 保密 </TnRadio>
          </TnRadioGroup>
        </view>
        <view class="radio-item">
          <TnRadioGroup v-model="radioValue3" size="lg" border>
            <TnRadio label="男"> 男 </TnRadio>
            <TnRadio label="女"> 女 </TnRadio>
            <TnRadio label="保密"> 保密 </TnRadio>
          </TnRadioGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置颜色">
      <view class="radio-container">
        <view class="radio-item">
          <TnRadioGroup v-model="radioValue4" active-color="tn-blue">
            <TnRadio label="男"> 男 </TnRadio>
            <TnRadio label="女" active-color="tn-orangered"> 女 </TnRadio>
            <TnRadio label="保密" active-color="tn-gray"> 保密 </TnRadio>
          </TnRadioGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="内容显示在左边">
      <view class="radio-container">
        <view class="radio-item">
          <TnRadioGroup v-model="radioValue5">
            <TnRadio label="男">
              <template #left>
                <view class="custom-left-radio">
                  <TnIcon name="sex-male" />
                </view>
              </template>
            </TnRadio>
            <TnRadio label="女">
              <template #left>
                <view class="custom-left-radio">
                  <TnIcon name="sex-female" />
                </view>
              </template>
            </TnRadio>
          </TnRadioGroup>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
