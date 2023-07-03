<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnFooter from '@tuniao/tnui-vue3-uniapp/components/footer/src/footer.vue'
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'

import type {
  FooterNavigator,
  FooterNavigatorData,
} from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/basic/footer/index',
})
const { isDemoH5Page } = useDemoH5Page()

const footerNavigator: FooterNavigatorData = [
  {
    title: '回到首页',
    url: '/pages/index/index?index=0',
    textColor: 'tn-gray',
  },
  {
    title: '关于图鸟',
    url: '/pages/index/index?index=3',
  },
]

// 导航点击事件
const navClick = (nav: FooterNavigator) => {
  if (nav.url) {
    tnNavPage(nav.url, 'reLaunch')
  }
}
</script>

<template>
  <CustomPage title="页脚" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="footer-container">
        <view class="footer-item">
          <TnFooter content="Copyright © 2023 图鸟科技" :fixed="false" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置页脚导航">
      <view class="footer-container">
        <view class="footer-item">
          <TnFooter
            content="Copyright © 2023 图鸟科技"
            :navigator="footerNavigator"
            :fixed="false"
            @navigator-click="navClick"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置尺寸">
      <view class="footer-container">
        <view class="footer-item">
          <TnFooter
            content="Copyright © 2023 图鸟科技"
            :fixed="false"
            size="sm"
          />
        </view>
        <view class="footer-item">
          <TnFooter
            content="Copyright © 2023 图鸟科技"
            :fixed="false"
            size="lg"
          />
        </view>
        <view class="footer-item">
          <TnFooter
            content="Copyright © 2023 图鸟科技"
            :fixed="false"
            size="xl"
          />
        </view>
        <view class="footer-item">
          <TnFooter
            content="Copyright © 2023 图鸟科技"
            :fixed="false"
            size="40"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="footer-container">
        <view class="footer-item">
          <TnFooter
            content="Copyright © 2023 图鸟科技"
            :fixed="false"
            text-color="tn-gray-disabled"
          />
        </view>
        <view class="footer-item">
          <TnFooter
            content="Copyright © 2023 图鸟科技"
            :fixed="false"
            text-color="#01beff"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="固定在容器的底部">
      <view class="footer-container">
        <view class="footer-item fill-height tn-gray-light_bg tn-radius">
          <TnFooter
            content="Copyright © 2023 图鸟科技"
            :safe-area-inset-bottom="false"
            offset-bottom="20"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="固定在页面的底部">
      <view class="footer-container">
        <view class="footer-item">
          <TnFooter
            content="Copyright © 2023 图鸟科技"
            fixed-mode="page"
            offset-bottom="20"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
