<script setup lang="ts">
  import { ref } from 'vue'
  import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
  import TnTabbar from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar.vue'
  import TnTabbarItem from '@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar-item.vue'
  import TnNotify from '@tuniao/tnui-vue3-uniapp/components/notify/src/notify.vue'

  import type { TnNotifyInstance } from '@tuniao/tnui-vue3-uniapp'

  const notifyRef = ref<TnNotifyInstance>()

  const counter = ref(0)
  const addCounter = () => {
    counter.value++
  }

  const tabbarChangeEvent = (index: string | number) => {
    notifyRef.value?.show({
      msg: `当前选中的是第${index}个Tab`,
    })
  }
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <view class="counter">Current Counter: {{ counter }}</view>
    </view>
    <view class="operation">
      <TnButton type="primary" @click="addCounter">Add Counter Value</TnButton>
    </view>
    <TnTabbar fixed @change="tabbarChangeEvent">
      <TnTabbarItem text="首页" icon="home" active-icon="home-fill" />
      <TnTabbarItem text="我的" icon="my" active-icon="my-fill" />
    </TnTabbar>
  </view>

  <TnNotify ref="notifyRef" />
</template>

<style lang="scss" scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .counter {
    font-size: 36rpx;
  }

  .operation {
    margin-top: 50rpx;
  }
</style>
