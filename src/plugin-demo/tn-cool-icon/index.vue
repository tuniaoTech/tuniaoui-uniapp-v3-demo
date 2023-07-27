<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnCoolIcon from 'tnuiv3p-tn-cool-icon/index.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-cool-icon/index',
})
const { isDemoH5Page } = useDemoH5Page()
</script>

<template>
  <CustomPage title="酷炫图标" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="新拟态">
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon name="gloves-fill" color="tn-orange" />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon name="gloves-fill" color="gradient__orange" />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon name="gloves-fill" color="gradient__cool-2" />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon name="gloves-fill" color="gradient__cool-8" />
        </view>
      </view>
    </DemoContainer>

    <DemoContainer title="暗黑金边">
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon name="birthday" type="dark-goldborder" />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon name="prize" type="dark-goldborder" />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon name="service-simple" type="dark-goldborder" />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon name="brand" type="dark-goldborder" />
        </view>
      </view>
    </DemoContainer>

    <DemoContainer title="圆形">
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="circle"
            bg-color="tn-orange"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="circle"
            bg-color="tn-purple"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="circle"
            bg-color="gradient__cool-8"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="circle"
            bg-color="gradient__cool-15"
            color="tn-white"
          />
        </view>
      </view>
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="circle"
            bg-color="tn-orange-light"
            color="tn-orange"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="circle"
            bg-color="tn-purple-light"
            color="tn-purple"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="circle"
            bg-color="tn-indigo-light"
            color="tn-indigo"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="circle"
            bg-color="tn-purplered-light"
            color="tn-purplered"
          />
        </view>
      </view>
    </DemoContainer>

    <DemoContainer title="椭圆">
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="oval"
            bg-color="tn-orange"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="oval"
            bg-color="tn-purple"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="oval"
            bg-color="gradient__cool-8"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="oval"
            bg-color="gradient__cool-15"
            color="tn-white"
          />
        </view>
      </view>
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="oval"
            bg-color="tn-orange-light"
            color="tn-orange"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="oval"
            bg-color="tn-purple-light"
            color="tn-purple"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="oval"
            bg-color="tn-indigo-light"
            color="tn-indigo"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="oval"
            bg-color="tn-purplered-light"
            color="tn-purplered"
          />
        </view>
      </view>
    </DemoContainer>

    <DemoContainer title="方形">
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="square"
            bg-color="tn-orange"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="square"
            bg-color="tn-purple"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="square"
            bg-color="gradient__cool-8"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="square"
            bg-color="gradient__cool-15"
            color="tn-white"
          />
        </view>
      </view>
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="square"
            bg-color="tn-orange-light"
            color="tn-orange"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="square"
            bg-color="tn-purple-light"
            color="tn-purple"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="square"
            bg-color="tn-indigo-light"
            color="tn-indigo"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="square"
            bg-color="tn-purplered-light"
            color="tn-purplered"
          />
        </view>
      </view>
    </DemoContainer>

    <DemoContainer title="三角形">
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="triangle"
            bg-color="tn-orange"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="triangle"
            bg-color="tn-purple"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="triangle"
            bg-color="gradient__cool-8"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="triangle"
            bg-color="gradient__cool-15"
            color="tn-white"
          />
        </view>
      </view>
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="triangle"
            bg-color="tn-orange-light"
            color="tn-orange"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="triangle"
            bg-color="tn-purple-light"
            color="tn-purple"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="triangle"
            bg-color="tn-indigo-light"
            color="tn-indigo"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="triangle"
            bg-color="tn-purplered-light"
            color="tn-purplered"
          />
        </view>
      </view>
    </DemoContainer>

    <DemoContainer title="胶囊">
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="image-fill"
            type="capsule"
            bg-color="tn-orange"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="live-stream-fill"
            type="capsule"
            bg-color="tn-purple"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="image-text-fill"
            type="capsule"
            bg-color="gradient__cool-8"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="topics-fill"
            type="capsule"
            bg-color="gradient__cool-15"
            color="tn-white"
          />
        </view>
      </view>
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="image-fill"
            type="capsule"
            bg-color="tn-orange-light"
            color="tn-orange"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="live-stream-fill"
            type="capsule"
            bg-color="tn-purple-light"
            color="tn-purple"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="image-text-fill"
            type="capsule"
            bg-color="tn-indigo-light"
            color="tn-indigo"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="topics-fill"
            type="capsule"
            bg-color="tn-purplered-light"
            color="tn-purplered"
          />
        </view>
      </view>
    </DemoContainer>

    <DemoContainer title="花朵">
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="flower"
            bg-color="tn-orange"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="flower"
            bg-color="tn-purple"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="flower"
            bg-color="gradient__cool-8"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="flower"
            bg-color="gradient__cool-15"
            color="tn-white"
          />
        </view>
      </view>
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="flower"
            bg-color="tn-orange-light"
            color="tn-orange"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="flower"
            bg-color="tn-purple-light"
            color="tn-purple"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="flower"
            bg-color="tn-indigo-light"
            color="tn-indigo"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="flower"
            bg-color="tn-purplered-light"
            color="tn-purplered"
          />
        </view>
      </view>
    </DemoContainer>

    <DemoContainer title="修改尺寸">
      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon name="gloves-fill" color="tn-orange" size="80" />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon name="gloves-fill" color="gradient__orange" />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon name="gloves-fill" color="gradient__cool-2" size="120" />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon name="gloves-fill" color="gradient__cool-8" size="80px" />
        </view>
      </view>

      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="oval"
            bg-color="tn-orange"
            color="tn-white"
            size="80"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="oval"
            bg-color="tn-purple"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="oval"
            bg-color="gradient__cool-8"
            color="tn-white"
            size="120"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="oval"
            bg-color="gradient__cool-15"
            color="tn-white"
            size="80px"
          />
        </view>
      </view>

      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="triangle"
            bg-color="tn-orange"
            color="tn-white"
            size="80"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="triangle"
            bg-color="tn-purple"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="triangle"
            bg-color="gradient__cool-8"
            color="tn-white"
            size="120"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="triangle"
            bg-color="gradient__cool-15"
            color="tn-white"
            size="80px"
          />
        </view>
      </view>

      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="image-fill"
            type="capsule"
            bg-color="tn-orange"
            color="tn-white"
            size="80"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="live-stream-fill"
            type="capsule"
            bg-color="tn-purple"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="image-text-fill"
            type="capsule"
            bg-color="gradient__cool-8"
            color="tn-white"
            size="120"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="topics-fill"
            type="capsule"
            bg-color="gradient__cool-15"
            color="tn-white"
            size="80px"
          />
        </view>
      </view>

      <view class="cool-icon-container">
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="flower"
            bg-color="tn-orange"
            color="tn-white"
            size="80"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="flower"
            bg-color="tn-purple"
            color="tn-white"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="flower"
            bg-color="gradient__cool-8"
            color="tn-white"
            size="120"
          />
        </view>
        <view class="cool-icon-item">
          <TnCoolIcon
            name="gloves-fill"
            type="flower"
            bg-color="gradient__cool-15"
            color="tn-white"
            size="80px"
          />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
