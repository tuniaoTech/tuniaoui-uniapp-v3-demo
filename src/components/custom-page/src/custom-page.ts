import { buildProps } from '@tuniao/tnui-vue3-uniapp/utils'

import type { ExtractPropTypes } from 'vue'
import type CustomPage from './custom-page.vue'

export const customPageProps = buildProps({
  /**
   * @description 页面标题
   */
  title: {
    type: String,
    default: '图鸟UI',
  },
  /**
   * @description 页面内边距
   */
  padding: {
    type: String,
    default: '30',
  },
})

export type CustomPageProps = ExtractPropTypes<typeof customPageProps>

export type TnDemoCustomPageInstance = InstanceType<typeof CustomPage>
