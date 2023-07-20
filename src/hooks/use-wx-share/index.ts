import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'

export interface WxShareOptions {
  title?: string
  path?: string
  query?: string
  imageUrl?: string
}

export const useWxShare = (options?: WxShareOptions) => {
  // #ifdef MP-WEIXIN
  const title = options?.title ?? 'TuniaoUI vue3'
  const path = options?.path ?? ''
  const query = options?.query ?? ''
  const imageUrl = options?.imageUrl ?? ''
  onShareAppMessage(() => {
    return {
      title,
      path: path ? `${path}${query ? `?${query}` : ''}` : '',
      imageUrl,
    }
  })
  onShareTimeline(() => {
    return {
      title,
      query: options?.query ?? '',
      imageUrl,
    }
  })
  // #endif
}
