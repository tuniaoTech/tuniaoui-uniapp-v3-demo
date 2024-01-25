import { computed, getCurrentInstance, nextTick, onUnmounted, ref } from 'vue'

import {
  useObserver,
  useSelectorQuery,
  useUniAppSystemRectInfo,
} from '@tuniao/tnui-vue3-uniapp/hooks'
import {
  cloneDeep,
  debugWarn,
  generateId,
} from '@tuniao/tnui-vue3-uniapp/utils'

interface ResponseIconData {
  id: number
  name: string
  title: string
  icons: ResponseIconDataIcons[]
}

interface ResponseIconDataIcons {
  id: number
  icon: string
  name: string
}

export const useIcon = () => {
  const instance = getCurrentInstance()
  const { systemScreenInfo, navBarInfo } = useUniAppSystemRectInfo()

  const { connectObserver, disconnectObserver } = useObserver(instance)
  const { getSelectorNodeInfos } = useSelectorQuery(instance)

  const dataTitleId = `di-t-${generateId()}`

  // 请求到的图标数据
  let responseData: ResponseIconData[] = []
  // 筛选后的数据
  const filterResponseData = ref<ResponseIconData[]>([])

  // 导航栏数据
  const tabsData = computed<string[]>(() => {
    return filterResponseData.value.map((item) => item.name)
  })

  // 当前选中的tabsIndex
  const currentTabsIndex = ref(0)

  // 加载中
  const showLoading = () => {
    uni.showLoading({
      title: '加载中',
      mask: true,
    })
  }

  // 隐藏加载
  const hideLoading = () => {
    uni.hideLoading()
  }

  // 获取数据失败
  const getDataFail = () => {
    uni.showModal({
      title: '提示',
      content: '获取数据失败，请稍后再试',
      showCancel: false,
    })
  }

  // 标记点击滚动到指定位置
  let isClickScroll = false
  // 开始监听标题触顶事件
  const monitorIconTitleScrollTop = () => {
    disconnectObserver()
    if (!filterResponseData.value.length) return

    connectObserver(
      '.icon-show-container__data-title',
      (observerRes: any) => {
        if (isClickScroll) {
          isClickScroll = false
          return
        }
        if (observerRes.intersectionRatio > 0.95) {
          const index = Number(observerRes.id.replace(`${dataTitleId}-`, ' '))

          if (index !== currentTabsIndex.value) {
            currentTabsIndex.value = index
          }
        }
      },
      {
        type: 'relativeToViewport',
        margins: {
          // top: -(navbarHeight + 50),
          bottom: -(systemScreenInfo.height - navBarInfo.height),
        },
      },
      {
        thresholds: [0.95, 0.98, 1],
        observeAll: true,
      }
    )
  }

  // 搜索输入事件
  const onSearchInput = (value: string) => {
    currentTabsIndex.value = 0
    disconnectObserver()
    if (!value) {
      filterResponseData.value = cloneDeep(responseData)
    } else {
      // 根据输入的内容筛选数据，筛选出图标的名称或者图标的icon名字包含输入的内容的数据
      const tempResponseData = cloneDeep(responseData)
      tempResponseData.forEach((item) => {
        item.icons = item.icons.filter(
          (iconItem) =>
            iconItem.name.includes(value) || iconItem.icon.includes(value)
        )
      })
      // 筛选出icons不为空的数据
      filterResponseData.value = tempResponseData.filter(
        (item) => item.icons.length > 0
      )
      if (filterResponseData.value.length === 0) {
        uni.showToast({
          title: '暂无数据',
          icon: 'none',
        })
      }
    }
    uni.pageScrollTo({
      scrollTop: 0,
      duration: 0,
    })
    nextTick(() => {
      setTimeout(() => {
        getIconTitleRectInfo
        monitorIconTitleScrollTop()
      }, 350)
    })
  }

  // 复制图标名称
  const copyIconName = (name: string) => {
    // #ifndef MP-ALIPAY
    uni.setClipboardData({
      data: name,
      success: () => {
        uni.showToast({
          title: name,
          icon: 'none',
          duration: 10000,
        })
      },
    })
    // #endif
    // #ifdef MP-ALIPAY
    uni.showToast({
      title: '支付宝小程序暂不支持复制',
      icon: 'none',
      mask: true,
    })
    // #endif
  }

  // 保存icon主题标题top值
  let iconTitleTop: number[] = []

  // 获取icon主题标题容器信息
  let initCount = 0
  const getIconTitleRectInfo = async () => {
    if (!filterResponseData.value.length) return
    try {
      const titleRectInfos = await getSelectorNodeInfos(
        '.icon-show-container__data-title'
      )
      if (!titleRectInfos || !titleRectInfos.length) {
        if (initCount > 10) {
          throw new Error('获取icon主题标题容器信息失败')
        }
        initCount++
        setTimeout(() => {
          getIconTitleRectInfo()
        }, 150)
        return
      }

      initCount = 0
      iconTitleTop = titleRectInfos.map((item) => item.top || 0)
      hideLoading()
    } catch (err) {
      debugWarn('DemoIcon', `获取icon主题标题容器信息失败：${err}`)
    }
  }

  // tabs切换事件
  const tabsChange = (index: number | string) => {
    isClickScroll = true
    uni.pageScrollTo({
      scrollTop: iconTitleTop[index as number] - (navBarInfo.height + 100),
      duration: 250,
    })
  }

  // 请求服务器资源获取图标数据
  const getIconData = () => {
    showLoading()
    uni.request({
      url: 'https://resource.tuniaokj.com/vue3_page_data/iconfont.json',
      success: (res) => {
        if (res.statusCode !== 200) {
          getDataFail()
          return
        }
        responseData = res.data as ResponseIconData[]
        filterResponseData.value = responseData

        nextTick(() => {
          getIconTitleRectInfo()
          monitorIconTitleScrollTop()
          setTimeout(() => {
            hideLoading()
          }, 2000)
        })
      },
      fail: () => {
        hideLoading()
        getDataFail()
      },
    })
  }
  getIconData()

  onUnmounted(() => {
    disconnectObserver()
  })

  return {
    dataTitleId,
    navBarInfo,
    tabsData,
    filterResponseData,
    currentTabsIndex,
    tabsChange,
    onSearchInput,
    copyIconName,
  }
}
