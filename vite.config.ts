import { defineConfig } from "vite"
import { resolve } from 'path'
import uni from "@dcloudio/vite-plugin-uni"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni({
      // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
      // https://developers.weixin.qq.com/community/enterprisewechat/article/doc/000048b5d1878825dcacd426a5b813
      // https://github.com/wechat-miniprogram/miniprogram-compat
      viteLegacyOptions: {
        targets: ['> 1%, last 2 versions, not dead, ie >= 11, Android >= 4.4, iOS >= 9'],
        polyfills: true,
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
      }
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^\/@\//,
        replacement: resolve(__dirname, '.', 'src') + '/'
      }
    ]
  }
})
