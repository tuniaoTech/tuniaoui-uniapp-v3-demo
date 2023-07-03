<script lang="ts" setup>
import {
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
} from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import {
  useObserver,
  useSelectorQuery,
  useUniAppSystemRectInfo,
} from '@tuniao/tnui-vue3-uniapp/hooks'
import { debugWarn, generateId } from '@tuniao/tnui-vue3-uniapp/utils'
import {
  componentTypes,
  tuniaoColors,
} from '@tuniao/tnui-vue3-uniapp/constants'

import type { CSSProperties } from 'vue'

import CustomPage from '@/components/custom-page/src/custom-page.vue'

import { useDemoH5Page, useWxShare } from '@/hooks'

// 微信分享
onShareAppMessage(() => ({}))
onShareTimeline(() => ({}))
useWxShare({
  path: '/demo-pages/basic/color/index',
})
const { isDemoH5Page } = useDemoH5Page()

const instance = getCurrentInstance()

const { systemScreenInfo, navBarInfo } = useUniAppSystemRectInfo()

const { getSelectorNodeInfos } = useSelectorQuery(instance)
const { connectObserver, disconnectObserver } = useObserver(instance)

const colorTypes = componentTypes.filter((item) => item)

// 图鸟配色数据
const tuniaoColorMatching = [
  { name: '主色蓝', value: '#01beff', fontColor: '#fff' },
  { name: '主色橙', value: '#fbbd12', fontColor: '#fff' },
  { name: '点缀青', value: '#00ffc6', fontColor: '#fff' },
  { name: '点缀黄', value: '#fff00d', fontColor: '#9c9c9c' },
  { name: '辅助粉', value: '#ff71d2', fontColor: '#fff' },
  { name: '辅助蓝', value: '#82b2ff', fontColor: '#fff' },
  { name: '主要文字颜色', value: '#080808', fontColor: '#fff' },
  { name: '次要文字颜色', value: '#9c9c9c', fontColor: '#fff' },
  { name: '提示文字颜色', value: '#e6e6e6', fontColor: '#080808' },
  { name: '页面背景色', value: '#f4f4f4', fontColor: '#080808' },
]

// 展示容器id
const showContainerId = `sc-${generateId()}`

// 当前选中的颜色索引
const currentSelectColorIndex = ref<number>(0)

// 选中后选择器容器的颜色
const selectContainerBgColor = ref('primary-light-7')
const selectContainerStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    height: `calc(100vh - ${navBarInfo.height}px)`,
    top: `${navBarInfo.height}px`,
  }

  if (selectContainerBgColor.value) {
    style.backgroundColor = `var(--tn-color-${selectContainerBgColor.value})`
  }

  return style
})

// 选项对应的类
const selectItemClass = computed<(index: number) => string>(() => {
  return (index: number) => {
    const cls: string[] = []

    if (index === currentSelectColorIndex.value) {
      cls.push('active')
    }

    return cls.join(' ')
  }
})

// 颜色点击事件
let clickEventFlag = false
const colorClickEvent = (color: string, index: number) => {
  if (index === currentSelectColorIndex.value) return
  clickEventFlag = true
  currentSelectColorIndex.value = index

  selectContainerBgColor.value = color

  // 滚动到指定的颜色
  uni.pageScrollTo({
    scrollTop: showContainerTopList[index] - navBarInfo.height,
    duration: 150,
  })

  updateSelectContainerScrollViewPosition()
}

