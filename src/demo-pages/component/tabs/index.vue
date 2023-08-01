<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnTabs from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs.vue'
import TnTabsItem from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs-item.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/tabs/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 当前选中的标签索引
const currentTabsIndex = ref(0)

// 选项卡数据
const tabsData = [
  {
    text: '关注',
    badgeConfig: {
      value: 10,
    },
  },
  {
    text: '推荐',
    badgeConfig: {
      value: 20,
    },
  },
  {
    text: '热榜',
    badgeConfig: {
      dot: true,
    },
  },
  {
    text: '搞笑',
  },
  {
    text: '视频',
  },
  {
    text: '汽车科技',
  },
  {
    text: '手机科技',
  },
  {
    text: '音乐',
  },
  {
    text: '电影',
  },
  {
    text: '游戏',
  },
]

// 禁止滑动标签栏数据
const noScrollTabsData = [
  {
    text: '关注',
  },
  {
    text: '推荐',
  },
  {
    text: '热榜',
  },
  {
    text: '搞笑',
  },
]

// 切换拦截事件
const interceptSwitchEvent = (index: number) => {
  return new Promise<boolean>((resolve, reject) => {
    if (index === 1) {
      uni.showToast({
        title: '选择被拦截了，请选择其他标签',
        icon: 'none',
      })
      return reject()
    }
    resolve(true)
  })
}
</script>

<template>
  <CustomPage title="标签栏" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="tabs-container">
        <view class="tabs-item">
          当前选中的标签索引:
          <text class="tn-gray">{{ currentTabsIndex }}</text>
        </view>
        <view class="tabs-item">
          <TnTabs v-model="currentTabsIndex">
            <TnTabsItem
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
            />
          </TnTabs>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改尺寸">
      <view class="tabs-container">
        <view class="tabs-item">
          <TnTabs height="100" font-size="40" bar-width="60">
            <TnTabsItem
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
            />
          </TnTabs>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="tabs-container">
        <view class="tabs-item">
          <TnTabs
            bg-color="tn-gray-light"
            color="tn-grey-disabled"
            active-color="tn-grey"
            bar-color="tn-grey"
          >
            <TnTabsItem
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
              :active-color="index === 1 ? 'tn-red' : ''"
            />
          </TnTabs>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁止滑动">
      <view class="tabs-container">
        <view class="tabs-item">
          <TnTabs :scroll="false">
            <TnTabsItem
              v-for="(item, index) in noScrollTabsData"
              :key="index"
              :title="item.text"
            />
          </TnTabs>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏滑块">
      <view class="tabs-container">
        <view class="tabs-item">
          <TnTabs :bar="false">
            <TnTabsItem
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
            />
          </TnTabs>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="激活后不加粗字体">
      <view class="tabs-container">
        <view class="tabs-item">
          <TnTabs :active-bold="false">
            <TnTabsItem
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
            />
          </TnTabs>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置角标">
      <view class="tabs-container">
        <view class="tabs-item">
          <TnTabs>
            <TnTabsItem
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
              :badge-config="
                item?.badgeConfig === undefined ? {} : item.badgeConfig
              "
            />
          </TnTabs>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁止第二项选择">
      <view class="tabs-container">
        <view class="tabs-item">
          <TnTabs>
            <TnTabsItem
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
              :disabled="index === 1"
            />
          </TnTabs>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="拦截第二项选择">
      <view class="tabs-container">
        <view class="tabs-item">
          <TnTabs :before-switch="interceptSwitchEvent">
            <TnTabsItem
              v-for="(item, index) in tabsData"
              :key="index"
              :title="item.text"
            />
          </TnTabs>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
