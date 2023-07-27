<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnTimeLine from 'tnuiv3p-tn-time-line/time-line.vue'
import TnTimeLineItem from 'tnuiv3p-tn-time-line/time-line-item.vue'
import TnTimeLineData from 'tnuiv3p-tn-time-line/time-line-data.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/info-pages/change-log/index',
})
const { isDemoH5Page } = useDemoH5Page()

interface ChangeLogData {
  date: string
  data: string[]
}
type ChangeLog = {
  [key: string]: ChangeLogData
}

const changeLog: ChangeLog = {
  '1.0.8': {
    date: '2023-07-26',
    data: [
      '修复`TnTabbar`在元素少于5个时凸起按钮无法正常显示的问题',
      '修复`TnDateTimePicker`和`TnRegionPicker`部分参数无效的问题',
      '修复`TnWaterFall`在`calc`模式下数据会被清空的问题',
    ],
  },
  '1.0.7': {
    date: '2023-07-25',
    data: [
      '完成支付宝小程序的支持',
      '`TnWaterFall`新增`reset`方法重置列表',
      '`TnGraphicCard`组件新增`more-click`事件',
      '`TnGraphicCard`组件事件名称统一修改为`-`连接，`avatarClick`->`avatar-click` \\ `viewClick` -> `view-click` \\ `commentClick` -> `comment-click` \\ `likeClick` -> `like-click`',
      '修复`TnWaterFall`在`data`为空时没有重置列表的问题',
      '修复`TnInput`在textarea模式下无法设置自动高度和指定高度的问题',
      '优化`TnCollapse`点击内容时阻止收起事件',
      '优化`TnBubbleBox`样式',
      '优化部分hooks的处理逻辑',
    ],
  },
  '1.0.6': {
    date: '2023-07-16',
    data: [
      '新增`TnSwiper`组件',
      '`TnImageUpload`组件新增`auto-remove-faild-file`属性，当上传失败时是否自动移除文件',
      '修复`TnLazyLoad`有默认背景，在现在透明图片时带了背景颜色的问题',
      '修复`TnRate`在一定条件下会返回Nan的问题',
      '修复`TnRate`配合`TnPopup`会获取容器信息失效的问题',
      '修复`TnNumberBox`在disabled状态下能点击的问题',
      '修复`TnNumberBox`在输入模式下输入的值大于最大值时回显失败的问题',
      '修复`TnDateTimePicker`在`time`下默认值不滚动到对应位置的问题',
      '修复`TnSearchBox` v-model 无法更新内部值的问题',
      '修复`TnSearchBox` 在内容为空时点击search无法触发事件的问题',
      '修复`TnEmpty`在自定义内容时无法正常显示的问题',
    ],
  },
  '1.0.5': {
    date: '2023-07-12',
    data: [
      '修改`step`组件名称为`steps-item`',
      '修复`TnNavbar`在透明度为0时，无法正常显示的问题',
      '修复`TnCalendar`选择日期范围后数据没有更新的问题',
    ],
  },
  '1.0.4': {
    date: '2023-07-07',
    data: [
      '新增`TnCountTo`组件',
      '新增`TnCountDown`组件',
      '`TnInput`新增`select` 的 `type`属性，支持`click`事件',
      '`TnSearchBox`新增点击键盘搜索触发事件`search`',
      '将 `ButtonInstance` 修改为 `TnButtonInstance`',
      '修复`TnInput`无法初始化和无法根据modelValue动态更新的问题',
      '修复`TnPicker`在在无法动态修改级联数据的问题',
      '修复`TnForm`校验无法通过的问题',
      '兼容TypeScript 5.0 以上的版本',
    ],
  },
  '1.0.2': {
    date: '2023-07-04',
    data: [
      '修复`TnTitle`无法在H5和APP环境下宽度不正确的问题',
      '修复`TnRate`无法全选的问题',
      '修复`TnCalendar`在App端下无法正常使用的问题',
    ],
  },
  '1.0.1': {
    date: '2023-07-02',
    data: [
      '修复`TnIcon`在app环境下无法正常使用的问题',
      '修复在app环境下无法正常获取容器的节点的信息的问题',
      '修复`TnTabs`初始化时滑块位置不正确的问题',
      '修复`TnSubsection`初始化时滑块位置不正确的问题',
      '修复`TnRate`点击时位置不对应的问题',
      '修复`TnIndexList`在app环境下无法正常使用的问题',
      '修复`TnWeekCalendar`周日历在app环境下无法正常使用的问题',
    ],
  },
  '1.0.0': {
    date: '2023-06-29',
    data: [
      '新增`TnActionSheet`组件',
      '新增`TnAvatar`、`TnAvatarGroup`组件',
      '新增`TnBadge`组件',
      '新增`TnButton`组件',
      '新增`TnCalendar`组件',
      '新增`TnCheckBox`、`TnCheckBoxGroup`组件',
      '新增`TnCollapse`组件',
      '新增`TnDateTimePicker`组件',
      '新增`TnEmpty`组件',
      '新增`TnForm`组件',
      '新增`TnIcon`组件',
      '新增`TnImageUpload`组件',
      '新增`TnInput`组件',
      '新增`TnLazyLoad`组件',
      '新增`TnList`组件',
      '新增`TnLoading`组件',
      '新增`TnModal`组件',
      '新增`TnNavbar`组件',
      '新增`TnNoticeBar`组件',
      '新增`TnNotify`组件',
      '新增`TnNumberBox`组件',
      '新增`TnOverlay`组件',
      '新增`TnPhotoAlbum`组件',
      '新增`TnPicker`组件',
      '新增`TnPopup`组件',
      '新增`TnProgress`组件',
      '新增`TnCircleProgress`组件',
      '新增`TnLineProgress`组件',
      '新增`TnRadio`组件',
      '新增`TnRate`组件',
      '新增`TnReadMore`组件',
      '新增`TnRegionPicker`组件',
      '新增`TnScrollList`组件',
      '新增`TnSlider`组件',
      '新增`TnSteps`组件',
      '新增`TnSticky`组件',
      '新增`TnSwipeAction`组件',
      '新增`TnSwitch`组件',
      '新增`TnTabbar`组件',
      '新增`TnTabs`组件',
      '新增`TnTitle`组件',
      '新增`TnWeekCalendar`组件',
      '新增`TnWaterFall`瀑布流组件',
      '新增`TnKeyboard`软键盘组件',
      '新增`TnSubsection`分段器组件',
      '新增`TnCountDown`倒计时组件',
      '新增`TnBubbleBox`气泡弹框组件',
      '新增`TnFooter`页脚组件',
      '新增`TnSearchBox`搜索框组件',
      '新增`TnIndexList`索引列表组件',
      '新增`TnGraphicCard`图文卡片组件',
      '新增`TnSwitchTab`选项卡切换组件',
    ],
  },
}
</script>

<template>
  <CustomPage title="更新日志" :is-h5-demo-page="isDemoH5Page">
    <TnTimeLine>
      <TnTimeLineItem
        v-for="(value, key, index) in changeLog"
        :key="index"
        title-icon="bookmark-fill"
      >
        <template #title>
          <view class="version-info">
            <view class="version" :class="[{ current: index === 0 }]">
              {{ key }}
            </view>
            <view class="date">({{ value.date }})</view>
          </view>
        </template>
        <TnTimeLineData
          v-for="(versionData, versionIndex) in value.data"
          :key="versionIndex"
        >
          <view class="update-content">
            {{ versionData }}
          </view>
        </TnTimeLineData>
      </TnTimeLineItem>
    </TnTimeLine>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
