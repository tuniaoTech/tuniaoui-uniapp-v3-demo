<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnReadMore from '@tuniao/tnui-vue3-uniapp/components/read-more/src/read-more.vue'

import type { TnReadMoreInstance } from '@tuniao/tnui-vue3-uniapp'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/read-more/index',
})
const { isDemoH5Page } = useDemoH5Page()

const content = `噫吁嚱，危乎高哉！
  蜀道之难，难于上青天！
  蚕丛及鱼凫，开国何茫然！
  尔来四万八千岁，不与秦塞通人烟。
  西当太白有鸟道，可以横绝峨眉巅。
  地崩山摧壮士死，然后天梯石栈相钩连。
  上有六龙回日之高标，下有冲波逆折之回川。
  黄鹤之飞尚不得过，猿猱欲度愁攀援。
  青泥何盘盘，百步九折萦岩峦。
  扪参历井仰胁息，以手抚膺坐长叹。

  问君西游何时还？畏途巉岩不可攀。
  但见悲鸟号古木，雄飞雌从绕林间。
  又闻子规啼夜月，愁空山。
  蜀道之难，难于上青天，使人听此凋朱颜！
  连峰去天不盈尺，枯松倒挂倚绝壁。
  飞湍瀑流争喧豗，砯崖转石万壑雷。
  其险也如此，嗟尔远道之人胡为乎来哉！(也如此 一作：也若此)

  剑阁峥嵘而崔嵬，一夫当关，万夫莫开。
  所守或匪亲，化为狼与豺。
  朝避猛虎，夕避长蛇，磨牙吮血，杀人如麻。
  锦城虽云乐，不如早还家。
  蜀道之难，难于上青天，侧身西望长咨嗟！`

const lockContent = `噫吁嚱，危乎高哉！
  蜀道之难，难于上青天！
  蚕丛及鱼凫，开国何茫然！
  尔来四万八千岁，不与秦塞通人烟。
  西当太白有鸟道，可以横绝峨眉巅。
  地崩山摧壮士死，然后天梯石栈相钩连。
  上有六龙回日之高标，下有冲波逆折之回川。
  黄鹤之飞尚不得过，猿猱欲度愁攀援。
  青泥何盘盘，百步九折萦岩峦。
  扪参历井仰胁息，以手抚膺坐长叹。
`

const readMoreRef = ref<TnReadMoreInstance>()
const unLockFlag = ref<boolean>(false)
let unLockCount = 0

// 展开前拦截事件
const beforeExpand = () => {
  if (unLockFlag.value) {
    return true
  }
  return new Promise<boolean>((resolve, reject) => {
    uni.showLoading({
      title: '请求中...',
      mask: true,
    })
    setTimeout(() => {
      if (unLockCount === 0) {
        uni.showToast({
          title: '解说失败，请重试',
          icon: 'none',
        })
        unLockCount++
        reject(false)
        return
      }
      uni.hideLoading()
      unLockFlag.value = true
      readMoreRef.value?.resetContentHeight()
      resolve(true)
    }, 2000)
  })
}
</script>

<template>
  <CustomPage title="阅读更多" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="read-more-container">
        <view class="read-more-item">
          <TnReadMore>
            <rich-text :nodes="content" />
          </TnReadMore>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="默认展开">
      <view class="read-more-container">
        <view class="read-more-item">
          <TnReadMore expand>
            <rich-text :nodes="content" />
          </TnReadMore>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="不显示收起按钮">
      <view class="read-more-container">
        <view class="read-more-item">
          <TnReadMore :show-fold="false">
            <rich-text :nodes="content" />
          </TnReadMore>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="设置显示内容的高度">
      <view class="read-more-container">
        <view class="read-more-item">
          <TnReadMore :height="300">
            <rich-text :nodes="content" />
          </TnReadMore>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义文案">
      <view class="read-more-container">
        <view class="read-more-item">
          <TnReadMore
            expand-text="付费查看"
            expand-icon="lock"
            fold-text="收起"
            fold-icon="up-arrow"
          >
            <rich-text :nodes="content" />
          </TnReadMore>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改颜色">
      <view class="read-more-container">
        <view class="read-more-item">
          <TnReadMore tip-color="tn-gray">
            <rich-text :nodes="content" />
          </TnReadMore>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="案例演示 - 点击两次解锁">
      <view class="read-more-container">
        <view class="read-more-item">
          <TnReadMore ref="readMoreRef" :before-expand="beforeExpand">
            <rich-text v-if="unLockFlag" :nodes="content" />
            <rich-text v-else :nodes="lockContent" />
          </TnReadMore>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
