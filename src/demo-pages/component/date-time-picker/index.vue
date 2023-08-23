<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnDateTimePicker from '@tuniao/tnui-vue3-uniapp/components/date-time-picker/src/date-time-picker.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/date-time-piacker/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 选择年月日
const dateDateTimePickerValue = ref('')
const showDateDateTimePicker = ref(false)
const openDateDateTimePicker = () => {
  showDateDateTimePicker.value = true
}

// 选择年月
const yearMonthDateTimePickerValue = ref('')
const showYearMonthDateTimePicker = ref(false)
const openYearMonthDateTimePicker = () => {
  showYearMonthDateTimePicker.value = true
}

// 选择时间
const timeDateTimePickerValue = ref('')
const showTimeDateTimePicker = ref(false)
const openTimeDateTimePicker = () => {
  showTimeDateTimePicker.value = true
}

// 选择日期时间
const dateTimeDateTimePickerValue = ref('')
const showDateTimeDateTimePicker = ref(false)
const openDateTimeDateTimePicker = () => {
  showDateTimeDateTimePicker.value = true
}

// 选择格式化后日期时间
const formatDateTimeDateTimePickerValue = ref('')
const showFormatDateTimeDateTimePicker = ref(false)
const openFormatDateTimeDateTimePicker = () => {
  showFormatDateTimeDateTimePicker.value = true
}
</script>

<template>
  <CustomPage title="日期时间选择器" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="选择年月日">
      <view class="date-time-picker-container">
        <view class="date-time-picker-item">
          当前选中的日期时间:
          <text class="tn-gray_text">
            {{ dateDateTimePickerValue }}
          </text>
        </view>
        <view class="date-time-picker-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openDateDateTimePicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="选择年月">
      <view class="date-time-picker-container">
        <view class="date-time-picker-item">
          当前选中的日期时间:
          <text class="tn-gray_text">
            {{ yearMonthDateTimePickerValue }}
          </text>
        </view>
        <view class="date-time-picker-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openYearMonthDateTimePicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="选择时间">
      <view class="date-time-picker-container">
        <view class="date-time-picker-item">
          当前选中的日期时间:
          <text class="tn-gray_text">
            {{ timeDateTimePickerValue }}
          </text>
        </view>
        <view class="date-time-picker-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openTimeDateTimePicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="选择日期时间">
      <view class="date-time-picker-container">
        <view class="date-time-picker-item">
          当前选中的日期时间:
          <text class="tn-gray_text">
            {{ dateTimeDateTimePickerValue }}
          </text>
        </view>
        <view class="date-time-picker-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openDateTimeDateTimePicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="选择格式化日期时间">
      <view class="date-time-picker-container">
        <view class="date-time-picker-item">
          当前选中的日期时间:
          <text class="tn-gray_text">
            {{ formatDateTimeDateTimePickerValue }}
          </text>
        </view>
        <view class="date-time-picker-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openFormatDateTimeDateTimePicker"
          >
            打开选择器
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <view class="fit-height" />
  </CustomPage>

  <!-- 选择日期选择器 -->
  <TnDateTimePicker
    v-model="dateDateTimePickerValue"
    v-model:open="showDateDateTimePicker"
    mode="date"
    min-time="2020/10/02"
    max-time="2024/12/02"
  />

  <!-- 选择年月选择器 -->
  <TnDateTimePicker
    v-model="yearMonthDateTimePickerValue"
    v-model:open="showYearMonthDateTimePicker"
    mode="yearmonth"
    min-time="2020/10"
    max-time="2023/12"
  />

  <!-- 选择时间选择器 -->
  <TnDateTimePicker
    v-model="timeDateTimePickerValue"
    v-model:open="showTimeDateTimePicker"
    mode="time"
    min-time="04:30:10"
    max-time="12:40:20"
  />

  <!-- 选择日期时间选择器 -->
  <TnDateTimePicker
    v-model="dateTimeDateTimePickerValue"
    v-model:open="showDateTimeDateTimePicker"
    mode="datetime"
    min-time="2020/10/02 12:40:20"
    max-time="2023/12/02 10:30:10"
  />

  <!-- 选择格式化日期时间选择器 -->
  <TnDateTimePicker
    v-model="formatDateTimeDateTimePickerValue"
    v-model:open="showFormatDateTimeDateTimePicker"
    mode="datetime"
    min-time="2020-10-02 12:40"
    max-time="2023-12-02 10:30"
    format="YYYY-MM-DD HH:mm"
  />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
