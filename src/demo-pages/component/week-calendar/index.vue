<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnWeekCalendar from '@tuniao/tnui-vue3-uniapp/components/week-calendar/src/week-calendar.vue'

import type { WeekCalendarCustomData } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/week-calendar/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 周日历的值
const baseWeekCalendarValue = ref<number>()

// 指定年份和月份
const setYearMonthCalendarValue1 = ref<number>(20)
const setYearMonthCalendarValue2 = ref<number>(20)

// 设置最小最大日期
const setMinAndMaxCalendarValue = ref<number>(10)

// 自定义日历颜色
const customColorCalendarValue = ref<number>(10)

// 自定义日期下面的数据
const calendarData: WeekCalendarCustomData[] = [
  { date: 11, desc: '已签' },
  { date: 12, desc: '漏签' },
  { date: 13, desc: '已签' },
]
const customDataCalendarValue = ref<number>(13)
</script>

<template>
  <CustomPage title="周日历" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="week-calendar-container">
        <view class="week-calendar-item">
          <TnWeekCalendar v-model="baseWeekCalendarValue" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="指定年月周日历">
      <view class="week-calendar-container">
        <view class="week-calendar-item">
          <text class="tn-gray_text tn-mb-sm">2023/02</text>
          <TnWeekCalendar
            v-model="setYearMonthCalendarValue1"
            year="2023"
            month="2"
          />
        </view>
        <view class="week-calendar-item">
          <text class="tn-gray_text tn-mb-sm">2024/02</text>
          <TnWeekCalendar
            v-model="setYearMonthCalendarValue2"
            year="2024"
            month="2"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置最小最大日期">
      <view class="week-calendar-container">
        <view class="week-calendar-item">
          <TnWeekCalendar
            v-model="setMinAndMaxCalendarValue"
            :min-date="5"
            :max-date="20"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义颜色">
      <view class="week-calendar-container">
        <view class="week-calendar-item">
          <TnWeekCalendar
            v-model="customColorCalendarValue"
            :min-date="1"
            :max-date="20"
            active-bg-color="tn-orangeyellow"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义数据">
      <view class="week-calendar-container">
        <view class="week-calendar-item">
          <TnWeekCalendar
            v-model="customDataCalendarValue"
            :min-date="13"
            :max-date="20"
            :custom-data="calendarData"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
