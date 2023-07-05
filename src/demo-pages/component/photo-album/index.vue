<script lang="ts" setup>
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnPhotoAlbum from '@tuniao/tnui-vue3-uniapp/components/photo-album/src/photo-album.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/photo-album/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 图片列表
const imageListData = [
  'https://resource.tuniaokj.com/images/album/xiong1.jpg',
  'https://resource.tuniaokj.com/images/album/xiong2.jpg',
  'https://resource.tuniaokj.com/images/album/xiong3.jpg',
  'https://resource.tuniaokj.com/images/album/xiong4.jpg',
  'https://resource.tuniaokj.com/images/album/xiong5.jpg',
  'https://resource.tuniaokj.com/images/album/xiong6.jpg',
  'https://resource.tuniaokj.com/images/album/xiong7.jpg',
  'https://resource.tuniaokj.com/images/album/xiong8.jpg',
  'https://resource.tuniaokj.com/images/album/xiong9.jpg',
]
</script>

<template>
  <CustomPage title="相册" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用 - 这里使用max限制图片数量">
      <view class="photo-album-container">
        <view class="photo-album-item">
          <TnPhotoAlbum :data="imageListData" :max="1" />
        </view>
        <view class="photo-album-item">
          <TnPhotoAlbum :data="imageListData" :max="2" />
        </view>
        <view class="photo-album-item">
          <TnPhotoAlbum :data="imageListData" :max="3" />
        </view>
        <view class="photo-album-item">
          <TnPhotoAlbum :data="imageListData" :max="4" />
        </view>
        <view class="photo-album-item">
          <TnPhotoAlbum :data="imageListData" :max="5" />
        </view>
        <view class="photo-album-item">
          <TnPhotoAlbum :data="imageListData" :max="6" />
        </view>
        <view class="photo-album-item">
          <TnPhotoAlbum :data="imageListData" :max="7" />
        </view>
        <view class="photo-album-item">
          <TnPhotoAlbum :data="imageListData" :max="8" />
        </view>
        <view class="photo-album-item">
          <TnPhotoAlbum :data="imageListData" :max="9" />
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置单行显示数据数量">
      <view class="photo-album-container">
        <view class="photo-album-item">
          <TnPhotoAlbum :data="imageListData" :max="1" :column="1" />
        </view>
        <view class="photo-album-item">
          <TnPhotoAlbum :data="imageListData" :max="2" :column="2" />
        </view>
        <view class="photo-album-item">
          <TnPhotoAlbum :data="imageListData" :max="9" :column="4" />
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
