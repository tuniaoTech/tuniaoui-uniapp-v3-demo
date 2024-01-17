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
  '1.0.20': {
    date: '2024-01-16[node版本]',
    data: [
      '修复`TnInput`在`select`模式下`H5`端无法点击的问题',
      '修复`TnInput`在`textarea`模式下无法换行的问题',
      '修复`TnInput`在`number`模式下手动删除数据会出现`NaN`的问题',
      '修复`TnTabbar`无法初始化选择`TabbarItem`的问题',
      '修复`TnInput`在`textarea`模式下初始化值的时候无法统计字数的问题',
      '修复`TnPopup`初始化时会触发`close`和`open`方法的问题',
      '`TnDateTimePicker` `mode`新增`datetimeNoSecond`和`timeNoSecond`模式',
      '`TnButton`新增`click-modifiers`参数设置点击事件的修饰符',
      '`TnInput`新增`underline`参数',
    ],
  },
  '1.0.17': {
    date: '2023-12-28',
    data: [
      '修复`TnTabs`设置`active-font-size`无效的问题',
      '修复`TnPicker`不选择后直接点击确认会报错的问题',
      '修复`TnCountDown`无法动态修改倒计时的问题',
      '`TnButton`新增`getRealtimePhoneNumber`type类型',
      '`TnButton`新增`phoneNumberNoQuotaToast`参数',
      '`TnButton`新增`getrealtimephonenumber`事件',
      '`TnButton`新增`contact`事件',
    ],
  },
  '1.0.16': {
    date: '2023-11-13',
    data: [
      '修复`TnTabs`组件修改了尺寸后滑块位置不正确的问题',
      '修复`TnCalendar`在APP下切换年份后月份切换会失败的问题',
      '修复`TnLazyLoad`无法显示加载中的问题',
      '修复`TnPicker`value值为0时无法正常显示的问题',
      '修复`TnNotify`修改颜色失败的问题',
      '修复`TnTabs`在支付宝小程序端出错的问题',
      '优化`TnTabbar`突起按钮的样式',
      '优化`TnSwiper`样式',
      '优化`TnPicker`返回的原始数据',
    ],
  },
  '1.0.15': {
    date: '2023-10-30',
    data: [
      '修复`TnInput`配合`TnFormItem`时无法隐藏校验状态的问题',
      '修复`TnInput`无法处理number类型的数值的问题',
      '修复`TnTabbar`无法初始化`v-model`的问题',
      '修复`TnPopup`无法触发`open`事件的问题',
      '修复`TnNoticeBar`在垂直滚动时设置`font-size`高度无效的问题',
      '修复`TnImageUpload`无法预览图片的问题',
      '优化`TnImageUpload`内置信息显示控制参数',
      '优化`TnPicker`超过长度的文本显示省略号',
      '`TnInput`中`confirm-type`新增参数',
      '新增图标',
    ],
  },
  '1.0.14': {
    date: '2023-10-07',
    data: [
      '修复`TnNavbar`无法初始化的问题',
      '修复`TnWeekCalendar`动态修改`custom-data`后没有同步渲染的问题',
      '修复无法识别`vw`和`vh`单位',
      '优化`TnImageUpload`组件上传图片的进度样式',
    ],
  },
  '1.0.13': {
    date: '2023-09-13',
    data: [
      '修复`TnPopup`在结合部份组件一起使用的时候会闪烁的问题',
      '修复`TnPopup`在初始化时为`true`时无法弹出弹框的问题',
      '`TnWaterFall`插槽返回值中新增`index`属性返回当前元素的索引',
      '`TnNavbar`新增`right-operation-width`参数设置右边操作区域的宽度，配合`right`插槽实现自定义右边显示的内容',
      '`TnTabs`、`TnTabsItem`新增`active-font-size``参数设置激活时的字体大小',
      '`TnButton`新增`getUserInfo`、`chooseAvatar`、`agreePrivacyAuthorization`的open-type类型支持',
      '`TnNoticeBar`新增`left-icon-size`和`right-icon-size`参数设置左右图标的大小',
      '`TnSwiper`新增`blank-count`参数创建空白swiper参数',
      '优化`TnImageUpload`、`TnCheckBox`、`TnRadio`样式',
      '优化`TnButton`样式',
      '优化`TnAvatar`、`TnButton`组件的点击事件',
      '优化`TnIndexList`数据类型',
    ],
  },
  '1.0.11': {
    date: '2023-08-23',
    data: [
      '修复`TnFormItem`在没有`label`是会报错的问题',
      '修复`TnTabbarItem`的`bulge-bg-color`属性无效的问题',
      '修复`TnDateTimePicker`动态修改最小最大时间后picker数据没有发生改变的问题',
      '`TnTabbarItem`新增`name`属性可以设置唯一标识',
      '`TnTabbarItem`新增`badge`和`badge-config`属性设置和配置角标',
      '`TnTabsItem`新增`name`属性可以设置唯一标识',
      '`TnImageUpload`新增`upload`方法用于手动上传图片',
      '`TnButton`新增`only-button`参数设置按钮为纯按钮，不外加任何样式',
      '`TnDateTimePicker`新增`format`参数格式化回显的日期时间',
      '`TnDateTimePicker`新增`init-current-date-time`参数是否在初始化时为空时设置为当前时间',
      '`TnInput`新增`show-word-limit`和`word-limit-color`属性显示字数统计以及设置字数统计颜色',
      '`TnPicker`、`TnDateTimePicker`、`TnRegionPicker`组件取消之后不会自动恢复到上一次的位置',
      '优化`TnNoticeBar`样式',
    ],
  },
  '1.0.9': {
    date: '2023-08-03',
    data: [
      '修复在部份情况下组件会编译到全局目录下的问题',
      '修复`TnPicker`点击取消后值依旧发生改变的问题',
      '修复`TnTabbar`无法设置图标大小的问题',
      '修复`TnAvatarGroup`下的`TnAvatar`初始化失败的问题',
      '修复`TnButton` `border-color`无法设置为内置颜色外的其他颜色的问题',
      '修复`TnButton` `border-bold`无效的问题',
      '`TnPicker` `change`和`confirm`事件新增返回传递的数据',
      '`TnRegionPicker` `change`和`confirm`事件新增返回具体地区的数据',
      '`TnSwiper`新增`previous-margin`和`next-margin`属性',
      '`TnTabs`新增`active-bold`参数设置激活时是否加粗字体',
      '优化`TnPopup`弹出/隐藏动画',
      '删除`TnGraphicCard`组件，以第三方组件的形式提供',
    ],
  },
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
