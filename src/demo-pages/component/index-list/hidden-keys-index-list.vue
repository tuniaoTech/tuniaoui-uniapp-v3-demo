<script lang="ts" setup>
import TnIndexList from '@tuniao/tnui-vue3-uniapp/components/index-list/src/index-list.vue'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'

import { useGenerateListData } from './composables'
import IndexListItem from './components/index-list-item.vue'

import CustomPage from '@/components/custom-page/src/custom-page.vue'

const { navBarInfo, systemScreenInfo } = useUniAppSystemRectInfo()
const { listData } = useGenerateListData()
</script>

<template>
  <CustomPage
    title="基础索引列表"
    padding="0"
    :navbar-placeholder="false"
    :bottom-more-space="false"
    only-back
  >
    <TnIndexList
      :data="listData"
      :sticky-offset-top="navBarInfo.height"
      :height="systemScreenInfo.height"
      :show-keys-list="false"
      title-bg-color="tn-grey-light"
    >
      <template #default="{ data }">
        <IndexListItem
          :avatar="data.avatar"
          :nickname="data.nickname"
          :department="data.department"
        />
      </template>
    </TnIndexList>
  </CustomPage>
</template>

<style lang="scss" scoped></style>
