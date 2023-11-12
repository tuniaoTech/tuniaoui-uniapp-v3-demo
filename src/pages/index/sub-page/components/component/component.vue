<script lang="ts" setup>
import TnDemoPageContainer from '../page-container/src/page-container.vue'
import { useComponent } from './composables'

import type { PageContainerData } from '../page-container'

useComponent()

const topSwiperData = [
  'https://resource.tuniaokj.com/images/vue3/banner/vue3-2-min.jpg',
]

const pageData: PageContainerData = {
  布局组件: {
    data: [
      {
        title: '列表',
        icon: 'rocket',
        path: 'list',
        url: '/demo-pages/component/list/index',
      },
      {
        title: '吸顶',
        icon: 'rocket',
        path: 'sticky',
        url: '/demo-pages/component/sticky/index',
      },
      {
        title: '折叠面板',
        icon: 'rocket',
        path: 'collapse',
        url: '/demo-pages/component/collapse/index',
      },
      {
        title: '瀑布流',
        icon: 'rocket',
        path: 'water-fall',
        url: '/demo-pages/component/water-fall/index',
      },
      {
        title: '分段器',
        icon: 'rocket',
        path: 'subsection',
        url: '/demo-pages/component/subsection/index',
      },
      {
        title: '搜索框',
        icon: 'rocket',
        path: 'search-box',
        url: '/demo-pages/component/search-box/index',
      },
      {
        title: '选项卡切换',
        icon: 'rocket',
        path: 'switch-tabs',
        url: '/demo-pages/component/switch-tabs/index',
      },
      {
        title: '横向滚动',
        icon: 'rocket',
        path: 'scroll-list',
        url: '/demo-pages/component/scroll-list/index',
      },
    ],
  },
  反馈组件: {
    data: [
      {
        title: '弹出框',
        icon: 'rocket',
        path: 'popup',
        url: '/demo-pages/component/popup/index',
      },
      {
        title: '模态框',
        icon: 'rocket',
        path: 'modal',
        url: '/demo-pages/component/modal/index',
      },
      {
        title: '消息通知',
        icon: 'rocket',
        path: 'notify',
        url: '/demo-pages/component/notify/index',
      },
      {
        title: '通知栏',
        icon: 'rocket',
        path: 'notice-bar',
        url: '/demo-pages/component/notice-bar/index',
      },
      {
        title: '操作菜单',
        icon: 'rocket',
        path: 'action-sheet',
        url: '/demo-pages/component/action-sheet/index',
      },
      {
        title: '气泡弹框',
        icon: 'rocket',
        path: 'bubble-box',
        url: '/demo-pages/component/bubble-box/index',
      },
      {
        title: '遮罩层',
        icon: 'rocket',
        path: 'overlay',
        url: '/demo-pages/component/overlay/index',
      },
      {
        title: '滑动菜单',
        icon: 'rocket',
        path: 'swipe-action',
        url: '/demo-pages/component/swipe-action/index',
      },
    ],
  },
  导航组件: {
    data: [
      {
        title: '顶部导航栏',
        icon: 'rocket',
        path: 'navbar',
        url: '/demo-pages/component/navbar/index',
      },
      {
        title: '底部导航栏',
        icon: 'rocket',
        path: 'tabbar',
        url: '/demo-pages/component/tabbar/index',
      },
      {
        title: '标签页',
        icon: 'rocket',
        path: 'tabs',
        url: '/demo-pages/component/tabs/index',
      },
      {
        title: '步骤条',
        icon: 'rocket',
        path: 'steps',
        url: '/demo-pages/component/steps/index',
      },
      {
        title: '索引列表',
        icon: 'rocket',
        path: 'index-list',
        url: '/demo-pages/component/index-list/index',
      },
    ],
  },
  表单组件: {
    data: [
      {
        title: '表单',
        icon: 'rocket',
        path: 'form',
        url: '/demo-pages/component/form/index',
      },
      {
        title: '输入框',
        icon: 'rocket',
        path: 'input',
        url: '/demo-pages/component/input/index',
      },
      {
        title: '步进器',
        icon: 'rocket',
        path: 'number-box',
        url: '/demo-pages/component/number-box/index',
      },
      {
        title: '单选框',
        icon: 'rocket',
        path: 'radio',
        url: '/demo-pages/component/radio/index',
      },
      {
        title: '复选框',
        icon: 'rocket',
        path: 'checkbox',
        url: '/demo-pages/component/checkbox/index',
      },
      {
        title: 'Switch开关',
        icon: 'rocket',
        path: 'switch',
        url: '/demo-pages/component/switch/index',
      },
      {
        title: '滑动条',
        icon: 'rocket',
        path: 'slider',
        url: '/demo-pages/component/slider/index',
      },
      {
        title: 'Picker选择器',
        icon: 'rocket',
        path: 'picker',
        url: '/demo-pages/component/picker/index',
      },
      {
        title: '日期时间选择器',
        icon: 'rocket',
        path: 'date-time-picker',
        url: '/demo-pages/component/date-time-picker/index',
      },
      {
        title: '地区选择器',
        icon: 'rocket',
        path: 'region-picker',
        url: '/demo-pages/component/region-picker/index',
      },
      {
        title: '图片上传',
        icon: 'rocket',
        path: 'image-upload',
        url: '/demo-pages/component/image-upload/index',
      },
      {
        title: '评分',
        icon: 'rocket',
        path: 'rate',
        url: '/demo-pages/component/rate/index',
      },
      {
        title: '日历',
        icon: 'rocket',
        path: 'calendar',
        url: '/demo-pages/component/calendar/index',
      },
      {
        title: '周日历',
        icon: 'rocket',
        path: 'week-calendar',
        url: '/demo-pages/component/week-calendar/index',
      },
    ],
  },
  数据展示: {
    data: [
      {
        title: '进度条',
        icon: 'rocket',
        path: 'progress',
        url: '/demo-pages/component/progress/index',
      },
      {
        title: '倒计时',
        icon: 'rocket',
        path: 'count-down',
        url: '/demo-pages/component/count-down/index',
      },
      {
        title: '加载图标',
        icon: 'rocket',
        path: 'loading',
        url: '/demo-pages/component/loading/index',
      },
      {
        title: '加载更多',
        icon: 'rocket',
        path: 'loadmore',
        url: '/demo-pages/component/loadmore/index',
      },
      {
        title: '空白页',
        icon: 'rocket',
        path: 'empty',
        url: '/demo-pages/component/empty/index',
      },
      {
        title: '数字跳转',
        icon: 'rocket',
        path: 'count-to',
        url: '/demo-pages/component/count-to/index',
      },
      {
        title: '数字滚动',
        icon: 'rocket',
        path: 'count-scroll',
        url: '/demo-pages/component/count-scroll/index',
      },
    ],
  },
  内容展示: {
    data: [
      {
        title: '阅读更多',
        icon: 'rocket',
        path: 'read-more',
        url: '/demo-pages/component/read-more/index',
      },
      {
        title: '相册',
        icon: 'rocket',
        path: 'photo-album',
        url: '/demo-pages/component/photo-album/index',
      },
      {
        title: '轮播图',
        icon: 'rocket',
        path: 'swiper',
        url: '/demo-pages/component/swiper/index',
      },
    ],
  },
  拓展组件: {
    data: [
      {
        title: '软键盘',
        icon: 'rocket',
        path: 'keyboard',
        url: '/demo-pages/component/keyboard/index',
      },
      {
        title: '懒加载',
        icon: 'rocket',
        path: 'lazy-load',
        url: '/demo-pages/component/lazy-load/index',
      },
    ],
  },
  插件: {
    tips: '以下均为独立组件，需要通过安装才可进行使用，具体说明请查看官方说明文档',
    data: [
      {
        title: '签名板',
        icon: 'rocket',
        path: 'tn-sign-board',
        url: '/plugin-demo/tn-sign-board/index',
      },
      {
        title: '时间轴',
        icon: 'rocket',
        path: 'tn-time-line',
        url: '/plugin-demo/tn-time-line/index',
      },
      {
        title: '验证码输入',
        icon: 'rocket',
        path: 'tn-verify-code-input',
        url: '/plugin-demo/tn-verify-code-input/index',
      },
      {
        title: '评论列表',
        icon: 'rocket',
        path: 'tn-comment-list',
        url: '/plugin-demo/tn-comment-list/index',
      },
      {
        title: '酷炫图标',
        icon: 'rocket',
        path: 'tn-cool-icon',
        url: '/plugin-demo/tn-cool-icon/index',
      },
      {
        title: '图文卡片',
        icon: 'rocket',
        path: 'tn-graphic-card',
        url: '/plugin-demo/tn-graphic-card/index',
      },
      {
        title: '下拉框',
        icon: 'rocket',
        path: 'tn-dropdown',
        url: '/plugin-demo/tn-dropdown/index',
      },
      {
        title: '标签选择',
        icon: 'rocket',
        path: 'tn-select-tags',
        url: '/plugin-demo/tn-select-tags/index',
      },
      {
        title: '隐私弹框',
        icon: 'rocket',
        path: 'tn-privacy-popup-box',
        url: '/plugin-demo/tn-privacy-popup-box/index',
      },
      {
        title: '堆叠轮播',
        icon: 'rocket',
        path: 'tn-stack-swiper',
        url: '/plugin-demo/tn-stack-swiper/index',
      },
      {
        title: '颜色选择器',
        icon: 'rocket',
        path: 'tn-color-select',
        url: '/plugin-demo/tn-color-select/index',
      },
      {
        title: '图片裁剪框',
        icon: 'rocket',
        path: 'tn-image-crop',
        url: '/plugin-demo/tn-image-crop/index',
      },
      {
        title: '悬浮按钮',
        icon: 'rocket',
        path: 'tn-suspend-button',
        url: '/plugin-demo/tn-suspend-button/index',
      },
      {
        title: '幻灯片',
        icon: 'rocket',
        path: 'tn-slideshow',
        url: '/plugin-demo/tn-slideshow/index',
      },
      {
        title: '用户信息弹框',
        icon: 'rocket',
        path: 'tn-update-user-info-popup',
        url: '/plugin-demo/tn-update-user-info-popup/index',
      },
    ],
  },
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
