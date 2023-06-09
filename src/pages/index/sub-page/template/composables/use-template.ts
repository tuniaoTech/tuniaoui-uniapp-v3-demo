import { getCurrentInstance, inject } from 'vue'
import { indexPageContextKey } from '@/tokens'

export const useTemplate = () => {
  const instance = getCurrentInstance()
  const { uid } = instance!

  const indexPage = inject(indexPageContextKey, null)

  // 处理当前页面显示时的事件
  const onShow = () => {
    /** empty */
  }

  // 处理当前页面加载时的事件
  const onLoad = () => {
    /** empty */
  }

  indexPage?.addItem({
    name: 'template',
    uid,
    onShow,
    onLoad,
  })
}
