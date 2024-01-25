<script lang="ts" setup>
import TnTabs from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs.vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnTabsItem from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs-item.vue'
import TnSearchBox from '@tuniao/tnui-vue3-uniapp/components/search-box/src/search-box.vue'
import { useIcon } from './composables'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/basic/icon/index',
})
const { isDemoH5Page } = useDemoH5Page()

const {
  dataTitleId,
  navBarInfo,
  tabsData,
  currentTabsIndex,
  filterResponseData,
  tabsChange,
  onSearchInput,
  copyIconName,
} = useIcon()
</script>

<template>
  <CustomPage
    title="图标"
    padding="0"
    :navbar-frosted="false"
    :navbar-bottom-shadow="false"
    :is-h5-demo-page="isDemoH5Page"
  >
    <!-- 图标分类 -->
    <view class="icon-category" :style="{ top: `${navBarInfo.height}px` }">
      <TnTabs v-model="currentTabsIndex" @change="tabsChange">
        <TnTabsItem
          v-for="(item, index) in tabsData"
          :key="index"
          :name="index"
          :title="item"
        />
      </TnTabs>
    </view>

    <!-- 搜索框 -->
    <view
      class="icon-search-box tn-white_bg tn-shadow"
      :style="{ top: `${navBarInfo.height + 50}px` }"
    >
      <TnSearchBox
        placeholder="搜索 中文 / 英文 名称"
        shape="round"
        text-align="center"
        :border="false"
        :search-button="false"
        :clearable="false"
        @input="onSearchInput"
      />
    </view>

    <!-- 图标数据展示 -->
    <view class="icon-show-container">
      <view
        v-for="(item, index) in filterResponseData"
        :key="index"
        class="icon-data"
      >
        <view
          :id="`${dataTitleId}-${index}`"
          class="data-title icon-show-container__data-title"
        >
          <view class="title-icon">
            <TnIcon name="font" />
          </view>
          <view class="title-value">{{ item.name }}</view>
          <view class="title-icon">
            <TnIcon name="font" />
          </view>
        </view>
        <view class="icon-list">
          <view
            v-for="(iconItem, iconIndex) in item.icons"
            :key="iconIndex"
            class="icon-item tn-shadow"
            @tap.stop="copyIconName(iconItem.icon)"
          >
            <view class="icon-item__content">
              <view class="icon">
                <TnIcon :name="iconItem.icon" />
              </view>
              <view class="value tn-text-ellipsis-1 tn-grey_text">
                {{ iconItem.icon }}
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
