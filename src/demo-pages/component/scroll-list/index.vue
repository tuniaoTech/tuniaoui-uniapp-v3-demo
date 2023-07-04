<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnScrollList from '@tuniao/tnui-vue3-uniapp/components/scroll-list/src/scroll-list.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/scroll-list/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="横向滚动" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="scroll-list-container">
        <view class="scroll-list-item">
          <TnScrollList>
            <view class="scroll-data">
              <view v-for="i in 16" :key="i" class="data-item tn-bg-image">
                <view
                  class="item-icon tn-bg-image tn-white_text"
                  :class="[`tn-gradient-bg__cool-${i}`]"
                >
                  <TnIcon name="moments" />
                </view>
                <view class="item-title"> 北北 </view>
              </view>
            </view>
          </TnScrollList>
        </view>
        <view class="scroll-list-item">
          <TnScrollList>
            <view>
              <view class="scroll-data">
                <view v-for="i in 8" :key="i" class="data-item tn-bg-image">
                  <view
                    class="item-icon tn-bg-image tn-white_text"
                    :class="[`tn-gradient-bg__cool-${i}`]"
                  >
                    <TnIcon name="moments" />
                  </view>
                  <view class="item-title"> 北北 </view>
                </view>
              </view>
              <view class="scroll-data">
                <view v-for="i in 8" :key="i" class="data-item tn-bg-image">
                  <view
                    class="item-icon tn-bg-image tn-white_text"
                    :class="[`tn-gradient-bg__cool-${8 + i}`]"
                  >
                    <TnIcon name="moments" />
                  </view>
                  <view class="item-title"> 北北 </view>
                </view>
              </view>
            </view>
          </TnScrollList>
        </view>
      </view>
    </DemoContainer>
    <view style="display: none">
      <TnIcon name="logo-tuniao" />
    </view>
    <DemoContainer title="修改指示器样式">
      <view class="scroll-list-container">
        <view class="scroll-list-item">
          <TnScrollList
            :indicator-width="60"
            :indicator-block-width="30"
            indicator-color="tn-grey-light"
            indicator-block-color="tn-blue"
          >
            <view class="scroll-data">
              <view v-for="i in 8" :key="i" class="data-item tn-bg-image">
                <view
                  class="item-icon tn-bg-image tn-white_text"
                  :class="[`tn-gradient-bg__cool-${i}`]"
                >
                  <TnIcon name="moments" />
                </view>
                <view class="item-title"> 北北 </view>
              </view>
            </view>
          </TnScrollList>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏指示器">
      <view class="scroll-list-container">
        <view class="scroll-list-item">
          <TnScrollList :indicator="false">
            <view class="scroll-data">
              <view v-for="i in 16" :key="i" class="data-item tn-bg-image">
                <view
                  class="item-icon tn-bg-image tn-white_text"
                  :class="[`tn-gradient-bg__cool-${i}`]"
                >
                  <TnIcon name="moments" />
                </view>
                <view class="item-title"> 北北 </view>
              </view>
            </view>
          </TnScrollList>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
