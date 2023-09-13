<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue'
import TnSearchBox from '@tuniao/tnui-vue3-uniapp/components/search-box/src/search-box.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/navbar/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 演示顶部导航栏的高度
const demoNavbarHeight = '45px'

// 演示顶部导航栏zIndex
const demoNavbarZIndex = 1

// 拦截导航栏返回上一页事件
const interceptBackEvent = () => {
  return new Promise<boolean>((resolve, reject) => {
    uni.showToast({
      title: '拦截返回上一页事件',
      icon: 'none',
    })
    reject()
  })
}
// 拦截导航返回首页事件
const interceptBackHomeEvent = () => {
  return new Promise<boolean>((resolve, reject) => {
    uni.showToast({
      title: '拦截返回首页事件',
      icon: 'none',
    })
    reject()
  })
}
</script>

<template>
  <CustomPage title="顶部导航栏" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar :height="demoNavbarHeight" :z-index="demoNavbarZIndex">
            图鸟UI
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改返回上一页、首页图标">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            back-icon="logout"
            home-icon="shop-fill"
          >
            图鸟UI
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏返回上一页按钮">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            back-icon=""
          >
            图鸟UI
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏返回首页按钮">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            home-icon=""
            back-icon="left-arrow"
          >
            图鸟UI
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="文字返回按钮">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            back-text="返回"
          >
            图鸟UI
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义返回内容">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar :height="demoNavbarHeight" :z-index="demoNavbarZIndex">
            <template #back>
              <view class="custom-back">
                <view class="icon">
                  <TnIcon name="refresh-simple" />
                </view>
                <view class="text">刷新</view>
              </view>
            </template>
            图鸟UI
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置右边操作区域">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar :height="demoNavbarHeight" :z-index="demoNavbarZIndex">
            <template #right>
              <view class="right-operation">
                <TnIcon name="location" />
              </view>
            </template>
            图鸟UI
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置右边操作区域 - 固定宽度">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            right-operation-width="100"
          >
            <template #right>
              <view class="right-operation">
                <TnIcon name="location" />
              </view>
            </template>
            图鸟UI
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改导航栏颜色">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            bg-color="tn-gray-light"
            text-color="tn-grey"
          >
            图鸟UI
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改导航栏透明度">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            :opacity="0.3"
          >
            图鸟UI - 0.3
          </TnNavbar>
        </view>
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            :opacity="0.5"
          >
            图鸟UI - 0.5
          </TnNavbar>
        </view>
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            :opacity="0.8"
          >
            图鸟UI - 0.8
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="不显示底部阴影">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            :bottom-shadow="false"
          >
            图鸟UI
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="拦截返回事件">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            :before-back="interceptBackEvent"
            :before-home="interceptBackHomeEvent"
          >
            图鸟UI
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏返回区域">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            back-icon=""
            home-icon=""
          >
            <view class="custom-search-box">
              <TnSearchBox
                :border="false"
                :search-button="false"
                text-align="center"
                placeholder-icon="text-hot"
                placeholder="在这里你能找到关于图鸟的一切"
              />
            </view>
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="释放右边小程序预留胶囊安全区域">
      <view class="navbar-container">
        <view class="navbar-item">
          <TnNavbar
            :height="demoNavbarHeight"
            :z-index="demoNavbarZIndex"
            :safe-area-inset-right="false"
          >
            <view class="custom-search-box tn-ml-sm">
              <TnSearchBox
                :border="false"
                :search-button="false"
                text-align="center"
                placeholder-icon="text-hot"
                placeholder="在这里你能找到关于图鸟的一切"
              />
            </view>
          </TnNavbar>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
