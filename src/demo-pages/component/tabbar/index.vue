<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnTabbar from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar.vue'
import TnTabbarItem from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar-item.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/tabbar/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 当前选中的导航索引
const currentTabbarIndex = ref<number>(0)

// 普通菜单数据
const normalTabbarData = [
  { text: '基础', icon: 'assign', activeIcon: 'assign-fill' },
  {
    text: '组件',
    icon: 'menu-more',
    activeIcon: 'menu-more-fill',
    badge: '99+',
  },
  { text: 'vip', icon: 'vip', activeIcon: 'vip-fill' },
  { text: '模板', icon: 'menu-match', activeIcon: 'menu-match-fill' },
  {
    text: '图鸟',
    icon: 'logo-tuniao',
    activeIcon: 'logo-tuniao',
    badge: 'new',
  },
]

// 多彩菜单数据
const colorTabbarData = [
  {
    text: '基础',
    icon: 'assign',
    activeIcon: 'assign-fill',
    activeColor: 'tn-indigo',
  },
  {
    text: '组件',
    icon: 'menu-more',
    activeIcon: 'menu-more-fill',
    activeColor: 'tn-teal',
  },
  {
    text: '模板',
    icon: 'menu-match',
    activeIcon: 'menu-match-fill',
    activeColor: 'tn-blue',
  },
  {
    text: '图鸟',
    icon: 'logo-tuniao',
    activeIcon: 'logo-tuniao',
    activeColor: 'tn-aquablue',
  },
]

// tabbar切换拦截
const interceptTabbarSwitch = (index: number) => {
  return new Promise<boolean>((resolve, reject) => {
    if (index === 1) {
      uni.showToast({
        title: '拦截导航切换',
        icon: 'none',
      })
      return reject()
    }
    resolve(true)
  })
}
</script>

<template>
  <CustomPage title="底部导航栏" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="tabbar-container">
        <view class="tabbar-item">
          当前选中的导航索引:
          <text class="tn-gray_text">{{ currentTabbarIndex }}</text>
        </view>
        <view class="tabbar-item">
          <TnTabbar
            v-model="currentTabbarIndex"
            :z-index="1"
            :safe-area-inset-bottom="false"
          >
            <TnTabbarItem
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </TnTabbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <view class="tabbar-container">
        <view class="tabbar-item">
          <TnTabbar
            height="110"
            icon-size="50"
            font-size="26"
            :z-index="1"
            :safe-area-inset-bottom="false"
          >
            <TnTabbarItem
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </TnTabbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="tabbar-container">
        <view class="tabbar-item">
          <TnTabbar
            inactive-color="tn-grey-light"
            :z-index="1"
            :safe-area-inset-bottom="false"
          >
            <TnTabbarItem
              v-for="(item, index) in colorTabbarData"
              :key="index"
              :text="item.text"
              :icon="item.icon"
              :active-icon="item.activeIcon"
              :active-color="item.activeColor"
            />
          </TnTabbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="中间凸起导航栏">
      <view class="tabbar-container">
        <view class="tabbar-item">
          <TnTabbar :z-index="1" :safe-area-inset-bottom="false">
            <TnTabbarItem
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :bulge="index === 2"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </TnTabbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="带切换缩放动画">
      <view class="tabbar-container">
        <view class="tabbar-item">
          <TnTabbar
            switch-animation
            :z-index="1"
            :safe-area-inset-bottom="false"
          >
            <TnTabbarItem
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </TnTabbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="拦截第二项导航菜单">
      <view class="tabbar-container">
        <view class="tabbar-item">
          <TnTabbar
            :before-switch="interceptTabbarSwitch"
            :z-index="1"
            :safe-area-inset-bottom="false"
          >
            <TnTabbarItem
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :icon="item.icon"
              :active-icon="item.activeIcon"
            />
          </TnTabbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁止第二项菜单选择">
      <view class="tabbar-container">
        <view class="tabbar-item">
          <TnTabbar :z-index="1" :safe-area-inset-bottom="false">
            <TnTabbarItem
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :icon="item.icon"
              :active-icon="item.activeIcon"
              :disabled="index === 1"
            />
          </TnTabbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="固定并显示毛玻璃效果底部导航栏">
      <view class="tabbar-container">
        <view class="tabbar-item">
          <TnTabbar fixed frosted>
            <TnTabbarItem
              v-for="(item, index) in normalTabbarData"
              :key="index"
              :text="item.text"
              :icon="item.icon"
              :active-icon="item.activeIcon"
              :badge="item?.badge || ''"
              :badge-config="{
                dot: index === 4,
              }"
            />
          </TnTabbar>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
