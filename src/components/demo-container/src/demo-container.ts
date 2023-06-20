import { buildProps } from '@tuniao/tnui-vue3-uniapp/utils'

import type { ExtractPropTypes } from 'vue'
import type DemoContainer from './demo-container.vue'

export const demoContainerProps = buildProps({
  /**
   * @description 演示内容标题
   */
  title: {
    type: String,
    required: true,
  },
  /**
   * @description 标题带边距
   */
  titlePadding: Boolean,
})

export type DemoContainerProps = ExtractPropTypes<typeof demoContainerProps>

export type TnDemoContainerInstance = InstanceType<typeof DemoContainer>
