import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

export const useDemoH5Page = () => {
  const isDemoH5Page = ref(false)

  onLoad((options: any) => {
    isDemoH5Page.value = !!options?.is_h5_demo
  })

  return {
    isDemoH5Page,
  }
}
