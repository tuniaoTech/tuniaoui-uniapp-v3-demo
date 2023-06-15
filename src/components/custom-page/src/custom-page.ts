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
  /**
   * @description 页面背景颜色
   */
  pageBgColor: String,
  /**
   * @description 导航栏是否有毛玻璃效果
   */
  navbarFrosted: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 导航栏是否显示底部阴影
   */
  navbarBottomShadow: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 底部是否需要预留更多空间
   */
  bottomMoreSpace: {
    type: Boolean,
    default: true,
  },
})

export type CustomPageProps = ExtractPropTypes<typeof customPageProps>

export type TnDemoCustomPageInstance = InstanceType<typeof CustomPage>