// 监听展示容器触顶事件
const monitorDataContainerScrollInfo = () => {
  disconnectObserver()
  connectObserver(
    '.show-container__title',
    (observerRes: any) => {
      if (observerRes.intersectionRatio > 0.98) {
        if (clickEventFlag) {
          clickEventFlag = false
          return
        }
        const index = Number(observerRes.id.replace(`${showContainerId}-`, ''))
        if (index !== currentSelectColorIndex.value) {
          currentSelectColorIndex.value = index
          switch (index) {
            case 0:
              selectContainerBgColor.value = 'primary-light-7'
              break
            case 1:
              selectContainerBgColor.value = 'primary-light-8'
              break
            case 2:
              selectContainerBgColor.value = 'primary-light-9'
              break
            default:
              selectContainerBgColor.value = `${tuniaoColors[index - 3]}-light`
          }
          updateSelectContainerScrollViewPosition()
        }
      }
    },
    {
      type: 'relativeToViewport',
      margins: {
        top: -navBarInfo.height,
      },
    },
    {
      thresholds: [0.95, 0.98, 1],
      observeAll: true,
    }
  )
}

// 每个展示容器的栏目Top值
let showContainerTopList: number[] = []
// 每个颜色选择选项的位置信息
let selectContainerTopList: number[] = []
// 获取容器栏目/选项的位置信息
let initCount = 0
const getContainerRectInfo = async () => {
  try {
    const showContainerNodeInfos = await getSelectorNodeInfos(
      '.show-container__content'
    )
    const selectContainerNodeInfos = await getSelectorNodeInfos(
      '.select-container__item'
    )
    if (
      !showContainerNodeInfos ||
      !showContainerNodeInfos.length ||
      !selectContainerNodeInfos ||
      !selectContainerNodeInfos.length
    ) {
      if (initCount > 10) {
        throw new Error('获取展示容器栏目节点信息失败')
      }
      initCount++
      setTimeout(() => {
        getContainerRectInfo()
      }, 150)
      return
    }

    initCount = 0
    showContainerTopList = showContainerNodeInfos.map((item) => item.top || 0)
    selectContainerTopList = selectContainerNodeInfos.map(
      (item) => item.top || 0
    )
    monitorDataContainerScrollInfo()
  } catch (err) {
    debugWarn('ColorPage', `获取展示容器栏目节点信息失败: ${err}`)
  }
}

// 更新颜色选项ScrollView的位置，让其在居中的位置
const selectContainerScrollTop = ref<number>(0)
const updateSelectContainerScrollViewPosition = () => {
  const containerHeight = systemScreenInfo.height - navBarInfo.height
  const top =
    selectContainerTopList[currentSelectColorIndex.value] -
    navBarInfo.height -
    (containerHeight - 45) / 2
  selectContainerScrollTop.value = top < 0 ? 0 : top
}

onMounted(() => {
  nextTick(() => {
    getContainerRectInfo()
  })
})

onUnmounted(() => {
  disconnectObserver()
})
</script>

