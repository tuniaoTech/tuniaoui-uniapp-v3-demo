import { withInstall, withNoopInstall } from '@tuniao/tnui-vue3-uniapp/utils'
import DemoContainer from './src/demo-container.vue'
import subDemoContainer from './src/sub-demo-container.vue'

export const TnDemoContainer = withInstall(DemoContainer, {
  subDemoContainer,
})
export default TnDemoContainer

export const TnSubDemoContainer = withNoopInstall(subDemoContainer)

export * from './src/demo-container'
export * from './src/sub-demo-container'
