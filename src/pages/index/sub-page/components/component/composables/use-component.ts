import { useIndexPageProvide } from '../../../composables'

export const useComponent = () => {
  // 处理当前页面显示时的事件
  const onShow = () => {
    /** empty */
  }

  // 处理当前页面加载时的事件
  const onLoad = () => {
    /** empty */
  }

  useIndexPageProvide('component', onShow, onLoad)
}
