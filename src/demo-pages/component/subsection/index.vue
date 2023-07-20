<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnSubsection from '@tuniao/tnui-vue3-uniapp/components/subsection/src/subsection.vue'
import TnSubsectionItem from '@tuniao/tnui-vue3-uniapp/components/subsection/src/subsection-item.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/subsection/index',
})
const { isDemoH5Page } = useDemoH5Page()

const currentSubsectionIndex = ref<number>(0)
</script>

<template>
  <CustomPage title="分段器" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="subsection-container">
        <view class="subsection-item">
          当前选中的索引：<text class="tn-gray_text">
            {{
              currentSubsectionIndex <= 0 ? '未选中' : currentSubsectionIndex
            }}
          </text>
        </view>
        <view class="subsection-item">
          <TnSubsection v-model="currentSubsectionIndex">
            <TnSubsectionItem title="全部" />
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
            <TnSubsectionItem title="已取消" />
          </TnSubsection>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="按钮分段器">
      <view class="subsection-container">
        <view class="subsection-item">
          <TnSubsection mode="button">
            <TnSubsectionItem title="全部" />
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
            <TnSubsectionItem title="已取消" />
          </TnSubsection>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置尺寸">
      <view class="subsection-container">
        <view class="subsection-item">
          <TnSubsection size="sm">
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
          </TnSubsection>
        </view>
        <view class="subsection-item">
          <TnSubsection size="lg">
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
          </TnSubsection>
        </view>
        <view class="subsection-item">
          <TnSubsection size="xl">
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
          </TnSubsection>
        </view>
        <view class="subsection-item">
          <TnSubsection size="44">
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
          </TnSubsection>
        </view>

        <view class="subsection-item">
          <TnSubsection mode="button" size="sm">
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
          </TnSubsection>
        </view>
        <view class="subsection-item">
          <TnSubsection mode="button" size="lg">
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
          </TnSubsection>
        </view>
        <view class="subsection-item">
          <TnSubsection mode="button" size="xl">
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
          </TnSubsection>
        </view>
        <view class="subsection-item">
          <TnSubsection mode="button" size="44">
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
          </TnSubsection>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="subsection-container">
        <view class="subsection-item">
          <TnSubsection active-color="tn-indigo">
            <TnSubsectionItem title="全部" />
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
            <TnSubsectionItem title="已取消" />
          </TnSubsection>
        </view>
        <view class="subsection-item">
          <TnSubsection mode="button" active-color="#3d7eff">
            <TnSubsectionItem title="全部" />
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
            <TnSubsectionItem title="已取消" />
          </TnSubsection>
        </view>
        <view class="subsection-item">
          <TnSubsection mode="button">
            <TnSubsectionItem title="全部" />
            <TnSubsectionItem title="待付款" active-color="tn-orange" />
            <TnSubsectionItem title="待收货" active-color="tn-blue" />
            <TnSubsectionItem title="已完成" active-color="tn-green" />
            <TnSubsectionItem title="已取消" active-color="tn-red" />
          </TnSubsection>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁止操作">
      <view class="subsection-container">
        <view class="subsection-item">
          <TnSubsection disabled>
            <TnSubsectionItem title="全部" />
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
            <TnSubsectionItem title="已取消" />
          </TnSubsection>
        </view>
        <view class="subsection-item">
          <TnSubsection mode="button">
            <TnSubsectionItem title="全部" />
            <TnSubsectionItem title="待付款" />
            <TnSubsectionItem title="待收货" />
            <TnSubsectionItem title="已完成" />
            <TnSubsectionItem title="已取消" disabled />
          </TnSubsection>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义内容">
      <view class="subsection-container">
        <view class="subsection-item">
          <TnSubsection>
            <TnSubsectionItem>
              <TnIcon name="wea-sun" />
            </TnSubsectionItem>
            <TnSubsectionItem>
              <TnIcon name="wea-cloud" />
            </TnSubsectionItem>
            <TnSubsectionItem>
              <TnIcon name="wea-cloud-sun" />
            </TnSubsectionItem>
            <TnSubsectionItem>
              <TnIcon name="wea-rain" />
            </TnSubsectionItem>
            <TnSubsectionItem>
              <TnIcon name="wea-wind" />
            </TnSubsectionItem>
          </TnSubsection>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
