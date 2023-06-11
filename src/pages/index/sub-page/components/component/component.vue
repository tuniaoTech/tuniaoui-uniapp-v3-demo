<script lang="ts" setup>
import TnDemoPageContainer from '../page-container/src/page-container.vue'
import { useComponent } from './composables'

import type { PageContainerData } from '../page-container'

useComponent()

const topSwiperData = [
  'https://tnuiimage.tnkjapp.com/vue3_demo/image/index-page/top-swiper/1-image.jpg',
]

const pageData: PageContainerData = {
  布局组件: [
    {
      title: '列表',
      icon: 'signpost',
      path: 'list',
      url: '/demo-pages/component/list/index',
    },
    {
      title: '吸顶',
      icon: 'signpost',
      path: 'sticky',
      url: '/demo-pages/component/sticky/index',
    },
    {
      title: '折叠面板',
      icon: 'signpost',
      path: 'collapse',
      url: '/demo-pages/component/collapse/index',
    },
    {
      title: '瀑布流',
      icon: 'signpost',
      path: 'water-fall',
      url: '/demo-pages/component/water-fall/index',
    },
    {
      title: '分段器',
      icon: 'signpost',
      path: 'subsection',
      url: '/demo-pages/component/subsection/index',
    },
    {
      title: '搜索框',
      icon: 'signpost',
      path: 'search-box',
      url: '/demo-pages/component/search-box/index',
    },
    {
      title: '选项卡切换',
      icon: 'signpost',
      path: 'switch-card',
      url: '/demo-pages/component/switch-card/index',
    },
  ],
  反馈组件: [
    {
      title: '弹出框',
      icon: 'signpost',
      path: 'popup',
      url: '/demo-pages/component/popup/index',
    },
    {
      title: '模态框',
      icon: 'signpost',
      path: 'modal',
      url: '/demo-pages/component/modal/index',
    },
    {
      title: '消息通知',
      icon: 'signpost',
      path: 'notify',
      url: '/demo-pages/component/notify/index',
    },
    {
      title: '通知栏',
      icon: 'signpost',
      path: 'notice-bar',
      url: '/demo-pages/component/notice-bar/index',
    },
    {
      title: '操作菜单',
      icon: 'signpost',
      path: 'action-sheet',
      url: '/demo-pages/component/action-sheet/index',
    },
    {
      title: '气泡弹框',
      icon: 'signpost',
      path: 'bubble-box',
      url: '/demo-pages/component/bubble-box/index',
    },
    {
      title: '遮罩层',
      icon: 'signpost',
      path: 'overlay',
      url: '/demo-pages/component/overlay/index',
    },
    {
      title: '滑动菜单',
      icon: 'signpost',
      path: 'swiper-action',
      url: '/demo-pages/component/swiper-action/index',
    },
  ],
  导航组件: [
    {
      title: '顶部导航栏',
      icon: 'signpost',
      path: 'navbar',
      url: '/demo-pages/component/navbar/index',
    },
    {
      title: '底部导航栏',
      icon: 'signpost',
      path: 'tabbar',
      url: '/demo-pages/component/tabbar/index',
    },
    {
      title: '标签页',
      icon: 'signpost',
      path: 'tabs',
      url: '/demo-pages/component/tabs/index',
    },
    {
      title: '步骤条',
      icon: 'signpost',
      path: 'steps',
      url: '/demo-pages/component/steps/index',
    },
    {
      title: '索引列表',
      icon: 'signpost',
      path: 'index-list',
      url: '/demo-pages/component/index-list/index',
    },
  ],
  表单组件: [
    {
      title: '表单',
      icon: 'signpost',
      path: 'form',
      url: '/demo-pages/component/form/index',
    },
    {
      title: '输入框',
      icon: 'signpost',
      path: 'input',
      url: '/demo-pages/component/input/index',
    },
    {
      title: '步进器',
      icon: 'signpost',
      path: 'number-box',
      url: '/demo-pages/component/number-box/index',
    },
    {
      title: '单选框',
      icon: 'signpost',
      path: 'radio',
      url: '/demo-pages/component/radio/index',
    },
    {
      title: '复选框',
      icon: 'signpost',
      path: 'checkbox',
      url: '/demo-pages/component/checkbox/index',
    },
    {
      title: 'Switch开关',
      icon: 'signpost',
      path: 'switch',
      url: '/demo-pages/component/switch/index',
    },
    {
      title: '滑动条',
      icon: 'signpost',
      path: 'slider',
      url: '/demo-pages/component/slider/index',
    },
    {
      title: 'Picker选择器',
      icon: 'signpost',
      path: 'picker',
      url: '/demo-pages/component/picker/index',
    },
    {
      title: '日期时间选择器',
      icon: 'signpost',
      path: 'date-time-picker',
      url: '/demo-pages/component/date-time-picker/index',
    },
    {
      title: '地区选择器',
      icon: 'signpost',
      path: 'region-picker',
      url: '/demo-pages/component/region-picker/index',
    },
    {
      title: '图片上传',
      icon: 'signpost',
      path: 'image-upload',
      url: '/demo-pages/component/image-upload/index',
    },
    {
      title: '评分',
      icon: 'signpost',
      path: 'rate',
      url: '/demo-pages/component/rate/index',
    },
    {
      title: '日历',
      icon: 'signpost',
      path: 'calendar',
      url: '/demo-pages/component/calendar/index',
    },
    {
      title: '周日历',
      icon: 'signpost',
      path: 'week-calendar',
      url: '/demo-pages/component/week-calendar/index',
    },
  ],
  数据展示: [
    {
      title: '进度条',
      icon: 'signpost',
      path: 'progress',
      url: '/demo-pages/component/progress/index',
    },
    {
      title: '倒计时',
      icon: 'signpost',
      path: 'count-down',
      url: '/demo-pages/component/count-down/index',
    },
    {
      title: '加载图标',
      icon: 'signpost',
      path: 'loading',
      url: '/demo-pages/component/loading/index',
    },
    {
      title: '加载更多',
      icon: 'signpost',
      path: 'loadmore',
      url: '/demo-pages/component/loadmore/index',
    },
    {
      title: '空白页',
      icon: 'signpost',
      path: 'empty',
      url: '/demo-pages/component/empty/index',
    },
  ],
  内容展示: [
    {
      title: '阅读更多',
      icon: 'signpost',
      path: 'read-more',
      url: '/demo-pages/component/read-more/index',
    },
    {
      title: '相册',
      icon: 'signpost',
      path: 'photo-album',
      url: '/demo-pages/component/photo-album/index',
    },
    {
      title: '标题',
      icon: 'signpost',
      path: 'title',
      url: '/demo-pages/component/title/index',
    },
    {
      title: '页脚',
      icon: 'signpost',
      path: 'footer',
      url: '/demo-pages/component/footer/index',
    },
    {
      title: '图文卡片',
      icon: 'signpost',
      path: 'graphic-card',
      url: '/demo-pages/component/graphic-card/index',
    },
  ],
  拓展组件: [
    {
      title: '软键盘',
      icon: 'signpost',
      path: 'keyboard',
      url: '/demo-pages/component/keyboard/index',
    },
  ],
}
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<template>
  <TnDemoPageContainer :top-swiper-data="topSwiperData" :data="pageData" />
</template>

<style lang="scss" scoped></style>