<template>
  <CustomPage title="color配色" padding="0" :is-h5-demo-page="isDemoH5Page">
    <view class="color-page">
      <view class="select-container" :style="selectContainerStyle">
        <scroll-view
          class="select-container__scroll-view"
          scroll-y
          :scroll-top="selectContainerScrollTop"
          scroll-with-animation
        >
          <view class="select-container__content">
            <view
              class="select-container__item tn-type-primary_bg tn-round"
              :class="[selectItemClass(0)]"
              @tap.stop="colorClickEvent('primary-light-7', 0)"
            >
              <TnIcon name="logo-tuniao" />
            </view>
            <view
              class="select-container__item tn-type-primary_bg tn-round"
              :class="[selectItemClass(1)]"
              @tap.stop="colorClickEvent('primary-light-8', 1)"
            >
              <TnIcon name="theme-fill" />
            </view>
            <view
              class="select-container__item tn-type-primary_bg tn-round"
              :class="[selectItemClass(2)]"
              @tap.stop="colorClickEvent('primary-light-9', 2)"
            >
              <TnIcon name="fire-fill" />
            </view>
            <view
              v-for="(color, index) in tuniaoColors"
              :key="index"
              class="select-container__item tn-round"
              :class="[selectItemClass(index + 3), `tn-${color}_bg`]"
              @tap.stop="colorClickEvent(`${color}-light`, index + 3)"
            />
          </view>
        </scroll-view>
      </view>
      <view class="show-container">
        <!-- 图鸟配色 -->
        <view class="show-container__content">
          <view :id="`${showContainerId}-0`" class="show-container__title">
            图鸟配色
          </view>
          <view class="show-container__data">
            <view
              v-for="(item, index) in tuniaoColorMatching"
              :key="index"
              class="show-container__item"
              :style="{
                backgroundColor: item.value,
                color: item.fontColor,
              }"
            >
              <view class="data-name">{{ item.name }}</view>
              <view class="data-value">{{ item.value }}</view>
            </view>
          </view>
        </view>
        <!-- 主题配色 -->
        <view class="show-container__content">
          <view :id="`${showContainerId}-1`" class="show-container__title">
            主题配色
          </view>
          <view class="show-container__data">
            <view
              v-for="(item, index) in colorTypes"
              :key="index"
              class="show-container__item-vertical"
            >
              <view class="item-title" :class="[`tn-type-${item}_text`]">
                {{ item }}
              </view>
              <view class="item-data">
                <view
                  class="type-color tn-white_text"
                  :style="{ backgroundColor: `var(--tn-color-${item}-dark-2)` }"
                >
                  dark
                </view>
                <view
                  class="type-color tn-white_text"
                  :style="{ backgroundColor: `var(--tn-color-${item})` }"
                >
                  normal
                </view>
                <view
                  v-for="(lightItem, lightIndex) in [3, 5, 7, 8, 9]"
                  :key="lightIndex"
                  class="type-color"
                  :style="{
                    backgroundColor: `var(--tn-color-${item}-light-${lightItem})`,
                  }"
                >
                  light-{{ lightItem }}
                </view>
              </view>
            </view>
          </view>
        </view>

        <!-- 酷炫渐变背景 -->
        <view class="show-container__content">
          <view :id="`${showContainerId}-2`" class="show-container__title">
            酷炫渐变背景
          </view>
          <view class="show-container__data">
            <view
              v-for="index in 16"
              :key="index"
              class="show-container__item fill-height tn-white_text"
              :class="[`tn-gradient-bg__cool-${index}`]"
            >
              <view class="data-name">tn-gradient-bg__cool-{{ index }}</view>
            </view>
          </view>
        </view>

        <!-- 图鸟内置颜色 -->
        <view
          v-for="(colorItem, colorIndex) in tuniaoColors"
          :key="colorIndex"
          class="show-container__content"
        >
          <view
            :id="`${showContainerId}-${colorIndex + 3}`"
            class="show-container__title tn-text-capitalize"
          >
            {{ colorItem }}
          </view>
          <view class="show-container__data">
            <view
              v-for="(typeItem, typeIndex) in ['dark', '', 'disabled', 'light']"
              :key="typeIndex"
              class="show-container__item cling-to"
              :class="[`tn-${colorItem}${typeItem ? `-${typeItem}` : ''}_bg`]"
            >
              <view class="data-name">
                tn-{{ colorItem }}{{ typeItem ? `-${typeItem}` : '' }}
              </view>
              <view class="data-value no-upper">
                tn-color-{{ colorItem }}{{ typeItem ? `-${typeItem}` : '' }}
              </view>
            </view>

            <!-- 渐变颜色 -->
            <view
              v-for="(gradientItem, gradientIndex) in ['', 'light', 'single']"
              :key="gradientIndex"
              class="show-container__item fill-height"
              :class="[
                `tn-gradient-bg__${colorItem}${
                  gradientItem ? `-${gradientItem}` : ''
                }`,
                {
                  'tn-white_text': gradientItem === '',
                  'no-element':
                    ['orangered', 'brown', 'gray'].includes(colorItem) &&
                    gradientItem !== 'single',
                },
                `${
                  gradientItem === 'single' ? `tn-${colorItem}-dark_text` : ''
                }`,
                `${gradientItem === 'light' ? `tn-${colorItem}_text` : ''}`,
              ]"
            >
              <view class="data-name small">
                tn-gradient-bg__{{ colorItem
                }}{{ gradientItem ? `-${gradientItem}` : '' }}
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </CustomPage>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
