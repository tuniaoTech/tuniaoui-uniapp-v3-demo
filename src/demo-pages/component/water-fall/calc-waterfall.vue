<script lang="ts" setup>
import TnWaterFall from '@tuniao/tnui-vue3-uniapp/components/water-fall/src/water-fall.vue'
import { useGenerateImageData } from './composables'

import WaterFallItem from './components/water-fall-item/index.vue'

import CustomPage from '@/components/custom-page/src/custom-page.vue'

const { imageData } = useGenerateImageData()
</script>

<template>
  <CustomPage title="计算瀑布流" only-back>
    <TnWaterFall :data="imageData" mode="calc">
      <template #left="{ item }">
        <WaterFallItem :url="item.url" />
      </template>
      <template #right="{ item }">
        <WaterFallItem :url="item.url" />
      </template>
    </TnWaterFall>
  </CustomPage>
</template>

<style lang="scss" scoped></style>
