<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnModal from '@tuniao/tnui-vue3-uniapp/components/modal/src/modal.vue'
import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'

import type { TnModalInstance } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/modal/index',
})
const { isDemoH5Page } = useDemoH5Page()

// modalRef对象
const modalRef = ref<TnModalInstance>()

// 默认模态框
const openNormalModal = () => {
  modalRef.value?.showModal({
    title: '删除数据',
    content: '是否删除数据，删除后将无法恢复，请谨慎操作',
    confirm: () => {
      uni.showToast({
        title: '删除成功',
        icon: 'none',
      })
    },
  })
}

// 显示取消选项
const openCancelModal = () => {
  modalRef.value?.showModal({
    title: '加入会员',
    content: '是否加入会员，加入会员后，可享受更多模板',
    showCancel: true,
    cancelText: '暂不加入',
    confirmText: '立即加入',
    confirm: () => {
      uni.showToast({
        title: '加入成功',
        icon: 'none',
      })
    },
    cancel: () => {
      uni.showToast({
        title: '已取消',
        icon: 'none',
      })
    },
  })
}

// 显示修改样式后的模态框
const openCustomStyleModal = () => {
  modalRef.value?.showModal({
    title: '加入会员',
    content: '是否加入会员，加入会员后，可享受更多模板',
    showCancel: true,
    cancelText: '暂不加入',
    confirmText: '立即加入',
    confirmStyle: {
      bgColor: 'tn-type-success',
    },
    cancelStyle: {
      bgColor: 'tn-gray-disabled',
      color: 'tn-white',
    },
    confirm: () => {
      uni.showToast({
        title: '加入成功',
        icon: 'none',
      })
    },
    cancel: () => {
      uni.showToast({
        title: '已取消',
        icon: 'none',
      })
    },
  })
}

// 打开带拦截的模态框
const openInterceptModal = () => {
  modalRef.value?.showModal({
    title: '加入会员',
    content: '是否加入会员，加入会员后，可享受更多模板',
    confirmText: '立即加入',
    maskClosable: true, // 点击遮罩允许关闭，防止被拦截后无法关闭弹框
    confirm: () => {
      return new Promise((resolve, reject) => {
        // 这里可以进行判断操作
        uni.showToast({
          title: '加入失败，请联系管理员',
          icon: 'none',
        })
        reject()
      })
    },
  })
}
</script>

<template>
  <CustomPage title="模态框" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="modal-container tn-flex tn-flex-wrap">
        <view class="modal-item line">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openNormalModal"
          >
            默认模态框
          </TnButton>
        </view>
        <view class="modal-item line">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-1"
            text-color="tn-white"
            @click="openCancelModal"
          >
            显示取消选项
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改按钮样式">
      <view class="modal-container tn-flex tn-flex-wrap">
        <view class="modal-item line">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openCustomStyleModal"
          >
            打开模态框
          </TnButton>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="确认拦截">
      <view class="modal-container tn-flex tn-flex-wrap">
        <view class="modal-item line">
          <TnButton
            size="lg"
            bg-color="gradient-bg__cool-6"
            text-color="tn-white"
            @click="openInterceptModal"
          >
            打开模态框
          </TnButton>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>

  <TnModal ref="modalRef" />
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
