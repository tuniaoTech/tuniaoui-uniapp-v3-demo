<script lang="ts" setup>
import { computed } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import TnTimeLine from 'tnuiv3p-tn-time-line/time-line.vue'
import TnTimeLineItem from 'tnuiv3p-tn-time-line/time-line-item.vue'
import TnTimeLineData from 'tnuiv3p-tn-time-line/time-line-data.vue'

import type { CSSProperties } from 'vue'

import CustomPage from '@/components/custom-page/src/custom-page.vue'
import DemoContainer from '@/components/demo-container/src/demo-container.vue'
import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/plugin-demo/tn-time-line/index',
})
const { isDemoH5Page } = useDemoH5Page()

// 时间轴数据
interface TimeLineDataItem {
  date: string
  desc: string
  status: 0 | 1 | 2
  content?: string
  image?: string
}

interface TimeLineData {
  month: string
  icon: string
  data: TimeLineDataItem[]
}

const timeLineData: TimeLineData[] = [
  {
    month: '2023-07',
    icon: 'history',
    data: [
      { date: '01', desc: '打卡成功', status: 2, content: '准时打卡' },
      { date: '02', desc: '打卡成功', status: 2, content: '5分钟内打卡' },
      { date: '03', desc: '迟到', status: 1, content: '迟到30分钟' },
      {
        date: '04',
        desc: '外勤打卡',
        status: 2,
        content: '申请外勤打卡，外勤地点: 广州图鸟科技有限公司，会见人员: 凶姐',
        image: 'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-new.jpg',
      },
    ],
  },
  {
    month: '2023-08',
    icon: 'time',
    data: [
      { date: '01', desc: '未打卡', status: 0 },
      { date: '02', desc: '未打卡', status: 0 },
      { date: '03', desc: '未打卡', status: 0 },
      { date: '04', desc: '未打卡', status: 0 },
    ],
  },
]

// 状态对应的样式
type DescStyleType = (status: TimeLineDataItem['status']) => CSSProperties
const descStyle = computed<DescStyleType>(() => {
  return (status: TimeLineDataItem['status']) => {
    const style: CSSProperties = {}

    if (status === 0) {
      style.color = 'var(--tn-color-info)'
    }
    if (status === 1) {
      style.color = 'var(--tn-color-danger)'
    }
    if (status === 2) {
      style.color = 'var(--tn-color-success)'
    }

    return style
  }
})
</script>

<template>
  <CustomPage title="时间轴" :is-h5-demo-page="isDemoH5Page">
    <DemoContainer title="基础使用">
      <view class="time-line-container">
        <view class="time-line-item">
          <TnTimeLine>
            <TnTimeLineItem
              v-for="(item, index) in timeLineData"
              :key="index"
              :title="item.month"
              :title-icon="item.icon"
            >
              <TnTimeLineData
                v-for="(dataItem, dataIndex) in item.data"
                :key="dataIndex"
              >
                <view class="time-line">
                  <view class="date-info">
                    <view class="date">{{ dataItem.date }}</view>
                    <view class="desc" :style="descStyle(dataItem.status)">
                      {{ dataItem.desc }}
                    </view>
                  </view>
                  <view class="content">
                    <view v-if="dataItem?.date" class="data">
                      {{ dataItem.content }}
                    </view>
                    <view v-if="dataItem.image" class="data-image">
                      <image
                        class="image"
                        :src="dataItem.image"
                        mode="widthFix"
                      />
                    </view>
                  </view>
                </view>
              </TnTimeLineData>
            </TnTimeLineItem>
          </TnTimeLine>
        </view>
      </view>
    </DemoContainer>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
