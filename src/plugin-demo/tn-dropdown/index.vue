<script lang="ts" setup>
import { computed, ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnDropDown from 'tnuiv3p-tn-dropdown/index.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

type SelectOrderConditionDataItem = {
  title: string
  condition: string
  select: boolean
}

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-dropdown/index',
})
const { isDemoH5Page } = useDemoH5Page()

const openDropdown = ref<boolean>(false)
const dropdownItemIndex = ref<number>(-1)
const priceSort = ref<'up' | 'down'>('up')

const selectOrderConditionData = ref<SelectOrderConditionDataItem[]>([
  {
    title: '综合推荐',
    condition: '综合推荐',
    select: true,
  },
  {
    title: '评论',
    condition: '评论数从高到低',
    select: false,
  },
])
const orderConditionTitle = computed<string>(
  () => selectOrderConditionData.value.find((item) => item.select)?.title || ''
)

// 下拉框菜单选项点击事件
const dropdownMenuItemClickHandle = (index: number) => {
  dropdownItemIndex.value = index
  switch (index) {
    case 0:
      openDropdown.value = true
      break
    case 1:
      uni.showToast({
        icon: 'none',
        title: '按照销量排序',
      })
      break
    case 2:
      if (priceSort.value === 'up') {
        priceSort.value = 'down'
        uni.showToast({
          icon: 'none',
          title: '按照价格降序排序',
        })
      } else {
        priceSort.value = 'up'
        uni.showToast({
          icon: 'none',
          title: '按照价格升序排序',
        })
      }
      break
  }
}

// 排序条件选择事件
const sortConditionSelectHandle = (index: number) => {
  selectOrderConditionData.value.forEach((item, i) => {
    if (index === i) item.select = true
    else item.select = false
  })
  openDropdown.value = false
}
</script>

<template>
  <CustomPage title="下拉框" padding="0" :is-h5-demo-page="isDemoH5Page">
    <view class="dropdown-container">
      <TnDropDown v-model:open="openDropdown">
        <template #menu>
          <view class="dropdown-menu">
            <view
              class="dropdown-menu-item"
              @tap.stop="dropdownMenuItemClickHandle(0)"
            >
              <view class="text">{{ orderConditionTitle }}</view>
              <view class="icon" :class="[{ active: openDropdown }]">
                <TnIcon name="down-triangle" />
              </view>
            </view>
            <view
              class="dropdown-menu-item"
              :class="[{ 'tn-red_text': dropdownItemIndex === 1 }]"
              @tap.stop="dropdownMenuItemClickHandle(1)"
            >
              销量
            </view>
            <view
              class="dropdown-menu-item"
              @tap.stop="dropdownMenuItemClickHandle(2)"
            >
              <view class="text">价格</view>
              <view class="double-icon">
                <view
                  class="top"
                  :class="[{ 'tn-red_text': priceSort === 'up' }]"
                >
                  <TnIcon name="up-triangle" />
                </view>
                <view
                  class="bottom"
                  :class="[{ 'tn-red_text': priceSort === 'down' }]"
                >
                  <TnIcon name="down-triangle" />
                </view>
              </view>
            </view>
          </view>
        </template>

        <view class="dropdown-content">
          <view class="recommend-list">
            <view
              v-for="(item, index) in selectOrderConditionData"
              :key="index"
              class="recommend-list-item"
              @tap.stop="sortConditionSelectHandle(index)"
            >
              <view v-if="item.select" class="item-select-icon tn-red_text">
                <TnIcon name="check" />
              </view>
              <view class="item-text">{{ item.condition }}</view>
            </view>
          </view>
        </view>
      </TnDropDown>
    </view>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
