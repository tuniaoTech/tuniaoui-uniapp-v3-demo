<script lang="ts" setup>
import TnIndexList from '@tuniao/tnui-vue3-uniapp/components/index-list/src/index-list.vue'

import { useGenerateListData } from './composables'
import IndexListItem from './components/index-list-item.vue'

import CustomPage from '@/components/custom-page/src/custom-page.vue'

const { listData } = useGenerateListData()
</script>

<template>
  <CustomPage title="固定高度索引列表" padding="0" only-back>
    <view class="fix-height-container tn-gray-light_bg">
      <TnIndexList :data="listData" :height="650">
        <template #default="{ data }">
          <IndexListItem
            :avatar="data.avatar"
            :nickname="data.nickname"
            :department="data.department"
          />
        </template>
      </TnIndexList>
    </view>
  </CustomPage>
</template>

<style lang="scss" scoped>
.fix-height-container {
  height: 650px;
  margin-top: 80rpx;
}
</style>
