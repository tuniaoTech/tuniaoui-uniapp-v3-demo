<script lang="ts" setup>
defineProps({
  /**
   * @description 头像地址
   */
  avatar: String,
  /**
   * @description 用户昵称
   */
  nickname: String,
  /**
   * @description 用户所属部门
   */
  department: String,
})
</script>

<template>
  <view class="index-list-item">
    <view class="avatar">
      <image class="image" :src="avatar" mode="aspectFill" />
    </view>
    <view class="info">
      <view class="nickname">{{ nickname }}</view>
      <view class="department">{{ department }}</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.index-list-item {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30rpx;
  background-color: var(--tn-color-white);
  color: var(--tn-text-color-primary);

  .avatar {
    flex-shrink: 0;
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;

    .image {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }

  .info {
    flex: 1;
    margin-left: 26rpx;
    line-height: 1;

    .nickname {
      font-size: 34rpx;
    }
    .department {
      margin-top: 20rpx;
      color: var(--tn-color-gray);
      font-size: 24rpx;
    }
  }
}
</style>
