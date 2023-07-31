<script lang="ts" setup>
import TnDemoPageContainer from '../page-container/src/page-container.vue'
import { useBasic } from './composables'

import type { PageContainerData } from '../page-container'

useBasic()

const topSwiperData = [
  'https://resource.tuniaokj.com/images/vue3/banner/vue3-1-min.jpg',
]

const pageData: PageContainerData = {
  基础: {
    data: [
      {
        title: '配色',
        icon: 'gloves',
        path: 'color',
        url: '/demo-pages/basic/color/index',
      },
      {
        title: '图标',
        icon: 'font',
        path: 'icon',
        url: '/demo-pages/basic/icon/index',
      },
      {
        title: '边框',
        icon: 'square',
        path: 'border',
        url: '/demo-pages/basic/border/index',
      },
      {
        title: '阴影',
        icon: 'copy-fill',
        path: 'shadow',
        url: '/demo-pages/basic/shadow/index',
      },
      {
        title: 'Flex布局',
        icon: 'menu-more',
        path: 'flex',
        url: '/demo-pages/basic/flex/index',
      },
      {
        title: '标题',
        icon: 'bankcard',
        path: 'title',
        url: '/demo-pages/basic/title/index',
      },
      {
        title: '按钮',
        icon: 'circle-fill',
        path: 'button',
        url: '/demo-pages/basic/button/index',
      },
      {
        title: '标签',
        icon: 'tag',
        path: 'tag',
        url: '/demo-pages/basic/tag/index',
      },
      {
        title: '徽标',
        icon: 'moon',
        path: 'badge',
        url: '/demo-pages/basic/badge/index',
      },
      {
        title: '头像',
        icon: 'emoji-good',
        path: 'avatar',
        url: '/demo-pages/basic/avatar/index',
      },
      {
        title: '页脚',
        icon: 'rocket',
        path: 'footer',
        url: '/demo-pages/basic/footer/index',
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
  <TnDemoPageContainer
    :top-swiper-data="topSwiperData"
    :data="pageData"
    :show-title="false"
  />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
