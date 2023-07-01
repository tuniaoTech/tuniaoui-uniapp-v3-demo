import { reactive } from 'vue'
import { debugWarn } from '@tuniao/tnui-vue3-uniapp/utils'
import { useIndexPageProvide } from '../../../composables'

import { GET_GITHUB_DATA_URL } from '@/config'

// 随机获取1 - 9999之间的整数
const getRandom = () => {
  return Math.floor(Math.random() * 9999) + 1
}

export const useAbout = () => {
  // 处理当前页面显示时的事件
  const onShow = () => {
    /** empty */
  }

  // 处理当前页面加载时的事件
  const onLoad = () => {
    /** empty */
  }

  // 获取github信息
  const githubData = reactive({
    view: 0,
    star: 0,
    fork: 0,
  })
  const getGithubData = () => {
    uni.request({
      url: GET_GITHUB_DATA_URL,
      success: (res: UniApp.RequestSuccessCallbackResult) => {
        const data: any = (res.data as any).data
        githubData.view = data.githubData.view
        githubData.star = data.githubData.star
        githubData.fork = data.githubData.fork
      },
      fail: (err: UniApp.GeneralCallbackResult) => {
        debugWarn('获取github信息失败', err.errMsg)
        githubData.view = getRandom()
        githubData.star = getRandom()
        githubData.fork = getRandom()
      },
    })
  }
  getGithubData()

  useIndexPageProvide('about', onShow, onLoad)

  return {
    githubData,
  }
}
