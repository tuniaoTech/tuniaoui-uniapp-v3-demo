<script lang="ts" setup>
import { ref } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnCollapse from '@tuniao/tnui-vue3-uniapp/components/collapse/src/collapse.vue'
import TnCollapseItem from '@tuniao/tnui-vue3-uniapp/components/collapse/src/collapse-item.vue'
import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/component/collapse/index',
})
const { isDemoH5Page } = useDemoH5Page()

const currentCollapse = ref<number>()
const currentCustomCollapse = ref<number>(1)

const collapseData: { title: string; content: string }[] = [
  {
    title: '关雎',
    content:
      '关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉，辗转反侧。参差荇菜，左右采之。窈窕淑女，琴瑟友之。参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。',
  },
  {
    title: '长歌行',
    content:
      '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？少壮不努力，老大徒伤悲！',
  },
  {
    title: '秋风辞',
    content:
      '秋风起兮白云飞，草木黄落兮雁南归。兰有秀兮菊有芳，怀佳人兮不能忘。泛楼船兮济汾河，横中流兮扬素波。少壮几时兮奈老何！',
  },
]
</script>

<template>
  <CustomPage
    title="折叠面板"
    page-bg-color="tn-gray-light"
    :is-h5-demo-page="isDemoH5Page"
  >
    <DemoContainer title="基础使用">
      <view class="collapse-container">
        <view class="collapse-item tn-black_text">
          当前选中的折叠面板：
          <text class="tn-gray_text">
            {{
              currentCollapse === undefined
                ? '没有打开折叠面板'
                : currentCollapse
            }}
          </text>
        </view>
        <view class="collapse-item tn-white_bg">
          <TnCollapse v-model="currentCollapse">
            <TnCollapseItem
              v-for="(item, index) in collapseData"
              :key="index"
              :title="item.title"
            >
              {{ item.content }}
            </TnCollapseItem>
          </TnCollapse>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="全部面板可以打开">
      <view class="collapse-container">
        <view class="collapse-item tn-white_bg">
          <TnCollapse :accordion="false">
            <TnCollapseItem
              v-for="(item, index) in collapseData"
              :key="index"
              :title="item.title"
            >
              {{ item.content }}
            </TnCollapseItem>
          </TnCollapse>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="隐藏右边箭头">
      <view class="collapse-container">
        <view class="collapse-item tn-white_bg">
          <TnCollapse :show-arrow="false">
            <TnCollapseItem
              v-for="(item, index) in collapseData"
              :key="index"
              :title="item.title"
            >
              {{ item.content }}
            </TnCollapseItem>
          </TnCollapse>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="修改右边箭头的颜色">
      <view class="collapse-container">
        <view class="collapse-item tn-white_bg">
          <TnCollapse arrow-color="tn-type-primary">
            <TnCollapseItem
              v-for="(item, index) in collapseData"
              :key="index"
              :title="item.title"
            >
              {{ item.content }}
            </TnCollapseItem>
          </TnCollapse>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="禁止第二项进行点击">
      <view class="collapse-container">
        <view class="collapse-item tn-white_bg">
          <TnCollapse>
            <TnCollapseItem
              v-for="(item, index) in collapseData"
              :key="index"
              :title="item.title"
              :disabled="index === 1"
            >
              {{ item.content }}
            </TnCollapseItem>
          </TnCollapse>
        </view>
      </view>
    </DemoContainer>
    <DemoContainer title="自定义标题">
      <view class="collapse-container">
        <view class="collapse-item tn-white_bg">
          <TnCollapse v-model="currentCustomCollapse">
            <TnCollapseItem v-for="(item, index) in collapseData" :key="index">
              <template #title>
                <view class="collapse-item__title">
                  <view v-if="index === 1" class="icon tn-yellow_text">
                    <TnIcon name="star-fill" />
                  </view>
                  <view
                    class="value"
                    :class="[
                      index === currentCustomCollapse
                        ? 'tn-black_text'
                        : 'tn-gray_text',
                    ]"
                  >
                    {{ item.title }}
                  </view>
                </view>
              </template>
              {{ item.content }}
            </TnCollapseItem>
          </TnCollapse>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
