<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnGraphicCard from 'tnuiv3p-tn-graphic-card/index.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import SubDemoContainer from '@/components/demo-container/src/sub-demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/graphic-card/index',
})
const { isDemoH5Page } = useDemoH5Page()

const graphicCardData = {
  id: 1,
  avatar: 'https://resource.tuniaokj.com/images/logo/tuniao.jpg',
  title: '图鸟喜讯',
  description: '2023年06月20日',
  tags: ['酷炫', '图鸟科技', 'UI组件'],
  content:
    '图鸟UI组件库是基于uniapp开发的组件库，主打酷炫、简洁、易用，是一款轻量、全面可靠的跨平台移动端组件库。现vue3版本已全新发布，欢迎大家使用。',
  images: [
    'https://resource.tuniaokj.com/images/album/xiong1.jpg',
    'https://resource.tuniaokj.com/images/advertise/1.jpg',
    'https://resource.tuniaokj.com/images/advertise/3.jpg',
    'https://resource.tuniaokj.com/images/album/xiong2.jpg',
    'https://resource.tuniaokj.com/images/album/xiong3.jpg',
  ],
  hotCount: 999,
  viewCount: 245,
  commentCount: 99,
  likeCount: 888,
  viewUserAvatars: [
    'https://resource.tuniaokj.com/images/avatar/default/1.png',
    'https://resource.tuniaokj.com/images/avatar/default/2.png',
    'https://resource.tuniaokj.com/images/avatar/default/3.png',
    'https://resource.tuniaokj.com/images/avatar/xiong.jpg',
    'https://resource.tuniaokj.com/images/avatar/default/4.png',
    'https://resource.tuniaokj.com/images/avatar/default/5.png',
    'https://resource.tuniaokj.com/images/avatar/default/6.png',
    'https://resource.tuniaokj.com/images/avatar/default/7.png',
    'https://resource.tuniaokj.com/images/avatar/default/8.png',
  ],
}
</script>

