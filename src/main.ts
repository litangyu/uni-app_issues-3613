import { createSSRApp } from "vue"
import App from "./App.vue"

import VConsole from 'vconsole'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $vconsole: VConsole
  }
}

export function createApp() {
  const app = createSSRApp(App)

  const vConsole = new VConsole({ theme: 'dark' })
  app.config.globalProperties.$vconsole = vConsole
  
  return {
    app,
  }
}
