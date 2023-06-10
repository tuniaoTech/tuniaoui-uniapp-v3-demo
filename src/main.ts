import { createSSRApp } from 'vue'
import TnIcon from '@tuniao/tnui-vue3-uniapp/components/icon/src/icon.vue'
import App from './App.vue'

import './static/style/index.scss'

export function createApp() {
  const app = createSSRApp(App)

  app.component('TnIcon', TnIcon)

  return {
    app,
  }
}
