<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnCalendar from '@tuniao/tnui-vue3-uniapp/components/calendar/src/calendar.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import TnPopup from '@tuniao/tnui-vue3-uniapp/components/popup/src/popup.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/calendar/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 日历的值
const baseCalendarValue = ref('')
const lunarCalendarValue = ref('')

// 多选日期
const multiCalendarValue = ref<string[]>(['2023/06/20', '2023/06/21'])

// 选择时间范围
const rangeCalendarValue = ref<string[]>(['2023/06/01', '2023/07/30'])

// 修改颜色和文案
const customColorCalendarValue = ref('')
const customColorRangeCalendarValue = ref<string[]>([
  '2023/06/01',
  '2023/07/30',
])

// 在弹出框中选择日期
const popupCalendarValue = ref('')
const showCalendarPopup = ref(false)
const openCalendarPopup = () => {
  showCalendarPopup.value = true
}
const closeCalendarPopup = () => {
  showCalendarPopup.value = false
}
</script>

<template>
  <CustomPage title="日历" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="calendar-container">
        <view class="calendar-item">
          当前选中的日期:
          <text class="tn-gray_text">{{ baseCalendarValue }}</text>
        </view>
        <view class="calendar-item">
          <TnCalendar v-model="baseCalendarValue" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="显示农历">
      <view class="calendar-container">
        <view class="calendar-item">
          <TnCalendar v-model="lunarCalendarValue" show-lunar />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="多选日期">
      <view class="calendar-container">
        <view class="calendar-item">
          当前选中的日期:
          <text class="tn-gray_text item-value">
            [{{ multiCalendarValue.join(',') }}]
          </text>
        </view>
        <view class="calendar-item">
          <TnCalendar
            v-model="multiCalendarValue"
            mode="multi"
            min-date="2023/06/01"
            max-date="2023/06/30"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="选择日期范围">
      <view class="calendar-container">
        <view class="calendar-item">
          当前选中的日期:
          <text class="tn-gray_text item-value">
            [{{ rangeCalendarValue.join(',') }}]
          </text>
        </view>
        <view class="calendar-item">
          <TnCalendar
            v-model="rangeCalendarValue"
            mode="range"
            min-date="2023/05/01"
            max-date="2023/10/01"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改选中的颜色">
      <view class="calendar-container">
        <view class="calendar-item">
          <TnCalendar
            v-model="customColorCalendarValue"
            active-bg-color="tn-orangered"
            active-text-color="tn-gray-disabled"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改选中的颜色和文案">
      <view class="calendar-container">
        <view class="calendar-item">
          <TnCalendar
            v-model="customColorRangeCalendarValue"
            mode="range"
            min-date="2023/05/01"
            max-date="2023/10/01"
            active-bg-color="tn-orangered"
            active-text-color="tn-gray-disabled"
            range-bg-color="tn-orangered-light"
            range-start-desc="入场"
            range-end-desc="离场"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="配合popup使用">
      <view class="calendar-container">
        <view class="calendar-item">
          当前选中的日期:
          <text class="tn-gray_text">{{ popupCalendarValue }}</text>
        </view>
        <view class="calendar-item">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openCalendarPopup"
          >
            选择日期
          </TnButton>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>

  <TnPopup v-model="showCalendarPopup" open-direction="bottom">
    <view class="tn-pt">
      <TnCalendar v-model="popupCalendarValue" />
    </view>
    <view class="tn-mt tn-w-full tn-pb">
      <TnButton
        font-size="36"
        custom-class="popup-calendar-button"
        @click="closeCalendarPopup"
      >
        选择所选日期
      </TnButton>
    </view>
  </TnPopup>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>

<style lang="scss">
/* 弹框日期样式 start */
.popup-calendar-button {
  margin: 0rpx 30rpx;
  width: calc(100% - 60rpx) !important;
  padding: 20rpx 30rpx !important;
}
/* 弹框日期样式 end */
</style>
