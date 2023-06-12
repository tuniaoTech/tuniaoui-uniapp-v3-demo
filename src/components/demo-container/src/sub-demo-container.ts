import { buildProps } from '@tuniao/tnui-vue3-uniapp/utils'

import type { ExtractPropTypes } from 'vue'
import type SubDemoContainer from './sub-demo-container.vue'

export const subDemoContainerProps = buildProps({
  /**
   * @description 演示子内容标题
   */
  title: {
    type: String,
  },
})

export type SubDemoContainerProps = ExtractPropTypes<
  typeof subDemoContainerProps
>

export type TnSubDemoContainerInstance = InstanceType<typeof SubDemoContainer>
