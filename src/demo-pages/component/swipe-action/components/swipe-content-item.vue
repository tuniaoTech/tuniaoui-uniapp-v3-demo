<script lang="ts" setup></script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<template>
  <view class="swipe-item-content">
    <view class="avatar">
      <image
        src="https://resource.tuniaokj.com/images/tuniao_logo/logo.jpg"
        mode="aspectFill"
      />
    </view>
    <view class="content">
      <view class="top">
        <view class="nickname">图鸟科技</view>
        <view class="date">7月1日</view>
      </view>
      <view class="bottom">
        <view class="message">
          <text class="tn-text-ellipsis-1">
            图鸟UI: 图鸟UI-uniapp-vue3版本正式发布，欢迎大家使用
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.swipe-item-content {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .avatar {
    flex-shrink: 0;
    flex-grow: 0;
    width: 110rpx;
    height: 110rpx;
    border-radius: 50%;
    background-color: var(--tn-color-gray-light);
  }

  .content {
    flex: 1;
    margin-left: 26rpx;
    line-height: 1;

    .top {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .nickname {
        font-size: 34rpx;
      }
      .date {
        font-size: 22rpx;
        color: var(--tn-color-gray);
        margin-top: 8rpx;
      }
    }

    .bottom {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      .message {
        height: 1em;
        overflow: hidden;
        color: var(--tn-color-gray);
        margin-top: 14rpx;
        margin-right: 80rpx;
      }
    }
  }
}
</style>
