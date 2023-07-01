/**
 * 复制到剪切板
 */
export const copyToClipBoard = (
  text: string | number,
  successTips = '复制成功'
) => {
  if (typeof text === 'number') {
    text = text.toString()
  }
  uni.setClipboardData({
    data: text,
    success: () => {
      uni.showToast({
        title: successTips,
        icon: 'none',
      })
    },
    fail: () => {
      uni.showToast({
        title: '复制失败',
        icon: 'none',
      })
    },
  })
}