<template>
  <CustomPage title="图文卡片" padding="0" :is-h5-demo-page="isDemoH5Page">
    <view class="tn-mt" />
    <DemoContainer title="基础使用" title-padding>
      <view class="graphic-card-container tn-gray-light_bg">
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images.slice(0, 1)"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
          />
        </view>
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images.slice(0, 2)"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
          />
        </view>
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images.slice(0, 3)"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
          />
        </view>
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images.slice(0, 4)"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
          />
        </view>
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="控制热度、评论、点赞的显示状态" title-padding>
      <view class="graphic-card-container">
        <view class="graphic-card-item">
          <SubDemoContainer title="只显示热度数据">
            <TnGraphicCard
              :avatar="graphicCardData.avatar"
              :title="graphicCardData.title"
              :description="graphicCardData.description"
              :tags="graphicCardData.tags"
              :content="graphicCardData.content"
              :images="graphicCardData.images"
              :hot-count="graphicCardData.hotCount"
              :show-comment="false"
              :show-like="false"
              :view-count="graphicCardData.viewCount"
              :view-user-avatars="graphicCardData.viewUserAvatars"
            />
          </SubDemoContainer>
        </view>
        <view class="graphic-card-item">
          <SubDemoContainer title="只显示评论数据">
            <TnGraphicCard
              :avatar="graphicCardData.avatar"
              :title="graphicCardData.title"
              :description="graphicCardData.description"
              :tags="graphicCardData.tags"
              :content="graphicCardData.content"
              :images="graphicCardData.images"
              :comment-count="graphicCardData.commentCount"
              :show-hot="false"
              :show-like="false"
              :view-count="graphicCardData.viewCount"
              :view-user-avatars="graphicCardData.viewUserAvatars"
            />
          </SubDemoContainer>
        </view>
        <view class="graphic-card-item">
          <SubDemoContainer title="只显示点赞数据">
            <TnGraphicCard
              :avatar="graphicCardData.avatar"
              :title="graphicCardData.title"
              :description="graphicCardData.description"
              :tags="graphicCardData.tags"
              :content="graphicCardData.content"
              :images="graphicCardData.images"
              :like-count="graphicCardData.likeCount"
              :show-hot="false"
              :show-comment="false"
              :view-count="graphicCardData.viewCount"
              :view-user-avatars="graphicCardData.viewUserAvatars"
            />
          </SubDemoContainer>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置热度、评论、点赞的激活状态" title-padding>
      <view class="graphic-card-container">
        <view class="graphic-card-item">
          <SubDemoContainer title="激活热度">
            <TnGraphicCard
              :avatar="graphicCardData.avatar"
              :title="graphicCardData.title"
              :description="graphicCardData.description"
              :tags="graphicCardData.tags"
              :content="graphicCardData.content"
              :images="graphicCardData.images"
              :hot-count="graphicCardData.hotCount"
              :comment-count="graphicCardData.commentCount"
              :like-count="graphicCardData.likeCount"
              active-hot
              :view-count="graphicCardData.viewCount"
              :view-user-avatars="graphicCardData.viewUserAvatars"
            />
          </SubDemoContainer>
        </view>
        <view class="graphic-card-item">
          <SubDemoContainer title="激活评论">
            <TnGraphicCard
              :avatar="graphicCardData.avatar"
              :title="graphicCardData.title"
              :description="graphicCardData.description"
              :tags="graphicCardData.tags"
              :content="graphicCardData.content"
              :images="graphicCardData.images"
              :hot-count="graphicCardData.hotCount"
              :comment-count="graphicCardData.commentCount"
              :like-count="graphicCardData.likeCount"
              active-comment
              :view-count="graphicCardData.viewCount"
              :view-user-avatars="graphicCardData.viewUserAvatars"
            />
          </SubDemoContainer>
        </view>
        <view class="graphic-card-item">
          <SubDemoContainer title="激活点赞">
            <TnGraphicCard
              :avatar="graphicCardData.avatar"
              :title="graphicCardData.title"
              :description="graphicCardData.description"
              :tags="graphicCardData.tags"
              :content="graphicCardData.content"
              :images="graphicCardData.images"
              :hot-count="graphicCardData.hotCount"
              :comment-count="graphicCardData.commentCount"
              :like-count="graphicCardData.likeCount"
              active-like
              :view-count="graphicCardData.viewCount"
              :view-user-avatars="graphicCardData.viewUserAvatars"
            />
          </SubDemoContainer>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏查看用户头像" title-padding>
      <view class="graphic-card-container">
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :show-hot-user="false"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置最大显示查看用户头像数量" title-padding>
      <view class="graphic-card-container">
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
            :max-view-user-avatar-count="6"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改标签样式" title-padding>
      <view class="graphic-card-container">
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            tag-bg-color="gradient-bg__cool-6"
            tag-text-color="tn-white"
            :content="graphicCardData.content"
            :images="graphicCardData.images"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
          />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义顶部右侧操作区域内容" title-padding>
      <view class="graphic-card-container">
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            :description="graphicCardData.description"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
            :view-count="graphicCardData.viewCount"
            :view-user-avatars="graphicCardData.viewUserAvatars"
          >
            <template #briefOperation>
              <view class="custom-brief-operation">关注</view>
            </template>
          </TnGraphicCard>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义底部右侧操作区域内容" title-padding>
      <view class="graphic-card-container">
        <view class="graphic-card-item">
          <TnGraphicCard
            :avatar="graphicCardData.avatar"
            :title="graphicCardData.title"
            description="广东 广州"
            :tags="graphicCardData.tags"
            :content="graphicCardData.content"
            :images="graphicCardData.images"
            :hot-count="graphicCardData.hotCount"
            :comment-count="graphicCardData.commentCount"
            :like-count="graphicCardData.likeCount"
          >
            <template #bottomRight>
              <view class="tn-gray_text"> 6分钟前 </view>
            </template>
          </TnGraphicCard>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
