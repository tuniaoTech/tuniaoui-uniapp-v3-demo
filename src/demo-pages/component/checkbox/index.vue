<script lang="ts" setup>
import { computed, ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnCheckbox from '@tuniao/tnui-vue3-uniapp/components/checkbox/src/checkbox.vue'
import TnCheckboxGroup from '@tuniao/tnui-vue3-uniapp/components/checkbox/src/checkbox-group.vue'

import type { CheckboxValueType } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/checkbox/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 是否同意协议
const agent = ref(false)
// 当前选中的值
const currentSelectValue = ref<string[]>([])
// 判断当前是否全部选中
const isAllChecked = computed<boolean>(
  () => currentSelectValue.value.length === 3
)
// 全选按钮点击事件
const isAllCheckedChange = (value: CheckboxValueType) => {
  if (value) {
    currentSelectValue.value = ['凶姐太漂亮了', 'UI太酷炫', '响应快']
  } else {
    currentSelectValue.value = []
  }
}

// 复选框的值
const checkboxValue1 = ref([])
const checkboxValue2 = ref([])
const checkboxValue3 = ref([])
const checkboxValue4 = ref([])
const checkboxValue5 = ref([])
const checkboxValue6 = ref([])
</script>

<template>
  <CustomPage title="复选框 - 使用图鸟的理由" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="checkbox-container">
        <view class="checkbox-item">
          当前项是否被选中:
          <text class="tn-gray_text">
            {{ agent ? '同意协议' : '不同意协议' }}
          </text>
        </view>
        <view class="checkbox-item">
          <TnCheckbox v-model="agent">
            <text class="tn-gray_text" style="line-height: 1">
              同意协议
              <text class="tn-type-primary_text">《图鸟UI使用协议》</text>
            </text>
          </TnCheckbox>
        </view>
        <view class="checkbox-item">
          当前已选的值:
          <text class="tn-gray_text">
            {{ currentSelectValue.join(',') }}
          </text>
        </view>
        <view class="checkbox-item">
          <view>
            <TnCheckbox
              :model-value="isAllChecked"
              checked-shape="circle"
              :indeterminate="!isAllChecked && currentSelectValue.length > 0"
              @change="isAllCheckedChange"
            >
              <text class="tn-black_text">全选</text>
            </TnCheckbox>
          </view>
          <TnCheckboxGroup v-model="currentSelectValue">
            <TnCheckbox label="凶姐太漂亮了">凶姐太漂亮</TnCheckbox>
            <TnCheckbox label="UI太酷炫">UI太酷炫</TnCheckbox>
            <TnCheckbox label="响应快">响应快</TnCheckbox>
          </TnCheckboxGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改复选框的形状">
      <view class="checkbox-container">
        <view class="checkbox-item">
          <TnCheckboxGroup v-model="currentSelectValue" checked-shape="circle">
            <TnCheckbox label="凶姐太漂亮了">凶姐太漂亮</TnCheckbox>
            <TnCheckbox label="UI太酷炫">UI太酷炫</TnCheckbox>
            <TnCheckbox label="响应快">响应快</TnCheckbox>
          </TnCheckboxGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置允许选择的最大数量">
      <view class="checkbox-container">
        <view class="checkbox-item">
          <TnCheckboxGroup v-model="checkboxValue1" :max="2">
            <TnCheckbox label="凶姐太漂亮了">凶姐太漂亮</TnCheckbox>
            <TnCheckbox label="UI太酷炫">UI太酷炫</TnCheckbox>
            <TnCheckbox label="响应快">响应快</TnCheckbox>
          </TnCheckboxGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁止点击标签">
      <view class="checkbox-container">
        <view class="checkbox-item">
          <TnCheckboxGroup v-model="checkboxValue2" label-disabled>
            <TnCheckbox label="凶姐太漂亮了">凶姐太漂亮</TnCheckbox>
            <TnCheckbox label="UI太酷炫">UI太酷炫</TnCheckbox>
            <TnCheckbox label="响应快">响应快</TnCheckbox>
          </TnCheckboxGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="显示边框">
      <view class="checkbox-container">
        <view class="checkbox-item">
          <TnCheckboxGroup v-model="checkboxValue3" border>
            <TnCheckbox label="凶姐太漂亮了">凶姐太漂亮</TnCheckbox>
            <TnCheckbox label="UI太酷炫">UI太酷炫</TnCheckbox>
            <TnCheckbox label="响应快">响应快</TnCheckbox>
          </TnCheckboxGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="复选框尺寸">
      <view class="checkbox-container">
        <view class="checkbox-item">
          <TnCheckboxGroup v-model="checkboxValue4" size="sm">
            <TnCheckbox label="凶姐太漂亮了">凶姐太漂亮</TnCheckbox>
            <TnCheckbox label="UI太酷炫">UI太酷炫</TnCheckbox>
            <TnCheckbox label="响应快">响应快</TnCheckbox>
          </TnCheckboxGroup>
        </view>
        <view class="checkbox-item">
          <TnCheckboxGroup v-model="checkboxValue4" size="sm" border>
            <TnCheckbox label="凶姐太漂亮了">凶姐太漂亮</TnCheckbox>
            <TnCheckbox label="UI太酷炫">UI太酷炫</TnCheckbox>
            <TnCheckbox label="响应快">响应快</TnCheckbox>
          </TnCheckboxGroup>
        </view>
        <view class="checkbox-item">
          <TnCheckboxGroup v-model="checkboxValue4" size="lg">
            <TnCheckbox label="凶姐太漂亮了">凶姐太漂亮</TnCheckbox>
            <TnCheckbox label="UI太酷炫">UI太酷炫</TnCheckbox>
            <TnCheckbox label="响应快">响应快</TnCheckbox>
          </TnCheckboxGroup>
        </view>
        <view class="checkbox-item">
          <TnCheckboxGroup v-model="checkboxValue4" size="lg" border>
            <TnCheckbox label="凶姐太漂亮了">凶姐太漂亮</TnCheckbox>
            <TnCheckbox label="UI太酷炫">UI太酷炫</TnCheckbox>
            <TnCheckbox label="响应快">响应快</TnCheckbox>
          </TnCheckboxGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="checkbox-container">
        <view class="checkbox-item">
          <TnCheckboxGroup v-model="checkboxValue5" active-color="tn-blue">
            <TnCheckbox label="凶姐太漂亮了" active-color="tn-red">
              凶姐太漂亮
            </TnCheckbox>
            <TnCheckbox label="UI太酷炫">UI太酷炫</TnCheckbox>
            <TnCheckbox label="响应快" active-color="#3646ff">
              响应快
            </TnCheckbox>
          </TnCheckboxGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="内容显示在左边">
      <view class="checkbox-container">
        <view class="checkbox-item">
          <TnCheckboxGroup v-model="checkboxValue6">
            <TnCheckbox label="凶姐太漂亮了">
              <template #left> 凶姐太漂亮 </template>
            </TnCheckbox>
            <TnCheckbox label="UI太酷炫">
              <template #left> UI太酷炫 </template>
            </TnCheckbox>
            <TnCheckbox label="响应快">
              <template #left> 响应快 </template>
            </TnCheckbox>
          </TnCheckboxGroup>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
