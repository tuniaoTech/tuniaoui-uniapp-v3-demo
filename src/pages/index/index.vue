<script setup lang="ts">
import { computed, nextTick, provide, reactive, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useOrderedChildren } from '@tuniao/tnui-vue3-uniapp/hooks'

import TnTabbar from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar.vue'
import TnTabbarItem from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar-item.vue'

import BasicPage from './sub-page/basic/basic.vue'
import ComponentsPage from './sub-page/components/components.vue'
import TemplatePage from './sub-page/template/template.vue'
import AboutPage from './sub-page/about/about.vue'

import type { CSSProperties } from 'vue'
import type { IndexSubPageContext } from '@/tokens'
import { indexPageContextKey } from '@/tokens'

const {
  children: items,
  addChild: addItem,
  removeChild: removeItem,
} = useOrderedChildren<IndexSubPageContext>()

// 底部导航栏数据
const tabbarData = [
  { text: '基础', icon: 'assign', activeIcon: 'assign-fill' },
  { text: '组件', icon: 'menu-more', activeIcon: 'menu-more-fill' },
  { text: '模板', icon: 'menu-match', activeIcon: 'menu-match-fill' },
  { text: '图鸟', icon: 'logo-tuniao', activeIcon: 'logo-tuniao' },
]
// 导航切换事件
const onTabbarChange = (index: string | number) => {
  currentTabbarIndex.value = index as number
  if (!pageStatus.value?.[index as number]) {
    pageStatus.value[index as number] = true
    nextTick(() => {
      items.value?.[index as number]?.onLoad?.()
    })
  }

  items.value?.[index as number]?.onShow?.()
}

// 记录每个子页面的状态
const pageStatus = ref(Array.from({ length: tabbarData.length }, () => false))

// 当前选中的子页面的索引
const currentTabbarIndex = ref<number>(0)

// pageContainer的样式
const pageContainerStyle = computed<(index: number) => CSSProperties>(() => {
  return (index: number) => {
    const style: CSSProperties = {}

    if (index !== currentTabbarIndex.value) {
      style.display = 'none'
    }

    return style
  }
})

onLoad((options: any) => {
  // 获取当前进入的子页面的索引
  const index = options?.index || 0
  // 设置当前子页面的状态为true
  pageStatus.value[index] = true
})

provide(
  indexPageContextKey,
  reactive({
    items,
    addItem,
    removeItem,
  })
)
</script>

<template>
  <!-- 虚拟首页 -->
  <view class="page">
    <view
      v-if="pageStatus[0]"
      class="page__container"
      :style="pageContainerStyle(0)"
    >
      <scroll-view class="scroll-view" scroll-y>
        <BasicPage />
      </scroll-view>
    </view>
    <view
      v-if="pageStatus[1]"
      class="page__container"
      :style="pageContainerStyle(1)"
    >
      <scroll-view class="scroll-view" scroll-y>
        <ComponentsPage />
      </scroll-view>
    </view>
    <view
      v-if="pageStatus[2]"
      class="page__container"
      :style="pageContainerStyle(2)"
    >
      <scroll-view class="scroll-view" scroll-y>
        <TemplatePage />
      </scroll-view>
    </view>
    <view
      v-if="pageStatus[3]"
      class="page__container"
      :style="pageContainerStyle(3)"
    >
      <scroll-view class="scroll-view" scroll-y>
        <AboutPage />
      </scroll-view>
    </view>
  </view>
  <TnTabbar fixed @change="onTabbarChange">
    <TnTabbarItem
      v-for="(item, index) in tabbarData"
      :key="index"
      :name="index"
      :text="item.text"
      :icon="item.icon"
      :active-icon="item.activeIcon"
    />
  </TnTabbar>
</template>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
