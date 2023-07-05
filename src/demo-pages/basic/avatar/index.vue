<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnTitle from '@tuniao/tnui-vue3-uniapp/components/title/src/title.vue'
import TnAvatar from '@tuniao/tnui-vue3-uniapp/components/avatar/src/avatar.vue'
import TnAvatarGroup from '@tuniao/tnui-vue3-uniapp/components/avatar/src/avatar-group.vue'

import type { AvatarBadgeProps } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/basic/avatar/index',
})
const { isDemoH5Page } = useDemoH5Page()

type AvatarList = {
  url: string
  badge?: boolean
}

// 头像组角标配置
const avatarGroupBadgeConfig: AvatarBadgeProps = {
  type: 'danger',
  dot: true,
  absolutePosition: {
    top: '6rpx',
    right: '22rpx',
  },
}

// 用于头像组数据
const avatarList: AvatarList[] = [
  {
    url: 'https://resource.tuniaokj.com/images/avatar/default/1.png',
  },
  {
    url: 'https://resource.tuniaokj.com/images/avatar/default/2.png',
    badge: true,
  },
  {
    url: 'https://resource.tuniaokj.com/images/avatar/default/3.png',
  },
  {
    url: 'https://resource.tuniaokj.com/images/avatar/default/4.png',
    badge: true,
  },
  {
    url: 'https://resource.tuniaokj.com/images/avatar/default/5.png',
  },
]
</script>

<template>
  <CustomPage title="头像" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="avatar-container">
        <view class="avatar-item">
          <view class="item">
            <TnAvatar
              url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg"
            />
          </view>
          <view class="item">
            <TnAvatar icon="logo-tuniao" />
          </view>
          <view class="item">
            <TnAvatar>图</TnAvatar>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="头像类型">
      <view class="avatar-container">
        <view class="avatar-item">
          <view class="item">
            <TnAvatar type="primary">图</TnAvatar>
          </view>
          <view class="item">
            <TnAvatar type="success">图</TnAvatar>
          </view>
          <view class="item">
            <TnAvatar type="warning">图</TnAvatar>
          </view>
          <view class="item">
            <TnAvatar type="danger">图</TnAvatar>
          </view>
          <view class="item">
            <TnAvatar type="info">图</TnAvatar>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="头像形状">
      <view class="avatar-container">
        <view class="avatar-item">
          <view class="item">
            <TnAvatar
              url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg"
              shape="square"
            />
          </view>
        </view>
        <view class="avatar-item">
          <view class="item">
            <TnAvatar icon="logo-tuniao" shape="square" />
          </view>
          <view class="item">
            <TnAvatar shape="square">图</TnAvatar>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="尺寸设置">
      <view class="avatar-container">
        <view class="avatar-item">
          <view class="item">
            <TnAvatar
              url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg"
              size="sm"
            />
          </view>
          <view class="item">
            <TnAvatar
              url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg"
              size="lg"
            />
          </view>
          <view class="item">
            <TnAvatar icon="logo-tuniao" size="lg" />
          </view>
          <view class="item">
            <TnAvatar
              url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg"
              size="xl"
            />
          </view>
        </view>
        <view class="avatar-item">
          <view class="item">
            <TnAvatar
              url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg"
              size="160"
            />
          </view>
          <view class="item">
            <TnAvatar
              icon="logo-tuniao"
              size="160"
              :icon-config="{ size: '90rpx' }"
            />
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义颜色">
      <view class="avatar-container">
        <view class="avatar-item">
          <view class="item">
            <TnAvatar icon="logo-tuniao" bg-color="tn-indigo-light" />
          </view>
          <view class="item">
            <TnAvatar
              icon="logo-tuniao"
              bg-color="tn-blue-light"
              :icon-config="{ color: '#31c9e8' }"
            />
          </view>
          <view class="item">
            <TnAvatar
              icon="logo-tuniao"
              bg-color="gradient-bg__cool-6"
              :icon-config="{ color: 'tn-white' }"
            />
          </view>
          <view class="item">
            <TnAvatar bg-color="tn-indigo-light">图</TnAvatar>
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置边框">
      <view class="avatar-container">
        <view class="avatar-item">
          <view class="item">
            <TnAvatar
              url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg"
              border
            />
          </view>
          <view class="item">
            <TnAvatar icon="logo-tuniao" border border-color="tn-grey-light" />
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置阴影">
      <view class="avatar-container">
        <view class="avatar-item">
          <view class="item">
            <TnAvatar
              url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg"
              shadow
            />
          </view>
          <view class="item">
            <TnAvatar
              icon="logo-tuniao"
              shadow
              shadow-color="tn-blue-disabled"
            />
          </view>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置头像角标">
      <view class="avatar-container">
        <view class="avatar-item">
          <view class="item">
            <TnAvatar
              url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg"
              badge="icon-sex-female"
              :badge-config="{ absoluteCenter: false }"
            />
          </view>
          <view class="item">
            <TnAvatar
              url="https://resource.tuniaokj.com/images/avatar/test_avatar.jpg"
              badge="99"
              :badge-config="{
                type: 'danger',
                dot: true,
                absolutePosition: { top: '10rpx', right: '10rpx' },
              }"
            />
          </view>
        </view>
      </view>
    </DemoContainer>
    <view class="avatar-category-title">
      <TnTitle
        title="头像组"
        size="50"
        mode="transparent"
        color="gradient-bg__cool-6"
      />
    </view>
    <DemoContainer title="头像组基础使用">
      <view class="avatar-container">
        <view class="avatar-item">
          <TnAvatarGroup>
            <TnAvatar
              v-for="(item, index) in avatarList"
              :key="index"
              :url="item.url"
              :badge="item.badge ? '0' : ''"
              :badge-config="item.badge ? avatarGroupBadgeConfig : {}"
            />
          </TnAvatarGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改头像组的头像边框颜色">
      <view class="avatar-container">
        <view class="avatar-item">
          <TnAvatarGroup border-color="tn-grey">
            <TnAvatar
              v-for="(item, index) in avatarList"
              :key="index"
              :url="item.url"
            />
          </TnAvatarGroup>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改头像组头像遮挡比例">
      <view class="avatar-container">
        <view class="avatar-item">
          <TnAvatarGroup :gap="0.5">
            <TnAvatar
              v-for="(item, index) in avatarList"
              :key="index"
              :url="item.url"
            />
          </TnAvatarGroup>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
