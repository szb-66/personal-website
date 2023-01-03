import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host: "localhost",
    https: false,//是否启用 http 2
    cors: true,//为开发服务器配置 CORS , 默认启用并允许任何源
    open: true,//服务启动时自动在浏览器中打开应用
    port: 9000,
    strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
    force: true,//是否强制依赖预构建
    hmr: false,//禁用或配置 HMR 连接
  }
})
